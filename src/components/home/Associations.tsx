import Image from "next/image";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const logos = [
  { src: "/images/association-1.png", alt: "Association logo" },
  { src: "/images/association-2.png", alt: "Association logo" },
  { src: "/images/association-3.png", alt: "Association logo" },
];

export default function Associations() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-white py-12">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-tint/60 blur-3xl" />
      <Container className="relative">
        <Reveal className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="animate-pulse-slow flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-tint text-violet-dark ring-1 ring-violet/20">
              <Icon name="shield" size={20} />
            </span>
            <p className="font-heading text-lg font-semibold text-ink sm:text-xl">We accept all health insurance</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-bg-alt p-3 grayscale transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-md hover:grayscale-0"
              >
                <Image src={logo.src} alt={logo.alt} width={140} height={70} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
