import Icon from "@/components/ui/Icon";

type MovingArrowsProps = {
  className?: string;
};

// A quiet, always-moving strip of arrows drifting left-to-right in a seamless
// loop — decorative motion texture, not content, so it's aria-hidden and low
// opacity. Reuses the marquee infrastructure (two duplicated tracks so the
// loop point is invisible) already proven in Hero's ticker.
export default function MovingArrows({ className = "" }: MovingArrowsProps) {
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
