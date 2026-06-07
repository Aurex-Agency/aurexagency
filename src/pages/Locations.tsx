import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { cities } from "@/data/cities";
import { ArrowUpRight } from "lucide-react";

export default function Locations() {
  return (
    <Layout>
      <Seo
        title="Marketing Agency Serving North Mississippi | Locations | Aurex"
        description="Aurex provides marketing help to local businesses across North Mississippi, including Oxford, Tupelo, Pontotoc, Ripley, Booneville, Corinth, and more within 45 miles of New Albany."
        path="/marketing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Aurex marketing service areas in North Mississippi",
          itemListElement: cities.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `Marketing Agency in ${c.name}, MS`,
            url: `https://www.aurexagency.com/marketing/${c.slug}`,
          })),
        }}
      />

      <section className="relative pt-36 lg:pt-44 pb-16 surface-cream overflow-hidden">
        <div className="absolute inset-0 mesh-amber pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-6">Locations</p>
            <h1 className="font-display text-5xl lg:text-7xl text-foreground tracking-tight text-balance max-w-4xl">
              Marketing help across{" "}
              <span className="italic text-accent">North Mississippi.</span>
            </h1>
            <p className="mt-7 text-xl text-foreground/65 max-w-2xl text-pretty">
              Based in New Albany and serving local businesses within about 45 miles. Find your town below,
              or reach out from anywhere in the region.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 surface-cream">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--hairline))] border hairline rounded-xl overflow-hidden">
            {cities.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.05} className="h-full">
                <Link
                  to={`/marketing/${c.slug}`}
                  className="group flex flex-col h-full p-7 bg-card hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-display text-2xl text-foreground">{c.name}, MS</h2>
                    <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="label-mono mb-3">{c.county}</p>
                  <p className="text-foreground/60 leading-relaxed text-sm flex-1">{c.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-accent font-medium text-sm">
                    Marketing in {c.name} <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </Layout>
  );
}
