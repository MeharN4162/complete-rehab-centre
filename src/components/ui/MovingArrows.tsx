import Icon from "@/components/ui/Icon";

type MovingArrowsProps = {
  className?: string;
  variant?: "default" | "diagonal";
};

// A quiet, always-moving strip of arrows drifting in a seamless loop —
// decorative motion texture, not content, so it's aria-hidden and low
// opacity. Reuses the marquee infrastructure (two duplicated tracks so the
// loop point is invisible) already proven in Hero's ticker.
//
// "diagonal" is a second, visibly different variant for sections that
// already use the default strip elsewhere (bigger gold arrows, tilted across
// the whole section, normal marquee direction/speed instead of reversed) so
// the motion doesn't read as the exact same effect repeated everywhere.
export default function MovingArrows({ className = "", variant = "default" }: MovingArrowsProps) {
  if (variant === "diagonal") {
    return (
      <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute left-1/2 top-1/2 w-[160%] -translate-x-1/2 -translate-y-1/2 -rotate-6">
          <div className="flex w-max animate-marquee gap-20 opacity-[0.06]">
            {[0, 1].map((track) => (
              <div key={track} className="flex shrink-0 gap-20">
                {Array.from({ length: 10 }).map((_, i) => (
                  <Icon key={i} name="arrowRight" size={28} className="shrink-0 text-gold" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-x-0 overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee-reverse gap-14 opacity-[0.09]">
        {[0, 1].map((track) => (
          <div key={track} className="flex shrink-0 gap-14">
            {Array.from({ length: 14 }).map((_, i) => (
              <Icon key={i} name="arrowRight" size={20} className="shrink-0 text-violet" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
