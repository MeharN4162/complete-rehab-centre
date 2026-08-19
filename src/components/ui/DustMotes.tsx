type DustMotesProps = {
  count?: number;
  className?: string;
};

// Same seeded pseudo-random approach as ConstellationDots — deterministic,
// no Math.random() drift between renders.
function seeded(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

// See the matching comment in ConstellationDots.tsx — rounding avoids a
// hydration mismatch caused by the browser reserializing inline style
// numbers with less precision than JS's own float-to-string conversion.
function round(n: number, decimals = 2) {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
}

// The light-section counterpart to ConstellationDots: small flecks that
// drift slowly upward and fade, like dust caught in sunlight, instead of
// the glow-based star pulse that only reads against a dark background.
export default function DustMotes({ count = 12, className = "" }: DustMotesProps) {
  const motes = Array.from({ length: count }, (_, i) => {
    const left = round(seeded(i * 2.3 + 3) * 100);
    const bottom = round(seeded(i * 4.9 + 15) * 40);
    const size = round(2 + seeded(i * 6.1 + 5) * 3);
    const duration = round(9 + seeded(i * 3.7 + 11) * 10, 1);
    const delay = round(seeded(i * 5.9 + 13) * -14, 1);
    const drift = round(10 + seeded(i * 7.2 + 17) * 20, 1);
    const isGold = i % 4 === 0;
    return { left, bottom, size, duration, delay, drift, isGold };
  });

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {motes.map((m, i) => (
        <span
          key={i}
          className="animate-dust-float absolute rounded-full"
          style={{
            left: `${m.left}%`,
            bottom: `${m.bottom}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            background: m.isGold ? "var(--color-gold)" : "var(--color-violet)",
            animationDuration: `${m.duration}s`,
            animationDelay: `${m.delay}s`,
            ["--drift" as string]: `${m.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
