import { SVGAttributes } from "react";

const paths = {
  phone: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z",
  mapPin: "M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z",
  clock: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.4V6h-2v7.4l5.2 3.1 1-1.6-4.2-2.5z",
  chevronDown: "M6 8L0 0h12z",
  chevronRight: "M9 6l6 6-6 6",
  chevronLeft: "M15 6l-6 6 6 6",
  arrowRight: "M4 12h14m0 0l-5-5m5 5l-5 5",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  check: "M4 12.5l5 5L20 6.5",
  checkCircle: "M12 2a10 10 0 100 20 10 10 0 000-20zm-1.2 14.4l-4-4 1.4-1.4 2.6 2.6 5.8-5.8 1.4 1.4z",
  users: "M8 12a4 4 0 100-8 4 4 0 000 8zm8-2a3 3 0 100-6 3 3 0 000 6zM2 20c0-3.3 2.7-6 6-6s6 2.7 6 6H2zm14-6c2.5 0 6 1.5 6 6h-4.5c0-2.3-.9-4.4-2.4-6h.9z",
  heart: "M12 21s-7.5-4.6-10-9.3C.4 8.3 2 4.5 5.7 3.8 8 3.4 10 4.4 12 6.6c2-2.2 4-3.2 6.3-2.8 3.7.7 5.3 4.5 3.7 7.9C19.5 16.4 12 21 12 21z",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  shield: "M12 2l8 3v6c0 5-3.4 8.7-8 11-4.6-2.3-8-6-8-11V5l8-3z",
  calendar: "M7 2v3M17 2v3M3 9h18M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z",
  sparkle: "M12 2l1.8 5.6L19.4 9.4 13.8 11.2 12 16.8 10.2 11.2 4.6 9.4 10.2 7.6z",
  quote: "M9.5 7C6.5 8.5 5 11 5 14c0 2.2 1.5 3.5 3.2 3.5 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-3 .3-1.5 1.5-3 3.4-3.8L9.5 7zm9 0C15.5 8.5 14 11 14 14c0 2.2 1.5 3.5 3.2 3.5 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-3 .3-1.5 1.5-3 3.4-3.8L18.5 7z",
  external: "M14 5h5v5M19 5l-9 9M6 5H5v14h14v-1",
  user: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8",
  mail: "M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zM3.5 6l8.5 6.5L20.5 6",
} as const;

export type IconName = keyof typeof paths;

type IconProps = SVGAttributes<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export default function Icon({ name, size = 20, strokeWidth = 2, className = "", ...props }: IconProps) {
  const strokeIcons: IconName[] = [
    "chevronRight",
    "chevronLeft",
    "arrowRight",
    "menu",
    "close",
    "check",
    "activity",
    "external",
    "user",
    "mail",
  ];
  const isStroke = strokeIcons.includes(name);

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden
      fill={isStroke ? "none" : "currentColor"}
      stroke={isStroke ? "currentColor" : "none"}
      strokeWidth={isStroke ? strokeWidth : 0}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
