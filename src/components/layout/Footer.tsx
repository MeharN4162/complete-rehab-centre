import Image from "next/image";
import Link from "next/link";
import { navLinks, primaryPhone, siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ConstellationDots from "@/components/ui/ConstellationDots";
import RotatingGlyphs from "@/components/ui/RotatingGlyphs";

function FooterLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 flex items-center gap-2.5">
      <span className="h-px w-6 bg-gold" />
      <span className="font-heading text-xs uppercase tracking-[0.2em] text-gold">{children}</span>
    </h3>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const topLevelLinks = navLinks.filter((l) => l.label !== "Home");

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-violet/12 blur-[120px]"
      />
      <ConstellationDots count={24} />
      <RotatingGlyphs tone="dark" />
      <div className="relative border-b border-white/10">
        <Container>
          <Reveal className="flex flex-col items-center gap-8 py-16 text-center sm:flex-row sm:justify-between sm:py-20 sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Ready when you are</p>
              <h2 className="mt-3 text-[clamp(1.75rem,1.2rem+2vw,3rem)] font-semibold leading-tight text-white">
                Let&rsquo;s get your recovery started.
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <LinkButton href="/appointment" variant="light">
                Book an Appointment
              </LinkButton>
              <LinkButton href={primaryPhone.href} variant="outlineOnDark">
                <Icon name="phone" size={16} />
                {primaryPhone.number}
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </div>

      <Container className="relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Image
            src="/images/footer-logo.png"
            alt={siteConfig.name}
            width={180}
            height={55}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-5 text-sm leading-relaxed text-white/50">{siteConfig.description}</p>
        </div>

        <div>
          <FooterLabel>Quick Links</FooterLabel>
          <ul className="space-y-2.5 text-sm text-white/75">
            {topLevelLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterLabel>Contact</FooterLabel>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-2.5">
              <Icon name="mapPin" size={16} className="mt-0.5 shrink-0 text-white/40" />
              <span>{siteConfig.address.full}</span>
            </li>
            {siteConfig.phones.map((phone) => (
              <li key={phone.href} className="flex gap-2.5">
                <Icon name="phone" size={16} className="mt-0.5 shrink-0 text-white/40" />
                <a href={phone.href} className="transition-colors hover:text-gold">
                  {phone.number}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterLabel>Hours</FooterLabel>
          <ul className="space-y-1.5 text-sm text-white/75">
            {siteConfig.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-3 border-b border-white/10 py-1.5 first:pt-0">
                <span>{h.day}</span>
                <span className="text-white/50">{h.time}</span>
              </li>
            ))}
            <li className="flex justify-between gap-3 pt-1.5 text-white/40">
              <span>{siteConfig.hoursClosed}</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-white/10 py-5">
        <Container className="flex flex-col items-center justify-center gap-2 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
