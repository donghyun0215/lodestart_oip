/* ------------------------------------------------------------------
   Supabase-as-CMS (server-only).

   Public pages read published rows through these helpers; the /admin
   panel writes through /api/admin/*. Same safety contract as before:
   missing env vars, network errors, or schema drift all return null,
   and every consuming page falls back to its built-in list — a CMS
   mishap can never blank the site.

   SUPABASE_SERVICE_ROLE_KEY is used server-side only and must never
   be imported into a client component.
------------------------------------------------------------------- */

const URL_ = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const cmsConfigured = () => Boolean(URL_ && KEY);

async function sbSelect(table, query) {
  if (!cmsConfigured()) return null;
  try {
    const res = await fetch(`${URL_}/rest/v1/${table}?${query}`, {
      headers: { apikey: KEY, Authorization: `Bearer ${KEY}` },
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const rows = await res.json();
    return Array.isArray(rows) ? rows : null;
  } catch {
    return null;
  }
}

/* → shape used by <EventsView events={…}> */
export async function getDbEvents() {
  const rows = await sbSelect(
    "events",
    "select=tag,tag_ko,title,title_ko,when_text,when_ko&published=eq.true&order=sort.asc"
  );
  if (!rows || rows.length === 0) return null;
  return rows.map((r) => ({
    tag: r.tag ?? "",
    tag_ko: r.tag_ko ?? undefined,
    title: r.title ?? "",
    title_ko: r.title_ko ?? undefined,
    when: r.when_text ?? "",
    when_ko: r.when_ko ?? undefined,
  })).filter((e) => e.title);
}

/* → shape used by the insights carousel */
export async function getDbInsights() {
  const rows = await sbSelect(
    "insights",
    "select=id,tag,tag_ko,title,title_ko,url,date_label&published=eq.true&order=sort.asc"
  );
  if (!rows || rows.length === 0) return null;
  return rows.map((r) => ({
    id: String(r.id),
    tag: r.tag ?? "",
    tag_ko: r.tag_ko ?? undefined,
    title: r.title ?? "",
    title_ko: r.title_ko ?? undefined,
    date: r.date_label ?? "",
    url: r.url ?? "#",
  })).filter((x) => x.title && x.url !== "#");
}
