import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionShell } from "@/components/marketing/section-shell";

export function ProblemSection() {
  const { problem } = siteContent;

  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow={problem.eyebrow}
            title={problem.title}
            description={problem.description}
            theme="dark"
          />
        </Reveal>
        <div className="grid gap-4">
          {problem.painPoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.08}>
              <div className="group rounded-[28px] border border-white/10 bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-papaya">
                      Pain point {index + 1}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-charcoal">
                      {point}
                    </h3>
                  </div>
                  <div className="mt-1 h-3 w-3 rounded-full bg-papaya transition-transform duration-300 group-hover:scale-125" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
