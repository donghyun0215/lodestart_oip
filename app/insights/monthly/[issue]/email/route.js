import { getIssue } from "@/lib/newsletter";
import { getDbNewsletterIssue } from "@/lib/cms";

/* ------------------------------------------------------------------
   /insights/monthly/[issue]/email — email-ready HTML, generated from
   the same issue data the web page uses (DB first, static fallback).

   Purpose: collapse the newsletter workflow to a single authoring
   step. Write the issue once in /admin, open this URL, select-all,
   copy, paste into the Substack editor, publish. All links are made
   absolute from the request origin, so there is no domain placeholder
   to maintain and no per-issue HTML file to hand-edit.

   Inline styles only + table for the events list — survives the
   copy-paste into Substack's rich-text editor and email clients.
------------------------------------------------------------------- */

export const dynamic = "force-dynamic"; // origin comes from the request

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/* site-relative hrefs → absolute; mailto/https pass through */
const abs = (origin, href) =>
  href?.startsWith("/") ? `${origin}${href}` : href ?? "#";

const GREY = "color:#8a8a8a;";
const BODY = "font-size:14.5px;color:#555555;margin:0 0 12px;";
const H2 = "font-size:19px;margin:0 0 14px;font-weight:700;";
const HR = '<hr style="border:none;border-top:1px solid #e5e5e2;margin:24px 0;">';
const BTN =
  "display:inline-block;background:#22c55e;color:#ffffff;font-weight:700;font-size:14px;padding:10px 18px;border-radius:8px;text-decoration:none;";
const LINK = "color:#16a34a;font-weight:600;";

function render(issue, origin) {
  const hi = issue.highlight;
  const sp = issue.spotlight;
  const sv = issue.services;
  const parts = [];

  parts.push(`
  <p style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#16a34a;font-weight:700;margin:0 0 4px;">KIP Monthly · ${esc(issue.vol)}</p>
  <h1 style="font-size:26px;line-height:1.3;margin:0 0 4px;font-weight:800;">${esc(issue.title)}</h1>
  <p style="font-size:14px;${GREY}margin:0 0 24px;">${esc(issue.dateLabel)}${issue.dateLabel_ko ? ` · ${esc(issue.dateLabel_ko)}` : ""}</p>`);

  if (issue.intro)
    parts.push(`<p style="font-size:15px;${BODY.slice(18)}">${esc(issue.intro)}</p>`);
  if (issue.intro_ko)
    parts.push(`<p style="font-size:14px;${GREY}margin:0 0 28px;">${esc(issue.intro_ko)}</p>`);

  if (hi) {
    parts.push(HR);
    parts.push(`<h2 style="${H2}">${hi.emoji ? esc(hi.emoji) + " " : ""}${esc(hi.title)}${hi.title_ko && hi.title_ko !== hi.title ? ` <span style="font-weight:400;font-size:15px;${GREY}">${esc(hi.title_ko)}</span>` : ""}</h2>`);
    const rows = (hi.rows ?? [])
      .map(
        (r) => `<li style="margin-bottom:6px;"><b>${esc(r.k)}:</b> ${esc(r.v)}${r.v_ko && r.v_ko !== r.v ? `<br><span style="${GREY}">${esc(r.v_ko)}</span>` : ""}</li>`
      )
      .join("");
    const links = (hi.links ?? [])
      .map((l) => `<a href="${esc(abs(origin, l.href))}" style="${LINK}">${esc(l.label)}</a>`)
      .join(" · ");
    parts.push(`<ul style="font-size:14.5px;color:#111;padding-left:18px;margin:0 0 16px;">${rows}${links ? `<li><b>Links:</b> ${links}</li>` : ""}</ul>`);
  }

  if (Array.isArray(issue.events) && issue.events.length > 0) {
    parts.push(HR);
    parts.push(`<h2 style="${H2}">📅 Upcoming events</h2>`);
    const trs = issue.events
      .map((ev, i, a) => {
        const bb = i < a.length - 1 ? "border-bottom:1px dashed #e5e5e2;" : "";
        return `<tr><td style="padding:7px 0;${bb}"><b>${esc(ev.title)}</b> — ${esc(ev.tag)}</td><td align="right" style="padding:7px 0;${bb}${GREY}white-space:nowrap;">${esc(ev.when)}</td></tr>`;
      })
      .join("");
    parts.push(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14.5px;">${trs}</table>`);
  }

  if (sp) {
    parts.push(HR);
    parts.push(`<h2 style="${H2}">🔦 Company spotlight — ${esc(sp.name)}</h2>`);
    parts.push(`<p style="font-size:12.5px;${GREY}margin:0 0 8px;">${esc(sp.programme)}${sp.sector ? ` · ${esc(sp.sector)}` : ""}</p>`);
    if (sp.blurb) parts.push(`<p style="${BODY}margin:0 0 8px;">${esc(sp.blurb)}</p>`);
    if (sp.blurb_ko) parts.push(`<p style="font-size:13.5px;${GREY}margin:0 0 10px;">${esc(sp.blurb_ko)}</p>`);
    if (sp.href) parts.push(`<p style="margin:0;"><a href="${esc(abs(origin, sp.href))}" style="${LINK}font-size:14px;">View the one-pager ↗</a></p>`);
  }

  if (sv) {
    parts.push(HR);
    parts.push(`<h2 style="${H2.replace("14px", "10px")}">${sv.emoji ? esc(sv.emoji) + " " : ""}${esc(sv.title)}</h2>`);
    parts.push(`<p style="${BODY}">${esc(sv.body ?? "")}${sv.body_ko ? `<br><span style="font-size:13.5px;${GREY}">${esc(sv.body_ko)}</span>` : ""}</p>`);
    if (sv.href) parts.push(`<p style="margin:0;"><a href="${esc(abs(origin, sv.href))}" style="${BTN}">${esc(sv.cta ?? "Learn more")}</a></p>`);
  }

  parts.push(HR);
  parts.push(`<h2 style="${H2.replace("14px", "10px")}">💡 Submit for next month</h2>`);
  parts.push(`<p style="${BODY}">Have a company update, an event, or an IR deck to share? Send it in and we'll consider it for the next issue.<br><span style="font-size:13.5px;${GREY}">공유할 기업 소식·이벤트·IR 덱이 있다면 보내주세요 — 다음 호 반영을 검토합니다.</span></p>`);
  parts.push(`<p style="margin:0 0 28px;"><a href="${origin}/contact" style="${BTN}">Send an update</a></p>`);

  parts.push(`<p style="font-size:12.5px;${GREY}border-top:1px solid #e5e5e2;padding-top:16px;margin:0;">K-Innovation Partners · Korea–Singapore innovation bridge<br>Web archive: <a href="${origin}/insights/monthly/${esc(issue.id)}" style="color:#16a34a;">${origin.replace(/^https?:\/\//, "")}/insights/monthly/${esc(issue.id)}</a></p>`);

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>KIP Monthly — ${esc(issue.vol)} · ${esc(issue.dateLabel)}</title>
</head>
<body style="margin:0;padding:0;background:#ffffff;">
<div style="max-width:640px;margin:0 auto;padding:28px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Apple SD Gothic Neo','Malgun Gothic',sans-serif;color:#111111;line-height:1.7;">
<!-- 사용법: 이 페이지에서 Ctrl/Cmd+A 전체 선택 → 복사 → Substack 새 포스트에 붙여넣기 -->
${parts.join("\n")}
</div>
</body>
</html>`;
}

export async function GET(req, { params }) {
  const { issue } = await params;
  const it = (await getDbNewsletterIssue(issue)) ?? getIssue(issue);
  if (!it) return new Response("not found", { status: 404 });
  const origin = new URL(req.url).origin;
  return new Response(render(it, origin), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
