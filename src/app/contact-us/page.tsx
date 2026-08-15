import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/shared/PageHeader";
import AppointmentForm from "@/components/shared/AppointmentForm";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Complete Rehab Centre in Brampton — address, phone numbers, office hours and directions to our clinic at 10095 Bramalea Rd.",
};

export default function ContactUsPage() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you. Reach out using the details below." />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-tint blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-gold-tint blur-3xl" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-5">
            <Reveal dir="left" className="relative overflow-hidden rounded-3xl bg-bg-alt p-6 shadow-sm ring-1 ring-border sm:p-10 lg:col-span-3">
              <div aria-hidden className="animate-float-slow pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-tint blur-3xl" />
              <h2 className="relative font-heading text-xl font-semibold text-ink">Send Us a Message</h2>
              <div className="relative mt-6">
                <AppointmentForm />
              </div>
            </Reveal>

            <Reveal delay={120} dir="right" className="space-y-6 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-violet">
                  <div className="flex items-center gap-3">
                    <span className="btn-sheen flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-tint text-violet-dark transition-all duration-300 group-hover:bg-violet group-hover:text-white">
                      <Icon name="mapPin" size={17} />
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Address</h3>
                  </div>
                  <p className="mt-3 text-body">{siteConfig.address.full}</p>
                </div>
                <div className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-violet">
                  <div className="flex items-center gap-3">
                    <span className="btn-sheen flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-tint text-violet-dark transition-all duration-300 group-hover:bg-violet group-hover:text-white">
                      <Icon name="phone" size={17} />
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Phone</h3>
                  </div>
                  <div className="mt-3 space-y-1">
                    {siteConfig.phones.map((phone) => (
                      <a key={phone.href} href={phone.href} className="block text-body hover:text-violet-dark">
                        {phone.number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-violet">
                <div className="flex items-center gap-3">
                  <span className="btn-sheen flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-tint text-violet-dark transition-all duration-300 group-hover:bg-violet group-hover:text-white">
                    <Icon name="clock" size={17} />
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Hours</h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-body">
                  {siteConfig.hours.map((h) => (
                    <li key={h.day} className="flex justify-between border-b border-border pb-1.5">
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                  <li className="flex justify-between pt-0.5 text-body/50">
                    <span>{siteConfig.hoursClosed}</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              <div className="relative rounded-[1.4rem] bg-gradient-to-br from-violet via-violet-dim to-violet p-[3px] shadow-lg">
                <div className="h-72 w-full overflow-hidden rounded-[1.15rem] bg-bg-alt">
                  {/* bg-bg-alt (not the frame's violet) sits behind the iframe so a
                      slow map load or an ad-blocker blocking the Google embed shows a
                      neutral card instead of exposing a jarring solid-violet block. */}
                  <iframe
                    src={siteConfig.mapEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map showing the location of ${siteConfig.name}`}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
