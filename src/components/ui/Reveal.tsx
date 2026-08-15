"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  dir?: "up" | "left" | "right" | "scale";
  as?: "div" | "li" | "p" | "h2" | "h3";
};

// Defaults to visible (no `data-reveal` attribute) so content never disappears
// if JS fails to load. Only after mount — confirming JS is actually running —
// do we switch to "hidden, then reveal on intersection".
export default function Reveal({ children, className = "", delay = 0, id, dir = "up", as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement & HTMLParagraphElement & HTMLHeadingElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "visible">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setState("hidden");
    // rootMargin trims the bottom of the viewport before counting something as
    // "in view" — a shallow trim (the old -40px) meant content sitting just
    // below the fold on a short page counted as visible almost the instant it
    // mounted, so the reveal fired with no perceptible wait. A deeper trim
    // forces real scroll progress before anything triggers.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -160px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal={state === "idle" ? undefined : state === "visible" ? "true" : "false"}
      data-reveal-dir={dir}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
