type WaveDividerProps = {
  color: string;
  flip?: boolean;
};

// A soft wave seam between two differently-colored sections, instead of a
// hard flat edge. Sits on the section that needs to blend INTO the next one:
// pass the color of whichever section comes next (or previous, with `flip`).
export default function WaveDivider({ color, flip = false }: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 z-[1] leading-[0] ${flip ? "top-0 rotate-180" : "bottom-0"}`}
    >
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-8 w-full sm:h-12">
        <path d="M0,32 C240,58 480,4 720,18 C960,32 1200,60 1440,26 L1440,60 L0,60 Z" fill={color} />
      </svg>
    </div>
  );
}
