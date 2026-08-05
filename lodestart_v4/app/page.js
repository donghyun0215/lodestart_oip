"use client";
import Link from "next/link";
import { STARTUPS, ORGS, PARTNERS, TRUSTED_BY } from "@/lib/data";
import { RuleTitle, NumCard } from "@/components/Bits";
import CompanyCard from "@/components/CompanyCard";
import OrgCard from "@/components/OrgCard";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SwimmySection from "@/components/SwimmySection";
import { useLang } from "@/components/LanguageProvider";

const PILLAR_LINK = { 1: "/startups", 2: "/open-innovation", 3: "/events", 4: "/insights", 5: "/outreach" };

export default function Home() {
  const { t, p } = useLang();
  const featured = STARTUPS.slice(0, 4);
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
              <b>120+</b>
              <span>{t("stat_companies")}</span>
            </div>
            <div>
              <b>40+</b>
              <span>{t("stat_orgs")}</span>
            </div>
            <div>
              <b>18</b>
              <span>{t("stat_pilots")}</span>
            </div>
            <div>
              <b>S$92M+</b>
              <span>{t("stat_funding")}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- SWIMMY INTRO — full-bleed ocean ---------- */}
      <SwimmySection />

      {/* ---------- OPEN INNOVATION: THE REAL BOTTLENECK (moved from /open-innovation) ---------- */}
      <section className="section soft">
        <div className="wrap">
          <Reveal>
            <RuleTitle kicker={t("oi_kicker")} title={t("oi_pain_title")} sub={t("oi_sub")} />
          </Reveal>
          <div className="pain-grid">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={(i - 1) * 60}>
                <div className="pain-card">
                  <span className="pain-mark" aria-hidden="true">{`0${i}`}</span>
                  <h3>{t(`oi_pain_${i}_t`)}</h3>
                  <p>{t(`oi_pain_${i}_d`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FIVE PILLARS ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <RuleTitle kicker={t("pil_kicker")} title={t("pil_title")} />
          </Reveal>
          <div className="pillar-grid">
            {[1, 2, 3, 4, 5].map((i) => (
              <Reveal key={i} delay={(i - 1) * 60}>
                <article className="pillar">
                  <span className="pillar-imgwrap">
                    <img className="pillar-img" src={`/covers/pillar-${i}.jpg`} alt="" />
                  </span>
                  <div className="pillar-body">
                    <span className="pillar-n">{`0${i}`}</span>
                    <span className="pillar-pill">{t(`pil_${i}_t`)}</span>
                    <p>{t(`pil_${i}_d`)}</p>
                    <Link href={PILLAR_LINK[i]} className="pillar-link">
                      {t("pil_explore")} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- COMPANIES ---------- */}
      <section className="section soft">
        <div className="wrap">
          <Reveal>
            <RuleTitle kicker={t("home_co_kicker")} title={t("home_co_title")} sub={t("home_co_sub")} />
          </Reveal>
          <div className="flip-grid">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <CompanyCard s={s} />
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
          <div className="flip-grid">
            {orgs.map((o, i) => (
              <Reveal key={o.slug} delay={i * 50}>
                <OrgCard o={o} />
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

      {/* ---------- HOW K-INNOVATION PARTNERS FITS IN (moved from /open-innovation) ---------- */}
      <section className="section dark">
        <div className="wrap">
          <Reveal>
            <RuleTitle dark kicker={t("oi_flow_kicker")} title={t("oi_flow_title")} sub={t("oi_flow_sub")} />
          </Reveal>
          <div className="flow-track">
            {[1, 2, 3, 4, 5].map((n, i) => (
              <Reveal key={n} delay={i * 60}>
                <div className={`flow-step ${n === 4 ? "highlight" : ""}`}>
                  <span className="flow-n">{n}</span>
                  <h3>{t(`oi_flow_${n}_t`)}</h3>
                  <p>{t(`oi_flow_${n}_d`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="flow-note">{t("oi_flow_note")}</p>
          <div style={{ marginTop: 36 }}>
            <Link href="/contact" className="btn btn-orange">
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

      {/* ---------- ACCESS ---------- */}
      <section className="section soft">
        <div className="wrap">
          <div className="access-card">
            <span className="kicker">{t("acc_kicker")}</span>
            <h2 className="h-section" style={{ margin: "14px 0 14px" }}>{t("acc_title")}</h2>
            <p className="sub" style={{ marginBottom: 30 }}>{t("acc_sub")}</p>
            <div className="access-grid">
              <div className="access-box">
                <span className="access-eyebrow">{t("acc_s_kicker")}</span>
                <h3>{t("acc_s_title")}</h3>
                <p>{t("acc_s_desc")}</p>
                <Link href="/startups" className="btn btn-orange btn-sm">
                  {t("acc_s_cta")} <span className="arr">→</span>
                </Link>
              </div>
              <div className="access-box">
                <span className="access-eyebrow">{t("acc_i_kicker")}</span>
                <h3>{t("acc_i_title")}</h3>
                <p>{t("acc_i_desc")}</p>
                <Link href="/contact" className="btn btn-orange btn-sm">
                  {t("acc_i_cta")} <span className="arr">→</span>
                </Link>
              </div>
            </div>
            <Link href="/contact" className="btn btn-outline btn-sm" style={{ marginTop: 26 }}>
              {t("acc_cta2")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
