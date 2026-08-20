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
  dark: "rgb(124 92 255 / 0.16)",
  light: "rgb(124 92 255 / 0.16)",
};

// A dense, fixed grid of small static "+" glyphs filling the section. This
// used to rotate on a continuous left-to-right wave (a CSS `transform`
// animation running on ~230 elements at once, all the time), which was
// smooth on modern hardware but caused real jank on lower-end/older devices —
// static glyphs give the same background texture with zero ongoing paint
// cost.
export default function RotatingGlyphs({ cols = 26, rows = 9, className = "", tone = "dark" }: RotatingGlyphsProps) {
  const color = tones[tone];
  const glyphs = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const left = round(((col + 0.5) / cols) * 100);
    const top = round(((row + 0.5) / rows) * 100);
    // This many columns/rows is sized for a full-width desktop section —
    // packed into a ~380px phone screen it reads as visual noise instead of
    // texture. Keeping only every other column and row below the `sm`
    // breakpoint (a plain server-rendered responsive class, no JS/viewport
    // check needed) cuts mobile density to a quarter without touching the
    // desktop grid at all.
    const mobileHidden = col % 2 !== 0 || row % 2 !== 0;
    return { left, top, mobileHidden };
  });

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {glyphs.map((g, i) => (
        <span
          key={i}
          className={`cross-glyph absolute h-3 w-3 ${g.mobileHidden ? "hidden sm:block" : ""}`}
          style={{
            top: `${g.top}%`,
            left: `${g.left}%`,
            color,
          }}
        />
      ))}
    </div>
  );
}
