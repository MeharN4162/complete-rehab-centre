import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import AppointmentForm from "@/components/shared/AppointmentForm";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import DustMotes from "@/components/ui/DustMotes";
import RotatingGlyphs from "@/components/ui/RotatingGlyphs";

export const metadata: Metadata = {
  title: "Appointment",
  description:
    "Request an appointment at Complete Rehab Centre in Brampton. Review our office hours and contact information, then get in touch to book.",
};

export default function AppointmentPage() {
  return (
    <>
      <PageHeader
        title="Request an Appointment"
        subtitle="Review our office hours below, then fill out the form or call us directly to arrange your visit."
      />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-violet-tint blur-3xl" />
        <DustMotes />
        <RotatingGlyphs tone="light" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-5">
            <Reveal dir="left" className="relative min-h-[320px] rounded-[1.75rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] animate-border-shimmer bg-[length:220%_220%] shadow-xl lg:col-span-2">
              <div className="img-sheen relative h-full min-h-[314px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/hero-medical-assessment.jpg"
                  alt="Complete Rehab Centre clinic"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-violet-dark/80 to-ink/95" />
                <div className="relative flex h-full flex-col justify-center p-8 text-white sm:p-10">
                  <span className="animate-pulse-slow flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                    <Icon name="clock" size={20} />
                  </span>
                  <h2 className="mt-4 font-heading text-2xl font-semibold text-white">Office Hours</h2>
                  <ul className="mt-5 space-y-2 text-sm">
                    {siteConfig.hours.map((h) => (
                      <li key={h.day} className="flex justify-between border-b border-white/20 pb-2">
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                    <li className="flex justify-between pt-1 text-white/70">
                      <span>{siteConfig.hoursClosed}</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                  <p className="mt-6 flex items-start gap-2 text-sm text-white/85">
                    <Icon name="mapPin" size={16} className="mt-0.5 shrink-0" />
                    {siteConfig.address.full}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} dir="right" className="relative overflow-hidden rounded-3xl bg-bg-alt p-6 shadow-sm ring-1 ring-border sm:p-10 lg:col-span-3">
              <div aria-hidden className="animate-float-slow pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-tint blur-3xl" />
              <div className="relative">
                <AppointmentForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
