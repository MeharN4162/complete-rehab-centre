"use client";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  tint?: "violet-soft" | "violet-strong";
  as?: "div" | "article" | "figure";
  tilt?: boolean;
};

const tints = {
  "violet-soft": "rgb(124 92 255 / 0.14)",
  "violet-strong": "rgb(124 92 255 / 0.22)",
};

const MAX_TILT_DEG = 7;

// A radial glow that follows the cursor across the card. The parent pages
// that use this are Server Components, so the mouse tracking has to live
// inside its own Client Component boundary rather than as a bare onMouseMove
// prop on a plain <div> — this wrapper *is* that boundary, taking whatever
// className the card would otherwise have (including "group" if it uses one).
//
// `tilt` layers a subtle cursor-reactive 3D rotation on top (see .tilt-card
// in globals.css) — it drives the same transform property a Tailwind
// `hover:-translate-y-*` utility would, so callers using tilt should drop
// that utility from className rather than fight it for the last write.
export default function SpotlightCard({
  children,
  className = "",
  tint = "violet-soft",
  as = "div",
  tilt = false,
}: SpotlightCardProps) {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    if (tilt) {
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--tilt-x", `${(-py * MAX_TILT_DEG).toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${(px * MAX_TILT_DEG).toFixed(2)}deg`);
      el.style.setProperty("--tilt-lift", "-6px");
    }
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
    if (!tilt) return;
    const el = e.currentTarget;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--tilt-lift", "0px");
  }

  const Tag = as;

  return (
    <Tag
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group/spot ${tilt ? "tilt-card" : ""} ${className}`}
    >
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
