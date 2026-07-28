"use client";
import { useLang } from "./LanguageProvider";

/* ------------------------------------------------------------------
   Programme (event) card — the primary grouping on /startups.
   The cover is the partner's own logo sitting on its own brand
   colour, so the grid reads as a wall of credible institutions
   rather than generated artwork.

   Everything comes from the programme object in lib/data.js:
     logo       → /public/logos/programmes/*.png
     bg         → cover background colour
     logoScale  → how much of the cover width the logo occupies
   Adding a fifth event needs no change in this file.
------------------------------------------------------------------- */

/* Light covers need a hairline so the card edge stays visible. */
const isLight = (hex) => {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return 0.299 * r + 0.587 * g + 0.114 * b > 186;
};

export default function ProgrammeCard({ prog, count, active, onSelect }) {
  const { p, t } = useLang();
  const light = isLight(prog.bg);
  const pending = count === 0;

  return (
    <button
      type="button"
      className={`prog-card ${active ? "active" : ""} ${pending ? "pending" : ""}`}
      onClick={onSelect}
      aria-pressed={active}
    >
      <span
        className={`prog-cover ${light ? "on-light" : "on-dark"}`}
        style={{ background: prog.bg }}
      >
        <img
          src={prog.logo}
          alt={p(prog, "name")}
          style={{ width: `${(prog.logoScale ?? 0.6) * 100}%` }}
        />
        <span className="prog-count">
          {pending
            ? t("prog_pending")
            : `${count} ${count === 1 ? t("theme_company_one") : t("theme_company_many")}`}
        </span>
      </span>

      <span className="prog-body">
        <span className="prog-meta">
          {prog.years} · {p(prog, "place")}
        </span>
        <span className="prog-h">{p(prog, "name")}</span>
        <span className="prog-host">{p(prog, "host")}</span>
        <span className="prog-desc">{p(prog, "desc")}</span>
        <span className="prog-cta">
          {pending ? t("prog_soon") : t("prog_view")} <span className="arr">→</span>
        </span>
      </span>
    </button>
  );
}
