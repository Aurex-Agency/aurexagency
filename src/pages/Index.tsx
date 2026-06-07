import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { testimonials, TestimonialCard } from "@/pages/Results";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ShieldCheck, Target, BarChart3, Wrench } from "lucide-react";
import { cities } from "@/data/cities";

const homeTestimonials = [testimonials[0], testimonials[2], testimonials[4]];


const differentiators = [
  { icon: Target, title: "Proof first, scale second", body: "We do not touch ad spend until the foundation is converting. You see attributable revenue before you fund growth." },
  { icon: BarChart3, title: "We report booked dollars", body: "Not impressions. Not reach. Not followers. The only number on our dashboard is revenue we can tie back to the system." },
  { icon: Wrench, title: "Done for you", body: "You give us access. We build, launch, manage, and optimize. Your team keeps doing what they do best." },
  { icon: ShieldCheck, title: "Built on what works", body: "Boring, proven plays executed at a high level. No chasing the trend of the month. No AI theater." },
];

const industries = [
  { name: "Med Spas", desc: "Fill the calendar with injectables, memberships, and lapsed-patient rebookings.", to: "/med-spas" },
  { name: "Home Services", desc: "Turn missed calls and old quotes into booked jobs for roofers, HVAC, and plumbers.", to: "/home-services" },
  { name: "Health Practices", desc: "Recall earned patients and cut no-shows with reminders the research already validates.", to: "/health-practices" },
];

const heroStats = [
  { value: "30", unit: "days", label: "to proven, attributable revenue" },
  { value: "21×", unit: "", label: "more leads qualified at 5-min response" },
  { value: "$0", unit: "", label: "ad spend until the system converts" },
];

export default function Index() {
  return (
    <Layout>
      <Seo
        title="North Mississippi Marketing Agency for Local Businesses | Aurex"
        description="Aurex is a North Mississippi marketing agency serving Oxford, Tupelo, Southaven and the Memphis area. We help local service businesses book more revenue from missed calls, slow follow-up, and dormant customers, with proof in 30 days before you spend on ads."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Aurex",
          alternateName: "Aurex Agency",
          url: "https://www.aurexagency.com/",
          description:
            "North Mississippi marketing agency helping local service businesses book more revenue with lead capture, fast follow-up, and customer reactivation systems.",
          address: { "@type": "PostalAddress", addressRegion: "MS", addressCountry: "US" },
          areaServed: [
            "North Mississippi",
            "Oxford, MS",
            "Tupelo, MS",
            "Southaven, MS",
            "Olive Branch, MS",
            "Memphis, TN",
          ],
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
      <section className="relative pt-36 lg:pt-48 pb-0 surface-cream overflow-hidden">
        <div className="absolute inset-0 mesh-amber pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container relative">
          {/* Meta row */}
          <Reveal>
            <div className="flex items-center justify-between border-b hairline pb-6 mb-12">
              <p className="eyebrow eyebrow-amber">The ROI-first growth partner</p>
              <p className="label-mono hidden sm:block">North Mississippi · Nationwide</p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal>
                <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.25rem] xl:leading-[0.98] text-foreground tracking-tight text-balance">
                  Your next month of revenue is already sitting in your database.{" "}
                  <span className="italic text-accent">We prove it in 30 days.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-3">
              <Reveal delay={0.12}>
                <p className="text-base lg:text-lg text-foreground/65 text-pretty lg:border-l hairline lg:pl-6">
                  We install the systems that turn the assets you already own, like dormant customers, missed calls, slow follow-up, no-shows, and weak reviews, into booked revenue. Before you spend another dollar on ads.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a href="#audit" className="btn-amber h-14 px-8 text-base">
                Get Your Free Revenue Audit <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#how" className="btn-ghost-ink h-14 px-8 text-base">See How It Works</a>
            </div>
          </Reveal>

          {/* Credibility stat strip */}
          <Reveal delay={0.28}>
            <dl className="mt-20 grid grid-cols-1 sm:grid-cols-3 border-t hairline">
              {heroStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`py-8 sm:py-10 ${i === 0 ? "sm:pr-8" : "sm:px-8 border-t sm:border-t-0 sm:border-l hairline"}`}
                >
                  <dt className="font-display text-5xl lg:text-6xl text-foreground tnum tracking-tight">
                    {s.value}
                    {s.unit && <span className="text-2xl lg:text-3xl text-foreground/50 ml-1">{s.unit}</span>}
                  </dt>
                  <dd className="mt-3 text-sm text-foreground/55 max-w-[16rem] leading-relaxed">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <ProblemSection />

      <div id="how"><HowItWorksSection /></div>

      {/* DIFFERENTIATORS - editorial split */}
      <section className="py-24 lg:py-32 surface-cream">
        <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow eyebrow-amber mb-5">Why Aurex is different</p>
                <h2 className="font-display text-4xl lg:text-5xl text-foreground text-balance leading-tight">
                  Not your last agency. The one that finally moves the number.
                </h2>
                <p className="mt-5 text-foreground/60 text-pretty max-w-sm">
                  Most agencies bill you for reach and followers while your phone keeps going to voicemail. We do the opposite.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t hairline">
              {differentiators.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.05}>
                  <div className="group flex gap-6 py-7 border-b hairline transition-colors hover:bg-foreground/[0.02]">
                    <span className="section-index text-sm pt-1 tnum w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <div className="mark w-11 h-11">
                      <d.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl lg:text-2xl text-foreground mb-2">{d.title}</h3>
                      <p className="text-foreground/65 leading-relaxed">{d.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProofSection />

      {/* INDUSTRIES */}
      <section className="py-24 lg:py-32 surface-cream">
        <div className="container">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <p className="eyebrow eyebrow-amber mb-4">Industries we serve</p>
                <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-2xl text-balance leading-tight">
                  Built for local service businesses where every lead is real money.
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-[hsl(var(--hairline))] border hairline rounded-xl overflow-hidden">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.08} className="h-full">
                <Link to={ind.to} className="group flex flex-col h-full p-8 bg-card hover:bg-secondary transition-colors">
                  <span className="section-index text-sm tnum mb-8">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-3">{ind.name}</h3>
                  <p className="text-foreground/60 leading-relaxed mb-8 flex-1">{ind.desc}</p>
                  <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                    Explore the system <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL BAND */}
      <section className="py-20 lg:py-28 surface-cream-warm">
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


      {/* AREAS WE SERVE - local SEO */}
      <section className="py-24 lg:py-32 surface-cream">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-4">Where we work</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-3xl mb-5 text-balance leading-tight">
              Marketing help for local businesses across North Mississippi.
            </h2>
            <p className="text-lg text-foreground/65 max-w-2xl text-pretty">
              Aurex is based in North Mississippi and partners with med spas, home service companies, and
              health practices throughout the region and the greater Memphis area. If your business runs on
              local customers, we help you capture and book more of them.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-12 flex flex-wrap gap-2.5">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/marketing/${c.slug}`}
                    className="px-4 py-2 rounded-full border hairline text-sm text-foreground/75 bg-card hover:border-accent/45 hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                  >
                    {c.name} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/marketing"
                  className="px-4 py-2 rounded-full text-sm text-accent hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                >
                  View all locations <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-sm text-foreground/55 max-w-3xl">
              Proudly serving Oxford, Tupelo, Southaven, Olive Branch, and surrounding North Mississippi and
              West Tennessee communities. Work with us remotely from anywhere your local service business needs growth.
            </p>
          </Reveal>
        </div>
      </section>

      <GuaranteeSection />

      <FinalCTASection />
    </Layout>
  );
}
