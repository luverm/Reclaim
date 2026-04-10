import { AboutUsSection } from "@/components/marketing/about-us-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { Footer } from "@/components/marketing/footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { Navbar } from "@/components/marketing/navbar";
import { OutcomeSection } from "@/components/marketing/outcome-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import { RoiSection } from "@/components/marketing/roi-section";
import { SiteTrendBackground } from "@/components/marketing/site-trend-background";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-mesh text-white">
      <SiteTrendBackground />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <OutcomeSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RoiSection />
      <AboutUsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
