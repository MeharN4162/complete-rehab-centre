"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon, { IconName } from "@/components/ui/Icon";
import { primaryPhone, siteConfig } from "@/data/site";

const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`;

const actions: { label: string; href: string; icon: IconName }[] = [
  { label: "Book an appointment", href: "/appointment", icon: "calendar" },
  { label: "Get directions", href: directionsHref, icon: "mapPin" },
  { label: `Call ${primaryPhone.number}`, href: primaryPhone.href, icon: "phone" },
];

// Fixed floating action button, bottom-right on every page — expands into a
// short stack of the three things a visitor in a hurry actually wants.
export default function QuickActions() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <div
        className={`flex flex-col items-end gap-2.5 transition-all duration-300 ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"
        }`}
      >
        {actions.map((action, i) => (
          <Link
            key={action.label}
            href={action.href}
            onClick={() => setOpen(false)}
            style={open ? { transitionDelay: `${i * 60}ms` } : undefined}
            className="group flex items-center gap-3 rounded-full bg-ink py-2 pl-4 pr-2 text-sm font-medium text-white shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:bg-violet-dark"
          >
            <span className="whitespace-nowrap">{action.label}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet text-white transition-transform duration-300 group-hover:scale-110">
              <Icon name={action.icon} size={15} />
            </span>
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close quick actions" : "Open quick actions"}
        className="btn-sheen animate-float-slow flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet to-violet-dim text-white shadow-glow-violet transition-transform duration-300 hover:scale-105"
      >
        <Icon name={open ? "close" : "sparkle"} size={22} className={open ? "" : "animate-pulse-slow"} />
      </button>
    </div>
  );
}
