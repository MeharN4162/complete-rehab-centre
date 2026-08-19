type ConstellationDotsProps = {
  count?: number;
  className?: string;
};

// Deterministic pseudo-random scatter (seeded by index) instead of
// Math.random() — same layout every render, nothing to desync.
function seeded(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

// Browsers reserialize an inline `style` attribute's numeric values when
// parsing server-rendered HTML, rounding far more aggressively than JS's
// own float-to-string conversion — left unrounded here, that mismatch
// between the raw high-precision number and the browser's own rounded
// readback was tripping a hydration-mismatch warning on every dot.
function round(n: number, decimals = 2) {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
}

// A quiet scatter of small dots across a dark section, each pulsing softly
// on its own timing — like distant stars rather than one shape sweeping
// across the screen. Ambient texture, not content, so it's aria-hidden.
export default function ConstellationDots({ count = 20, className = "" }: ConstellationDotsProps) {
  const dots = Array.from({ length: count }, (_, i) => {
    const top = round(seeded(i * 1.7 + 1) * 100);
    const left = round(seeded(i * 3.1 + 7) * 100);
    const size = round(1.5 + seeded(i * 5.3 + 2) * 2.5);
    const duration = round(3 + seeded(i * 2.2 + 4) * 5, 1);
    const delay = round(seeded(i * 4.4 + 9) * -8, 1);
    const isGold = i % 5 === 0;
    return { top, left, size, duration, delay, isGold };
  });

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {dots.map((d, i) => (
        <span
          key={i}
          className="animate-star-pulse absolute rounded-full"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: d.isGold ? "var(--color-gold)" : "var(--color-violet)",
            boxShadow: d.isGold ? "0 0 6px 1px rgb(201 161 90 / 0.6)" : "0 0 6px 1px rgb(124 92 255 / 0.6)",
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
