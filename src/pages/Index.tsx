import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSubscription } from "@/components/sections/HowItWorksSubscription";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { testimonials, TestimonialCard } from "@/pages/Results";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

const homeTestimonials = [testimonials[0], testimonials[2], testimonials[4]];

const trust = ["One flat monthly rate", "Senior operators, no juniors", "Pause or cancel anytime"];

const builtFor = [
  { name: "Med Spas", to: "/med-spas" },
  { name: "Home Services", to: "/home-services" },
  { name: "Health Practices", to: "/health-practices" },
];

export default function Index() {
  return (
    <Layout>
      <Seo
        title="Aurex | Your Marketing Department on Subscription"
        description="Aurex is a productized marketing agency. Funnels, campaigns, social media, CRM, and client systems for one flat monthly fee. Request what you need, we build and launch it. Based in North Mississippi, serving clients nationwide."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Aurex",
          alternateName: "Aurex Agency",
          url: "https://www.aurexagency.com/",
          description:
            "Productized marketing subscription agency offering marketing, funnel building, social media management, CRM, and client systems for a flat monthly fee.",
          address: { "@type": "PostalAddress", addressRegion: "MS", addressCountry: "US" },
          areaServed: ["North Mississippi", "United States"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: String(testimonials.length),
            bestRating: "5",
            worstRating: "1",
          },
        }}
      />

      {/* HERO */}
      <section className="relative pt-36 lg:pt-48 pb-20 lg:pb-24 surface-cream overflow-hidden">
        <div className="absolute inset-0 mesh-amber pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container relative">
          <Reveal>
            <div className="flex items-center justify-between border-b hairline pb-6 mb-12">
              <p className="eyebrow eyebrow-amber">Marketing on subscription</p>
              <p className="label-mono hidden sm:block">Senior operators · Pause anytime</p>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5rem] xl:leading-[0.98] text-foreground tracking-tight text-balance max-w-5xl">
              Your entire marketing department,{" "}
              <span className="italic text-accent">for one flat monthly fee.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 text-xl text-foreground/70 max-w-2xl text-pretty">
              Funnels, campaigns, social media, CRM, and the systems that run your customer relationships.
              Request what you need on your board, we build and launch it. No contracts, no retainers, no drama.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/pricing" className="btn-amber h-14 px-8 text-base cursor-pointer">
                See plans & pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/book" className="btn-ghost-ink h-14 px-8 text-base cursor-pointer">Book a 15-min intro call</Link>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-foreground/70">
                  <Check className="w-4 h-4 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ServicesSection />

      <HowItWorksSubscription />

      <BenefitsSection />

      <ComparisonSection />

      <PricingSection />

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 surface-cream">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-4">Client results</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-3xl mb-5 text-balance leading-tight">
              Operator-to-operator wins across the South.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {homeTestimonials.map((t, i) => (
              <TestimonialCard key={t.business} t={t} delay={i * 0.07} />
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-foreground/45 italic">
                Illustrative testimonials shown while real, verified case studies are in client approval.
              </p>
              <Link to="/results" className="text-accent font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                See all results <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BUILT FOR */}
      <section className="py-16 surface-cream-warm">
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="label-mono">Built for local service businesses in North Mississippi & beyond</p>
          <div className="flex flex-wrap gap-3">
            {builtFor.map((b) => (
              <Link
                key={b.name}
                to={b.to}
                className="px-4 py-2 rounded-full border hairline text-sm text-foreground/75 bg-card hover:border-accent/45 hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                {b.name} <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            ))}
            <Link to="/marketing" className="px-4 py-2 rounded-full text-sm text-accent hover:underline underline-offset-4 inline-flex items-center gap-1.5">
              All locations <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <FaqSection />

      <FinalCTASection />
    </Layout>
  );
}
