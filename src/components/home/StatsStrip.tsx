import { services } from "@/data/services";
import { assessments } from "@/data/assessments";
import { treatingPractitioners } from "@/data/staff";
import { siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { to: services.length, label: "Treatment Services" },
  { to: treatingPractitioners.length, label: "Expert Practitioners" },
  { to: assessments.length, label: "Medical Assessments" },
  { to: siteConfig.hours.length, label: "Days Open a Week" },
];

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-bg-alt py-14 sm:py-16">
      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120} dir="up" className="text-center">
              <p className="font-heading text-4xl font-bold text-violet-dark sm:text-5xl">
                <Counter to={stat.to} />
              </p>
              <p className="mt-1.5 text-sm font-medium text-body">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
