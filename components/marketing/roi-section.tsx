import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionShell } from "@/components/marketing/section-shell";

export function RoiSection() {
  const { roi } = siteContent;

  return (
    <SectionShell id="roi">
      <div className="rounded-[40px] border border-charcoal/8 bg-[linear-gradient(135deg,#151517_0%,#111214_52%,#1a1b1f_100%)] px-6 py-10 text-white shadow-premium sm:px-8 sm:py-14 lg:px-12">
        <Reveal>
          <SectionHeading eyebrow={roi.eyebrow} title={roi.title} theme="dark" />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {roi.metrics.map((metric, index) => (
            <Reveal key={metric.value} delay={index * 0.08}>
              <div className="rounded-[28px] border border-white/8 bg-white/5 p-6">
                <p className="font-display text-3xl font-bold tracking-[-0.05em] text-white">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/68">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
