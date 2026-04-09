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
        <div className="overflow-hidden rounded-[36px] border border-papaya/16 bg-[linear-gradient(135deg,#fff7f1_0%,#ffffff_40%,#fff4eb_100%)] px-6 py-12 shadow-card sm:px-10 sm:py-14 lg:px-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex rounded-full border border-papaya/16 bg-papaya/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-papaya">
                Final step
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-[-0.05em] text-soft-black sm:text-5xl">
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
