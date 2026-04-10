import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionShell } from "@/components/marketing/section-shell";

export function OutcomeSection() {
  const { outcomes } = siteContent;

  return (
    <SectionShell id="outcomes">
      <Reveal>
        <SectionHeading
          eyebrow={outcomes.eyebrow}
          title={outcomes.title}
          description={outcomes.description}
          theme="dark"
        />
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {outcomes.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <div className="h-full rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,#ffffff_0%,#faf7f4_100%)] p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premium">
              <div className="mb-5 inline-flex rounded-full border border-papaya/16 bg-papaya/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-papaya">
                Outcome {index + 1}
              </div>
              <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-charcoal">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-charcoal/70">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
