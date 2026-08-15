import Image from "next/image";
import Link from "next/link";
import { detailServices, Service } from "@/data/services";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import Icon from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import { primaryPhone } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

export default function ServiceDetailTemplate({ service }: { service: Service }) {
  const related = detailServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader title={service.name} subtitle={service.shortDescription} />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <Reveal dir="left" className="relative rounded-[1.75rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] shadow-xl">
              <div className="relative h-72 overflow-hidden rounded-[1.5rem] sm:h-96">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
            <Reveal dir="right" delay={220}>
              <div className="space-y-4 text-body">
                {service.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
                {service.list && (
                  <ul className="space-y-2">
                    {service.list.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Icon name="check" size={16} className="mt-0.5 shrink-0 text-violet-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton href="/appointment">Request an Appointment</LinkButton>
                <LinkButton href={primaryPhone.href} variant="outline">
                  <Icon name="phone" size={16} />
                  {primaryPhone.number}
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-14">
        <div aria-hidden className="animate-drift-1 pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-violet/20 blur-[100px]" />
        <Container className="relative">
          <Reveal>
            <h2 className="font-heading text-xl font-semibold text-white">Related Services</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="rounded-full border-2 border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-violet hover:text-violet"
                >
                  {r.name}
                </Link>
              ))}
              <Link
                href="/services"
                className="btn-sheen rounded-full bg-violet-dim px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-dark"
              >
                View All Services
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
