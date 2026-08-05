"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLang } from "./LanguageProvider";

/* Compact organisation card — same flip pattern as CompanyCard. */
export default function OrgCard({ o }) {
  const { t, p, lang } = useLang();
  const router = useRouter();
  const [flipped, setFlipped] = useState(false);
  const href = `/open-innovation/${o.slug}`;
  const focus = (lang === "ko" && o.focus_ko ? o.focus_ko : o.focus).slice(0, 3);

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
      aria-label={o.name}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" ? router.push(href) : null)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="flip-inner">
        <div className="flip-front">
          <span className="flip-tile flip-tile-logo">
            {o.logo ? (
              <Image
                src={o.logo}
                alt=""
                width={Math.round((o.logoW / 96) * 30)}
                height={30}
                style={{ height: 30, width: "auto" }}
                unoptimized
              />
            ) : (
              o.short
            )}
          </span>
          <b className="flip-name">{p(o, "name")}</b>
          <span className="flip-meta">{p(o, "typeLabel")}</span>
        </div>
        <div className="flip-back">
          <div className="flip-tags">
            {focus.map((f) => (
              <span key={f} className="hash">{f}</span>
            ))}
          </div>
          <p className="flip-sum">{p(o, "desc")}</p>
          <span className="flip-view">
            {t("card_view")} <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
