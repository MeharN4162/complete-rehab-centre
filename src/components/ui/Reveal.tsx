"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  dir?: "up" | "left" | "right" | "scale";
  as?: "div" | "li" | "p";
};

// Defaults to visible (no `data-reveal` attribute) so content never disappears
// if JS fails to load. Only after mount — confirming JS is actually running —
// do we switch to "hidden, then reveal on intersection".
export default function Reveal({ children, className = "", delay = 0, id, dir = "up", as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement & HTMLParagraphElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "visible">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
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
