import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import { LinkButton } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import WaveDivider from "@/components/ui/WaveDivider";
import RotatingGlyphs from "@/components/ui/RotatingGlyphs";
import { primaryPhone } from "@/data/site";

export const metadata: Metadata = {
  title: "Treatment Services",
  description:
    "Explore the full range of treatment services offered at Complete Rehab Centre in Brampton: acupuncture, physiotherapy, chiropractic, massage therapy, sports medicine, WSIB and MVA rehabilitation programs and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Treatment Services"
        subtitle="Complete treatment services to help you recover from injuries at Complete Rehab Centre."
      />

      <section className="relative overflow-hidden py-24 sm:py-28">
        <RotatingGlyphs tone="light" />
        <Container>
          <div className="group grid gap-10 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <Reveal as="h2" dir="left" className="font-heading text-2xl font-semibold text-ink">
                We specialize in
              </Reveal>
              <ul className="mt-6 grid list-none grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {services.map((service, i) => (
                  <Reveal key={service.slug} as="li" dir="left" delay={200 + i * 90}>
                    <a
                      href={`#${service.anchor}`}
                      className="flex items-center gap-2.5 text-body transition-colors hover:translate-x-1 hover:text-violet-dark"
                    >
                      <Icon name="chevronRight" size={14} className="shrink-0 text-violet-dark" />
                      {service.name}
                    </a>
                  </Reveal>
                ))}
                <Reveal as="li" dir="left" delay={200 + services.length * 90} className="flex items-start gap-2.5 text-body/60">
                  <Icon name="chevronRight" size={14} className="mt-1 shrink-0 text-body/40" />
                  <span>
                    Social Work / Case Management{" "}
                    <span className="text-xs">
                      (
                      <a href="/contact-us" className="underline hover:text-violet-dark">
                        contact us
                      </a>{" "}
                      for details)
                    </span>
                  </span>
                </Reveal>
              </ul>
            </div>
            <Reveal dir="right" delay={250} className="relative rounded-[1.75rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] animate-border-shimmer bg-[length:220%_220%] shadow-lg">
              <div className="img-sheen relative h-64 overflow-hidden rounded-[1.5rem] md:h-80">
                <Image
                  src="/images/services-intro.jpg"
                  alt="Complete Rehab Centre treatment services"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
        <WaveDivider color="var(--color-ink)" />
      </section>

      <section className="grain relative overflow-hidden bg-ink py-24 sm:py-28">
        <div aria-hidden className="animate-drift-1 pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet/15 blur-[130px]" />
        <div aria-hidden className="animate-drift-2 pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
        <RotatingGlyphs tone="dark" />
        <Container className="relative space-y-16 sm:space-y-20">
          {services.map((service, index) => (
            <div key={service.slug} id={service.anchor} className="scroll-mt-28">
              <div className="group grid items-center gap-8 md:grid-cols-2 md:gap-12">
                <Reveal
                  dir={index % 2 === 0 ? "left" : "right"}
                  className={`relative rounded-[1.75rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] animate-border-shimmer bg-[length:220%_220%] shadow-xl ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="img-sheen relative h-64 overflow-hidden rounded-[1.5rem] sm:h-80">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal
                  dir={index % 2 === 0 ? "right" : "left"}
                  delay={220}
                  className={index % 2 === 1 ? "md:order-1" : ""}
                >
                  <h2 className="font-heading text-2xl font-semibold text-white">{service.name}</h2>
                  <div className="mt-4 space-y-3 text-white/70">
                    {service.paragraphs.map((p, i) => (
                      <p key={i} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                    {service.list && (
                      <ul className="space-y-2">
                        {service.list.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <Icon name="check" size={16} className="icon-pop mt-0.5 shrink-0 text-violet" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {service.hasDetailPage && (
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet hover:gap-2.5"
                    >
                      Read more
                      <Icon name="arrowRight" size={14} className="transition-all" />
                    </Link>
                  )}
                </Reveal>
              </div>
            </div>
          ))}
        </Container>
        <WaveDivider color="var(--color-bg)" />
      </section>

      <section className="relative overflow-hidden py-24 text-center sm:py-28">
        <RotatingGlyphs tone="light" />
        <Container>
          <Reveal as="h2" dir="scale" className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
            Not sure which service is right for you?
          </Reveal>
          <Reveal as="p" delay={200} className="mx-auto mt-3 max-w-xl text-body">
            Call us and our team will help point you in the right direction.
          </Reveal>
          <Reveal delay={350} className="mt-8 flex flex-wrap justify-center gap-4">
            <LinkButton href={primaryPhone.href}>
              <Icon name="phone" size={16} />
              Call {primaryPhone.number}
            </LinkButton>
            <LinkButton href="/appointment" variant="outline">
              Request an Appointment
            </LinkButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
