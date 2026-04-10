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
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_28%),linear-gradient(180deg,#111214_0%,#0e0e0f_55%,#111214_100%)]" />
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 shadow-sm">
              {hero.eyebrow}
            </div>
            <h1 className="mt-8 font-display text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/72 sm:text-xl">
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
                  <div className="rounded-3xl border border-white/10 bg-white px-4 py-4 text-sm font-medium text-charcoal shadow-card">
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <HeroVisual />
        </Reveal>
      </div>
    </SectionShell>
  );
}
