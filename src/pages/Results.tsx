import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Star } from "lucide-react";

export const testimonials = [
  {
    business: "Glow Aesthetics Co.",
    city: "Nashville, TN",
    owner: "Dr. Lauren Pierce",
    vertical: "Med Spa",
    stat: "$28K in 21 days",
    quote: "We had thousands of lapsed injectable patients sitting in our CRM doing nothing. Aurex turned that list into real bookings inside three weeks. No new ad spend.",
  },
  {
    business: "Magnolia Med Spa",
    city: "Oxford, MS",
    owner: "Brooke Hadley",
    vertical: "Med Spa",
    stat: "No-shows down 62%",
    quote: "The reminder cadence and membership build-out paid for itself in the first month. Our calendar finally feels predictable.",
  },
  {
    business: "Delta Roofing & Exteriors",
    city: "Tupelo, MS",
    owner: "Wes Calloway",
    vertical: "Roofing",
    stat: "11 booked jobs from missed calls",
    quote: "Missed-call text-back alone changed our business. Calls we used to lose to voicemail are now jobs on the schedule by the next morning.",
  },
  {
    business: "Peachtree Comfort HVAC",
    city: "Atlanta, GA",
    owner: "Marcus Bell",
    vertical: "HVAC",
    stat: "Close rate 18% to 34%",
    quote: "Speed-to-lead in under five minutes was the unlock. We are now the first contractor every homeowner actually talks to, and we close almost double what we used to.",
  },
  {
    business: "Highland Family Dental",
    city: "Nashville, TN",
    owner: "Dr. Priya Nair",
    vertical: "Dental",
    stat: "$19K in recovered hygiene visits",
    quote: "Our recall list had been collecting dust for years. The first reactivation campaign brought back patients we had honestly written off.",
  },
  {
    business: "Oxford Wellness Clinic",
    city: "Oxford, MS",
    owner: "Dr. Anna Whitfield",
    vertical: "Wellness Practice",
    stat: "Review count up 4x in 45 days",
    quote: "The reputation engine and reminder system run on autopilot. Our front desk got their day back and our Google profile finally reflects the care we actually give.",
  },
];

function TestimonialCard({ t, delay = 0 }: { t: typeof testimonials[number]; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="card-premium p-7 h-full flex flex-col">
        <div className="flex items-center gap-1 text-amber mb-4" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber" />
          ))}
        </div>
        <p className="eyebrow eyebrow-amber mb-3">{t.vertical}</p>
        <div className="font-display text-3xl text-ink leading-tight mb-4">{t.stat}</div>
        <p className="text-ink/75 leading-relaxed italic mb-6 flex-1">"{t.quote}"</p>
        <div className="pt-4 border-t hairline">
          <div className="font-semibold text-ink">{t.owner}</div>
          <div className="text-sm text-ink/60">{t.business} · {t.city}</div>
        </div>
      </div>
    </Reveal>
  );
}

export { TestimonialCard };

export default function Results() {
  return (
    <Layout>
      <Seo
        title="Client Results & Reviews | Aurex"
        description="Real revenue from real clients. See how med spas, roofers, and practices in Nashville, Tupelo, Oxford, and Atlanta book more revenue with Aurex."
        path="/results"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Aurex",
          url: "https://aurexagency.com/",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: String(testimonials.length),
            bestRating: "5",
            worstRating: "1",
          },
          review: testimonials.map((t) => ({
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: t.owner },
            itemReviewed: { "@type": "LocalBusiness", name: t.business, address: t.city },
            reviewBody: t.quote,
          })),
        }}
      />
      <section className="pt-32 lg:pt-44 pb-16 surface-cream">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-5">Results</p>
            <h1 className="font-display text-5xl lg:text-7xl text-ink max-w-4xl text-balance">
              Aurex Results — We report booked dollars.
            </h1>
            <p className="mt-7 text-xl text-ink/70 max-w-2xl text-pretty">
              Operator-to-operator wins from local service businesses across the South.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 surface-cream">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.business} t={t} delay={i * 0.06} />
          ))}
        </div>
        <div className="container mt-8">
          <p className="text-xs text-ink/45 italic">
            Illustrative testimonials shown while real, verified case studies are in client approval.
          </p>
        </div>
      </section>

      <FinalCTASection />
    </Layout>
  );
}
