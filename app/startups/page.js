"use client";
import { useState, useMemo } from "react";
import { STARTUPS, SECTORS } from "@/lib/data";
import StartupRow from "@/components/StartupRow";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";

const SECTOR_KO = {
  All: "전체",
  FinTech: "핀테크",
  "RWA / Private Credit": "RWA / 사모신용",
  "Digital Assets": "디지털 자산",
  "STO / AgriFinance": "STO / 농축산금융",
};

export default function StartupsPage() {
  const { t, lang } = useLang();
  const [sector, setSector] = useState("All");
  const list = useMemo(
    () => (sector === "All" ? STARTUPS : STARTUPS.filter((s) => s.sector === sector)),
    [sector]
  );
  const label = (s) => (lang === "ko" ? SECTOR_KO[s] ?? s : s);

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="kicker">{t("co_kicker")}</span>
          <h1 className="h-section">{t("co_title")}</h1>
          <p className="sub">{t("co_sub")}</p>
        </div>
      </header>

      <section className="section soft">
        <div className="wrap">
          <div className="filters">
            {SECTORS.map((s) => (
              <button key={s} className={`f-chip ${sector === s ? "active" : ""}`} onClick={() => setSector(s)}>
                {label(s)}
              </button>
            ))}
          </div>
          <p className="result-note">
            {list.length} {list.length === 1 ? t("co_count_one") : t("co_count_many")}
            {sector !== "All" ? ` ${t("co_in")} ${label(sector)}` : ""}
          </p>
          <div className="s-list">
            {list.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <StartupRow s={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
