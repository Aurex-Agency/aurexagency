import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSubscription } from "@/components/sections/HowItWorksSubscription";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { services } from "@/data/productized";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <Layout>
      <Seo
        title="Services | Marketing, Funnels, Social, CRM | Aurex"
        description="Everything you can request on an Aurex subscription: marketing strategy and campaigns, funnel building, social media management, CRM setup, client workflows, and client communication systems."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Aurex marketing services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.body },
          })),
        }}
      />

      <section className="relative pt-36 lg:pt-44 pb-4 surface-cream overflow-hidden">
        <div className="absolute inset-0 mesh-amber pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-6">Services</p>
            <h1 className="font-display text-5xl lg:text-7xl text-foreground tracking-tight text-balance max-w-4xl">
              One subscription.{" "}
              <span className="italic text-accent">Everything marketing.</span>
            </h1>
            <p className="mt-7 text-xl text-foreground/65 max-w-2xl text-pretty">
              From strategy to funnels to the CRM that runs your client relationships, add any of it to your
              board and we build, launch, and maintain it. No scope limits, no change orders.
            </p>
            <div className="mt-8">
              <Link to="/pricing" className="btn-amber h-14 px-8 text-base cursor-pointer">
                See plans & pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ServicesSection eyebrow="What you can request" title="The full marketing stack, done for you." surface="surface-cream" />

      <HowItWorksSubscription surface="surface-cream-warm" />

      <BenefitsSection />

      <PricingSection surface="surface-cream" />

      <FinalCTASection />
    </Layout>
  );
}
