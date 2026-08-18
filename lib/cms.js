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
    "select=id,source,tag,tag_ko,title,title_ko,url,date_label&published=eq.true&order=sort.asc"
  );
  if (!rows || rows.length === 0) return null;
  return rows.map((r) => ({
    id: String(r.id),
    source: r.source || "article",
    tag: r.tag ?? "",
    tag_ko: r.tag_ko ?? undefined,
    title: r.title ?? "",
    title_ko: r.title_ko ?? undefined,
    date: r.date_label ?? "",
    url: r.url ?? "#",
  })).filter((x) => x.title && x.url !== "#");
}

/* ------------------------------------------------------------------
   KIP Monthly (newsletter_issues) — scalar columns hold what the
   archive card needs; everything nested (intro / highlight / events /
   spotlight / services) lives in a single `data` jsonb column, edited
   as JSON in /admin. Merging row + data yields the exact shape
   lib/newsletter.js exports, so NewsletterView needs no branching.
------------------------------------------------------------------- */

const rowToIssue = (r) => ({
  id: r.slug,
  vol: r.vol ?? "",
  title: r.title ?? "",
  title_ko: r.title_ko ?? undefined,
  dateLabel: r.date_label ?? "",
  dateLabel_ko: r.date_label_ko ?? undefined,
  ...(r.data && typeof r.data === "object" ? r.data : {}),
});

/* archive list on /insights — newest (highest sort) intentionally NOT
   assumed; we keep sort ascending like every other table and let the
   view decide ordering. */
export async function getDbNewsletterIssues() {
  const rows = await sbSelect(
    "newsletter_issues",
    "select=slug,vol,title,title_ko,date_label,date_label_ko&published=eq.true&order=sort.asc"
  );
  if (!rows || rows.length === 0) return null;
  return rows.map(rowToIssue).filter((i) => i.id && i.title);
}

/* full issue for /insights/monthly/[issue] */
export async function getDbNewsletterIssue(slug) {
  const rows = await sbSelect(
    "newsletter_issues",
    `select=slug,vol,title,title_ko,date_label,date_label_ko,data&published=eq.true&slug=eq.${encodeURIComponent(slug)}&limit=1`
  );
  if (!rows || rows.length === 0) return null;
  return rowToIssue(rows[0]);
}
