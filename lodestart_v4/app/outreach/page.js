"use client";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";

export default function OutreachPage() {
  const { t } = useLang();
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="kicker">{t("ou_kicker")}</span>
          <h1 className="h-section">
            {t("ou_title_a")} <em className="accent">{t("ou_title_b")}</em>
          </h1>
          <p className="sub">{t("ou_sub")}</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="feat-grid">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={(i - 1) * 60}>
                <div className="feat-card">
                  <h3>{t(`ou_${i}_t`)}</h3>
                  <p>{t(`ou_${i}_d`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 34 }}>
            <Link href="/contact" className="btn btn-orange">
              {t("ou_cta")} <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- IR deck review & expert advisory ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="adv-band">
              <div className="adv-copy">
                <span className="kicker">{t("adv_kicker")}</span>
                <h2 className="h-section" style={{ margin: "12px 0 14px" }}>
                  {t("adv_title_a")} <em className="accent">{t("adv_title_b")}</em>
                </h2>
                <p className="sub" style={{ fontSize: 15.5 }}>{t("adv_sub")}</p>
                <a
                  href={`mailto:hello@lodestart.ai?subject=${encodeURIComponent("[Advisory] IR Deck Review Request")}`}
                  className="btn btn-orange"
                  style={{ marginTop: 24 }}
                >
                  {t("adv_cta")} <span className="arr">→</span>
                </a>
                <p className="fine-note" style={{ marginTop: 14 }}>{t("adv_note")}</p>
              </div>
              <ul className="adv-list">
                {[1, 2, 3].map((i) => (
                  <li key={i}>
                    <b>{t(`adv_i${i}_t`)}</b>
                    <p>{t(`adv_i${i}_d`)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
