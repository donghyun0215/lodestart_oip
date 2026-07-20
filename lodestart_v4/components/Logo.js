"use client";
import Image from "next/image";
import { useLang } from "./LanguageProvider";

export default function Logo({ size = 38, sub = true }) {
  const { t } = useLang();
  return (
    <span className="logo">
      <Image src="/logos/kinnovation-mark.png" alt="" width={size} height={size}
        style={{ height: size, width: "auto", objectFit: "contain" }} unoptimized aria-hidden="true" />
      <span className="logo-word" style={{ letterSpacing: "-0.01em" }}>
        K-Innovation<span className="t-mark" style={{ fontWeight: 400, marginLeft: 5 }}>Partners</span>
      </span>
      {sub && <span className="logo-sub">{t("logo_sub")}</span>}
    </span>
  );
}
