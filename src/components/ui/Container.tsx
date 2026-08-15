import { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  narrow?: boolean;
};

export default function Container({ className = "", narrow = false, ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${narrow ? "max-w-4xl" : "max-w-7xl"} ${className}`}
      {...props}
    />
  );
}
