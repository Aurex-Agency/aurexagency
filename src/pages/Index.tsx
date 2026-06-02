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
import { ArrowRight, Sparkle, Stethoscope, Hammer, HeartPulse, ShieldCheck, Target, BarChart3, Wrench } from "lucide-react";

const homeTestimonials = [testimonials[0], testimonials[2], testimonials[4]];


const differentiators = [
  { icon: Target, title: "Proof first, scale second", body: "We do not touch ad spend until the foundation is converting. You see attributable revenue before you fund growth." },
  { icon: BarChart3, title: "We report booked dollars", body: "Not impressions. Not reach. Not followers. The only number on our dashboard is revenue we can tie back to the system." },
  { icon: Wrench, title: "Done for you", body: "You give us access. We build, launch, manage, and optimize. Your team keeps doing what they do best." },
  { icon: ShieldCheck, title: "Built on what works", body: "Boring, proven plays executed at a high level. No chasing the trend of the month. No AI theater." },
];

const industries = [
  { icon: Sparkle, name: "Med Spas", desc: "Fill the calendar with injectables, memberships, and lapsed-patient rebookings.", to: "/med-spas" },
  { icon: Hammer, name: "Home Services", desc: "Turn missed calls and old quotes into booked jobs for roofers, HVAC, and plumbers.", to: "/home-services" },
  { icon: HeartPulse, name: "Health Practices", desc: "Recall earned patients and cut no-shows with reminders the research already validates.", to: "/health-practices" },
];

export default function Index() {
  return (
    <Layout>
      <Seo
        title="Aurex | ROI-First Growth for Local Service Businesses"
        description="Aurex turns dormant customers, missed calls, and slow follow-up into booked revenue in 30 days, before you spend a dollar on ads."
        path="/"
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
        }}
      />
      {/* HERO */}
      <section className="relative pt-32 lg:pt-44 pb-24 lg:pb-32 surface-cream overflow-hidden">
        <div className="absolute inset-0 mesh-amber opacity-50 pointer-events-none" />
        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-6">The ROI-first growth partner</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ink leading-[1.02] tracking-tight max-w-5xl text-balance">
              Your next month of revenue is already sitting in your database. We will prove it in 30 days.
            </h1>
            <p className="mt-8 text-xl lg:text-2xl text-ink/70 max-w-3xl text-pretty">
              Aurex installs the systems that turn the assets you already own, dormant customers, missed calls, slow follow-up, no-shows, weak reviews, into booked revenue. Before you spend another dollar on ads.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#audit" className="btn-amber h-14 px-7 text-base">
                Get Your Free Revenue Audit <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#how" className="btn-ghost-ink h-14 px-7 text-base">See How It Works</a>
            </div>
            <p className="mt-6 text-sm text-ink/55">North Mississippi based. Serving local service businesses nationwide.</p>
          </Reveal>
        </div>
      </section>

      <ProblemSection />

      <div id="how"><HowItWorksSection /></div>

      {/* DIFFERENTIATORS */}
      <section className="py-24 lg:py-32 surface-cream">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-4">Why Aurex is different</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink max-w-3xl mb-5 text-balance">
              We are not your last agency. We are the one that finally moves the number.
            </h2>
            <p className="text-lg text-ink/70 max-w-2xl text-pretty">
              Most agencies bill you for reach and followers while your phone keeps going to voicemail. We do the opposite.
            </p>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <div className="card-premium p-7 h-full flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-ink text-amber flex items-center justify-center shrink-0">
                    <d.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-ink mb-2">{d.title}</h3>
                    <p className="text-ink/70 leading-relaxed">{d.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProofSection />

      {/* INDUSTRIES */}
      <section className="py-24 lg:py-32 surface-cream">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-4">Industries we serve</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink max-w-3xl mb-5 text-balance">
              Built for local service businesses where every lead is real money.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.08}>
                <Link to={ind.to} className="block card-premium p-7 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber-deep flex items-center justify-center mb-5">
                    <ind.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-2">{ind.name}</h3>
                  <p className="text-ink/70 leading-relaxed mb-5">{ind.desc}</p>
                  <span className="inline-flex items-center gap-2 text-amber-deep font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore the {ind.name} system <ArrowRight className="w-4 h-4" />
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
            <h2 className="font-display text-4xl lg:text-5xl text-ink max-w-3xl mb-5 text-balance">
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
              <p className="text-xs text-ink/45 italic">
                Illustrative testimonials shown while real, verified case studies are in client approval.
              </p>
              <Link to="/results" className="text-amber-deep font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                See all results <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>


      <GuaranteeSection />

      <FinalCTASection />
    </Layout>
  );
}
