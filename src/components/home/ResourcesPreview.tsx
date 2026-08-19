import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import RotatingGlyphs from "@/components/ui/RotatingGlyphs";

export default function ResourcesPreview() {
  const featured = articles.slice(0, 4);
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-gold-tint blur-3xl" />
      <RotatingGlyphs tone="light" />
      <Container className="relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Learn" title="Resources" align="left" />
          <div className="hidden shrink-0 sm:block">
            <LinkButton href="/resources" variant="outline">
              View All Resources
            </LinkButton>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {featured.map((article, i) => (
            <Reveal key={article.slug} delay={i * 140}>
              <Link
                href={`/resources/${article.slug}`}
                className="group flex flex-col gap-5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:ring-violet/30 sm:flex-row sm:items-center"
              >
                <div className="img-sheen relative h-40 w-full shrink-0 overflow-hidden rounded-xl ring-1 ring-inset ring-black/5 sm:h-28 sm:w-40">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(min-width: 640px) 160px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
                </div>
                <div className="flex-1 px-2 pb-2 sm:px-0 sm:pb-0">
                  <h3 className="font-heading text-base font-semibold text-ink transition-colors group-hover:text-violet-dark">{article.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body line-clamp-2">{article.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-dark">
                    Read more
                    <Icon name="arrowRight" size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <LinkButton href="/resources" variant="outline">
            View All Resources
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
