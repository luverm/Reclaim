import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionShell } from "@/components/marketing/section-shell";

export function FeaturesSection() {
  const { features } = siteContent;

  return (
    <SectionShell id="features">
      <Reveal>
        <SectionHeading
          eyebrow={features.eyebrow}
          title={features.title}
          description={features.description}
          theme="dark"
        />
      </Reveal>
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {features.items.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.08}>
            <div className="group flex h-full flex-col justify-between rounded-[30px] border border-white/10 bg-white p-7 text-charcoal shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premium">
              <div>
                <div className="inline-flex rounded-full border border-papaya/16 bg-papaya/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-papaya">
                  Feature {index + 1}
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold tracking-[-0.05em] text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-7 text-charcoal/72">
                  {feature.description}
                </p>
              </div>
              <div className="mt-10 h-px w-full bg-charcoal/10" />
              <div className="mt-6 text-sm font-medium text-papaya">
                Built for technical, document-heavy workflows
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
