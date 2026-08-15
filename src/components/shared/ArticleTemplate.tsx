import Image from "next/image";
import Link from "next/link";
import { Article, articles } from "@/data/articles";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import { primaryPhone } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

export default function ArticleTemplate({ article }: { article: Article }) {
  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-ink py-14">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/25 blur-3xl" />
        <Container narrow className="relative">
          <Link
            href="/resources"
            className="animate-fade-in-up inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white"
          >
            <Icon name="chevronLeft" size={14} />
            Back to Resources
          </Link>
          <h1 className="animate-fade-in-up-1 mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{article.title}</h1>
        </Container>
      </section>

      <article className="py-14 sm:py-20">
        <Container narrow>
          <Reveal className="relative mb-10 rounded-[1.75rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] shadow-xl">
            <div className="relative h-64 w-full overflow-hidden rounded-[1.5rem] sm:h-80">
              <Image src={article.image} alt={article.imageAlt} fill sizes="768px" className="object-cover" priority />
            </div>
          </Reveal>

          <Reveal className="space-y-4 text-body">
            {article.body.map((block, i) => {
              if (block.type === "h3") {
                return (
                  <h2 key={i} className="pt-2 font-heading text-xl font-semibold text-ink">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-2.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-2.5 leading-relaxed">
                        <Icon name="check" size={16} className="mt-1 shrink-0 text-violet-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-4 border-t border-border pt-8">
            <LinkButton href="/appointment">Request an Appointment</LinkButton>
            <LinkButton href={primaryPhone.href} variant="outline">
              <Icon name="phone" size={16} />
              {primaryPhone.number}
            </LinkButton>
          </div>
        </Container>
      </article>

      <section className="relative overflow-hidden bg-ink py-14">
        <div aria-hidden className="animate-drift-2 pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />
        <Container className="relative">
          <h2 className="font-heading text-xl font-semibold text-white">More Resources</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {more.map((a, i) => (
              <Reveal key={a.slug} delay={i * 90}>
                <Link
                  href={`/resources/${a.slug}`}
                  className="glass group block rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-glow-violet"
                >
                  <h3 className="font-heading text-base font-semibold text-white group-hover:text-violet">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 line-clamp-3">{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
