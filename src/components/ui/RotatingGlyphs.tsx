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

const tones = {
  dark: { violet: "rgb(124 92 255 / 0.35)", gold: "rgb(201 161 90 / 0.35)" },
  light: { violet: "rgb(124 92 255 / 0.16)", gold: "rgb(201 161 90 / 0.16)" },
};

const COL_STAGGER = 0.14; // seconds between each column starting its rotation
const ROW_STAGGER = 0.3; // small offset per row so rows don't all fire in lockstep
const CYCLE = 3.2; // seconds for one full +  ->  ×  ->  + rotation

// A fixed grid of small "+" glyphs, evenly spaced left to right, that
// rotate into an "×" and settle back — deliberately patterned (not
// randomized) with each column starting a beat after the one before it, so
// the rotation reads as a single wave sweeping smoothly across the section.
export default function RotatingGlyphs({ cols = 8, rows = 3, className = "", tone = "dark" }: RotatingGlyphsProps) {
  const colors = tones[tone];
  const glyphs = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const left = round(((col + 0.5) / cols) * 100);
    const top = round(((row + 0.5) / rows) * 100);
    // Positive delay, increasing with column index, so later (rightward)
    // columns start their rotation later than earlier (leftward) ones —
    // that lag is what reads as the wave traveling left to right over time.
    const delay = round(col * COL_STAGGER + row * ROW_STAGGER, 2);
    const isGold = (col + row) % 4 === 0;
    return { left, top, delay, isGold };
  });

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {glyphs.map((g, i) => (
        <span
          key={i}
          className="cross-glyph animate-cross-rotate absolute h-3.5 w-3.5"
          style={{
            top: `${g.top}%`,
            left: `${g.left}%`,
            color: g.isGold ? colors.gold : colors.violet,
            animationDuration: `${CYCLE}s`,
            animationDelay: `${g.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
