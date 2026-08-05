import { NextResponse } from "next/server";

/* ------------------------------------------------------------------
   /api/intake — public POST from the contact form.
   Stores structured matching requests in Supabase; when Supabase
   isn't configured, returns 503 so the client falls back to the
   plain mailto flow. Field sizes are clamped defensively.
------------------------------------------------------------------- */

const URL_ = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const clamp = (v, n) => String(v ?? "").slice(0, n);

export async function POST(req) {
  if (!URL_ || !KEY)
    return NextResponse.json({ error: "not configured" }, { status: 503 });

  const b = await req.json();
  const row = {
    profile: clamp(b.profile, 40),
    intents: clamp(Array.isArray(b.intents) ? b.intents.join(", ") : b.intents, 200),
    name: clamp(b.name, 120),
    org: clamp(b.org, 160),
    email: clamp(b.email, 160),
    message: clamp(b.message, 4000),
  };
  if (!row.name || !row.email || !row.message)
    return NextResponse.json({ error: "missing fields" }, { status: 400 });

  try {
    const res = await fetch(`${URL_}/rest/v1/intake`, {
      method: "POST",
      headers: {
        apikey: KEY,
        Authorization: `Bearer ${KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(row),
      cache: "no-store",
    });
    if (!res.ok) return NextResponse.json({ error: "store failed" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "store failed" }, { status: 502 });
  }
}
