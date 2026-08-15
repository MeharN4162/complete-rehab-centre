import Image from "next/image";
import Link from "next/link";
import { detailServices } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// Bento layout: first tile is large (2x2), the rest fill the remaining
// 2x2 footprint of a 4-col grid. Falls back to a simple stack below lg.
const spans = ["lg:col-span-2 lg:row-span-2", "lg:col-span-2 lg:row-span-1", "lg:col-span-1 lg:row-span-1", "lg:col-span-1 lg:row-span-1"];
// One consistent hue (shade variation only) across every card frame.
const cardBorder = "from-violet via-violet-dim to-violet";

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-violet-tint blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gold-tint blur-3xl" />
      <Container className="relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What we offer"
            title="Top health treatment services in Brampton"
            subtitle="Complete treatment services to help you recover from injuries — supporting physical, psychological and neurological health."
            align="left"
          />
          <div className="hidden shrink-0 sm:block">
            <LinkButton href="/services" variant="outline">
              View All Services
            </LinkButton>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px]">
          {detailServices.map((service, i) => {
            const isFeatured = i === 0;
            return (
              <Reveal key={service.slug} delay={i * 140} dir={i % 2 === 0 ? "up" : "scale"} className={spans[i]}>
                <div className={`group relative h-full min-h-[240px] rounded-[1.4rem] bg-gradient-to-br ${cardBorder} p-[3px] animate-border-shimmer bg-[length:220%_220%] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-violet lg:min-h-0`}>
                  <Link href={`/services/${service.slug}`} className="relative flex h-full flex-col overflow-hidden rounded-[1.15rem] bg-ink">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isFeatured ? "from-ink/95 via-ink/45 to-ink/25" : "from-ink/95 via-ink/35 to-ink/20"
                      }`}
                    />
                    <span className="glass-dark absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full font-heading text-xs text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {isFeatured && (
                      <span className="glass-dark animate-pulse-slow absolute right-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-violet">
                        <Icon name="sparkle" size={12} />
                        Most requested
                      </span>
                    )}

                    <div className="relative mt-auto flex flex-col p-5 sm:p-6">
                      <h3
                        className={`font-heading font-semibold text-white ${isFeatured ? "text-2xl sm:text-3xl" : "text-lg"}`}
                      >
                        {service.name}
                      </h3>
                      <p
                        className={`mt-2 text-white/75 ${
                          isFeatured ? "max-w-md text-sm leading-relaxed sm:text-base" : "hidden text-sm sm:block"
                        }`}
                      >
                        {service.shortDescription}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-violet">
                        Read more
                        <Icon
                          name="arrowRight"
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1.5"
                        />
                      </span>
                    </div>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <LinkButton href="/services" variant="outline">
            View All Services
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
