import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Link } from "react-router-dom";
import { Target, Users, DollarSign, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Offer beats creative beats targeting",
    body: "A boring ad with the right offer outperforms a beautiful ad with a generic one every time. For med spas, the winning offers are almost always a high-value first visit (HydraFacial intro, Botox per-unit promo, consult plus skin analysis) or a clear membership trial, not the brand video.",
  },
  {
    icon: Users,
    title: "Warm audiences first, cold audiences second",
    body: "Your past patients, website visitors, Instagram engagers, and lookalikes of your member list will out-convert cold interest targeting 3 to 5x at a fraction of the CPL. Retargeting and lookalikes are the workhorse, not the side dish.",
  },
  {
    icon: DollarSign,
    title: "Track booked revenue, not leads",
    body: "Meta will happily optimize for cheap form fills that never book. The only metric that matters is cost per booked appointment and revenue per booked appointment. Everything else is vanity.",
  },
  {
    icon: TrendingUp,
    title: "Speed-to-lead decides your ROAS",
    body: "A Facebook lead is worth roughly half as much after 30 minutes and a tenth as much after 24 hours. The follow-up system underneath the ads usually decides whether your spend works, not the ads themselves.",
  },
];

const mistakes = [
  {
    title: "Boosting Instagram posts",
    body: "The boost button optimizes for engagement, not bookings. You get likes from people who will never walk in. Run real campaigns from Ads Manager with the right objective.",
  },
  {
    title: "Sending traffic to a generic homepage",
    body: "Your homepage is built for browsers. Ad traffic needs a single-offer landing page with one CTA, social proof above the fold, and a frictionless booking form. Conversion rates often double.",
  },
  {
    title: "Running ads with no follow-up system",
    body: "Half of your spend is wasted if leads sit in a spreadsheet for two hours before anyone calls them. Missed-call text-back, 5-minute SMS reply, and reminder cadence are not optional once you turn ads on.",
  },
  {
    title: "Scaling before the system converts",
    body: "Doubling spend on a system that breaks even at $1k a day will lose money at $2k a day. Prove the math at low spend, fix the leaks, then scale.",
  },
];

const playbook = [
  {
    step: "1",
    title: "Fix the foundation first",
    body: "Before a single dollar of ad spend, install missed-call text-back, 5-minute lead response, and a reminder cadence that cuts no-shows. This is the Aurex Phase 1 system. Ads amplify what you already have, so the foundation has to be converting before you scale.",
  },
  {
    step: "2",
    title: "Build one offer landing page per campaign",
    body: "One page, one offer, one CTA. Social proof and recent reviews above the fold. A short booking form, not a 12-field intake. Mobile-first, since 80%+ of Meta traffic is mobile.",
  },
  {
    step: "3",
    title: "Start with retargeting and lookalikes",
    body: "Upload your patient list. Build a 1% lookalike of your best members. Retarget website visitors and Instagram engagers from the last 180 days. This is where the cheap, qualified bookings live.",
  },
  {
    step: "4",
    title: "Test offers, not creative variations",
    body: "Run three offers in parallel for two weeks at low spend. Promo on a hero service, intro consult plus skin analysis, and a membership trial. Whichever produces the lowest cost per booked appointment becomes your control.",
  },
  {
    step: "5",
    title: "Layer cold interest only after warm works",
    body: "Once retargeting and lookalikes are profitable, open cold interest targeting (aesthetic interests, beauty brands, local geo) at a small daily budget. Expect a 2 to 3x higher CPL and a longer payback window.",
  },
  {
    step: "6",
    title: "Report on booked dollars every week",
    body: "Tie every booked appointment back to its ad. Cost per booked, average ticket, and 90-day patient value are the only three numbers on the dashboard. Kill what does not work in 14 days.",
  },
];

const benchmarks = [
  { label: "Cost per lead (warm)", value: "$8 to $25" },
  { label: "Cost per lead (cold)", value: "$25 to $60" },
  { label: "Lead to booked appointment", value: "20 to 40%" },
  { label: "Cost per booked appointment", value: "$60 to $180" },
  { label: "First-visit average ticket", value: "$250 to $600" },
  { label: "90-day patient value (good system)", value: "$800 to $2,000+" },
];

export default function MedSpasFacebookAds() {
  return (
    <Layout>
      <Seo
        title="Facebook Ads for Med Spas | Aurex"
        description="The Facebook and Instagram ads playbook for med spas: offers that book, audiences that convert, and the follow-up system that makes ad spend actually pay back."
        path="/med-spas/facebook-ads"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Facebook Ads for Med Spas: The Playbook That Actually Books Patients",
            description:
              "A practical guide to running Facebook and Instagram ads for med spas, including offers, audiences, benchmarks, and the follow-up system behind profitable ad spend.",
            author: { "@type": "Organization", name: "Aurex" },
            publisher: { "@type": "Organization", name: "Aurex", url: "https://aurexagency.lovable.app/" },
            mainEntityOfPage: "https://aurexagency.lovable.app/med-spas/facebook-ads",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://aurexagency.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Med Spas", item: "https://aurexagency.lovable.app/med-spas" },
              { "@type": "ListItem", position: 3, name: "Facebook Ads for Med Spas", item: "https://aurexagency.lovable.app/med-spas/facebook-ads" },
            ],
          },
        ]}
      />

      <section className="pt-32 pb-16 bg-cream">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-4">For Med Spas and Aesthetics</p>
            <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight mb-6">
              Facebook Ads for Med Spas: the playbook that actually books patients.
            </h1>
            <p className="text-xl text-ink/75 leading-relaxed mb-8">
              Most med spa Facebook ad spend leaks out before the first booking. The ads are fine. The offer is wrong, the
              audiences are cold, and there is no follow-up system underneath. This is what we have learned running paid
              acquisition for aesthetic practices, and the order we run it in.
            </p>
            <p className="text-ink/70 leading-relaxed">
              Aurex runs paid acquisition as <strong>Phase 2</strong> of a med spa growth system, after the reactivation,
              missed-call, and no-show foundations are in place. If you have not seen{" "}
              <Link to="/med-spas" className="text-brand-blue underline underline-offset-4 hover:no-underline">
                the core med spa system
              </Link>
              , start there. This page is the paid-acquisition layer that sits on top.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-5xl">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-3">Four principles</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-12">What separates profitable med spa ads from the rest.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="card-premium p-7 h-full">
                  <p.icon className="w-8 h-8 text-brand-blue mb-4" />
                  <h3 className="font-display text-2xl text-ink mb-3">{p.title}</h3>
                  <p className="text-ink/75 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container max-w-5xl">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-3">The six-step playbook</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-12">How we actually run it.</h2>
          </Reveal>
          <div className="space-y-5">
            {playbook.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.04}>
                <div className="card-premium p-7 flex gap-6">
                  <div className="font-display text-5xl text-brand-blue leading-none shrink-0">{p.step}</div>
                  <div>
                    <h3 className="font-display text-2xl text-ink mb-2">{p.title}</h3>
                    <p className="text-ink/75 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-5xl">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-3">Benchmarks</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-4">What good looks like.</h2>
            <p className="text-ink/70 mb-12 max-w-2xl">
              Ranges from med spa accounts we have run or audited. Yours will land somewhere inside these if the
              foundation is in place. Outside them, the system is leaking.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benchmarks.map((b, i) => (
              <Reveal key={b.label} delay={i * 0.04}>
                <div className="card-premium p-6">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mb-3" />
                  <div className="text-sm text-ink/60 mb-1">{b.label}</div>
                  <div className="font-display text-2xl text-ink">{b.value}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container max-w-5xl">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-3">The four mistakes</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-12">Where most med spa ad budgets quietly burn.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {mistakes.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.05}>
                <div className="card-premium p-7 h-full">
                  <AlertTriangle className="w-8 h-8 text-brand-blue mb-4" />
                  <h3 className="font-display text-2xl text-ink mb-3">{m.title}</h3>
                  <p className="text-ink/75 leading-relaxed">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="card-premium p-10 md:p-14 text-center">
              <p className="eyebrow eyebrow-amber mb-4">Bridge to Phase 2</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink mb-6">
                Ads work when the system underneath them works.
              </h2>
              <p className="text-lg text-ink/75 leading-relaxed mb-8 max-w-2xl mx-auto">
                We start with reactivation, missed calls, and no-shows because those are the leaks ads cannot fix. Once
                your CRM is producing, we layer Facebook and Instagram acquisition on top, funded by proof and tracked
                in booked dollars.
              </p>
              <Link to="/contact" className="btn-amber inline-flex items-center gap-2">
                Book a free med spa audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTASection
        eyebrow="Free med spa revenue audit"
        title="See exactly where ads will pay back, and where they will not."
        sub="A 30 minute call with a real operator. We audit your foundation, project your first 30 days, and tell you honestly whether you are ready to scale paid acquisition."
        defaultIndustry="Med Spa / Aesthetics"
        ctaLabel="Send My Med Spa Audit"
      />
    </Layout>
  );
}
