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
      className={cn("relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32", className)}
    >
      {children}
    </section>
  );
}
