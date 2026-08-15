"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Testimonial } from "@/data/testimonials";
import Icon from "@/components/ui/Icon";

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
  dark?: boolean;
};

export default function TestimonialsCarousel({ testimonials, dark = true }: TestimonialsCarouselProps) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => setActive((index + testimonials.length) % testimonials.length),
    [testimonials.length],
  );

  useEffect(() => {
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 8000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testimonials.length]);

  const current = testimonials[active];
  const textColor = dark ? "text-white" : "text-ink";

  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full ${dark ? "glass" : "bg-violet-tint"}`}>
        <Icon name="quote" size={26} className="text-violet" />
      </span>
      <p key={active} className={`animate-fade-in-up text-xl leading-relaxed sm:text-2xl ${textColor}`}>
        {current.quote}
      </p>
      <p key={`${active}-name`} className="animate-fade-in-up mt-6 font-heading text-lg font-semibold text-gold">
        {current.name}
      </p>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous testimonial"
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-violet hover:bg-violet hover:text-ink ${
            dark ? "border-white/30 text-white" : "border-ink/15 text-ink"
          }`}
        >
          <Icon name="chevronLeft" size={16} />
        </button>

        <div className="flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all ${
                i === active ? `w-6 bg-violet` : `w-2 ${dark ? "bg-white/30" : "bg-ink/15"}`
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next testimonial"
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-violet hover:bg-violet hover:text-ink ${
            dark ? "border-white/30 text-white" : "border-ink/15 text-ink"
          }`}
        >
          <Icon name="chevronRight" size={16} />
        </button>
      </div>
    </div>
  );
}
