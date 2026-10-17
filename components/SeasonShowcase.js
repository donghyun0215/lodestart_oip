"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import {
  SEASON_2026,
  SEASON_TOTAL_STARTUPS,
  SEASON_FROM,
  SEASON_TO,
} from "@/lib/events2026";

/* ------------------------------------------------------------------
   Fall 2026 season showcase for /events.
     <SeasonHero/>  — dark hero, line-mask headline, count-up stats,
                      live "next up" chip, 3D fanned deck of the five
                      event thumbnails (mouse tilt + scroll spread)
     <SeasonRail/>  — Aug→Nov timeline, fills up to "today"
     <SeasonStack/> — sticky stacking cards, one per event; the card
                      underneath shrinks + dims as the next slides over
   Status badges are derived from today's date (Singapore), so nothing
   needs editing when an event wraps. Labels are local (not i18n.js).
------------------------------------------------------------------- */

const L = {
  en: {
    eyebrow: "Fall 2026 season · Singapore",
    h1: ["Five programmes.", "One stage:", "Singapore."],
    sub: "Korean startups, moving as a cohort — demo days, 1:1s and pilots with the people who matter.",
    s_events: "Events",
    s_startups: "Startups",
    s_months: "Months",
    next: "Next up",
    live: "Live now",
    wrapped: "Wrapped",
    upcoming: "Upcoming",
    in_days: (n) => (n === 0 ? "today" : n === 1 ? "tomorrow" : `in ${n} days`),
    see: "See the lineup",
    rail_k: "The season at a glance",
    today: "Today",
    stack_k: "The lineup",
    stack_t: "Five demo days. Pick yours.",
    startups: "startups",
    tracks: "tracks",
    rsvp: "RSVP",
    visit: "Visit event site",
    companies: "Meet the companies",
    months: ["Aug", "Sep", "Oct", "Nov"],
    pillars: [
      ["Promotion platform", "Media, features and social reach in KR & SG"],
      ["Curated events", "Demo days and roundtables with real counterparts"],
      ["Founder community", "Intros, playbooks and warnings, shared"],
    ],
  },
  ko: {
    eyebrow: "2026 하반기 시즌 · 싱가포르",
    h1: ["5개의 프로그램,", "하나의 무대", "싱가포르."],
    sub: "함께 움직이는 한국 스타트업 — 꼭 만나야 할 상대와의 데모데이, 1:1 미팅, 실증까지.",
    s_events: "이벤트",
    s_startups: "참가 기업",
    s_months: "개월",
    next: "다음 일정",
    live: "진행 중",
    wrapped: "종료",
    upcoming: "예정",
    in_days: (n) => (n === 0 ? "오늘" : n === 1 ? "내일" : `D-${n}`),
    see: "라인업 보기",
    rail_k: "한눈에 보는 시즌",
    today: "오늘",
    stack_k: "라인업",
    stack_t: "다섯 번의 데모데이, 골라서 오세요.",
    startups: "개사",
    tracks: "트랙",
    rsvp: "참가 신청",
    visit: "행사 사이트",
    companies: "참가 기업 보기",
    months: ["8월", "9월", "10월", "11월"],
    pillars: [
      ["홍보 플랫폼", "한국·싱가포르 미디어와 소셜 채널로 함께 알립니다"],
      ["선별된 행사", "실제 의사결정자와 만나는 데모데이·라운드테이블"],
      ["창업자 커뮤니티", "소개와 노하우, 시행착오까지 나눕니다"],
    ],
  },
};

const useL = () => {
  const { lang, p } = useLang();
  return { l: L[lang] ?? L.en, p, lang };
};

/* ---------- date helpers (Singapore calendar day) ---------- */
const sgToday = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Singapore" }).format(new Date());
const dayNum = (iso) => Math.round(Date.parse(iso + "T00:00:00Z") / 86400000);

function useSeasonStatus() {
  const [today, setToday] = useState(null); // null until mounted → no hydration mismatch
  useEffect(() => setToday(sgToday()), []);
  return useMemo(() => {
    if (!today) return { today: null, status: {}, nextSlug: null, daysTo: null };
    const t = dayNum(today);
    const status = {};
    let nextSlug = null;
    let daysTo = null;
    for (const e of SEASON_2026) {
      const s = dayNum(e.start);
      const en = dayNum(e.end);
      if (en < t) status[e.slug] = "wrapped";
      else if (s <= t) status[e.slug] = "live";
      else {
        status[e.slug] = "upcoming";
        if (!nextSlug) {
          nextSlug = e.slug;
          daysTo = s - t;
        }
      }
    }
    if (nextSlug) status[nextSlug] = "next";
    const live = SEASON_2026.find((e) => status[e.slug] === "live");
    return { today, status, nextSlug: live ? live.slug : nextSlug, daysTo: live ? 0 : daysTo, isLive: !!live };
  }, [today]);
}

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- count-up number ---------- */
function CountUp({ to, ms = 1300 }) {
  const ref = useRef(null);
  const [v, setV] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced() || typeof IntersectionObserver === "undefined") return;
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (now) => {
        const k = Math.min(1, (now - t0) / ms);
        setV(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      setV(0);
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, ms]);
  return <span ref={ref}>{v}</span>;
}

/* ---------- icons ---------- */
const Ico = {
  cal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" /><path d="M14 4c3-1 6-1 6-1s0 3-1 6l-7 7-5-5 7-7z" /><circle cx="15" cy="9" r="1.5" /></svg>
  ),
  bldg: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg>
  ),
  out: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
  ),
};

function Badge({ kind, l }) {
  if (!kind) return null;
  const label = { wrapped: l.wrapped, live: l.live, next: l.next, upcoming: l.upcoming }[kind];
  return (
    <span className={`sx-badge is-${kind}`}>
      {(kind === "live" || kind === "next") && <i aria-hidden="true" />}
      {label}
    </span>
  );
}

const scrollToEvent = (slug) => (e) => {
  const el = document.getElementById(`ev-${slug}`);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "start" });
};

/* =================================================================
   HERO
================================================================= */
export function SeasonHero() {
  const { l, p } = useL();
  const { nextSlug, daysTo, isLive } = useSeasonStatus();
  const next = SEASON_2026.find((e) => e.slug === nextSlug);
  const deckRef = useRef(null);
  const heroRef = useRef(null);

  // mouse tilt + scroll spread, written straight to CSS vars (no re-render)
  useEffect(() => {
    const deck = deckRef.current;
    const hero = heroRef.current;
    if (!deck || !hero || prefersReduced()) return;
    let raf = 0;
    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    };
    const loop = () => {
      tx += (mx - tx) * 0.08;
      ty += (my - ty) * 0.08;
      const r = hero.getBoundingClientRect();
      const s = Math.min(1, Math.max(0, -r.top / (r.height * 0.9)));
      deck.style.setProperty("--rx", `${(-ty * 10).toFixed(2)}deg`);
      deck.style.setProperty("--ry", `${(tx * 16).toFixed(2)}deg`);
      deck.style.setProperty("--spread", s.toFixed(3));
      raf = requestAnimationFrame(loop);
    };
    hero.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="sx-hero" ref={heroRef}>
      <div className="sx-aurora" aria-hidden="true">
        {SEASON_2026.map((e, i) => (
          <span key={e.slug} style={{ "--c": e.color, "--i": i }} />
        ))}
      </div>
      <div className="sx-gridbg" aria-hidden="true" />

      <div className="wrap sx-hero-in">
        <div className="sx-hero-copy">
          <span className="sx-eyebrow">
            <i aria-hidden="true" />
            {l.eyebrow}
          </span>
          <h1 className="sx-h1">
            {l.h1.map((line, i) => (
              <span className="sx-mask" key={i}>
                <span className={`sx-line ${i === l.h1.length - 1 ? "sx-grad" : ""}`} style={{ "--d": `${120 + i * 110}ms` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="sx-sub">{l.sub}</p>

          <div className="sx-stats">
            <div><b><CountUp to={SEASON_2026.length} /></b><span>{l.s_events}</span></div>
            <div><b><CountUp to={SEASON_TOTAL_STARTUPS} />+</b><span>{l.s_startups}</span></div>
            <div><b><CountUp to={4} /></b><span>{l.s_months}</span></div>
          </div>

          <div className="sx-hero-ctas">
            {next ? (
              <a href={`#ev-${next.slug}`} onClick={scrollToEvent(next.slug)} className="sx-next" style={{ "--c": next.color }}>
                <span className="sx-next-dot" aria-hidden="true" />
                <span className="sx-next-k">{isLive ? l.live : l.next}</span>
                <span className="sx-next-n">{p(next, "short")}</span>
                <span className="sx-next-d">{isLive ? "" : l.in_days(daysTo)}</span>
                <span className="sx-next-arr" aria-hidden="true">→</span>
              </a>
            ) : (
              <span className="sx-next-ph" aria-hidden="true" />
            )}
            <a href="#lineup" onClick={(e) => { const el = document.getElementById("lineup"); if (el) { e.preventDefault(); el.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" }); } }} className="sx-ghost">
              {l.see} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="sx-deck-wrap">
          <div className="sx-deck" ref={deckRef}>
            {SEASON_2026.map((e, i) => (
              <a
                key={e.slug}
                href={`#ev-${e.slug}`}
                onClick={scrollToEvent(e.slug)}
                className="sx-deck-card"
                style={{ "--o": i - (SEASON_2026.length - 1) / 2, "--c": e.color, "--d": `${300 + i * 90}ms` }}
                aria-label={p(e, "name")}
              >
                <span className="sx-deck-bob" style={{ "--b": `${i * 0.7}s` }}>
                  <img src={e.thumbSm} alt="" width={640} height={360} loading="eager" />
                  <span className="sx-deck-tag">
                    <b>{p(e, "short")}</b>
                    <em>{p(e, "dateLabel")}</em>
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap sx-pillars">
        {l.pillars.map(([t, d], i) => (
          <div className="sx-pillar" key={t} style={{ "--d": `${700 + i * 90}ms` }}>
            <span className="sx-pillar-n">0{i + 1}</span>
            <div>
              <b>{t}</b>
              <span>{d}</span>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}

/* =================================================================
   TIMELINE RAIL
================================================================= */
export function SeasonRail() {
  const { l, p } = useL();
  const { today, status } = useSeasonStatus();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setInView(true);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setInView(true), io.disconnect()), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const a = dayNum(SEASON_FROM);
  const b = dayNum(SEASON_TO);
  const pct = (iso) => ((dayNum(iso) - a) / (b - a)) * 100;
  const todayPct = today ? Math.min(100, Math.max(0, pct(today))) : 0;
  const monthStarts = ["2026-08-01", "2026-09-01", "2026-10-01", "2026-11-01"];

  return (
    <section className="sx-rail-sec">
      <div className="wrap">
        <span className="sx-k">{l.rail_k}</span>
        <div className={`sx-rail-scroll`}>
          <div className={`sx-rail ${inView ? "in" : ""}`} ref={ref} style={{ "--today": `${todayPct}%` }}>
            {monthStarts.map((m, i) => (
              <span key={m} className="sx-month" style={{ left: `${Math.max(0, pct(m))}%` }}>
                {l.months[i]}
              </span>
            ))}
            <span className="sx-track" />
            <span className="sx-fill" />
            {today && (
              <span className="sx-today" style={{ left: `${todayPct}%` }}>
                <em>{l.today}</em>
              </span>
            )}
            {SEASON_2026.map((e, i) => {
              const st = status[e.slug];
              const left = pct(e.start);
              const width = Math.max(0.9, pct(e.end) - left);
              return (
                <a
                  key={e.slug}
                  href={`#ev-${e.slug}`}
                  onClick={scrollToEvent(e.slug)}
                  className={`sx-node ${st ? `is-${st}` : ""} ${i % 2 ? "lo" : "hi"}`}
                  style={{ left: `${left}%`, "--w": `${width}%`, "--c": e.color, "--d": `${200 + i * 120}ms` }}
                >
                  <span className="sx-span" />
                  <span className="sx-dot" />
                  <span className="sx-node-l">
                    <b>{p(e, "short")}</b>
                    <em>{p(e, "dateLabel")}</em>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
        <ul className="sx-vlist">
          {SEASON_2026.map((e) => (
            <li key={e.slug} className={status[e.slug] ? `is-${status[e.slug]}` : ""} style={{ "--c": e.color }}>
              <a href={`#ev-${e.slug}`} onClick={scrollToEvent(e.slug)}>
                <span>
                  <b>{p(e, "short")}</b>
                  <em>{p(e, "dateLabel")}</em>
                </span>
                <Badge kind={status[e.slug]} l={l} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* =================================================================
   STACKING CARDS
================================================================= */
export function SeasonStack() {
  const { l, p } = useL();
  const { status } = useSeasonStatus();
  const cards = useRef([]);

  useEffect(() => {
    if (prefersReduced()) return;
    let raf = 0;
    const loop = () => {
      const els = cards.current.filter(Boolean);
      for (let i = 0; i < els.length; i++) {
        const inner = els[i].firstElementChild;
        const next = els[i + 1];
        let k = 0;
        if (next) {
          const r = els[i].getBoundingClientRect();
          const n = next.getBoundingClientRect();
          k = Math.min(1, Math.max(0, (r.bottom - n.top) / r.height));
        }
        inner.style.setProperty("--k", k.toFixed(3));
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // pointer tilt on the screenshot frame
  const tilt = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--tx", `${(x * 8).toFixed(2)}deg`);
    el.style.setProperty("--ty", `${(-y * 8).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
  };
  const untilt = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--tx", "0deg");
    el.style.setProperty("--ty", "0deg");
  };

  return (
    <section className="sx-stack-sec" id="lineup">
      <div className="wrap">
        <div className="sx-stack-head">
          <span className="sx-k">{l.stack_k}</span>
          <h2 className="sx-h2">{l.stack_t}</h2>
        </div>

        <div className="sx-stack">
          {SEASON_2026.map((e, i) => {
            const st = status[e.slug];
            const done = st === "wrapped";
            const host = new URL(e.url).host;
            return (
              <article
                key={e.slug}
                id={`ev-${e.slug}`}
                ref={(el) => (cards.current[i] = el)}
                className={`sx-card ${done ? "is-done" : ""}`}
                style={{ "--c": e.color, "--c2": e.color2, "--ink": e.ink, "--i": i }}
              >
                <div className="sx-card-in">
                  <a
                    className="sx-shot"
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onPointerMove={tilt}
                    onPointerLeave={untilt}
                    aria-label={`${p(e, "name")} — ${host}`}
                  >
                    <span className="sx-chrome" aria-hidden="true">
                      <i /><i /><i />
                      <span className="sx-url">{host}</span>
                    </span>
                    <span className="sx-img">
                      <img src={e.thumb} alt={`${p(e, "name")} event site`} width={1280} height={720} loading={i < 2 ? "eager" : "lazy"} />
                      <span className="sx-glare" aria-hidden="true" />
                    </span>
                  </a>

                  <div className="sx-info">
                    <div className="sx-info-top">
                      <span className="sx-num">{String(i + 1).padStart(2, "0")}</span>
                      <Badge kind={st} l={l} />
                      <span className="sx-sector">{p(e, "sector")}</span>
                    </div>
                    <h3 className="sx-name">{p(e, "name")}</h3>
                    <p className="sx-lede">{p(e, "lede")}</p>

                    <ul className="sx-facts">
                      <li>{Ico.cal}<span><b>{p(e, "dateLabel")}</b> · {p(e, "key")}</span></li>
                      <li>{Ico.pin}<span>{p(e, "venue")}</span></li>
                      <li>{Ico.rocket}<span><b>{e.startups}</b> {l.startups}{e.tracks > 1 ? ` · ${e.tracks} ${l.tracks}` : ""}</span></li>
                      <li>{Ico.bldg}<span>{p(e, "host")}</span></li>
                    </ul>

                    <div className="sx-ctas">
                      <a className="sx-btn" href={e.url} target="_blank" rel="noopener noreferrer">
                        {done ? l.visit : l.rsvp} <span aria-hidden="true">{Ico.out}</span>
                      </a>
                      {e.programme ? (
                        <Link className="sx-link" href={`/startups?programme=${e.programme}`}>
                          {l.companies} <span aria-hidden="true">→</span>
                        </Link>
                      ) : (
                        <a className="sx-link" href={`${e.url}#startups`} target="_blank" rel="noopener noreferrer">
                          {l.companies} <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
