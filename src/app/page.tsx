import Image from "next/image";
import { primaryPhone } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import PatientJourney from "@/components/home/PatientJourney";
import AssessmentsPreview from "@/components/home/AssessmentsPreview";
import ResourcesPreview from "@/components/home/ResourcesPreview";
import Associations from "@/components/home/Associations";
import TestimonialsCarousel from "@/components/shared/TestimonialsCarousel";
import AppointmentForm from "@/components/shared/AppointmentForm";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <PatientJourney />
      <AssessmentsPreview />
      <Associations />

      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div aria-hidden className="animate-drift-1 pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet/15 blur-[100px]" />
        <div aria-hidden className="animate-drift-2 pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet/15 blur-[100px]" />
        <Container className="relative">
          <SectionHeading eyebrow="Patient stories" title="Your appreciation" light />
          <Reveal delay={220} className="mt-14">
            <TestimonialsCarousel testimonials={testimonials} dark />
          </Reveal>
        </Container>
      </section>

      <ResourcesPreview />

      <section className="relative overflow-hidden pb-24 sm:pb-32">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-violet-tint/70 blur-3xl" />
        <Container className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-bg-alt shadow-sm ring-1 ring-border">
            <div aria-hidden className="animate-drift-2 pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-tint blur-3xl" />
            <div className="relative grid gap-10 p-8 lg:grid-cols-2 lg:items-center lg:p-14">
              <Reveal dir="left">
                <SectionHeading eyebrow="Get in touch" title="Contact us" align="left" />
                <div className="mt-8">
                  <AppointmentForm />
                </div>
              </Reveal>

              <Reveal dir="right" delay={220} className="flex flex-col gap-6">
                <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-glow-violet ring-1 ring-violet/10">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-violet-dim text-white">
                    <Icon name="phone" size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-violet-dark">Get help now</p>
                    <a href={primaryPhone.href} className="block text-2xl font-bold text-ink hover:text-violet-dark">
                      {primaryPhone.number}
                    </a>
                    <p className="mt-1 text-xs text-muted">
                      *All calls &amp; messages are free and totally confidential.
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[220px] flex-1 rounded-[1.4rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] animate-border-shimmer bg-[length:220%_220%] transition-transform duration-500 hover:-translate-y-1">
                  <div className="img-sheen relative h-full min-h-[214px] overflow-hidden rounded-[1.15rem]">
                    <Image
                      src="/images/hero-medical-assessment.jpg"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent" />
                    <span className="glass-dark animate-float-slow absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold text-white">
                      <Icon name="checkCircle" size={14} className="text-violet" />
                      All health insurance accepted
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
