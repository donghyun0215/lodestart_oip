"use client";
import { useLang } from "./LanguageProvider";

// LodestarT mark: two interlocking rounded quadrilaterals, tilted.
export default function Logo({ size = 36, sub = true }) {
  const { t } = useLang();
  return (
    <span className="logo">
      <svg className="logo-mark" width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <g transform="rotate(-14 60 60)" stroke="currentColor" strokeLinejoin="round">
          <rect x="24" y="24" width="72" height="72" rx="22" strokeWidth="4" transform="rotate(22 60 60)" />
          <rect x="24" y="24" width="72" height="72" rx="22" strokeWidth="4" transform="rotate(-22 60 60)" />
          <path d="M60 40 L78 60 L60 80 L42 60 Z" strokeWidth="2.6" opacity="0.75" />
        </g>
      </svg>
      <span className="logo-word">
        Lodestar<span className="t-mark">T</span>
        <span className="t-star" aria-hidden="true">✦</span>
      </span>
      {sub && <span className="logo-sub">{t("logo_sub")}</span>}
    </span>
  );
}
