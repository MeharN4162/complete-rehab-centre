"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/site";
import Icon from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";

type NavDropdownProps = {
  open: boolean;
  onClose: () => void;
};

export default function NavDropdown({ open, onClose }: NavDropdownProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      {/* Compact panel anchored directly under the Menu button (right-aligned, capped
          width). Never spans the full viewport, so it can never overflow it either.
          The dimming backdrop lives in Header.tsx as a sibling of <header>, not here —
          nesting it inside the button's own (non-stacking-context) wrapper made it
          paint over the header bar's own controls. See Header.tsx for why. */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute right-0 top-[calc(100%+10px)] z-50 w-[min(24rem,calc(100vw-2rem))] origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-ink text-white shadow-2xl transition-all duration-250 ${
          open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        }`}
      >
        <div
          aria-hidden
          className="animate-drift-1 pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet/25 blur-[80px]"
        />
        <div
          aria-hidden
          className="animate-drift-2 pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-gold/10 blur-[70px]"
        />

        <div className="relative max-h-[75vh] overflow-y-auto overflow-x-hidden p-3">
          <nav aria-label="Primary">
            <ul className="space-y-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                if (link.children) {
                  const isExpanded = expanded === link.href;
                  return (
                    <li key={link.href} className="rounded-xl">
                      <div className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 ${isExpanded ? "bg-white/5" : "hover:bg-white/[0.03]"}`}>
                        <span className="w-5 shrink-0 font-heading text-[11px] text-gold transition-transform duration-300 group-hover:scale-110">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className={`flex-1 text-sm font-semibold transition-colors hover:text-violet ${
                            isActive ? "text-violet" : "text-white"
                          }`}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-controls="services-submenu"
                          onClick={() => setExpanded(isExpanded ? null : link.href)}
                          className={`btn-sheen flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out ${
                            isExpanded ? "bg-violet text-ink" : "text-white/60 hover:bg-white/10 hover:text-violet"
                          }`}
                        >
                          <Icon
                            name="chevronRight"
                            size={11}
                            className="transition-transform duration-300 ease-out"
                            style={{ transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)" }}
                          />
                        </button>
                      </div>
                      <div
                        className="grid transition-all duration-300 ease-out"
                        style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr", opacity: isExpanded ? 1 : 0 }}
                      >
                        {/* The 0fr/1fr grid-row trick alone leaves a gap when collapsed —
                            a grid item's automatic min-height is content-based unless the
                            item itself also clips overflow, so this inner wrapper (not just
                            the outer grid track) needs its own `overflow-hidden` to actually
                            reach zero height. */}
                        <div className="overflow-hidden">
                          <ul id="services-submenu" className="ml-11 mr-1 mt-1 mb-1.5 max-h-56 space-y-1.5 overflow-y-auto overflow-x-hidden rounded-lg bg-white/5 p-2.5">
                            {link.children.map((child, j) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-xs text-white/65 transition-all duration-200 hover:translate-x-1 hover:bg-white/5 hover:text-violet"
                                >
                                  <span className="text-[10px] text-gold/70">{String(j + 1).padStart(2, "0")}</span>
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                }
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-violet ${
                        isActive ? "text-violet" : "text-white"
                      }`}
                    >
                      <span className="w-5 shrink-0 font-heading text-[11px] text-gold transition-transform duration-300 group-hover:scale-110">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-2 space-y-2 border-t border-white/10 p-3 pt-4">
            <p className="flex items-start gap-2 text-xs text-white/50">
              <Icon name="mapPin" size={13} className="mt-0.5 shrink-0 text-violet" />
              {siteConfig.address.full}
            </p>
            <div className="flex gap-2 pt-1">
              <a
                href={siteConfig.phones[0].href}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold"
              >
                <Icon name="phone" size={12} />
                Call
              </a>
              <LinkButton href="/appointment" onClick={onClose} className="flex-1 px-3 py-2 text-xs">
                Book Now
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
