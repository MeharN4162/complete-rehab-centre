import type { Metadata } from "next";
import Image from "next/image";
import { additionalTeamMembers, treatingPractitioners } from "@/data/staff";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/shared/PageHeader";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import WaveDivider from "@/components/ui/WaveDivider";

export const metadata: Metadata = {
  title: "Staff",
  description:
    "Meet the treating practitioners and team at Complete Rehab Centre in Brampton, including our chiropractors, registered massage therapists and resident physiotherapists.",
};

export default function StaffPage() {
  return (
    <>
      <PageHeader title="Staff" subtitle="A versatile, multidisciplinary team working together on your recovery." />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <Container>
          <div className="group grid items-center gap-10 md:grid-cols-2">
            <Reveal dir="left" className="relative rounded-[1.75rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] animate-border-shimmer bg-[length:220%_220%] shadow-xl">
              <div className="img-sheen relative h-72 overflow-hidden rounded-[1.5rem] sm:h-96">
                <Image
                  src="/images/staff-about.jpg"
                  alt="Complete Rehab Centre staff"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal as="p" dir="right" delay={220} className="text-lg leading-relaxed text-body">
              Our staff is versatile. They provide services to work, based on a solid understanding between you,
              CRC and our mutual client.
            </Reveal>
          </div>
        </Container>
        <WaveDivider color="var(--color-ink)" />
      </section>

      <section className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
        <div aria-hidden className="animate-drift-1 pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />
        <div aria-hidden className="animate-drift-2 pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-[120px]" />
        <Container className="relative">
          <SectionHeading eyebrow="Meet the team" title="Treating Practitioners" light />
          <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatingPractitioners.map((member, i) => (
              <Reveal key={member.name} delay={i * 90} dir={i % 2 === 0 ? "left" : "right"} className="h-full">
                <SpotlightCard
                  tilt
                  className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 hover:border-violet/40 hover:shadow-glow-violet"
                >
                  <div className="relative flex items-center justify-between">
                    <span className="btn-sheen flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-violet ring-1 ring-white/10 transition-all duration-300 group-hover:bg-violet group-hover:text-ink group-hover:ring-violet">
                      <Icon name="users" size={18} />
                    </span>
                    <span className="font-heading text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="relative mt-4 font-heading text-lg font-semibold text-white">{member.name}</h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-white/60">{member.title}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
        <WaveDivider color="var(--color-bg)" />
      </section>

      <section className="relative overflow-hidden py-24 sm:py-28">
        <div aria-hidden className="animate-float-slow pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-tint/60 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <h2 className="text-center font-heading text-xl font-semibold text-ink">Also Part of Our Team</h2>
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-3 text-center sm:grid-cols-3 md:grid-cols-4">
            {additionalTeamMembers.map((name, i) => (
              <Reveal key={name} delay={i * 100} dir={i % 2 === 0 ? "left" : "right"}>
                <p className="flex items-center justify-center gap-2 text-sm text-body">
                  <Icon name="checkCircle" size={14} className="icon-pop shrink-0 text-violet-dark" />
                  {name}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
