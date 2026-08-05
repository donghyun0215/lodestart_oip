"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "./LanguageProvider";

/* ------------------------------------------------------------------
   Compact company card, built to stay legible at 100+ companies.
   Front: monogram tile + name + sector. Back (on hover, or first
   tap on touch): one-line summary, programme chip, "view" hint.
   Whole card navigates to the detail page.
------------------------------------------------------------------- */

/* deterministic soft hue per company so tiles vary without images */
const TILE_HUES = [152, 200, 176, 216, 164, 190, 140, 208];
const hueOf = (name) => {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) % 997;
  return TILE_HUES[h % TILE_HUES.length];
};

export default function CompanyCard({ s }) {
  const { t, p } = useLang();
  const router = useRouter();
  const [flipped, setFlipped] = useState(false);
  const href = `/startups/${s.slug}`;
  const hue = hueOf(s.name);
  const initials = (s.brand ?? s.name)
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const onClick = () => {
    const touch = window.matchMedia("(hover: none)").matches;
    if (touch && !flipped) return setFlipped(true);
    router.push(href);
  };

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      role="link"
      tabIndex={0}
      aria-label={s.name}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" ? router.push(href) : null)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="flip-inner">
        <div className="flip-front">
          <span
            className="flip-tile"
            style={{
              background: `linear-gradient(140deg, hsl(${hue} 72% 94%), hsl(${hue} 60% 86%))`,
              color: `hsl(${hue} 45% 30%)`,
            }}
          >
            {initials}
          </span>
          <b className="flip-name">{s.name}</b>
          <span className="flip-meta">{p(s, "sector")}</span>
        </div>
        <div className="flip-back">
          <span className="flip-prog">
            {s.programme}
            {s.edition ? ` ${s.edition}` : ""}
          </span>
          <p className="flip-sum">{p(s, "summary")}</p>
          <span className="flip-view">
            {t("card_view")} <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
