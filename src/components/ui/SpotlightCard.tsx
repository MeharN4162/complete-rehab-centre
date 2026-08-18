"use client";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  tint?: "violet-soft" | "violet-strong";
  as?: "div" | "article" | "figure";
};

const tints = {
  "violet-soft": "rgb(124 92 255 / 0.14)",
  "violet-strong": "rgb(124 92 255 / 0.22)",
};

// A radial glow that follows the cursor across the card. The parent pages
// that use this are Server Components, so the mouse tracking has to live
// inside its own Client Component boundary rather than as a bare onMouseMove
// prop on a plain <div> — this wrapper *is* that boundary, taking whatever
// className the card would otherwise have (including "group" if it uses one).
export default function SpotlightCard({ children, className = "", tint = "violet-soft", as = "div" }: SpotlightCardProps) {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  const Tag = as;

  return (
    <Tag onMouseMove={handleMouseMove} className={`group/spot ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(380px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${tints[tint]}, transparent 70%)`,
        }}
      />
      {children}
    </Tag>
  );
}
