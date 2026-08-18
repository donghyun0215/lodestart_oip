"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";
import { NEWSLETTER_ISSUES } from "@/lib/newsletter";

/* ------------------------------------------------------------------
   Insights — practical field notes as a horizontal carousel. Source
   can be LinkedIn, Medium, or any external article — each gets its
   own badge; unrecognised sources fall back to a generic link mark.
   Cards deep-link to the original post (new tab). Posts are
   maintained by hand in lib/data.js → INSIGHTS, or via /admin.
------------------------------------------------------------------- */

const SOURCE_BADGE = {
  linkedin: { label: "in", className: "ins-badge-linkedin" },
  medium: { label: "M", className: "ins-badge-medium" },
  article: { label: "◆", className: "ins-badge-article" },
};
const badgeFor = (source) => SOURCE_BADGE[source] ?? SOURCE_BADGE.article;
const MONTHLY_L = {
  en: {
    head: "KIP Monthly",
    sub: "Our monthly round-up — programmes, events, and one company worth your attention. Community submissions welcome.",
    read: "Read issue",
    submit_t: "Have news for the next issue?",
    submit_cta: "Submit an update",
  },
  ko: {
    head: "KIP 먼슬리",
    sub: "매달 발행하는 브리핑 — 프로그램, 이벤트, 그리고 주목할 기업 한 곳. 커뮤니티 제보를 환영합니다.",
    read: "이번 호 읽기",
    submit_t: "다음 호에 실을 소식이 있나요?",
    submit_cta: "소식 제보하기",
  },
};

export default function InsightsView({ posts, issues: issuesProp }) {
  const { t, p, lang } = useLang();
  const ml = MONTHLY_L[lang] ?? MONTHLY_L.en;
  const issues = [...(issuesProp ?? NEWSLETTER_ISSUES)].reverse(); // newest first
  const trackRef = useRef(null);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const scroll = (dir) =>
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  const subscribe = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Briefing access request");
    const body = encodeURIComponent(
      `Please add this address to the K-Innovation Partners briefing:\n\n${email}`
    );
    window.location.href = `mailto:Admin@lodestart.ai?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="kicker">{t("ins_kicker")}</span>
          <h1 className="h-section">
            {t("ins_title_a")} <em className="accent">{t("ins_title_b")}</em>
          </h1>
          <p className="sub">{t("ins_sub")}</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="nlp-archive">
              <div className="nlp-archive-copy">
                <h2>{ml.head}</h2>
                <p>{ml.sub}</p>
              </div>
              <div className="nlp-archive-list">
                {issues.map((i) => (
                  <Link className="nlp-issue" key={i.id} href={`/insights/monthly/${i.id}`}>
                    <span className="nlp-issue-vol">{i.vol}</span>
                    <b>{p(i, "title")}</b>
                    <span className="nlp-issue-date">{p(i, "dateLabel")}</span>
                    <span className="nlp-issue-read">{ml.read} <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
                <Link className="nlp-issue nlp-issue-submit" href="/contact">
                  <b>{ml.submit_t}</b>
                  <span className="nlp-issue-read">{ml.submit_cta} <span aria-hidden="true">→</span></span>
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="ins-head">
              <div className="ins-arrows">
                <button type="button" aria-label="Previous" onClick={() => scroll(-1)}>←</button>
                <button type="button" aria-label="Next" onClick={() => scroll(1)}>→</button>
              </div>
            </div>
            <div className="ins-track" ref={trackRef}>
              {posts.map((post) => (
                <a
                  key={post.id}
                  className="ins-card"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ins-band">
                    <span className={`ins-badge ${badgeFor(post.source).className}`} aria-hidden="true">
                      {badgeFor(post.source).label}
                    </span>
                    <span className="ins-tag">{p(post, "tag")}</span>
                  </span>
                  <b className="ins-title">{p(post, "title")}</b>
                  <span className="ins-date">{post.date}</span>
                  <span className="ins-read">
                    {t("ins_read")} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              ))}
            </div>
            <p className="fine-note" style={{ marginTop: 16 }}>{t("ins_more")}</p>
          </Reveal>
        </div>
      </section>

      <section className="section soft">
        <div className="wrap">
          <Reveal>
            <div className="nl-card ins-sub">
              <h3>{t("nl_sub_t")}</h3>
              <p className="nl-card-sub">{t("nl_sub_d")}</p>
              {sent ? (
                <p className="nl-fine">{t("nl_thanks")}</p>
              ) : (
                <form onSubmit={subscribe}>
                  <input
                    type="email"
                    required
                    className="nl-input"
                    placeholder={t("nl_ph")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="btn btn-orange">
                    {t("nl_cta")}
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
