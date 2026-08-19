"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

const weekdayLabels = ["S", "M", "T", "W", "T", "F", "S"];
const monthLabels = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

type DatePickerProps = {
  id?: string;
  name: string;
  required?: boolean;
};

// Native <input type="date"> hands off to the browser's own calendar dropdown,
// which only lets us restyle the small icon glyph, not the calendar itself.
// This renders its own calendar grid instead, so every pixel matches the site.
export default function DatePicker({ id, name, required }: DatePickerProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(null);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const leadingBlanks = firstOfMonth.getDay();

  const cells: (number | null)[] = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  function goToPrevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function goToNextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  function selectDay(day: number) {
    setSelected(new Date(viewYear, viewMonth, day));
    setOpen(false);
  }

  const isPast = (day: number) => new Date(viewYear, viewMonth, day) < today;
  const isSelected = (day: number) =>
    !!selected &&
    selected.getFullYear() === viewYear &&
    selected.getMonth() === viewMonth &&
    selected.getDate() === day;
  const isToday = (day: number) =>
    viewYear === today.getFullYear() && viewMonth === today.getMonth() && day === today.getDate();

  const value = selected
    ? `${selected.getFullYear()}-${String(selected.getMonth() + 1).padStart(2, "0")}-${String(selected.getDate()).padStart(2, "0")}`
    : "";
  const display = selected
    ? `${monthLabels[selected.getMonth()].slice(0, 3)} ${selected.getDate()}, ${selected.getFullYear()}`
    : "";

  return (
    <div ref={ref} className="relative">
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        id={id}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-left text-sm outline-none transition-colors focus:border-violet focus:ring-4 focus:ring-violet-tint"
      >
        <span className={display ? "text-ink" : "text-muted"}>{display || "Select a date"}</span>
      </button>
      <Icon name="calendar" size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

      <div
        role="dialog"
        aria-label="Choose a date"
        className={`absolute left-0 top-[calc(100%+8px)] z-20 w-72 origin-top rounded-2xl border border-border bg-white p-4 shadow-xl transition-all duration-200 ${
          open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={goToPrevMonth}
            aria-label="Previous month"
            className="flex h-8 w-8 items-center justify-center rounded-full text-violet-dark transition-colors hover:bg-violet-tint"
          >
            <Icon name="chevronLeft" size={16} />
          </button>
          <span className="font-heading text-sm font-semibold text-ink">
            {monthLabels[viewMonth]} {viewYear}
          </span>
          <button
            type="button"
            onClick={goToNextMonth}
            aria-label="Next month"
            className="flex h-8 w-8 items-center justify-center rounded-full text-violet-dark transition-colors hover:bg-violet-tint"
          >
            <Icon name="chevronRight" size={16} />
          </button>
        </div>

        <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-muted">
          {weekdayLabels.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>

        <div className="mt-1 grid grid-cols-7 gap-1">
          {cells.map((day, i) =>
            day === null ? (
              <span key={i} />
            ) : (
              <button
                key={i}
                type="button"
                disabled={isPast(day)}
                onClick={() => selectDay(day)}
                className={`relative flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors ${
                  isSelected(day)
                    ? "bg-violet font-semibold text-white"
                    : isPast(day)
                      ? "cursor-not-allowed text-muted/40"
                      : "text-ink hover:bg-violet-tint"
                } ${isToday(day) && !isSelected(day) ? "font-semibold text-violet-dark" : ""}`}
              >
                {day}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
