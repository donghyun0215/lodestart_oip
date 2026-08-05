"use client";
import { useState, useMemo, useEffect } from "react";
import { STARTUPS, STARTUP_THEMES, PROGRAMMES } from "@/lib/data";
import CompanyCard from "@/components/CompanyCard";
import Reveal from "@/components/Reveal";
import { RuleTitle } from "@/components/Bits";
import { useLang } from "@/components/LanguageProvider";

/* Companies belonging to a programme, resolved once. */
const COMPANIES_OF = PROGRAMMES.reduce((acc, p) => {
  acc[p.slug] = p.companies;
  return acc;
}, {});

export default function StartupsPage() {
  const { t, p } = useLang();

  const [progs, setProgs] = useState([]);   // selected programme slugs
  const [themes, setThemes] = useState([]); // selected theme slugs
  const [q, setQ] = useState("");

  const toggle = (list, setList, v) =>
    setList(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const reset = () => {
    setProgs([]);
    setThemes([]);
    setQ("");
  };

  /* /startups?programme=<slug> (e.g. from the events page) preselects a filter */
  useEffect(() => {
    const sl = new URLSearchParams(window.location.search).get("programme");
    if (sl && PROGRAMMES.some((pr) => pr.slug === sl)) setProgs([sl]);
  }, []);

  const countForTheme = (th) =>
    STARTUPS.filter((s) => th.companies.includes(s.slug)).length;

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    const progSlugs = progs.flatMap((sl) => COMPANIES_OF[sl] ?? []);
    const themeSlugs = themes.flatMap(
      (sl) => STARTUP_THEMES.find((th) => th.slug === sl)?.companies ?? []
    );

    return STARTUPS.filter((s) => {
      const progOk = progs.length === 0 || progSlugs.includes(s.slug);
      const themeOk = themes.length === 0 || themeSlugs.includes(s.slug);
      const qOk =
        !term ||
        s.name.toLowerCase().includes(term) ||
        s.sector.toLowerCase().includes(term) ||
        (s.summary ?? "").toLowerCase().includes(term) ||
        (s.summary_ko ?? "").toLowerCase().includes(term) ||
        (s.hashtags ?? []).some((h) => h.toLowerCase().includes(term));
      return progOk && themeOk && qOk;
    });
  }, [progs, themes, q]);

  const activeCount = progs.length + themes.length + (q ? 1 : 0);

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="kicker">{t("co_kicker")}</span>
          <h1 className="h-section">{t("co_title")}</h1>
          <p className="sub">{t("co_sub")}</p>
        </div>
      </header>

      {/* ---------- FILTER PANEL + COMPANY LIST ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="filter-panel">
            <div className="fp-row">
              <label className="fp-label" htmlFor="co-search">
                {t("f_search")}
              </label>
              <input
                id="co-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("f_co_search_ph")}
                className="fp-input"
              />
              <button className="btn btn-black btn-sm fp-reset" onClick={reset} type="button">
                {t("f_reset")}
              </button>
            </div>

            <div className="fp-row">
              <span className="fp-label">{t("f_programme")}</span>
              <div className="fp-chips">
                {PROGRAMMES.map((prog) => (
                  <button
                    key={prog.slug}
                    type="button"
                    className={`fp-chip ${progs.includes(prog.slug) ? "on" : ""}`}
                    onClick={() => toggle(progs, setProgs, prog.slug)}
                    aria-pressed={progs.includes(prog.slug)}
                  >
                    {p(prog, "name")}
                    {progs.includes(prog.slug) && <i aria-hidden="true">×</i>}
                  </button>
                ))}
              </div>
            </div>

            <div className="fp-row">
              <span className="fp-label">{t("f_theme")}</span>
              <div className="fp-chips">
                {STARTUP_THEMES.map((th) => (
                  <button
                    key={th.slug}
                    type="button"
                    className={`fp-chip ${themes.includes(th.slug) ? "on" : ""}`}
                    onClick={() => toggle(themes, setThemes, th.slug)}
                    aria-pressed={themes.includes(th.slug)}
                    title={p(th, "desc")}
                  >
                    {p(th, "title")}
                    <em className="fp-n" aria-hidden="true">
                      {countForTheme(th)}
                    </em>
                    {themes.includes(th.slug) && <i aria-hidden="true">×</i>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="result-note" style={{ marginTop: 24 }}>
            <b style={{ color: "var(--ink)" }}>{list.length}</b>{" "}
            {list.length === 1 ? t("co_count_one") : t("co_count_many")}
            {activeCount > 0
              ? ` · ${activeCount} ${
                  activeCount === 1 ? t("oi_filter_applied") : t("oi_filters_applied")
                }`
              : ""}
            {activeCount > 0 && (
              <button type="button" className="theme-reset" onClick={reset}>
                {t("theme_clear")}
              </button>
            )}
          </p>

          <div className="flip-grid dense">
            {list.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 5) * 40}>
                <CompanyCard s={s} />
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <p className="empty-note">{t("co_none")}</p>
          )}
        </div>
      </section>
    </>
  );
}
