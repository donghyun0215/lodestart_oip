"use client";

/* ------------------------------------------------------------------
   Swimmy section artwork — the shoal-of-fish whale, swimming.

   The whale PNG (/covers/swimmy-whale.png) is a school of small fish
   composed into one large body: literally the Swimmy idea, so it
   carries the section's message on its own. Everything around it is
   CSS: a deep-water gradient, drifting caustic light, a slow current,
   and rising bubbles.

   Motion is decorative only — the whole thing collapses to a still
   image under `prefers-reduced-motion`.
------------------------------------------------------------------- */

const BUBBLES = [
  { left: "12%", size: 7, delay: 0, dur: 13 },
  { left: "22%", size: 4, delay: 3.5, dur: 16 },
  { left: "35%", size: 9, delay: 6.5, dur: 11 },
  { left: "48%", size: 5, delay: 1.5, dur: 15 },
  { left: "61%", size: 6, delay: 8, dur: 12 },
  { left: "74%", size: 4, delay: 4.5, dur: 17 },
  { left: "86%", size: 8, delay: 10, dur: 14 },
  { left: "93%", size: 5, delay: 2.5, dur: 18 },
];

export default function SwimmyWater() {
  return (
    <div className="water" aria-hidden="false">
      <span className="water-caustics" aria-hidden="true" />
      <span className="water-rays" aria-hidden="true" />

      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="water-bubble"
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

      <span className="water-swimmer">
        <img
          src="/covers/swimmy-whale.png"
          alt="Hundreds of small fish swimming together in the shape of one whale"
        />
      </span>

      <span className="water-floor" aria-hidden="true" />
    </div>
  );
}
