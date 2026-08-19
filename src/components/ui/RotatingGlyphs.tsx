type RotatingGlyphsProps = {
  cols?: number;
  rows?: number;
  className?: string;
  tone?: "dark" | "light";
};

// Browsers reserialize an inline `style` attribute's numeric values when
// parsing server-rendered HTML, rounding more aggressively than JS's own
// float-to-string conversion — left unrounded, that mismatch trips a
// hydration warning (see the equivalent note this replaced elsewhere).
function round(n: number, decimals = 2) {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
}

// One consistent color for every glyph, dark sections only — the light
// variant existed but was removed, kept here only so the prop doesn't need
// touching everywhere if it comes back. Low opacity is load-bearing at this
// density (~230 glyphs per section): anything much brighter competes with
// the foreground content instead of reading as background texture.
const tones = {
  dark: "rgb(124 92 255 / 0.12)",
  light: "rgb(124 92 255 / 0.16)",
};

const CYCLE = 4; // seconds for one full sweep across the grid, + -> x -> +

// A dense, fixed grid of small "+" glyphs filling the section, all rotating
// into an "×" and back on a single shared clock — each column's delay is
// that column's fraction of the full cycle, so the rotation is a
// continuous, evenly-paced wave crossing left to right rather than
// independent glyphs firing on their own timing.
export default function RotatingGlyphs({ cols = 26, rows = 9, className = "", tone = "dark" }: RotatingGlyphsProps) {
  const color = tones[tone];
  const glyphs = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const left = round(((col + 0.5) / cols) * 100);
    const top = round(((row + 0.5) / rows) * 100);
    const delay = round((col / cols) * CYCLE, 3);
    return { left, top, delay };
  });

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {glyphs.map((g, i) => (
        <span
          key={i}
          className="cross-glyph animate-cross-rotate absolute h-3 w-3"
          style={{
            top: `${g.top}%`,
            left: `${g.left}%`,
            color,
            animationDuration: `${CYCLE}s`,
            animationDelay: `${g.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
