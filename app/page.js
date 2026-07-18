"use client";
import Link from "next/link";
import { STARTUPS, ORGS, FLOW, PARTNERS, TRUSTED_BY } from "@/lib/data";
import { RuleTitle, NumCard } from "@/components/Bits";
import StartupRow from "@/components/StartupRow";
import OrgRow from "@/components/OrgRow";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";

export default function Home() {
  const { t, p } = useLang();
  const featured = STARTUPS.slice(0, 3);
  const orgs = ORGS.slice(0, 4);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <header className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim" aria-hidden="true" />
        <svg className="hero-mark" width="520" height="520" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path d="M50 6 L86 34 L72 78 L28 78 L14 34 Z" stroke="#fff" strokeWidth="0.9" />
          <path d="M50 94 L14 66 L28 22 L72 22 L86 66 Z" stroke="#fff" strokeWidth="0.9" />
        </svg>
        <div className="wrap">
          <span className="kicker">{t("hero_kicker")}</span>
          <h1 className="h-hero">
            {t("hero_title_a")} <em>{t("hero_title_b")}</em>
          </h1>
          <p className="sub">{t("hero_sub")}</p>
          <div className="hero-ctas">
            <Link href="/startups" className="btn btn-orange">
              {t("hero_cta_companies")} <span className="arr">→</span>
            </Link>
            <Link href="/open-innovation" className="btn btn-outline-light">
              {t("hero_cta_oi")} <span className="arr">→</span>
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <b>FINNECT</b>
              <span>{t("stat_cohort")}</span>
            </div>
            <div>
              <b>{STARTUPS.length}</b>
              <span>{t("stat_companies")}</span>
            </div>
            <div>
              <b>{ORGS.length}</b>
              <span>{t("stat_orgs")}</span>
            </div>
            <div>
              <b>KR ↔ SG</b>
              <span>{t("stat_corridor")}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- POSITIONING ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <RuleTitle kicker={t("pos_kicker")} title={t("pos_title")} sub={t("pos_sub")} />
          </Reveal>
          <div className="num-grid">
            <Reveal><NumCard n="01" title={t("pos_1_t")} desc={t("pos_1_d")} /></Reveal>
            <Reveal delay={60}><NumCard n="02" title={t("pos_2_t")} desc={t("pos_2_d")} /></Reveal>
            <Reveal delay={120}><NumCard n="03" title={t("pos_3_t")} desc={t("pos_3_d")} /></Reveal>
            <Reveal delay={180}><NumCard n="04" title={t("pos_4_t")} desc={t("pos_4_d")} /></Reveal>
          </div>
        </div>
      </section>

      {/* ---------- COMPANIES ---------- */}
      <section className="section soft">
        <div className="wrap">
          <Reveal>
            <RuleTitle kicker={t("home_co_kicker")} title={t("home_co_title")} sub={t("home_co_sub")} />
          </Reveal>
          <div className="s-list">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <StartupRow s={s} />
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <Link href="/startups" className="btn btn-outline">
              {t("home_co_all")} <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- OPEN INNOVATION ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <RuleTitle kicker={t("home_oi_kicker")} title={t("home_oi_title")} sub={t("home_oi_sub")} />
          </Reveal>
          <div className="org-list">
            {orgs.map((o, i) => (
              <Reveal key={o.slug} delay={i * 50}>
                <OrgRow o={o} />
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <Link href="/open-innovation" className="btn btn-outline">
              {t("home_oi_all")} <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FLOW ---------- */}
      <section className="section dark">
        <div className="wrap">
          <Reveal>
            <RuleTitle dark kicker={t("flow_kicker")} title={t("flow_title")} sub={t("flow_sub")} />
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
          <div style={{ marginTop: 44 }}>
            <Link href="/services" className="btn btn-orange">
              {t("flow_cta")} <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- TRUST ---------- */}
      <section className="section" style={{ paddingTop: 84, paddingBottom: 84 }}>
        <div className="wrap">
          <Reveal>
            <p className="marquee-caption on-light">{t("trust_by")}</p>
          </Reveal>
        </div>
        <Marquee items={TRUSTED_BY} speed={44} />

        <div className="wrap" style={{ marginTop: 56 }}>
          <Reveal>
            <p className="marquee-caption on-light">{t("trust_partners")}</p>
          </Reveal>
        </div>
        <Marquee items={PARTNERS} speed={40} reverse />
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section soft">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 700 }}>
          <span className="kicker">{t("cta_kicker")}</span>
          <h2 className="h-section" style={{ margin: "14px 0 16px" }}>
            {t("cta_title")}
          </h2>
          <p className="sub" style={{ margin: "0 auto 32px" }}>
            {t("cta_sub")}
          </p>
          <Link href="/contact" className="btn btn-black">
            {t("cta_btn")} <span className="arr">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
