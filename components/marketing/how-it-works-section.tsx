import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionShell } from "@/components/marketing/section-shell";

export function HowItWorksSection() {
  const { howItWorks } = siteContent;

  return (
    <SectionShell id="how-it-works">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} theme="dark" />
        </Reveal>
        <div className="space-y-4">
          {howItWorks.steps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <div className="grid gap-4 rounded-[20px] border border-white/10 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium sm:gap-6 sm:rounded-[30px] sm:grid-cols-[96px_1fr] sm:p-7">
                <div className="font-display text-3xl font-bold tracking-[-0.05em] text-papaya sm:text-4xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-[-0.04em] text-charcoal sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-charcoal/70">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
