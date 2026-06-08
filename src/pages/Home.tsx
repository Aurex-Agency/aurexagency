import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { PainOutcome } from "@/components/sections/PainOutcome";
import { SystemProcess } from "@/components/sections/SystemProcess";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { SoloAdvantage } from "@/components/sections/SoloAdvantage";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FounderLetter } from "@/components/sections/FounderLetter";
import { FinalCta } from "@/components/sections/FinalCta";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <div className="bg-bone text-coal min-h-screen antialiased">
      <Seo
        title="Aurex | Marketing Systems for North Mississippi Businesses"
        description="Aurex builds and runs the marketing system that makes your business run itself: AI front desk, lead recovery, funnels, social, and CRM. Transparent monthly pricing. No contracts, pause anytime. Tupelo, Oxford, Ripley and beyond."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Aurex",
          alternateName: "Aurex Agency",
          url: "https://www.aurexagency.com/",
          description:
            "Productized marketing systems agency in North Mississippi. AI front desk, lead recovery, funnels, social media, CRM, and automation for a flat monthly fee.",
          address: { "@type": "PostalAddress", addressRegion: "MS", addressCountry: "US" },
          areaServed: ["North Mississippi", "Tupelo, MS", "Oxford, MS", "Ripley, MS", "United States"],
        }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <PainOutcome />
        <SystemProcess />
        <ServicesGrid />
        <PricingTiers />
        <SoloAdvantage />
        <ResultsSection />
        <FaqAccordion />
        <FounderLetter />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
