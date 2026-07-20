"use client";
import Link from "next/link";
import { SERVICES, FLOW } from "@/lib/data";
import { RuleTitle, NumCard } from "@/components/Bits";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";

export default function ServicesPage() {
  const { t, p } = useLang();

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="kicker">{t("sv_kicker")}</span>
          <h1 className="h-section">{t("sv_title")}</h1>
          <p className="sub">{t("sv_sub")}</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <RuleTitle kicker={t("sv_what_kicker")} title={t("sv_what_title")} sub={t("sv_what_sub")} />
          </Reveal>
          <div className="num-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 60}>
                <NumCard n={s.n} title={p(s, "title")} desc={p(s, "desc")} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <Reveal>
            <RuleTitle dark kicker={t("sv_flow_kicker")} title={t("sv_flow_title")} sub={t("sv_flow_sub")} />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 28 }}>
            {FLOW.map((f, i) => (
              <Reveal key={f.n} delay={i * 60}>
                <span className="num-badge" style={{ background: "rgba(226,99,46,0.16)", color: "#f2a07c" }}>
                  {f.n}
                </span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 500, margin: "18px 0 8px" }}>{p(f, "title")}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{p(f, "desc")}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 660 }}>
          <span className="kicker">{t("sv_cta_kicker")}</span>
          <h2 className="h-section" style={{ margin: "14px 0 16px" }}>
            {t("sv_cta_title")}
          </h2>
          <p className="sub" style={{ margin: "0 auto 32px" }}>
            {t("sv_cta_sub")}
          </p>
          <Link href="/contact" className="btn btn-black">
            {t("cta_btn")} <span className="arr">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
