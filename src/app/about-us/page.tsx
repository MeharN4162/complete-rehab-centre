import type { Metadata } from "next";
import Image from "next/image";
import { aboutContent } from "@/data/about";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Complete Rehab Centre in Brampton — a multidisciplinary rehabilitation facility offering physiotherapy, chiropractic, acupuncture and medical assessment services.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHeader title="About Us" subtitle="A multidisciplinary rehabilitation facility built around your recovery." />

      <section className="py-24 sm:py-32">
        <Container narrow>
          <Reveal>
            <p className="text-center text-lg leading-relaxed text-body">{aboutContent.intro}</p>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div aria-hidden className="animate-drift-1 pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />
        <div aria-hidden className="animate-drift-2 pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-[120px]" />
        <Container className="relative">
          <Reveal className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] shadow-2xl">
              <div className="relative h-72 overflow-hidden rounded-[1.5rem] sm:h-96">
                <Image
                  src="/images/about-values.jpg"
                  alt="Complete Rehab Centre patient care"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </div>
            </div>
            <div>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-violet">
                <Icon name="heart" size={14} />
                Our approach
              </span>
              <h2 className="mt-4 font-heading text-2xl font-semibold text-white sm:text-3xl">
                CRC is built around continuously improving patient care.
              </h2>
              <ul className="mt-6 space-y-4">
                {aboutContent.values.slice(1).map((value, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed text-white/75">
                    <Icon name="checkCircle" size={20} className="mt-0.5 shrink-0 text-violet" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div aria-hidden className="animate-float-slow pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-tint/60 blur-3xl" />
        <Container narrow className="relative">
          <SectionHeading eyebrow="Our promise" title="Our Vision" subtitle={aboutContent.vision} />
        </Container>
      </section>
    </>
  );
}
