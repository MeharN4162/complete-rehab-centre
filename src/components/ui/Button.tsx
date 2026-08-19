"use client";

import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent } from "react";

// Each variant is a fully self-contained class string (including display,
// padding, radius) rather than a partial override layered on a shared
// `base`. Tailwind's generated CSS order is not guaranteed to match a
// className string's concatenation order, so two classes that target the
// same property (e.g. a shared `base` setting `inline-flex` and a variant
// or caller override trying `hidden`) can silently pick the wrong winner.
// Self-contained variants sidestep that entirely — nothing here ever needs
// to out-cascade something else in `base`.
const shared = "text-sm font-semibold tracking-wide transition-all duration-300 ease-out";

const variants = {
  // Solid violet-dim (not the lighter "violet") so white text stays reliably
  // legible across the whole button, not just at one end of a gradient.
  // No hover:-translate-y-* here: the "magnetic" cursor-pull below (applied
  // only to this variant) drives the same transform property via inline
  // style, which would silently shadow a Tailwind utility on it anyway.
  primary: `btn-sheen inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 ${shared} bg-violet-dim text-white shadow-glow-violet hover:bg-violet-dark hover:shadow-lg`,
  outline: `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 ${shared} border-2 border-ink/15 bg-white text-ink hover:-translate-y-0.5 hover:border-violet hover:text-violet-dark hover:shadow-md active:translate-y-0`,
  outlineOnDark: `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 ${shared} border-2 border-white/30 bg-transparent text-white hover:-translate-y-0.5 hover:border-violet hover:bg-white/10 active:translate-y-0`,
  light: `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 ${shared} bg-white text-ink shadow-md hover:-translate-y-0.5 hover:text-violet-dark hover:shadow-lg active:translate-y-0`,
  ghost: `inline-flex items-center gap-2 ${shared} text-violet-dark hover:gap-3`,
};

type Variant = keyof typeof variants;

// Subtle cursor-pull on the "primary" variant only — the buttons meant to
// draw the eye. Bounded so it reads as a magnetic nudge, not a jump.
const MAGNETIC_PULL = 0.3;
const MAGNETIC_MAX = 8;

function magneticMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) * MAGNETIC_PULL;
  const y = (e.clientY - rect.top - rect.height / 2) * MAGNETIC_PULL;
  el.style.transform = `translate(${Math.max(-MAGNETIC_MAX, Math.min(MAGNETIC_MAX, x))}px, ${
    Math.max(-MAGNETIC_MAX, Math.min(MAGNETIC_MAX, y)) - 2
  }px)`;
}

function magneticLeave(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = "";
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  external?: boolean;
};

export function LinkButton({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  const magnetic = variant === "primary";
  const classes = `${variants[variant]} ${magnetic ? "magnetic" : ""} ${className}`;
  const handlers = magnetic ? { onMouseMove: magneticMove, onMouseLeave: magneticLeave } : {};
  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={classes} {...handlers} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...handlers} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const magnetic = variant === "primary";
  const handlers = magnetic ? { onMouseMove: magneticMove, onMouseLeave: magneticLeave } : {};
  return (
    <button className={`${variants[variant]} ${magnetic ? "magnetic" : ""} ${className}`} {...handlers} {...props}>
      {children}
    </button>
  );
}
