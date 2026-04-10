import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32", className)}
    >
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {children}
    </section>
  );
}
