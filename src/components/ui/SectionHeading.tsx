import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const wrap = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col ${wrap}`}>
      {eyebrow && (
        <span
          className={`mb-4 flex items-center gap-2.5 font-heading text-sm ${light ? "text-white/60" : "text-muted"}`}
        >
          <span className="h-px w-8 bg-gold" />
          <span className="uppercase tracking-[0.2em] text-gold">{eyebrow}</span>
        </span>
      )}
      <Tag
        className={`text-[clamp(2rem,1.3rem+2.8vw,3.5rem)] leading-[1.02] font-semibold tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/80" : "text-body"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
