"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STARTUPS } from "@/lib/data";
import { Banner } from "@/components/Bits";
import { useLang } from "@/components/LanguageProvider";
import TeamMember from "@/components/TeamMember";

function Section({ title, children }) {
  return (
    <div className="d-section">
      <h2 className="d-title">{title}</h2>
      {children}
    </div>
  );
}

const HOST_TYPE_KO = { Host: "호스트", "Co-host": "공동 호스트" };

function Bullets({ items }) {
  return (
    <ul>
      {items.map((i, k) => (
        <li key={k}>{i}</li>
      ))}
    </ul>
  );
}

export default function StartupView({ slug }) {
  const { t, p, lang } = useLang();
  const s = STARTUPS.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <section className="section onepager">
      <div className="wrap">
        {/* one-pager toolbar — hidden on print */}
        <div className="op-toolbar no-print">
          <Link href="/startups" className="back-link">
            <span aria-hidden="true">←</span> {t("co_back")}
          </Link>
          <div className="op-actions">
            <button type="button" className="btn btn-outline btn-sm" onClick={() => window.print()}>
              {t("d_download_pdf")}
            </button>
            <a
              href={`mailto:hello@lodestart.ai?subject=${encodeURIComponent(`1:1 meeting — ${s.name}`)}`}
              className="btn btn-orange btn-sm"
            >
              {t("d_book_meeting")}
            </a>
          </div>
        </div>

        {s.track && (
          <p className="op-track">
            {s.programme}
            {s.edition ? ` ${s.edition}` : ""} · {p(s, "track")}
          </p>
        )}

        <div className="detail-layout">
          {/* ---------- MAIN ---------- */}
          <div>
            <Banner banner={s.banner} large />

            <div style={{ marginTop: 34 }}>
              <Section title={t("d_overview")}>
                {p(s, "overview").map((para, k) => (
                  <p key={k}>{para}</p>
                ))}
              </Section>

              <Section title={t("d_funding")}>
                <p>{p(s, "funding")}</p>
              </Section>

              {s.team.length > 0 && (
                <Section title={t("d_team")}>
                  <p className="team-hint">{t("d_team_hint")}</p>
                  <div className="team-grid">
                    {s.team.map((m) => (
                      <TeamMember key={m.name} m={m} />
                    ))}
                  </div>
                </Section>
              )}

              <Section title={t("d_problem")}>
                <Bullets items={p(s, "problem")} />
              </Section>

              <Section title={t("d_opportunity")}>
                <Bullets items={p(s, "opportunity")} />
              </Section>

              <Section title={t("d_advantage")}>
                <Bullets items={p(s, "advantage")} />
              </Section>

              <Section title={t("d_solution")}>
                <p style={{ fontWeight: 600, color: "var(--ink)" }}>{p(s.solution, "lead")}</p>
                {s.solution.groups.map((g) => (
                  <div key={g.title}>
                    <h4>{p(g, "title")}</h4>
                    <Bullets items={p(g, "items")} />
                  </div>
                ))}
              </Section>

              <Section title={t("d_model")}>
                <p style={{ fontWeight: 600, color: "var(--ink)" }}>{p(s.businessModel, "lead")}</p>
                <Bullets items={p(s.businessModel, "items")} />
              </Section>

              {p(s, "achievements").length > 0 && (
                <Section title={t("d_achievements")}>
                  <div className="snapshot-band">
                    {p(s, "achievements").map((a, k) => (
                      <div key={k} className="snapshot-tile">{a}</div>
                    ))}
                  </div>
                </Section>
              )}

              <Section title={t("d_highlights")}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
                  {p(s, "highlights").map((h, k) => (
                    <div
                      key={k}
                      style={{
                        background: "var(--bg-soft)",
                        border: "1px solid var(--line)",
                        borderRadius: "var(--radius)",
                        padding: "16px 18px",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      {h}
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          </div>

          {/* ---------- SIDEBAR ---------- */}
          <aside className="d-side">
            <div className="side-card">
              <span className="chip-program">{s.programme}{s.edition ? ` ${s.edition}` : ""}</span>
              <h1 style={{ fontSize: "1.5rem", margin: "12px 0 0" }}>{s.name}</h1>
              <p className="side-quote">{p(s, "summary")}</p>
              <a href="mailto:hello@lodestart.ai" className="btn btn-black" style={{ width: "100%" }}>
                {t("d_get_touch")}
              </a>
              <p style={{ fontSize: 11.5, color: "var(--ink-faint)", marginTop: 10, textAlign: "center" }}>
                {t("d_intro_note")}
              </p>
            </div>

            <div className="side-card">
              {s.website && (
                <div className="side-row">
                  <span className="ico" aria-hidden="true">
                    ↗
                  </span>
                  <div>
                    <a href={s.website} target="_blank" rel="noopener noreferrer">
                      {t("d_website")}
                    </a>
                    <small>{s.website.replace(/^https?:\/\//, "")}</small>
                  </div>
                </div>
              )}
              {s.contact?.email && (
                <div className="side-row">
                  <span className="ico" aria-hidden="true">✉</span>
                  <div>
                    <a href={`mailto:${s.contact.email}`}>{t("d_email")}</a>
                    <small>{s.contact.email}</small>
                  </div>
                </div>
              )}
              {s.contact?.phone && (
                <div className="side-row">
                  <span className="ico" aria-hidden="true">☎</span>
                  <div>
                    <span>{t("d_phone")}</span>
                    <small>{s.contact.phone}</small>
                  </div>
                </div>
              )}
              <div className="side-row">
                <span className="ico" aria-hidden="true">
                  ▤
                </span>
                <div>
                  <span>{s.deck.name}</span>
                  <small>{s.deck.size}</small>
                </div>
              </div>
              <div className="side-row">
                <span className="ico" aria-hidden="true">
                  ⌖
                </span>
                <div>
                  <span>{p(s, "hq")}</span>
                  <small>{t("d_hq")}</small>
                </div>
              </div>
            </div>

            <div className="side-card">
              <span className="side-label">{t("d_hosts")}</span>
              {s.hosts.map((h) => (
                <div key={h.name} className="host-row">
                  <span className="host-ava">{h.name[0]}</span>
                  <div>
                    <b>
                      {h.name}
                      <span>{lang === "ko" ? HOST_TYPE_KO[h.type] ?? h.type : h.type}</span>
                    </b>
                    <small>{h.role}</small>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
