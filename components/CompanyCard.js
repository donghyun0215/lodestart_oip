"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLang } from "./LanguageProvider";

/* ------------------------------------------------------------------
   Compact company card, built to stay legible at 100+ companies.
   Front: logo (or a sector glyph as a stand-in) + name + sector.
   Back (on hover, or first tap on touch): one-line summary,
   programme chip, "view" hint. Whole card navigates to the detail
   page.

   No real company logo can be fetched automatically (no image
   scraping) — so until a company supplies one, the front shows a
   small duotone glyph picked from its sector text instead of bare
   initials. Drop a file into /public/logos/companies and set
   `logo` + `logoW` on the company in lib/data.js to swap it in;
   this component picks it up with zero other changes.
------------------------------------------------------------------- */

/* deterministic soft hue per company so tiles vary without images */
const TILE_HUES = [152, 200, 176, 216, 164, 190, 140, 208];
const hueOf = (name) => {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) % 997;
  return TILE_HUES[h % TILE_HUES.length];
};

/* sector text → best-guess glyph key, keyword-matched */
const GLYPH_RULES = [
  [/diagnostic|pathogen|lamp|test kit/i, "pulse"],
  [/fintech|digital asset|sto|credit|rwa/i, "coin"],
  [/food|seaweed|agri|pet|supply chain/i, "leaf"],
  [/safety|digital twin|security/i, "shield"],
  [/logistic|marine|supply|iot/i, "truck"],
  [/robot|physical ai|middleware|maintenance/i, "gear"],
  [/health|med/i, "pulse"],
  [/energy|renewable|hydrogen|solar|grid|climate|material/i, "bolt"],
  [/mobility|parking|freight|truck|transport/i, "truck"],
];
const glyphFor = (sector) => GLYPH_RULES.find(([re]) => re.test(sector))?.[1] ?? "spark";

function Glyph({ kind, color }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (kind) {
    case "coin":
      return <svg {...common}><circle cx="12" cy="12" r="8" /><path d="M12 7.5v9M9 9.5h4a1.8 1.8 0 0 1 0 3.6H10a1.8 1.8 0 0 0 0 3.6h4.5" /></svg>;
    case "leaf":
      return <svg {...common}><path d="M5 19c8-1 13-6 14-14-8 1-13 6-14 14Z" /><path d="M5 19c2-4 5-7 9-9" /></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3.5 19 6.5v5c0 5-3 8-7 9-4-1-7-4-7-9v-5Z" /><path d="M9 12l2 2 4-4.5" /></svg>;
    case "truck":
      return <svg {...common}><rect x="2.5" y="8" width="11" height="8" rx="1" /><path d="M13.5 11h4l3 3v2h-7z" /><circle cx="6.5" cy="18" r="1.6" /><circle cx="16.5" cy="18" r="1.6" /></svg>;
    case "gear":
      return <svg {...common}><circle cx="12" cy="12" r="3.2" /><path d="M12 3.5v2.4M12 18.1v2.4M20.5 12h-2.4M5.9 12H3.5M17.7 6.3l-1.7 1.7M8 16l-1.7 1.7M17.7 17.7 16 16M8 8 6.3 6.3" /></svg>;
    case "bolt":
      return <svg {...common}><path d="M13.5 2.5 5.5 13h5l-1 8.5 8-10.5h-5z" /></svg>;
    case "pulse":
      return <svg {...common}><path d="M2.5 12h4l2-6 3 12 2-9 1.5 3H21.5" /></svg>;
    default: // spark
      return <svg {...common}><path d="M12 2.5 14 10l7.5 2-7.5 2-2 7.5-2-7.5-7.5-2L10 10Z" /></svg>;
  }
}

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
            {s.logo ? (
              <Image
                src={s.logo}
                alt=""
                width={Math.round(((s.logoW ?? 200) / 96) * 26)}
                height={26}
                style={{ height: 26, width: "auto" }}
                unoptimized
              />
            ) : (
              <Glyph kind={glyphFor(s.sector)} color={`hsl(${hue} 45% 32%)`} />
            )}
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
