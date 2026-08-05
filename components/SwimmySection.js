"use client";
import { useEffect, useRef } from "react";
import { useLang } from "./LanguageProvider";

/* ------------------------------------------------------------------
   Swimmy section — full-bleed ocean, no card.

   The whole band is the sea: organic wave silhouettes melt it into
   the white sections above and below, the copy sits inside the water
   in white, and the shoal-whale swims on the right with

     · mouse-move 3D tilt        (perspective rotate on --mx/--my)
     · scroll-linked parallax    (whale, fish and bubbles drift on
                                  --sp as the section moves through
                                  the viewport)
     · straggler fish            (small fish swimming in to join the
                                  whale — the Swimmy story itself)
     · light rays, caustics, and rising bubbles

   All motion is rAF-throttled CSS-variable writes — no re-renders —
   and collapses to a still scene under prefers-reduced-motion.
------------------------------------------------------------------- */

const BUBBLES = [
  { left: "8%", size: 6, delay: 0, dur: 14 },
  { left: "18%", size: 4, delay: 5, dur: 17 },
  { left: "31%", size: 8, delay: 2, dur: 12 },
  { left: "44%", size: 5, delay: 8, dur: 16 },
  { left: "58%", size: 6, delay: 3.5, dur: 13 },
  { left: "71%", size: 4, delay: 10, dur: 18 },
  { left: "84%", size: 9, delay: 6, dur: 12 },
  { left: "94%", size: 5, delay: 1.5, dur: 15 },
];

/* small fish swimming across to join the whale */
const STRAGGLERS = [
  { top: "16%", scale: 1, dur: 18, delay: 0, opacity: 0.9 },
  { top: "64%", scale: 0.72, dur: 24, delay: 6, opacity: 0.75 },
  { top: "38%", scale: 0.55, dur: 30, delay: 13, opacity: 0.6 },
];

function Fish({ style }) {
  return (
    <svg className="ocean-fish" viewBox="0 0 60 28" style={style} aria-hidden="true">
      <path
        d="M4 14 C14 2 34 2 46 12 L56 4 L52 14 L56 24 L46 16 C34 26 14 26 4 14 Z"
        fill="currentColor"
      />
      <circle cx="14" cy="12" r="2" fill="rgba(6,60,40,0.55)" />
    </svg>
  );
}

/* organic wave edge — irregular on purpose so it doesn't read as a box */
function WaveEdge({ flip = false }) {
  return (
    <svg
      className={`ocean-wave ${flip ? "flip" : ""}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,52 C120,20 260,78 420,58 C580,38 690,6 860,30 C1030,54 1140,84 1290,58 C1360,46 1410,34 1440,40 L1440,0 L0,0 Z"
        fill="var(--bg, #fff)"
      />
      <path
        d="M0,66 C140,36 280,88 440,70 C600,52 720,22 880,44 C1040,66 1160,92 1300,70 C1365,60 1415,48 1440,54 L1440,0 L0,0 Z"
        fill="var(--bg, #fff)"
        opacity="0.45"
      />
    </svg>
  );
}

export default function SwimmySection() {
  const { t } = useLang();
  const secRef = useRef(null);

  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const set = (k, v) => el.style.setProperty(k, v);

    /* scroll parallax: -1 (below viewport) → 0 (centered) → 1 (above) */
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const mid = r.top + r.height / 2 - window.innerHeight / 2;
        const sp = Math.max(-1, Math.min(1, -mid / (window.innerHeight * 0.9)));
        set("--sp", sp.toFixed(3));
      });
    };

    /* mouse tilt, normalized to the section box */
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const my = ((e.clientY - r.top) / r.height) * 2 - 1;
      set("--mx", mx.toFixed(3));
      set("--my", my.toFixed(3));
    };
    const onLeave = () => {
      set("--mx", "0");
      set("--my", "0");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="ocean" ref={secRef}>
      <WaveEdge />

      <span className="ocean-rays" aria-hidden="true" />
      <span className="ocean-caustics" aria-hidden="true" />

      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="ocean-bubble"
          aria-hidden="true"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
          }}
        />
      ))}

      <div className="wrap ocean-grid">
        <div className="ocean-copy">
          <span className="kicker">{t("sw_kicker")}</span>
          <h2 className="h-section">
            {t("sw_line_a")}
            <br />
            <em>{t("sw_line_b")}</em>
          </h2>
          <p>{t("sw_body")}</p>
          <p>{t("sw_body2")}</p>
        </div>

        <div className="ocean-stage">
          {STRAGGLERS.map((f, i) => (
            <Fish
              key={i}
              style={{
                top: f.top,
                width: 34 * f.scale,
                opacity: f.opacity,
                animationDuration: `${f.dur}s`,
                animationDelay: `${f.delay}s`,
              }}
            />
          ))}
          {/* the show-off: leaps clear of the surface and dives back in */}
          <span className="ocean-jumper" aria-hidden="true">
            <Fish style={{ width: 40 }} />
          </span>
          <span className="ocean-whale">
            <img
              src="/covers/swimmy-dolphin.png"
              alt="Hundreds of small fish swimming together in the shape of one dolphin"
            />
          </span>
        </div>
      </div>

      <WaveEdge flip />
    </section>
  );
}
