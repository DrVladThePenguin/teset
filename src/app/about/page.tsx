import type { Metadata } from "next";

import {
  AboutFounders,
  AboutHero,
  AboutMission,
  AboutVision,
} from "@/components/about/about-content";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { SiteBackground } from "@/components/landing/site-background";
import { SiteFooter } from "@/components/landing/site-footer";
import {
  SiteHeaderChrome,
  SitePillNav,
} from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "About Us | Purplelens.ai",
  description:
    "In the digital landscape, where cyber threats are becoming more sophisticated, we provide a comprehensive range of cybersecurity services and solutions to help companies of all sizes stay secure.",
};

export default function AboutPage() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeaderChrome />
        <SitePillNav />
        <main className="flex-1">
          <AboutHero />
          <AboutVision />
          <AboutMission />
          <AboutFounders />
          <FinalCtaSection
            title="Ready to Run Your Pentest?"
            body="Get evidence-based insights into vulnerabilities across your attack surface."
            primaryLabel="Signup now"
            secondaryLabel="Book a Demo"
          />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
