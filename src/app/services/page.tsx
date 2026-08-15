import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import { LinkButton } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
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

      <section className="py-24 sm:py-28">
        <Container>
          <Reveal className="grid gap-10 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="font-heading text-2xl font-semibold text-ink">We specialize in</h2>
              <ul className="mt-6 grid list-none grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {services.map((service, i) => (
                  <Reveal key={service.slug} as="li" delay={200 + i * 40}>
                    <a
                      href={`#${service.anchor}`}
                      className="flex items-center gap-2.5 text-body transition-colors hover:translate-x-1 hover:text-violet-dark"
                    >
                      <Icon name="chevronRight" size={14} className="shrink-0 text-violet-dark" />
                      {service.name}
                    </a>
                  </Reveal>
                ))}
                <li className="flex items-start gap-2.5 text-body/60">
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
                </li>
              </ul>
            </div>
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] shadow-lg">
              <div className="relative h-64 overflow-hidden rounded-[1.5rem] md:h-80">
                <Image
                  src="/images/services-intro.jpg"
                  alt="Complete Rehab Centre treatment services"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
        <div aria-hidden className="animate-drift-1 pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet/15 blur-[130px]" />
        <div aria-hidden className="animate-drift-2 pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
        <Container className="relative space-y-16 sm:space-y-20">
          {services.map((service, index) => (
            <Reveal key={service.slug} id={service.anchor} className="scroll-mt-28" dir={index % 2 === 0 ? "left" : "right"}>
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                <div className={`relative rounded-[1.75rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] shadow-xl ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative h-64 overflow-hidden rounded-[1.5rem] sm:h-80">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
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
                            <Icon name="check" size={16} className="mt-0.5 shrink-0 text-violet" />
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
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="py-24 text-center sm:py-28">
        <Container>
          <Reveal dir="scale">
            <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
              Not sure which service is right for you?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-body">
              Call us and our team will help point you in the right direction.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <LinkButton href={primaryPhone.href}>
                <Icon name="phone" size={16} />
                Call {primaryPhone.number}
              </LinkButton>
              <LinkButton href="/appointment" variant="outline">
                Request an Appointment
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
