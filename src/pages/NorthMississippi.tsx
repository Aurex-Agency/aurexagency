import { useState } from "react";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { RoiCalculator } from "@/components/lander/RoiCalculator";
import { LeadForm } from "@/components/lander/LeadForm";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  VSL_EMBED_URL,
  serviceAreasShort,
  serviceAreasFull,
  problemStats,
  howSteps,
  landerTiers,
  industries,
  testimonials,
} from "@/data/lander";
import aurexLogo from "@/assets/aurex-logo-main.png";
import { ArrowRight, ArrowDown, Check, Phone, PlayCircle, Star } from "lucide-react";

const SITE = "https://www.aurexagency.com";

// Smooth-scroll to an in-page section (no routing — this is a sealed lander).
const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function NorthMississippi() {
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const choosePlan = (tierName: string, price: number) => {
    setSelectedPlan(`${tierName} ($${price}/mo)`);
    scrollTo("start");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Speed-to-Lead Automation for North Mississippi Service Businesses",
    serviceType: "Lead response automation",
    provider: { "@type": "ProfessionalService", name: "Aurex Agency", url: SITE, telephone: PHONE_TEL },
    areaServed: serviceAreasFull.map((c) => ({ "@type": "City", name: `${c}, Mississippi` })),
    description:
      "Automated systems that respond to your leads in under 60 seconds, book appointments automatically, and show the revenue you're protecting every month.",
    url: `${SITE}/northmississippi`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Speed-to-Lead Automation for North Mississippi Service Businesses | Aurex Agency"
        description="Every missed call is a job you didn't get. Aurex Agency builds automated systems that respond to your North Mississippi leads in under 60 seconds, book appointments automatically, and show the revenue you protect every month. Setup included. No contracts."
        path="/northmississippi"
        jsonLd={jsonLd}
      />

      {/* MINIMAL HEADER — logo is NOT a link, no menu, no way off the page */}
      <header className="sticky top-0 z-50 surface-dark border-b border-white/10">
        <div className="shell flex items-center justify-between h-16">
          {/* Non-clickable logo on purpose */}
          <img src={aurexLogo} alt="Aurex Agency" className="h-8 w-auto brightness-0 invert select-none" draggable={false} />
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white">
              <Phone className="w-4 h-4 text-brand-cyan" /> {PHONE_DISPLAY}
            </a>
            <button onClick={() => scrollTo("start")} className="btn-primary h-10 px-5 text-sm">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* HERO — VSL style */}
      <section className="surface-dark grain relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{ background: "radial-gradient(48rem 30rem at 18% -6%, hsl(205 90% 55% / 0.16), transparent 60%)" }}
        />
        <div className="shell relative grid lg:grid-cols-2 gap-12 lg:gap-14 items-center py-16 lg:py-24 min-h-[86vh]">
          {/* Copy */}
          <FadeUp>
            <p className="eyebrow-light mb-5">For North Mississippi Businesses</p>
            <h1 className="text-[2.6rem] leading-[1.04] sm:text-5xl lg:text-[3.9rem] lg:leading-[1.02] font-extrabold tracking-[-0.03em] text-white text-balance">
              Every missed call is a job you didn't get.
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-xl">
              Aurex Agency builds automated systems that respond to your leads in under 60 seconds, book appointments
              without you lifting a finger, and show you exactly how much revenue you're protecting every month.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={() => scrollTo("how")} className="btn-primary h-14 px-7 text-base w-full sm:w-auto">
                See How It Works <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo("pricing")} className="btn-outline h-14 px-7 text-base w-full sm:w-auto border-white/25 text-white hover:bg-white/5">
                View Pricing
              </button>
            </div>

            {/* Without/with stat card */}
            <div className="mt-9 inline-flex flex-col gap-2 rounded-2xl bg-white/[0.04] border border-white/10 p-5" style={{ borderTopColor: "hsl(var(--brand-cyan))", borderTopWidth: 3 }}>
              <div className="text-sm text-white/55">
                Avg. response time <span className="font-semibold text-white/80">without Aurex:</span> 4–6 hours
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ArrowDown className="w-4 h-4 text-brand-cyan" />
                <span className="font-semibold text-white/80">With Aurex:</span>{" "}
                <span className="font-extrabold text-gradient-brand">Under 60 seconds</span>
              </div>
            </div>
          </FadeUp>

          {/* VSL video */}
          <FadeUp delay={0.12}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_90px_-44px_rgba(0,0,0,0.8)] aspect-video bg-black/40">
              {VSL_EMBED_URL ? (
                <iframe
                  src={VSL_EMBED_URL}
                  title="Aurex Agency — North Mississippi"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* TODO: set VSL_EMBED_URL in src/data/lander.ts to your video. */
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-[radial-gradient(60%_60%_at_50%_40%,hsl(222_40%_16%),hsl(var(--ink)))]">
                  <span className="inline-flex w-16 h-16 rounded-full items-center justify-center mb-4" style={{ background: "var(--gradient-brand)" }}>
                    <PlayCircle className="w-8 h-8 text-white" />
                  </span>
                  <p className="text-white font-bold">Your video goes here</p>
                  <p className="mt-1 text-xs text-white/50 max-w-xs">Paste your VSL embed URL into <code className="text-white/70">VSL_EMBED_URL</code> in lander.ts</p>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* THE REALITY */}
      <section className="bg-background py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">The reality in North Mississippi</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              Most local businesses are losing jobs they already paid to get.
            </h2>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {problemStats.map((s, i) => (
              <FadeUp key={s.stat} delay={i * 0.06}>
                <div className={`h-full ${i === 0 ? "md:border-r hairline md:pr-6" : ""}`}>
                  <div className="text-6xl lg:text-7xl font-extrabold tracking-tight text-gradient-brand tnum">{s.stat}</div>
                  <p className="mt-3 text-foreground/70 leading-relaxed">{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <p className="mt-12 text-lg italic text-foreground/55">Aurex Agency fixes this. Automatically.</p>
          </FadeUp>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="scroll-mt-20 surface-muted py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">How the system works</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              Set it up once. It works while you're on the job.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {howSteps.map((s) => (
              <FadeItem key={s.n} className="h-full">
                <div className="card-soft h-full p-8">
                  <div className="text-5xl font-extrabold text-gradient-brand tnum">{s.n}</div>
                  <h3 className="text-xl font-bold text-foreground mt-4 mb-2">{s.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{s.body}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
          <FadeUp className="mt-12 text-center">
            <div className="h-px w-full max-w-xs mx-auto mb-8" style={{ background: "var(--gradient-brand)" }} />
            <button onClick={() => scrollTo("pricing")} className="btn-primary h-13 px-7 text-base" style={{ height: "3.25rem" }}>
              See What's Included in Each Plan <ArrowRight className="w-4 h-4" />
            </button>
          </FadeUp>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-mt-20 bg-background py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">Simple pricing. No contracts.</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              Pick the plan that fits where you are right now.
            </h2>
            <p className="mt-5 text-lg text-foreground/65">
              Every plan includes setup at no extra charge. No long-term contracts. Cancel any time.
            </p>
          </FadeUp>

          <div className="mt-12 grid lg:grid-cols-3 gap-6 lg:gap-7 items-start">
            {landerTiers.map((tier) => {
              const popular = !!tier.popular;
              return (
                <FadeUp key={tier.id} className={`h-full ${popular ? "order-first lg:order-none" : ""}`}>
                  <div
                    className={`relative h-full flex flex-col rounded-3xl ${
                      popular
                        ? "surface-dark grain overflow-hidden border border-brand-cyan/40 shadow-[0_40px_80px_-32px_hsl(222_86%_56%/0.5)] lg:-mt-4 lg:mb-[-1rem] z-10"
                        : "card-soft"
                    }`}
                  >
                    {popular && (
                      <div className="text-center py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white" style={{ background: "var(--gradient-brand)" }}>
                        Most Popular
                      </div>
                    )}
                    <div className="p-7 lg:p-8 flex flex-col flex-1">
                      <h3 className={`text-xl font-bold ${popular ? "text-white" : "text-foreground"}`}>{tier.name}</h3>
                      <div className="mt-4 flex items-baseline gap-1.5">
                        <span className={`text-5xl font-extrabold tnum ${popular ? "text-white" : "text-foreground"}`}>${tier.price}</span>
                        <span className={`text-base ${popular ? "text-white/55" : "text-foreground/55"}`}>/month</span>
                      </div>
                      <p className={`mt-3 text-sm leading-relaxed ${popular ? "text-white/70" : "text-foreground/60"}`}>{tier.subline}</p>

                      <ul className="mt-6 space-y-3 flex-1">
                        {tier.features.map((f, i) => (
                          <li key={i} className="flex gap-3">
                            <Check className={`w-5 h-5 shrink-0 mt-0.5 ${popular ? "text-brand-cyan" : "text-accent"}`} />
                            <span className={`text-sm leading-relaxed ${popular ? "text-white/80" : "text-foreground/75"}`}>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => choosePlan(tier.name, tier.price)}
                        className={`w-full px-6 text-base mt-7 ${popular ? "btn-light" : "btn-primary"}`}
                        style={{ height: "3.25rem" }}
                      >
                        Get Started <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp className="mt-8 text-center">
            <p className="text-sm text-foreground/55">All plans run on GoHighLevel. Setup included. No tech skills required.</p>
          </FadeUp>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <RoiCalculator onCta={() => scrollTo("start")} />

      {/* BUILT FOR NORTH MISSISSIPPI */}
      <section className="bg-background py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">Built for North Mississippi</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              If you run a service business in North Mississippi, this was built for you.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <FadeItem key={ind.name} className="h-full">
                <div className="surface-dark rounded-2xl h-full p-7">
                  <span className="inline-flex w-11 h-11 rounded-xl bg-white/10 text-brand-cyan items-center justify-center mb-4">
                    <ind.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">{ind.name}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{ind.line}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
          <FadeUp>
            <p className="mt-8 text-foreground/55">
              Serving {serviceAreasShort.join(", ")}, and surrounding areas.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="surface-dark grain relative overflow-hidden py-20 lg:py-28">
        <div className="shell relative">
          <FadeUp className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-[1.07]">
              Don't take our word for it.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <FadeItem key={t.attribution} className="h-full">
                <div className="rounded-2xl bg-white/[0.04] border border-white/10 h-full p-7 flex flex-col">
                  <div className="text-5xl leading-none font-serif text-brand-cyan/70" aria-hidden>&ldquo;</div>
                  <p className="mt-2 italic text-white/85 leading-relaxed flex-1">{t.quote}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-brand-cyan">{t.attribution}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FINAL CTA + LEAD FORM */}
      <section id="start" className="scroll-mt-20 relative overflow-hidden py-20 lg:py-28" style={{ background: "var(--gradient-brand)" }}>
        <div className="shell relative">
          <div className="max-w-xl mx-auto text-center">
            <FadeUp>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-[1.06]">
                Ready to stop losing jobs you already paid for?
              </h2>
              <p className="mt-5 text-lg text-white/85">
                Setup is included. No contracts. We build the system, you keep the revenue.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="mt-9 card-soft p-6 sm:p-8 text-left">
                <LeadForm defaultPlan={selectedPlan} />
              </div>
              <p className="mt-5 text-sm text-white/85">
                Or call us directly:{" "}
                <a href={`tel:${PHONE_TEL}`} className="font-bold text-white underline underline-offset-2">{PHONE_DISPLAY}</a>
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="surface-dark border-t border-white/10">
        <div className="shell py-14">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <img src={aurexLogo} alt="Aurex Agency" className="h-8 w-auto brightness-0 invert select-none" draggable={false} />
              <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
                Speed-to-Lead automation for North Mississippi service businesses.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                {/* TODO: replace with a real Google Reviews badge/link. */}
                <span className="inline-flex items-center gap-0.5 text-brand-cyan">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </span>
                <span className="text-xs text-white/45">Google Reviews</span>
              </div>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-white/45 font-semibold mb-4">Service areas</div>
              <p className="text-sm text-white/55 leading-relaxed">
                {serviceAreasFull.join(", ")}, and surrounding North Mississippi communities.
              </p>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-white/45 font-semibold mb-4">Quick links</div>
              <ul className="space-y-2.5">
                {[
                  { name: "How it works", id: "how" },
                  { name: "Pricing", id: "pricing" },
                  { name: "Your numbers", id: "roi" },
                  { name: "Get started", id: "start" },
                ].map((l) => (
                  <li key={l.id}>
                    <button onClick={() => scrollTo(l.id)} className="text-sm text-white/70 hover:text-white transition-colors">
                      {l.name}
                    </button>
                  </li>
                ))}
              </ul>
              <a href={`tel:${PHONE_TEL}`} className="mt-4 inline-flex items-center gap-2 font-bold text-brand-cyan">
                <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Aurex Agency. All rights reserved. Powered by GoHighLevel.
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CALL BUTTON */}
      <a
        href={`tel:${PHONE_TEL}`}
        className="md:hidden fixed bottom-0 inset-x-0 z-50 h-14 flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-white"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Phone className="w-5 h-5" /> Call Now
      </a>
      {/* Spacer so the sticky button never covers footer content on mobile */}
      <div className="md:hidden h-14" />
    </div>
  );
}
