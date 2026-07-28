"use client";
import { useState, useRef, useEffect } from "react";
import { useLang } from "./LanguageProvider";

/* ------------------------------------------------------------------
   Team member card.
   The role stays on the card; the fuller bio (notes) is revealed
     · on hover           (desktop — CSS + JS both, so keyboard works)
     · on click / tap     (touch — toggles a popover, since there is
                           no hover on touch devices)
   Popover closes on outside-click or Esc. Falls back to nothing if a
   member has no notes.
------------------------------------------------------------------- */
export default function TeamMember({ m }) {
  const { p } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const notes = p(m, "notes");
  const role = p(m, "role");
  const initials = m.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const hasNotes = Boolean(notes);

  return (
    <div
      ref={ref}
      className={`team-card ${hasNotes ? "has-notes" : ""} ${open ? "open" : ""}`}
      tabIndex={hasNotes ? 0 : -1}
      role={hasNotes ? "button" : undefined}
      aria-expanded={hasNotes ? open : undefined}
      onClick={() => hasNotes && setOpen((v) => !v)}
      onKeyDown={(e) => {
        if (hasNotes && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
    >
      <div className="team-ava">{initials}</div>
      <b className="team-name">{m.name}</b>
      <span className="team-role">{role}</span>
      {hasNotes && <span className="team-more" aria-hidden="true">＋</span>}

      {hasNotes && (
        <div className="team-pop" role="tooltip">
          <span className="team-pop-role">{role}</span>
          <p>{notes}</p>
        </div>
      )}
    </div>
  );
}
