import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionShell } from "@/components/marketing/section-shell";

export function RoiSection() {
  const { roi } = siteContent;

  return (
    <SectionShell id="roi">
      <div className="rounded-[40px] border border-white/10 bg-[linear-gradient(135deg,#fff8f2_0%,#ffffff_46%,#f7f4ef_100%)] px-6 py-10 text-charcoal shadow-card sm:px-8 sm:py-14 lg:px-12">
        <Reveal>
          <SectionHeading eyebrow={roi.eyebrow} title={roi.title} />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {roi.metrics.map((metric, index) => (
            <Reveal key={metric.value} delay={index * 0.08}>
              <div className="rounded-[28px] border border-charcoal/8 bg-white p-6">
                <p className="font-display text-3xl font-bold tracking-[-0.05em] text-charcoal">
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
