import type { ComponentChildren } from "preact";
import { cn } from "~/utils/cn";
type Props = {
  children: ComponentChildren;
  className?: string;
};

export const AnimatedButtonContainer = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "group relative mb-6 flex cursor-pointer overflow-hidden rounded-3xl border border-bline bg-primary-bg px-4 py-3 font-semibold text-white",
        className,
      )}
    >
      <div className="z-10 flex items-center gap-x-3">{children}</div>
      <div className="absolute left-0 top-[150%] z-[1] h-[150%] w-full rounded-[50%] bg-secondary-blue transition-all duration-500 ease-in-out group-hover:top-[20%] group-hover:scale-150"></div>
    </div>
  );
};
