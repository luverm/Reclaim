import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  href?: string;
  darkSurface?: boolean;
  priority?: boolean;
};

export function Logo({
  className,
  imageClassName,
  href = "/",
  darkSurface = false,
  priority
}: LogoProps) {
  const content = (
    <div
      className={cn(
        "inline-flex items-center",
        darkSurface && "rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm",
        className
      )}
    >
      <span
        className={cn(
          "font-display text-[1.75rem] font-semibold tracking-[-0.06em] text-white sm:text-[2rem]",
          imageClassName
        )}
      >
        Reclaim<span className="text-papaya">.</span>
      </span>
    </div>
  );

  return (
    <Link href={href} aria-label="Reclaim home" prefetch={priority ? true : undefined}>
      {content}
    </Link>
  );
}
