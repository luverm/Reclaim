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
  priority = false
}: LogoProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const logoSrc = `${basePath}/reclaim-logo.png`;

  const content = (
    <div
      className={cn(
        "inline-flex items-center rounded-2xl px-0 py-0",
        darkSurface && "rounded-[20px] bg-white px-4 py-3 shadow-card",
        className
      )}
    >
      <img
        src={logoSrc}
        alt="Reclaim"
        width={260}
        height={58}
        fetchPriority={priority ? "high" : undefined}
        className={cn("h-auto w-[158px] sm:w-[182px]", imageClassName)}
      />
    </div>
  );

  return (
    <Link href={href} aria-label="Reclaim home">
      {content}
    </Link>
  );
}
