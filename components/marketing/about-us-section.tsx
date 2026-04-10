import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionShell } from "@/components/marketing/section-shell";

export function AboutUsSection() {
  const { aboutUs } = siteContent;

  return (
    <SectionShell id="about-us">
      <Reveal>
        <SectionHeading
          eyebrow={aboutUs.eyebrow}
          title={aboutUs.title}
          description={aboutUs.description}
          theme="dark"
        />
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {aboutUs.values.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <div className="h-full rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,#ffffff_0%,#faf7f4_100%)] p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premium sm:rounded-[30px] sm:p-7">
              <h3 className="font-display text-xl font-bold tracking-[-0.04em] text-charcoal sm:text-2xl">
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
