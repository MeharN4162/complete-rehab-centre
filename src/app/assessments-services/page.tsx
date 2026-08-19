import type { Metadata } from "next";
import { assessments } from "@/data/assessments";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import Accordion from "@/components/shared/Accordion";
import { LinkButton } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import DustMotes from "@/components/ui/DustMotes";
import { primaryPhone } from "@/data/site";

export const metadata: Metadata = {
  title: "Medical Assessments",
  description:
    "Medical assessment services at Complete Rehab Centre in Brampton, including chronic pain, neurological, FAE, driver anxiety, orthopedic, psychological and vocational assessments.",
};

export default function AssessmentsPage() {
  return (
    <>
      <PageHeader
        title="Medical Assessments"
        subtitle="Our team conducts a range of medical assessments to help diagnose conditions and build effective treatment plans."
      />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div aria-hidden className="animate-drift-1 pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-tint blur-3xl" />
        <div aria-hidden className="animate-drift-2 pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-gold-tint blur-3xl" />
        <DustMotes />
        <Container narrow className="relative">
          <Accordion items={assessments} />

          <Reveal dir="scale" className="relative mt-14 overflow-hidden rounded-3xl bg-bg-alt px-8 py-12 text-center">
            <div aria-hidden className="animate-float-slow pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-tint blur-3xl" />
            <Reveal as="h2" className="relative font-heading text-xl font-semibold text-ink">
              Have questions about an assessment?
            </Reveal>
            <Reveal as="p" delay={150} className="relative mt-2 text-body">
              Call us and our team can help determine which assessment is right for you.
            </Reveal>
            <Reveal delay={280} className="relative mt-6">
              <LinkButton href={primaryPhone.href}>
                <Icon name="phone" size={16} />
                Call {primaryPhone.number}
              </LinkButton>
            </Reveal>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
