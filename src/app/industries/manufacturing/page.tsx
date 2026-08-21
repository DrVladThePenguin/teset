import type { Metadata } from "next";

import { ManufacturingContent } from "@/components/industries/manufacturing-content";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { SiteBackground } from "@/components/landing/site-background";
import { SiteFooter } from "@/components/landing/site-footer";
import {
  SiteHeaderChrome,
  SitePillNav,
} from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions for Modern Manufacturing | Purplelens.ai",
  description:
    "The manufacturing sector is undergoing a digital transformation that's revolutionizing production efficiency.",
};

export default function ManufacturingPage() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeaderChrome />
        <SitePillNav />
        <main className="flex-1">
          <ManufacturingContent />
          <FinalCtaSection
            title="Ready to Run Your Pentest?"
            body="Get evidence-based insights into exploitable risks across your attack surface."
            primaryLabel="Signup now"
            secondaryLabel="Book a Demo"
          />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
