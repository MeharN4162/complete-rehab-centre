import Link from "next/link";
import { featuredAssessments } from "@/data/assessments";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import DustMotes from "@/components/ui/DustMotes";
import RotatingGlyphs from "@/components/ui/RotatingGlyphs";

export default function AssessmentsPreview() {
  return (
    <section className="relative overflow-hidden bg-bg-alt py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-tint blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold-tint blur-3xl" />
      <DustMotes />
      <RotatingGlyphs tone="light" />
      <Container className="relative">
        <SectionHeading eyebrow="Diagnostics" title="Medical assessments" />

        <div className="mt-14 divide-y divide-border border-y border-border">
          {featuredAssessments.map((assessment, i) => (
            <Reveal key={assessment.slug} delay={i * 130} dir={i % 2 === 0 ? "left" : "right"}>
              <Link
                href={`/assessments-services#${assessment.slug}`}
                className="btn-sheen group relative flex items-center gap-6 rounded-2xl px-4 py-7 transition-all duration-300 hover:bg-white sm:gap-8 sm:px-6"
              >
                <span className="relative font-heading text-2xl text-gold transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative min-w-0 flex-1">
                  <h3 className="font-heading text-lg font-semibold text-ink transition-colors group-hover:text-violet-dark sm:text-xl">
                    {assessment.name}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-body sm:text-base">
                    {assessment.featuredExcerpt}
                  </p>
                </div>
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-ink transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-violet group-hover:to-violet-dim group-hover:text-white group-hover:shadow-glow-violet">
                  <Icon
                    name="chevronRight"
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <LinkButton href="/assessments-services" variant="outline">
            View All Assessments
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
