import Container from "@/components/ui/Container";
import ConstellationDots from "@/components/ui/ConstellationDots";
import RotatingGlyphs from "@/components/ui/RotatingGlyphs";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
      <div
        aria-hidden
        className="animate-drift-1 pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-violet/25 blur-[100px]"
      />
      <div
        aria-hidden
        className="animate-drift-2 pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-gold/20 blur-[100px]"
      />
      <ConstellationDots />
      <RotatingGlyphs tone="dark" />
      <Container className="relative">
        <span className="animate-fade-in-up flex items-center gap-2.5">
          <span className="h-px w-8 bg-gold" />
          <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">Complete Rehab Centre</span>
        </span>
        <h1 className="animate-fade-in-up-1 mt-5 text-[clamp(2.5rem,1.6rem+3.5vw,5rem)] font-bold leading-[0.98] tracking-tight text-white">
          {title}
        </h1>
        {subtitle && <p className="animate-fade-in-up-2 mt-5 max-w-2xl text-lg text-white/70">{subtitle}</p>}
      </Container>
    </section>
  );
}
