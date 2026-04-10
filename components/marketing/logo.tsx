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
  const logoSrc = `${basePath}/reclaim-logo.svg`;

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
        width={180}
        height={40}
        fetchPriority={priority ? "high" : undefined}
        className={cn("h-auto w-[150px] sm:w-[170px]", imageClassName)}
      />
    </div>
  );

  return (
    <Link href={href} aria-label="Reclaim home">
      {content}
    </Link>
  );
}
