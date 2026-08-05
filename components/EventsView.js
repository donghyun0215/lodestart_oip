"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PROGRAMMES, STARTUPS } from "@/lib/data";
import ProgrammeCard from "@/components/ProgrammeCard";
import Reveal from "@/components/Reveal";
import { RuleTitle } from "@/components/Bits";
import { useLang } from "@/components/LanguageProvider";

export default function EventsView({ events }) {
  const { t, p } = useLang();
  const router = useRouter();
  const countFor = (prog) => STARTUPS.filter((x) => prog.companies.includes(x.slug)).length;
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="kicker">{t("ev_kicker")}</span>
          <h1 className="h-section">
            {t("ev_title_a")} <em className="accent">{t("ev_title_b")}</em>
          </h1>
          <p className="sub">{t("ev_sub")}</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="feat-grid">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={(i - 1) * 60}>
                <div className="feat-card">
                  <h3>{t(`ev_${i}_t`)}</h3>
                  <p>{t(`ev_${i}_d`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROGRAMMES — accelerator programmes are events too ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <RuleTitle kicker={t("prog_kicker")} title={t("prog_title")} sub={t("prog_sub")} />
          </Reveal>
          <div className="prog-grid compact">
            {PROGRAMMES.map((prog, i) => (
              <Reveal key={prog.slug} delay={i * 50}>
                <ProgrammeCard
                  prog={prog}
                  count={countFor(prog)}
                  active={false}
                  onSelect={() => router.push(`/startups?programme=${prog.slug}`)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="wrap">
          <div className="up-head">
            <h2 className="h-section">{t("ev_upcoming")}</h2>
            <Link href="/contact" className="s-link">
              {t("ev_schedule")} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="up-list">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 40}>
                <div className="up-row">
                  <span className="up-thumb" aria-hidden="true">{(e.tag || "•")[0]}</span>
                  <span className="up-main">
                    <span className="up-title">{p(e, "title")}</span>
                    <span className="up-tag">{p(e, "tag")}</span>
                  </span>
                  <span className="up-when">{p(e, "when")}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="fine-note" style={{ marginTop: 18 }}>
            {t("ev_note")}
          </p>
          <div style={{ marginTop: 26 }}>
            <Link href="/contact" className="btn btn-orange">
              {t("ev_join")} <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
