import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteContent } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/marketing/hero-visual";
import { Reveal } from "@/components/marketing/reveal";
import { SectionShell } from "@/components/marketing/section-shell";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <SectionShell className="overflow-hidden pt-14 lg:pt-20">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 shadow-sm">
              {hero.eyebrow}
            </div>
            <h1 className="mt-6 font-display text-[2.25rem] font-bold leading-[0.95] tracking-[-0.06em] text-white sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
              {hero.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={hero.secondaryCta.href} className="group">
                  {hero.secondaryCta.label}
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {hero.proofPoints.map((item, index) => (
                <Reveal key={item} delay={0.08 * (index + 1)}>
                  <div className="rounded-3xl border border-white/10 bg-white px-4 py-4 text-sm font-medium text-charcoal shadow-card transition-transform duration-300 hover:-translate-y-1">
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.34} className="mt-8">
              <div className="inline-flex flex-wrap items-center gap-3 rounded-[28px] border border-white/10 bg-white/6 px-4 py-4 text-sm text-white/72 backdrop-blur-md">
                <span className="rounded-full bg-papaya px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Focus
                </span>
                <span>Reports</span>
                <span className="text-white/28">/</span>
                <span>Decks</span>
                <span className="text-white/28">/</span>
                <span>Project updates</span>
              </div>
            </Reveal>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <HeroVisual />
        </Reveal>
      </div>
    </SectionShell>
  );
}
