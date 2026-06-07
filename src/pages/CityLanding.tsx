import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import NotFound from "@/pages/NotFound";
import { getCity, nearbyCities } from "@/data/cities";
import { DatabaseZap, PhoneOff, Clock, CalendarX, Star, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

const services = [
  { icon: DatabaseZap, title: "Reactivate past customers", body: "Turn the customers already in your database into booked revenue with targeted text and email offers." },
  { icon: PhoneOff, title: "Capture every missed call", body: "Instant text-back on missed calls so the jobs and appointments stop going to your competitors." },
  { icon: Clock, title: "5-minute lead response", body: "Every form, ad, and message gets a human-quality reply in under five minutes, around the clock." },
  { icon: CalendarX, title: "Cut no-shows", body: "Automated reminders by text and email keep your calendar full and your chairs and trucks busy." },
  { icon: Star, title: "Win more 5-star reviews", body: "Automated review requests lift your rating and your rank in local search results." },
];

const industries = [
  { name: "Med Spas", to: "/med-spas" },
  { name: "Home Services", to: "/home-services" },
  { name: "Health Practices", to: "/health-practices" },
];

export default function CityLanding() {
  const { citySlug } = useParams();
  const city = getCity(citySlug);

  if (!city) return <NotFound />;

  const near = nearbyCities(city.slug, 6);
  const distanceLine =
    city.miles === 0
      ? "Aurex is based right here in New Albany."
      : `About ${city.miles} miles from our New Albany home base.`;

  return (
    <Layout>
      <Seo
        title={`Marketing Agency in ${city.name}, MS | Aurex`}
        description={`Aurex is a marketing agency serving ${city.name}, Mississippi (${city.county}). We help local businesses book more revenue from missed calls, slow follow-up, and dormant customers, with proof in 30 days before you spend on ads.`}
        path={`/marketing/${city.slug}`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `Aurex - Marketing Agency serving ${city.name}, MS`,
            url: `https://www.aurexagency.com/marketing/${city.slug}`,
            description: `Marketing agency serving ${city.name}, ${city.county}, Mississippi. Lead capture, fast follow-up, customer reactivation, and review systems for local businesses.`,
            address: { "@type": "PostalAddress", addressRegion: "MS", addressCountry: "US" },
            areaServed: { "@type": "City", name: `${city.name}, Mississippi` },
            knowsAbout: [
              "local business marketing",
              "lead generation",
              "missed call text-back",
              "customer reactivation",
              "review generation",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aurexagency.com/" },
              { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.aurexagency.com/marketing" },
              { "@type": "ListItem", position: 3, name: `${city.name}, MS`, item: `https://www.aurexagency.com/marketing/${city.slug}` },
            ],
          },
        ]}
      />

      {/* HERO */}
      <section className="relative pt-36 lg:pt-44 pb-20 lg:pb-24 surface-cream overflow-hidden">
        <div className="absolute inset-0 mesh-amber pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container relative">
          <Reveal>
            <div className="flex items-center justify-between border-b hairline pb-6 mb-12">
              <p className="eyebrow eyebrow-amber">Marketing in {city.name}, MS</p>
              <p className="label-mono hidden sm:flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> {city.county}
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <h1 className="font-display text-[2.5rem] leading-[1.04] sm:text-6xl lg:text-7xl text-foreground tracking-tight text-balance max-w-4xl">
                  Marketing agency in {city.name}, Mississippi.{" "}
                  <span className="italic text-accent">Built for local revenue.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.12}>
                <p className="text-base lg:text-lg text-foreground/65 text-pretty lg:border-l hairline lg:pl-6">
                  {city.blurb} {distanceLine}
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-foreground/65 max-w-3xl text-pretty">
              Aurex helps {city.name} businesses book more revenue from the customers they already have.
              We install the lead-capture, follow-up, and reactivation systems that turn missed calls, slow
              replies, and a quiet database into booked jobs and appointments, and we prove it in 30 days
              before you spend a dollar on ads.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/book" className="btn-amber h-14 px-8 text-base cursor-pointer">
                Get Your Free Revenue Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/results" className="btn-ghost-ink h-14 px-8 text-base cursor-pointer">See Client Results</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 surface-cream-warm">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-4">What we do for {city.name} businesses</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-3xl mb-5 text-balance leading-tight">
              Five systems that turn missed revenue into booked revenue.
            </h2>
            <p className="text-lg text-foreground/65 max-w-2xl text-pretty">
              Whether you run a med spa, a home service company, or a health practice in {city.name}, the
              leaks are the same, and so is the fix.
            </p>
          </Reveal>
          <div className="mt-16 border-t hairline">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-8 border-b hairline transition-colors hover:bg-foreground/[0.02]">
                  <div className="md:col-span-5 flex items-center gap-5">
                    <span className="section-index text-2xl lg:text-3xl tnum w-12 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <div className="mark w-11 h-11"><s.icon className="w-5 h-5" /></div>
                    <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                  </div>
                  <p className="md:col-span-7 text-foreground/65 leading-relaxed md:pl-8 md:border-l hairline">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <span className="label-mono mr-1">Industries we serve in {city.name}:</span>
              {industries.map((ind) => (
                <Link
                  key={ind.name}
                  to={ind.to}
                  className="px-4 py-2 rounded-full border hairline text-sm text-foreground/75 bg-card hover:border-accent/45 hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  {ind.name} <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ProblemSection
        eyebrow={`The five revenue leaks in ${city.name}`}
        title={`Where ${city.name} businesses lose revenue every week.`}
      />

      <GuaranteeSection />

      {/* NEARBY */}
      <section className="py-20 lg:py-24 surface-cream">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-4">Nearby areas we serve</p>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground max-w-3xl mb-8 text-balance leading-tight">
              Marketing help across North Mississippi.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="flex flex-wrap gap-2.5">
              {near.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/marketing/${c.slug}`}
                    className="px-4 py-2 rounded-full border hairline text-sm text-foreground/75 bg-card hover:border-accent/45 hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                  >
                    {c.name}, MS <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/marketing" className="px-4 py-2 rounded-full text-sm text-accent hover:underline underline-offset-4 inline-flex items-center gap-1.5">
                  View all locations <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <FinalCTASection
        eyebrow={`Free revenue audit for ${city.name}`}
        title={`Show us your ${city.name} business. We will show you the revenue hiding in it.`}
        sub={`A 30 minute call with a real operator. We map your five revenue leaks, run the numbers, and show you exactly what your first 30 days in ${city.name} would look like.`}
      />
    </Layout>
  );
}
