import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon, { IconName } from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const steps: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "phone",
    title: "Reach Out",
    description: "Call our clinic or request an appointment online — whichever is easiest for you.",
  },
  {
    icon: "activity",
    title: "Initial Assessment",
    description: "Our team evaluates your condition and diagnoses the issue before any treatment begins.",
  },
  {
    icon: "heart",
    title: "Tailored Treatment Plan",
    description: "We combine clinical practice with a holistic approach, built around your specific needs.",
  },
  {
    icon: "checkCircle",
    title: "Ongoing Recovery Support",
    description: "Ongoing care from our multidisciplinary team as you work toward full independence.",
  },
];

export default function PatientJourney() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      <Container>
        <SectionHeading eyebrow="How it works" title="Your path to recovery" align="left" />

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent lg:block" />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 150} dir="up" className="relative">
              <div className="group relative flex flex-col">
                <div className="btn-sheen relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-violet bg-bg text-violet shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-violet group-hover:to-violet-dim group-hover:text-white group-hover:shadow-glow-violet">
                  <Icon name={step.icon} size={20} />
                </div>
                <span className="relative mt-4 font-heading text-xs text-gold">{String(i + 1).padStart(2, "0")} / 04</span>
                <h3 className="relative mt-2 font-heading text-lg font-semibold text-ink">{step.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-body">{step.description}</p>
                {i < steps.length - 1 && (
                  <span className="animate-pulse-slow absolute -right-6 top-4 hidden lg:block">
                    <Icon name="arrowRight" size={16} className="text-violet/60" />
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
