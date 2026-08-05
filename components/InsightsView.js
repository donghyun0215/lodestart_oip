"use client";
import { useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";

/* ------------------------------------------------------------------
   Insights — practical LinkedIn field notes as a horizontal carousel.
   Cards deep-link to the original LinkedIn posts (new tab). Posts are
   maintained by hand in lib/data.js → INSIGHTS.
------------------------------------------------------------------- */
export default function InsightsView({ posts }) {
  const { t, p } = useLang();
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
                    <span className="ins-in" aria-hidden="true">in</span>
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
