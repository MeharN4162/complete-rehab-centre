type RotatingGlyphsProps = {
  count?: number;
  className?: string;
  tone?: "dark" | "light";
};

// Same seeded pseudo-random + rounding approach as ConstellationDots/DustMotes
// — deterministic placement, rounded before going into inline styles so the
// browser's own style-attribute reserialization can't cause a hydration
// mismatch (see the longer comment in ConstellationDots.tsx).
function seeded(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}
function round(n: number, decimals = 2) {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
}

const tones = {
  dark: { violet: "rgb(124 92 255 / 0.35)", gold: "rgb(201 161 90 / 0.35)" },
  light: { violet: "rgb(124 92 255 / 0.16)", gold: "rgb(201 161 90 / 0.16)" },
};

// A sparse, deliberate scatter of small "+" glyphs that slowly rotate into
// an "×" and back — a fixed, readable pattern rather than the constellation
// dots' randomized twinkle, for sections that want that steadier motif.
export default function RotatingGlyphs({ count = 9, className = "", tone = "dark" }: RotatingGlyphsProps) {
  const colors = tones[tone];
  const glyphs = Array.from({ length: count }, (_, i) => {
    const top = round(seeded(i * 2.9 + 21) * 100);
    const left = round(seeded(i * 4.1 + 23) * 100);
    const size = round(11 + seeded(i * 6.7 + 25) * 11);
    const duration = round(6 + seeded(i * 3.3 + 27) * 6, 1);
    const delay = round(seeded(i * 5.1 + 29) * -10, 1);
    const isGold = i % 3 === 0;
    return { top, left, size, duration, delay, isGold };
  });

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {glyphs.map((g, i) => (
        <span
          key={i}
          className="cross-glyph animate-cross-rotate absolute"
          style={{
            top: `${g.top}%`,
            left: `${g.left}%`,
            width: `${g.size}px`,
            height: `${g.size}px`,
            color: g.isGold ? colors.gold : colors.violet,
            animationDuration: `${g.duration}s`,
            animationDelay: `${g.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
