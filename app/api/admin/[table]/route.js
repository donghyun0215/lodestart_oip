import { NextResponse } from "next/server";

/* ------------------------------------------------------------------
   /api/admin/[table] — tiny CRUD proxy for the admin panel.
   Auth: request must carry  x-admin-key === process.env.ADMIN_PASSWORD.
   Writes go to Supabase REST with the service-role key (server-only).
   Table names are whitelisted; anything else 404s.
------------------------------------------------------------------- */

const TABLES = new Set(["events", "insights", "intake", "newsletter_issues"]);
const URL_ = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const bad = (status, error) => NextResponse.json({ error }, { status });

function guard(req, table) {
  if (!TABLES.has(table)) return bad(404, "unknown table");
  if (!process.env.ADMIN_PASSWORD) return bad(503, "ADMIN_PASSWORD not set");
  if (req.headers.get("x-admin-key") !== process.env.ADMIN_PASSWORD)
    return bad(401, "wrong password");
  if (!URL_ || !KEY) return bad(503, "Supabase env vars not set");
  return null;
}

/* PostgREST errors come back as {message, code, hint, details}. Surface
   them verbatim — a bare "supabase error" hides the one thing you need.
   403/42501 almost always means the key in SUPABASE_SERVICE_ROLE_KEY is
   an anon/publishable key, so RLS is applying instead of being bypassed. */
function sbError(r) {
  const d = r.data;
  const msg =
    (d && typeof d === "object" && (d.message || d.error || d.hint)) ||
    (typeof d === "string" && d) ||
    `supabase ${r.status}`;
  const code = d && typeof d === "object" && d.code ? ` [${d.code}]` : "";
  const hint =
    r.status === 403
      ? " — 403 from Supabase usually means SUPABASE_SERVICE_ROLE_KEY holds an anon/publishable key rather than the service_role (secret) key."
      : "";
  return `${msg}${code}${hint}`;
}

async function sb(method, path, body) {
  const res = await fetch(`${URL_}/rest/v1/${path}`, {
    method,
    headers: {
      apikey: KEY,
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  return { ok: res.ok, status: res.status, data };
}

export async function GET(req, { params }) {
  const { table } = await params;
  const denied = guard(req, table);
  if (denied) return denied;
  const order = table === "intake" ? "created_at.desc" : "sort.asc";
  const r = await sb("GET", `${table}?select=*&order=${order}`);
  return r.ok ? NextResponse.json(r.data) : bad(r.status, sbError(r));
}

export async function POST(req, { params }) {
  const { table } = await params;
  const denied = guard(req, table);
  if (denied) return denied;
  const body = await req.json();
  const r = await sb("POST", table, body);
  return r.ok ? NextResponse.json(r.data) : bad(r.status, JSON.stringify(r.data));
}

export async function PATCH(req, { params }) {
  const { table } = await params;
  const denied = guard(req, table);
  if (denied) return denied;
  const { id, ...rest } = await req.json();
  if (!id) return bad(400, "id required");
  const r = await sb("PATCH", `${table}?id=eq.${encodeURIComponent(id)}`, rest);
  return r.ok ? NextResponse.json(r.data) : bad(r.status, JSON.stringify(r.data));
}

export async function DELETE(req, { params }) {
  const { table } = await params;
  const denied = guard(req, table);
  if (denied) return denied;
  const { id } = await req.json();
  if (!id) return bad(400, "id required");
  const r = await sb("DELETE", `${table}?id=eq.${encodeURIComponent(id)}`);
  return r.ok ? NextResponse.json({ ok: true }) : bad(r.status, sbError(r));
}
