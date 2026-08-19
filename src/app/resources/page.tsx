import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import DustMotes from "@/components/ui/DustMotes";
import RotatingGlyphs from "@/components/ui/RotatingGlyphs";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Articles and resources from Complete Rehab Centre in Brampton covering physiotherapy, chiropractic care, massage therapy and acupuncture.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader title="Resources" subtitle="Articles to help you understand your treatment options." />
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-violet-tint blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gold-tint blur-3xl" />
        <DustMotes />
        <RotatingGlyphs tone="light" />
        <Container className="relative">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 140} dir={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}>
                <SpotlightCard
                  as="article"
                  tilt
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-sm ring-1 ring-border hover:shadow-glow-violet hover:ring-violet/30"
                >
                  <Link href={`/resources/${article.slug}`} className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                    <span className="glass-dark absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full font-heading text-[11px] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-heading text-lg font-semibold text-ink">
                      <Link href={`/resources/${article.slug}`} className="hover:text-violet-dark">
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{article.excerpt}</p>
                    <Link
                      href={`/resources/${article.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-violet-dark hover:gap-2.5"
                    >
                      Read more
                      <Icon name="arrowRight" size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-violet transition-transform duration-500 group-hover:scale-x-100" />
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
