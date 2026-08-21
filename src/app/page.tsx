import { SiteBackground } from "@/components/landing/site-background";
import {
  SiteHeaderChrome,
  SitePillNav,
} from "@/components/landing/site-header";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustedBySection } from "@/components/landing/trusted-by-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { AwardSection } from "@/components/landing/award-section";
import { ProofSection } from "@/components/landing/proof-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { VideoCtaSection } from "@/components/landing/video-cta-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeaderChrome />
        <SitePillNav />
        <main className="flex-1">
          <HeroSection />
          <TrustedBySection />
          <ProblemSection />
          <AwardSection />
          <ProofSection />
          <ProcessSection />
          <ComparisonSection />
          <MetricsSection />
          <VideoCtaSection />
          <FinalCtaSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
