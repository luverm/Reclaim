import { CtaSection } from "@/components/marketing/cta-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { Footer } from "@/components/marketing/footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { Navbar } from "@/components/marketing/navbar";
import { OutcomeSection } from "@/components/marketing/outcome-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import { RoiSection } from "@/components/marketing/roi-section";

export default function Home() {
  return (
    <main className="bg-mesh">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <OutcomeSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RoiSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
