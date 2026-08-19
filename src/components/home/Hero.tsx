"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/data/about";
import { services } from "@/data/services";
import { assessments } from "@/data/assessments";
import { treatingPractitioners } from "@/data/staff";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import MovingArrows from "@/components/ui/MovingArrows";
import { LinkButton } from "@/components/ui/Button";

const tickerItems = [
  "Multidisciplinary Care Team",
  "We Accept All Health Insurance",
  "Open 6 Days a Week",
  "Free & Confidential Calls",
  "Brampton, ON",
  `${services.length} Treatment Services`,
  `${treatingPractitioners.length} Expert Practitioners`,
  `${assessments.length} Medical Assessments`,
  "Physiotherapy · Chiropractic · Acupuncture · RMT",
];

const AUTO_ADVANCE_MS = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  const goTo = useCallback((index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length);
  }, []);

  // Keyed on `active` so every navigation — auto-advance or a manual click —
  // cancels the previous countdown and starts a fresh one from AUTO_ADVANCE_MS.
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section aria-label="Featured services" className="relative overflow-hidden bg-ink">
      <div
        aria-hidden
        className="animate-drift-1 pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-drift-2 pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-gold/15 blur-[120px]"
      />
      <MovingArrows className="top-8" />

      <Container className="relative grid gap-0 py-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
        {/* Text panel */}
        <div className="order-2 lg:order-1">
          <span className="glass animate-fade-in-up inline-flex items-center gap-3 rounded-full px-4 py-1.5 text-xs text-white/80">
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-violet" />
            <span className="text-violet">{String(active + 1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-white/30" />
            {String(heroSlides.length).padStart(2, "0")}
          </span>
          <h1
            key={active}
            className="animate-fade-in-up-1 mt-5 font-heading text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {slide.heading}
          </h1>
          <p key={`tag-${active}`} className="animate-fade-in-up-2 mt-4 max-w-md text-base font-medium text-white/75 sm:text-lg">
            {slide.tagline}
          </p>
          <div className="animate-fade-in-up-3 mt-7 flex flex-wrap gap-3">
            <LinkButton href={slide.href}>
              Learn More
              <Icon name="arrowRight" size={16} />
            </LinkButton>
            <LinkButton href="/appointment" variant="outlineOnDark">
              Book Appointment
            </LinkButton>
          </div>

          <div className="animate-fade-in-up-3 mt-9 flex items-center gap-4">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous slide"
              className="btn-sheen flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-violet hover:text-violet"
            >
              <Icon name="chevronLeft" size={15} />
            </button>
            <div className="flex flex-1 gap-2">
              {heroSlides.map((s, index) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to ${s.heading} slide`}
                  aria-current={index === active}
                  className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/20"
                >
                  {index < active && <div className="h-full w-full bg-violet" />}
                  {index === active && (
                    <div
                      key={active}
                      className="animate-slide-progress h-full bg-violet"
                      style={{ animationDuration: `${AUTO_ADVANCE_MS}ms` }}
                    />
                  )}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next slide"
              className="btn-sheen flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-violet hover:text-violet"
            >
              <Icon name="chevronRight" size={15} />
            </button>
          </div>
        </div>

        {/* Image panel — contained, framed, clearly separate from the text */}
        <div className="animate-fade-in-up-2 order-1 mb-8 lg:order-2 lg:mb-0">
          <div className="relative rounded-[1.9rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] animate-border-shimmer bg-[length:220%_220%] shadow-2xl">
            <div className="img-sheen relative aspect-[4/3] w-full overflow-hidden rounded-[1.65rem] sm:aspect-[16/10]">
              {heroSlides.map((s, index) => (
                <div
                  key={s.slug}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === active ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden={index !== active}
                >
                  <Image src={s.image} alt="" fill priority={index === 0} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent" />
                </div>
              ))}
              <div key={active} aria-hidden className="sheen-once" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </Container>

      <div className="relative w-full overflow-hidden bg-gradient-to-r from-violet-dark to-ink py-3">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((track) => (
            <div key={track} aria-hidden={track === 1} className="flex shrink-0">
              {Array(3)
                .fill(tickerItems)
                .flat()
                .map((item, i) => (
                  <span key={i} className="flex shrink-0 items-center gap-3 px-6 text-sm font-semibold text-white">
                    {item}
                    <Icon name="sparkle" size={12} className="text-gold" />
                  </span>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
