import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionShell } from "@/components/marketing/section-shell";

export function RoiSection() {
  const { roi } = siteContent;

  return (
    <SectionShell id="roi">
      <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,#fff8f2_0%,#ffffff_46%,#f7f4ef_100%)] px-5 py-8 text-charcoal shadow-card sm:rounded-[40px] sm:px-8 sm:py-14 lg:px-12">
        <Reveal>
          <SectionHeading eyebrow={roi.eyebrow} title={roi.title} />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {roi.metrics.map((metric, index) => (
            <Reveal key={metric.value} delay={index * 0.08}>
              <div className="rounded-[28px] border border-charcoal/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <p className="font-display text-2xl font-bold tracking-[-0.05em] text-charcoal sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-charcoal/68">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
