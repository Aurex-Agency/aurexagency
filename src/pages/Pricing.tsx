import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { PricingSection } from "@/components/sections/PricingSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { plans } from "@/data/productized";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <Layout>
      <Seo
        title="Pricing | Marketing Subscription Plans | Aurex"
        description="Simple, flat monthly pricing for your marketing department. Funnels, campaigns, social, CRM, and client systems on subscription. Pause or cancel anytime. Sample pricing shown."
        path="/pricing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Aurex marketing subscription plans",
          itemListElement: plans.map((p) => ({
            "@type": "Offer",
            name: p.name,
            price: p.price.replace(/[^0-9]/g, ""),
            priceCurrency: "USD",
            description: p.tagline,
          })),
        }}
      />

      <section className="relative pt-36 lg:pt-44 pb-4 surface-cream overflow-hidden">
        <div className="absolute inset-0 mesh-amber pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-6">Pricing</p>
            <h1 className="font-display text-5xl lg:text-7xl text-foreground tracking-tight text-balance max-w-4xl">
              One flat fee. Your whole{" "}
              <span className="italic text-accent">marketing department.</span>
            </h1>
            <p className="mt-7 text-xl text-foreground/65 max-w-2xl text-pretty">
              No hourly billing. No surprise invoices. No long contracts. Just senior marketing on tap,
              for a predictable monthly rate you can pause or cancel anytime.
            </p>
            <div className="mt-8">
              <Link to="/book" className="btn-amber h-14 px-8 text-base cursor-pointer">
                Book a 15-min intro call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <PricingSection eyebrow="Choose your plan" title="Plans that scale with you." surface="surface-cream" />

      <ComparisonSection surface="surface-cream-warm" />

      <FaqSection surface="surface-cream" />

      <FinalCTASection />
    </Layout>
  );
}
