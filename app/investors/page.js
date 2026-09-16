"use client";
import { useState, useMemo, useEffect } from "react";
import { FUNDS, FUND_THEMES, FUND_STAGES, FUND_GEOS, FUND_STATS } from "@/lib/funds";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";

/* ------------------------------------------------------------------
   Investor Map — a startup-facing search over the funds Lodestart can
   actually reach.

   The value we hold is the relationship, not the row: fund-level
   aggregates are public, individual partners and their email addresses
   never are. Every card therefore ends in a request, which lands in the
   same intake inbox the contact page uses, and Lodestart makes the
   introduction. That keeps the DB an asset instead of a giveaway, and
   it keeps us compliant — no personal data is exposed here.
------------------------------------------------------------------- */

export default function InvestorsPage() {
  const { t, lang } = useLang();

  const [q, setQ] = useState("");
  const [themes, setThemes] = useState([]);
  const [stages, setStages] = useState([]);
  const [geos, setGeos] = useState([]);
  const [shown, setShown] = useState(24);
  const [ask, setAsk] = useState(null); // fund object -> opens the request modal

  const toggle = (list, set, v) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const reset = () => {
    setThemes([]);
    setStages([]);
    setGeos([]);
    setQ("");
  };

  /* /investors?sector=fintech deep-links from other pages */
  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("sector");
    if (s && FUND_THEMES.some((th) => th.slug === s)) setThemes([s]);
  }, []);

  /* Any filter change starts the list from the top again. */
  useEffect(() => setShown(24), [q, themes, stages, geos]);

  const label = (o) => (lang === "ko" ? o.ko : o.en);

  const countForTheme = (slug) => FUNDS.filter((f) => f.t.includes(slug)).length;

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return FUNDS.filter((f) => {
      const themeOk = themes.length === 0 || themes.some((x) => f.t.includes(x));
      const stageOk = stages.length === 0 || stages.some((x) => f.g.includes(x));
      const geoOk =
        geos.length === 0 ||
        geos.some((x) => f.geo.some((g) => g.toLowerCase().includes(x.toLowerCase())));
      const qOk =
        !term ||
        f.n.toLowerCase().includes(term) ||
        (f.d ?? "").toLowerCase().includes(term) ||
        f.sec.some((s) => s.toLowerCase().includes(term)) ||
        f.geo.some((g) => g.toLowerCase().includes(term));
      return themeOk && stageOk && geoOk && qOk;
    });
  }, [q, themes, stages, geos]);

  const activeCount = themes.length + stages.length + geos.length + (q ? 1 : 0);

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="kicker">{t("inv_kicker")}</span>
          <h1 className="h-section">{t("inv_title")}</h1>
          <p className="sub">{t("inv_sub")}</p>

          <div className="inv-stats">
            {[
              [FUND_STATS.funds, t("inv_stat_funds")],
              [FUND_STATS.partners, t("inv_stat_partners")],
              [FUND_STATS.countries, t("inv_stat_countries")],
              [FUND_STATS.sectors, t("inv_stat_sectors")],
            ].map(([n, l]) => (
              <div key={l} className="inv-stat">
                <b>{n.toLocaleString()}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="filter-panel">
            <div className="fp-row">
              <label className="fp-label" htmlFor="inv-search">
                {t("f_search")}
              </label>
              <input
                id="inv-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("inv_search_ph")}
                className="fp-input"
              />
              <button className="btn btn-black btn-sm fp-reset" onClick={reset} type="button">
                {t("f_reset")}
              </button>
            </div>

            <div className="fp-row">
              <span className="fp-label">{t("inv_f_theme")}</span>
              <div className="fp-chips">
                {FUND_THEMES.map((th) => (
                  <button
                    key={th.slug}
                    type="button"
                    className={`fp-chip ${themes.includes(th.slug) ? "on" : ""}`}
                    onClick={() => toggle(themes, setThemes, th.slug)}
                    aria-pressed={themes.includes(th.slug)}
                  >
                    {label(th)}
                    <em className="fp-n" aria-hidden="true">
                      {countForTheme(th.slug)}
                    </em>
                    {themes.includes(th.slug) && <i aria-hidden="true">×</i>}
                  </button>
                ))}
              </div>
            </div>

            <div className="fp-row">
              <span className="fp-label">{t("inv_f_stage")}</span>
              <div className="fp-chips">
                {FUND_STAGES.map((st) => (
                  <button
                    key={st.slug}
                    type="button"
                    className={`fp-chip ${stages.includes(st.slug) ? "on" : ""}`}
                    onClick={() => toggle(stages, setStages, st.slug)}
                    aria-pressed={stages.includes(st.slug)}
                  >
                    {label(st)}
                    {stages.includes(st.slug) && <i aria-hidden="true">×</i>}
                  </button>
                ))}
              </div>
            </div>

            <div className="fp-row">
              <span className="fp-label">{t("inv_f_geo")}</span>
              <div className="fp-chips">
                {FUND_GEOS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    className={`fp-chip ${geos.includes(g) ? "on" : ""}`}
                    onClick={() => toggle(geos, setGeos, g)}
                    aria-pressed={geos.includes(g)}
                  >
                    {g}
                    {geos.includes(g) && <i aria-hidden="true">×</i>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="result-note" style={{ marginTop: 24 }}>
            <b style={{ color: "var(--ink)" }}>{list.length.toLocaleString()}</b>{" "}
            {list.length === 1 ? t("inv_count_one") : t("inv_count_many")}
            {activeCount > 0 && (
              <button type="button" className="theme-reset" onClick={reset}>
                {t("theme_clear")}
              </button>
            )}
          </p>

          <div className="inv-grid">
            {list.slice(0, shown).map((f, i) => (
              <Reveal key={f.s} delay={(i % 6) * 35}>
                <article className="inv-card">
                  <div className="inv-card-top">
                    <h3>{f.n}</h3>
                    {f.hq && (
                      <span className="inv-hq">
                        {t("inv_hq")} · {f.hq}
                      </span>
                    )}
                  </div>

                  {f.d && <p className="inv-desc">{f.d}</p>}

                  <div className="inv-tags">
                    {f.sec.slice(0, 3).map((s) => (
                      <span key={s} className="inv-tag">
                        {s}
                      </span>
                    ))}
                  </div>

                  <dl className="inv-meta">
                    {f.g.length > 0 && (
                      <div>
                        <dt>{t("inv_f_stage")}</dt>
                        <dd>
                          {f.g
                            .map((sl) => {
                              const o = FUND_STAGES.find((x) => x.slug === sl);
                              return o ? label(o) : sl;
                            })
                            .join(" · ")}
                        </dd>
                      </div>
                    )}
                    {f.geo.length > 0 && (
                      <div>
                        <dt>{t("inv_focus")}</dt>
                        <dd>{f.geo.slice(0, 3).join(" · ")}</dd>
                      </div>
                    )}
                  </dl>

                  <div className="inv-card-foot">
                    <span className="inv-reach">
                      {f.r} {f.r === 1 ? t("inv_reach_one") : t("inv_reach_many")}
                    </span>
                    <button
                      type="button"
                      className="btn btn-black btn-sm"
                      onClick={() => setAsk(f)}
                    >
                      {t("inv_request")}
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {list.length > shown && (
            <div className="inv-more">
              <button
                type="button"
                className="btn btn-black"
                onClick={() => setShown((n) => n + 36)}
              >
                {t("inv_more")}
              </button>
              <span className="inv-more-count">
                {shown.toLocaleString()} / {list.length.toLocaleString()}
              </span>
            </div>
          )}

          {list.length === 0 && <p className="empty-note">{t("inv_none")}</p>}

        </div>
      </section>

      {ask && <RequestModal fund={ask} onClose={() => setAsk(null)} />}

      <style jsx>{`
        .inv-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 34px;
          margin-top: 26px;
        }
        .inv-stat {
          display: flex;
          flex-direction: column;
        }
        .inv-stat b {
          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .inv-stat span {
          font-size: 12.5px;
          color: var(--muted, #6b7280);
          margin-top: 4px;
        }
        .inv-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 18px;
          margin-top: 22px;
        }
        .inv-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid var(--line, #e5e7eb);
          border-radius: 14px;
          padding: 18px 18px 16px;
          background: #fff;
          transition: box-shadow 0.18s, transform 0.18s, border-color 0.18s;
        }
        .inv-card:hover {
          border-color: #c8d2da;
          box-shadow: 0 2px 4px rgba(16, 24, 40, 0.05), 0 14px 32px rgba(16, 24, 40, 0.08);
          transform: translateY(-2px);
        }
        .inv-card-top {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 8px;
        }
        .inv-card-top h3 {
          font-size: 16px;
          line-height: 1.3;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .inv-hq {
          margin-left: auto;
          flex-shrink: 0;
          font-size: 11px;
          color: var(--muted, #6b7280);
          white-space: nowrap;
        }
        .inv-desc {
          font-size: 13px;
          line-height: 1.6;
          color: var(--muted, #5b6470);
          margin: 0 0 12px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .inv-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }
        .inv-tag {
          font-size: 11px;
          padding: 3px 9px;
          border-radius: 999px;
          background: #f1f5f9;
          color: #334155;
        }
        .inv-meta {
          margin: 0 0 14px;
          font-size: 12px;
        }
        .inv-meta div {
          display: flex;
          gap: 8px;
          margin-bottom: 4px;
        }
        .inv-meta dt {
          color: var(--muted, #6b7280);
          flex-shrink: 0;
          min-width: 62px;
        }
        .inv-meta dd {
          margin: 0;
          color: #1f2937;
        }
        .inv-card-foot {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid var(--line, #eef1f4);
        }
        .inv-reach {
          font-size: 11.5px;
          color: var(--muted, #6b7280);
        }
        .inv-card-foot :global(.btn) {
          margin-left: auto;
        }
        .inv-more {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-top: 34px;
        }
        .inv-more-count {
          font-size: 12px;
          color: var(--muted, #6b7280);
        }
        @media (max-width: 560px) {
          .inv-stats {
            gap: 20px;
          }
          .inv-stat b {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}

/* ---------------- introduction request ---------------- */
function RequestModal({ fund, onClose }) {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", org: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  const submit = async (e) => {
    e.preventDefault();
    const payload = {
      profile: "startup",
      intents: [`Investor intro — ${fund.n}`],
      name: form.name,
      org: form.org,
      email: form.email,
      message: `[Requested fund: ${fund.n}]\n\n${form.message}`,
    };
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) return setSent(true);
    } catch {}
    /* same fallback the contact page uses when the inbox isn't configured */
    const subject = encodeURIComponent(`Investor introduction request — ${fund.n}`);
    const body = encodeURIComponent(
      `Fund: ${fund.n}\nName: ${form.name}\nCompany: ${form.org}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@lodestart.ai?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid var(--line, #e5e7eb)",
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "inherit",
    background: "#fff",
    marginBottom: 12,
  };

  return (
    <div className="inv-modal-bg" onClick={onClose}>
      <div className="inv-modal" onClick={(e) => e.stopPropagation()}>
        <button className="inv-x" onClick={onClose} aria-label="Close">
          ×
        </button>
        {sent ? (
          <div style={{ padding: "16px 4px" }}>
            <h3 style={{ margin: "0 0 10px" }}>{t("inv_sent")}</h3>
          </div>
        ) : (
          <>
            <h3 style={{ margin: "0 0 6px" }}>{t("inv_request_title")}</h3>
            <p style={{ fontSize: 13.5, color: "var(--muted, #6b7280)", margin: "0 0 14px" }}>
              {t("inv_request_sub")}
            </p>
            <div className="inv-picked">
              <span>{t("inv_selected")}</span>
              <b>{fund.n}</b>
            </div>
            <form onSubmit={submit}>
              <input
                style={field}
                required
                placeholder={t("inv_form_name")}
                value={form.name}
                onChange={set("name")}
              />
              <input
                style={field}
                required
                placeholder={t("inv_form_org")}
                value={form.org}
                onChange={set("org")}
              />
              <input
                style={field}
                required
                type="email"
                placeholder={t("inv_form_email")}
                value={form.email}
                onChange={set("email")}
              />
              <textarea
                style={{ ...field, minHeight: 110, resize: "vertical" }}
                required
                placeholder={t("inv_form_msg")}
                value={form.message}
                onChange={set("message")}
              />
              <button type="submit" className="btn btn-black" style={{ width: "100%" }}>
                {t("inv_form_send")}
              </button>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        .inv-modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(16, 24, 40, 0.45);
          backdrop-filter: blur(2px);
          z-index: 120;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .inv-modal {
          position: relative;
          background: #fff;
          border-radius: 16px;
          width: min(520px, 94vw);
          max-height: 88vh;
          overflow-y: auto;
          padding: 26px 26px 24px;
          box-shadow: 0 10px 24px rgba(16, 24, 40, 0.18), 0 30px 70px rgba(16, 24, 40, 0.22);
        }
        .inv-x {
          position: absolute;
          top: 14px;
          right: 16px;
          border: none;
          background: transparent;
          font-size: 22px;
          line-height: 1;
          color: var(--muted, #6b7280);
          cursor: pointer;
        }
        .inv-picked {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 10px 13px;
          border-radius: 9px;
          background: #f6f8fa;
          margin-bottom: 16px;
        }
        .inv-picked span {
          font-size: 11px;
          color: var(--muted, #6b7280);
        }
        .inv-picked b {
          font-size: 14.5px;
        }
      `}</style>
    </div>
  );
}
