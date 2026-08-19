import { detailServices, services } from "@/data/services";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon, { IconName } from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import WaveDivider from "@/components/ui/WaveDivider";
import ConstellationDots from "@/components/ui/ConstellationDots";

const features: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "users",
    title: "Multidisciplinary Team",
    description: "Chiropractors, registered massage therapists and physiotherapists working together on your care.",
  },
  {
    icon: "shield",
    title: "All Insurance Accepted",
    description: "We work with every major health insurance provider — no guesswork about coverage.",
  },
  {
    icon: "calendar",
    title: "Open 6 Days a Week",
    description: "Extended evening hours Monday through Wednesday, plus Saturday availability.",
  },
  {
    icon: "activity",
    title: `${services.length} Treatment Services`,
    description: `From ${detailServices[0].name.toLowerCase()} to MVA and WSIB rehabilitation programs, all under one roof.`,
  },
  {
    icon: "phone",
    title: "Free & Confidential Calls",
    description: "Reach out any time — every call and message is free and completely confidential.",
  },
  {
    icon: "mapPin",
    title: "Convenient Brampton Location",
    description: "Easy-to-reach clinic on Bramalea Rd, serving Brampton and the surrounding area.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      <div
        aria-hidden
        className="animate-drift-1 pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-[110px]"
      />
      <div
        aria-hidden
        className="animate-drift-2 pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet/10 blur-[110px]"
      />
      <ConstellationDots />
      <Container className="relative">
        <SectionHeading eyebrow="Why patients choose us" title="Built around your recovery" light />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 130} dir={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}>
              <SpotlightCard
                tilt
                className="glass group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-violet/40 hover:shadow-glow-violet"
              >
                <span className="icon-pop relative flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-violet ring-1 ring-white/10 transition-all duration-300 group-hover:bg-violet group-hover:text-ink group-hover:ring-violet">
                  <Icon name={feature.icon} size={22} />
                </span>
                <div className="relative">
                  <h3 className="font-heading text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{feature.description}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
      <WaveDivider color="var(--color-bg)" />
    </section>
  );
}
