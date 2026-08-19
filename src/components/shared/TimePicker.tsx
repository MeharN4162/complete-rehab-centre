"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

const hours = Array.from({ length: 12 }, (_, i) => i + 1);
const minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

type TimePickerProps = {
  id?: string;
  name: string;
  required?: boolean;
};

// Native <input type="time"> hands off to the OS/browser's own scroll-wheel
// picker, which can't be restyled beyond its small icon glyph. This renders
// its own dropdown instead, so every pixel of it matches the rest of the site.
export default function TimePicker({ id, name, required }: TimePickerProps) {
  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<string | null>(null);
  const [period, setPeriod] = useState<"AM" | "PM">("AM");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const isComplete = hour !== null && minute !== null;
  const display = isComplete ? `${hour}:${minute} ${period}` : "";
  const value = isComplete
    ? `${String(period === "PM" ? (hour === 12 ? 12 : hour + 12) : hour === 12 ? 0 : hour).padStart(2, "0")}:${minute}`
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
        <span className={display ? "text-ink" : "text-muted"}>{display || "Select a time"}</span>
      </button>
      <Icon name="clock" size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

      <div
        role="dialog"
        aria-label="Choose a time"
        className={`absolute left-0 top-[calc(100%+8px)] z-20 w-64 origin-top rounded-xl border border-border bg-white p-3 shadow-xl transition-all duration-200 ${
          open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        }`}
      >
        <div className="flex gap-2">
          <div className="no-scrollbar max-h-40 flex-1 overflow-y-auto rounded-lg bg-bg-alt p-1">
            {hours.map((h) => (
              <button
                key={h}
                type="button"
                onClick={() => setHour(h)}
                className={`block w-full rounded-md px-2 py-1.5 text-center text-sm transition-colors ${
                  hour === h ? "bg-violet font-semibold text-white" : "text-ink hover:bg-violet-tint"
                }`}
              >
                {h}
              </button>
            ))}
          </div>
          <div className="no-scrollbar max-h-40 flex-1 overflow-y-auto rounded-lg bg-bg-alt p-1">
            {minutes.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMinute(m)}
                className={`block w-full rounded-md px-2 py-1.5 text-center text-sm transition-colors ${
                  minute === m ? "bg-violet font-semibold text-white" : "text-ink hover:bg-violet-tint"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {(["AM", "PM"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriod(p)}
                className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  period === p ? "bg-violet text-white" : "bg-bg-alt text-ink hover:bg-violet-tint"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          disabled={!isComplete}
          className="btn-sheen mt-3 w-full rounded-lg bg-violet-dim py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          Done
        </button>
      </div>
    </div>
  );
}
