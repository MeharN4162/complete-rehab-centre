"use client";

import { useState } from "react";
import { Assessment } from "@/data/assessments";
import Icon from "@/components/ui/Icon";

export default function Accordion({ items }: { items: Assessment[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(items[0]?.slug ?? null);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = openSlug === item.slug;
        return (
          <div key={item.slug} id={item.slug} className="group/item scroll-mt-28">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`panel-${item.slug}`}
                onClick={() => setOpenSlug(isOpen ? null : item.slug)}
                className="flex w-full items-center gap-5 py-5 text-left transition-colors hover:text-violet-dark"
              >
                <span className={`font-heading text-lg transition-all duration-300 sm:text-xl ${isOpen ? "scale-110 text-violet-dark" : "text-gold group-hover/item:scale-110"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`flex-1 text-sm font-semibold transition-colors sm:text-base ${isOpen ? "text-violet-dark" : "text-ink"}`}>
                  {item.name}
                </span>
                <span
                  className={`btn-sheen flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out ${
                    isOpen ? "bg-violet text-ink shadow-glow-violet" : "bg-bg-alt text-ink group-hover/item:bg-violet-tint"
                  }`}
                >
                  <Icon
                    name="chevronRight"
                    size={10}
                    className="transition-transform duration-300 ease-out"
                    style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                  />
                </span>
              </button>
            </h3>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
            >
              <div className="overflow-hidden">
                <div
                  id={`panel-${item.slug}`}
                  className="pb-6 pl-[3.25rem] text-sm leading-relaxed text-body sm:pl-16 sm:text-base"
                >
                  {item.paragraphs.map((p, i) => (
                    <p key={i} className="mb-3 last:mb-0">
                      {p}
                    </p>
                  ))}
                  {item.list && (
                    <ul className="mb-3 space-y-2">
                      {item.list.map((li) => (
                        <li key={li} className="flex gap-2.5">
                          <Icon name="check" size={15} className="mt-0.5 shrink-0 text-violet-dark" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.closingParagraph && <p>{item.closingParagraph}</p>}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
