"use client";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";

/* ------------------------------------------------------------------
   KIP Monthly — single-issue reader. Deliberately plain: one narrow
   column, When/Where/What rows, no carousels. The 82 Startup format
   Tammy forwarded, in KIP's palette. Bilingual via the site toggle;
   labels are local to keep i18n.js untouched.
------------------------------------------------------------------- */

const L = {
  en: {
    kicker: "KIP Monthly",
    upcoming: "Upcoming events",
    spotlight: "Company spotlight",
    submit_t: "Submit for next month",
    submit_d: "Have a company update, an event, or an IR deck to share? Send it in and we'll consider it for the next issue.",
    submit_cta: "Send an update",
    sub_t: "Get KIP Monthly by email",
    sub_d: "One email a month — programmes, events, and one company worth your attention.",
    sub_cta: "Subscribe",
    sub_ph: "you@company.com",
    sub_thanks: "Thanks — your email client should have opened with the request.",
    back: "← All insights",
    view: "View",
  },
  ko: {
    kicker: "KIP 먼슬리",
    upcoming: "예정된 일정",
    spotlight: "이달의 기업",
    submit_t: "다음 호 소식 제보",
    submit_d: "공유할 기업 소식, 이벤트, IR 덱이 있나요? 보내주시면 다음 호에 반영을 검토합니다.",
    submit_cta: "소식 보내기",
    sub_t: "KIP 먼슬리를 이메일로 받기",
    sub_d: "한 달에 한 통 — 프로그램, 이벤트, 그리고 주목할 기업 한 곳.",
    sub_cta: "구독하기",
    sub_ph: "you@company.com",
    sub_thanks: "감사합니다 — 이메일 앱에서 요청 메일이 열렸을 거예요.",
    back: "← 인사이트로",
    view: "보기",
  },
};

export default function NewsletterView({ issue }) {
  const { lang, p } = useLang();
  const t = (k) => (L[lang] ?? L.en)[k];
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("KIP Monthly subscription");
    const body = encodeURIComponent(
      `Please add this address to KIP Monthly:\n\n${email}`
    );
    window.location.href = `mailto:Admin@lodestart.ai?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const hi = issue.highlight;
  const sp = issue.spotlight;
  const sv = issue.services;

  return (
    <>
      <header className="page-hero">
        <div className="wrap nlp-wrap">
          <Link className="nlp-back" href="/insights">{t("back")}</Link>
          <span className="kicker">{t("kicker")} · {issue.vol}</span>
          <h1 className="h-section">{p(issue, "title")}</h1>
          <p className="sub">{p(issue, "dateLabel")}</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap nlp-wrap">
          <Reveal>
            <p className="nlp-intro">{p(issue, "intro")}</p>
          </Reveal>

          {/* headline item — When / Where / What */}
          {hi && (
          <Reveal>
            <article className="nlp-item">
              <h2 className="nlp-item-title">
                <span aria-hidden="true">{hi.emoji}</span> {p(hi, "title")}
              </h2>
              <dl className="nlp-rows">
                {(hi.rows ?? []).map((r) => (
                  <div className="nlp-row" key={r.k}>
                    <dt>{lang === "ko" ? r.k_ko : r.k}</dt>
                    <dd>{lang === "ko" ? r.v_ko : r.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="nlp-links">
                {(hi.links ?? []).map((l) => (
                  <Link className="btn btn-orange nlp-btn" key={l.href} href={l.href}>
                    {lang === "ko" ? l.label_ko : l.label}
                  </Link>
                ))}
              </div>
            </article>
          </Reveal>
          )}

          {/* upcoming — Tammy-confirmed list, compact rows */}
          {Array.isArray(issue.events) && issue.events.length > 0 && (
          <Reveal>
            <article className="nlp-item">
              <h2 className="nlp-item-title">📅 {t("upcoming")}</h2>
              <ul className="nlp-events">
                {issue.events.map((ev) => (
                  <li key={ev.title}>
                    <span className="nlp-ev-tag">{p(ev, "tag")}</span>
                    <b>{p(ev, "title")}</b>
                    <span className="nlp-ev-when">{p(ev, "when")}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          )}

          {/* spotlight */}
          {sp && (
          <Reveal>
            <article className="nlp-item">
              <h2 className="nlp-item-title">🔦 {t("spotlight")}</h2>
              <div className="nlp-spot">
                <div className="nlp-spot-head">
                  <b>{sp.name}</b>
                  <span>{sp.programme} · {p(sp, "sector")}</span>
                </div>
                <p>{p(sp, "blurb")}</p>
                <Link className="nlp-more" href={sp.href}>
                  {t("view")} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          </Reveal>
          )}

          {/* member services */}
          {sv && (
          <Reveal>
            <article className="nlp-item">
              <h2 className="nlp-item-title">
                <span aria-hidden="true">{sv.emoji}</span>{" "}
                {p(sv, "title")}
              </h2>
              <p className="nlp-body">{p(sv, "body")}</p>
              <a className="btn btn-orange nlp-btn" href={sv.href}>
                {lang === "ko" ? sv.cta_ko : sv.cta}
              </a>
            </article>
          </Reveal>
          )}

          {/* submit for next month */}
          <Reveal>
            <article className="nlp-item nlp-submit">
              <h2 className="nlp-item-title">💡 {t("submit_t")}</h2>
              <p className="nlp-body">{t("submit_d")}</p>
              <Link className="btn btn-orange nlp-btn" href="/contact">
                {t("submit_cta")}
              </Link>
            </article>
          </Reveal>

          {/* subscribe */}
          <Reveal>
            <div className="nl-card ins-sub nlp-subcard">
              <h3>{t("sub_t")}</h3>
              <p className="nl-card-sub">{t("sub_d")}</p>
              {sent ? (
                <p className="nl-fine">{t("sub_thanks")}</p>
              ) : (
                <form onSubmit={subscribe}>
                  <input
                    type="email"
                    required
                    className="nl-input"
                    placeholder={t("sub_ph")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="btn btn-orange">
                    {t("sub_cta")}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
