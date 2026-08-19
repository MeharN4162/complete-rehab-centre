import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import { LinkButton } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import RotatingGlyphs from "@/components/ui/RotatingGlyphs";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what patients have to say about their experience at Complete Rehab Centre in Brampton.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader title="Testimonials" subtitle="Your appreciation means everything to us." />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div aria-hidden className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-violet-tint blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gold-tint blur-3xl" />
        <Container className="relative">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 140} dir={i % 2 === 0 ? "left" : "right"}>
                <SpotlightCard
                  as="figure"
                  tilt
                  className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-border hover:shadow-glow-violet"
                >
                  <span className="btn-sheen flex h-11 w-11 items-center justify-center rounded-full bg-violet-tint text-violet-dark transition-all duration-300 group-hover:bg-violet group-hover:text-white">
                    <Icon name="quote" size={20} />
                  </span>
                  <blockquote className="mt-5 flex-1 leading-relaxed text-body">{t.quote}</blockquote>
                  <figcaption className="mt-5 font-heading font-semibold text-ink">{t.name}</figcaption>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="relative mt-16 overflow-hidden rounded-3xl bg-ink px-8 py-12 text-center">
            <div aria-hidden className="animate-drift-1 pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-violet/25 blur-[100px]" />
            <RotatingGlyphs tone="dark" />
            <Reveal as="h2" dir="scale" className="relative font-heading text-xl font-semibold text-white sm:text-2xl">
              Had a great experience with us?
            </Reveal>
            <Reveal as="p" delay={150} className="relative mt-2 text-white/70">
              We&apos;d love to hear about it — get in touch to share your story.
            </Reveal>
            <Reveal delay={280} className="relative mt-6">
              <LinkButton href="/contact-us">Contact Us</LinkButton>
            </Reveal>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
