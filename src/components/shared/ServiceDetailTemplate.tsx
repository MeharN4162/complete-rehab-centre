import Image from "next/image";
import { Service } from "@/data/services";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import Icon from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import { primaryPhone } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import DustMotes from "@/components/ui/DustMotes";
import RotatingGlyphs from "@/components/ui/RotatingGlyphs";

export default function ServiceDetailTemplate({ service }: { service: Service }) {
  return (
    <>
      <PageHeader title={service.name} subtitle={service.shortDescription} />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <DustMotes count={8} />
        <RotatingGlyphs tone="light" />
        <Container>
          <div className="group grid items-start gap-10 lg:grid-cols-2">
            <Reveal dir="left" className="relative rounded-[1.75rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] animate-border-shimmer bg-[length:220%_220%] shadow-xl">
              <div className="img-sheen relative h-72 overflow-hidden rounded-[1.5rem] sm:h-96">
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
    </>
  );
}
