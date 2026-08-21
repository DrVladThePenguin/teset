import type { Metadata } from "next";
import { SiteBackground } from "@/components/landing/site-background";
import {
  SiteHeaderChrome,
  SitePillNav,
} from "@/components/landing/site-header";
import {
  CapabilitiesHero,
  CapabilitiesIndex,
  CapabilitiesSections,
} from "@/components/capabilities/capabilities-content";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { SiteFooter } from "@/components/landing/site-footer";

export const metadata: Metadata = {
  title: "Capabilities | Purplelens.ai",
  description:
    "PurpleLens’s Platform combines the best of human and machine intelligence to provide you with the most comprehensive and effective security solution for your organization's digital assets and data.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeaderChrome />
        <SitePillNav />
        <main className="flex-1">
          <CapabilitiesHero />
          <CapabilitiesIndex />
          <CapabilitiesSections />
          <FinalCtaSection
            title="Ready to Run Your Pentest?"
            body="See a demo of our platform today and see what PurpleLens can do for your business."
            primaryLabel="Sign up now"
            secondaryLabel="Book a Demo"
          />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
