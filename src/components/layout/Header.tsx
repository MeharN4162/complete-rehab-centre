"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import NavDropdown from "@/components/layout/NavDropdown";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Next's client-side <Link> navigation doesn't land at scroll-top on its own here.
  // The two-arg `scrollTo(0, 0)` form still respects the global `scroll-behavior:
  // smooth`, so without an explicit `behavior: "instant"` this was animating the
  // reset over ~800ms — visible as a slow scroll-up through the new page on every
  // navigation instead of landing at the title immediately.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
          scrolled || open ? "border-border bg-white/90 backdrop-blur-md" : "border-transparent bg-white"
        }`}
      >
        <Container className="flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${siteConfig.name} home`}>
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={210}
              height={64}
              priority
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={siteConfig.phones[0].href}
              aria-label={`Call ${siteConfig.phones[0].number}`}
              className="hidden h-11 items-center gap-2 rounded-full border-2 border-ink/10 px-4 text-sm font-semibold text-ink transition-colors hover:border-violet hover:text-violet-dark sm:flex"
            >
              <Icon name="phone" size={15} />
              {siteConfig.phones[0].number}
            </a>
            <a
              href={siteConfig.phones[0].href}
              aria-label={`Call ${siteConfig.phones[0].number}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink/10 text-ink transition-colors hover:border-violet hover:text-violet-dark sm:hidden"
            >
              <Icon name="phone" size={16} />
            </a>
            <div className="hidden md:block">
              <LinkButton href="/appointment" className="px-5 py-2.5">
                Book Appointment
              </LinkButton>
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="dialog"
                aria-expanded={open}
                className={`btn-sheen group flex h-11 items-center gap-2.5 rounded-full px-4 text-sm font-semibold transition-all duration-300 sm:px-5 ${
                  open
                    ? "bg-violet-dim text-white shadow-glow-violet"
                    : "bg-ink text-white hover:bg-violet-dim hover:shadow-glow-violet"
                }`}
              >
                <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
                <Icon name={open ? "close" : "menu"} size={16} />
              </button>

              <NavDropdown open={open} onClose={() => setOpen(false)} />
            </div>
          </div>
        </Container>
      </header>

      {/* Dims the page behind the dropdown; click to close. Rendered as a sibling of
          <header> (not nested inside it) at z-45 — between the header (z-50, stays
          crisp on top) and ordinary page content (unpositioned, paints below both).
          Nesting this inside the button's wrapper instead made it paint over the
          header's own controls, since a plain `position:relative` wrapper with no
          z-index doesn't create a new stacking context — its positioned descendant
          (this backdrop, z-index:40) still competed directly against the header's
          non-positioned content within the *header's* stacking context, and
          positioned-with-z-index always wins that particular fight regardless of
          DOM order. */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[45] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
