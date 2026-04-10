import Link from "next/link";

import { siteContent } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/marketing/reveal";
import { SectionShell } from "@/components/marketing/section-shell";

export function CtaSection() {
  const { cta } = siteContent;

  return (
    <SectionShell id="book-demo">
      <Reveal>
        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,#fff7f1_0%,#ffffff_40%,#fff4eb_100%)] px-5 py-10 shadow-premium sm:rounded-[36px] sm:px-10 sm:py-14 lg:px-14">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.18),transparent_68%)]" />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex rounded-full border border-papaya/16 bg-papaya/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-papaya">
                Final step
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.05em] text-soft-black sm:mt-6 sm:text-4xl lg:text-5xl">
                {cta.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-charcoal/72">{cta.description}</p>
            </div>
            <Button asChild size="lg">
              <Link href={cta.button.href}>{cta.button.label}</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
