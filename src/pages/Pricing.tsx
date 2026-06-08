import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { FaqList } from "@/components/sections/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";
import { oneTimeBuilds, alacarte, landOffers } from "@/data/aurex";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <Layout>
      <Seo
        title="Pricing | Aurex"
        description="Transparent, flat monthly pricing. Ads $1,500, Funnel $2,500, All-Access $4,000. Plus flat-priced one-time builds, add-ons, and a dormant-lead land offer. No contracts, pause anytime."
        path="/pricing"
      />

      <section className="bg-background pt-32 lg:pt-40 pb-12 text-center">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow justify-center mb-5">Pricing</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] text-foreground text-balance max-w-4xl mx-auto leading-[1.03]">
              Real prices. Right here.
            </h1>
            <p className="mt-6 text-xl text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              Every competitor says "call for a quote." We don't. Pick a plan and get the whole marketing
              department in one queue.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-background pb-24 lg:pb-28">
        <div className="shell">
          <PricingPlans />
        </div>
      </section>

      {/* Land offers */}
      <section className="surface-muted py-24 lg:py-28">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-4">Not ready for monthly?</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl text-balance leading-[1.07]">
              Start with a win you can measure.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-2 gap-5">
            {landOffers.map((o) => (
              <FadeItem key={o.name} className="h-full">
                <div className={`h-full p-8 rounded-2xl ${o.primary ? "surface-dark text-white" : "card-soft"}`}>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className={`text-xl font-bold ${o.primary ? "text-white" : "text-foreground"}`}>{o.name}</h3>
                    <span className="text-lg font-extrabold text-accent tnum whitespace-nowrap">{o.price}</span>
                  </div>
                  <p className={`mt-4 leading-relaxed ${o.primary ? "text-white/70" : "text-foreground/65"}`}>{o.body}</p>
                  <Link to="/contact" className={`mt-6 h-12 px-6 ${o.primary ? "btn-primary" : "btn-dark"}`}>
                    Book a Call
                  </Link>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* One-time builds + a la carte */}
      <section className="bg-background py-24 lg:py-28">
        <div className="shell grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <FadeUp>
              <p className="eyebrow mb-4">One-time builds</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-8">Own the assets, flat-priced.</h2>
            </FadeUp>
            <div className="border-t hairline">
              {oneTimeBuilds.map((b) => (
                <FadeUp key={b.name}>
                  <div className="flex items-start justify-between gap-6 py-5 border-b hairline">
                    <div>
                      <div className="font-bold text-foreground">{b.name}</div>
                      <div className="text-sm text-foreground/55 mt-1 max-w-md">{b.scope}</div>
                    </div>
                    <div className="text-lg font-extrabold text-accent tnum whitespace-nowrap">{b.price}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div>
            <FadeUp>
              <p className="eyebrow mb-4">Add-ons</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-8">À la carte.</h2>
            </FadeUp>
            <div className="card-soft p-6 space-y-4">
              {alacarte.map((a) => (
                <FadeUp key={a.name}>
                  <div className="flex items-center justify-between gap-3 pb-4 border-b hairline last:border-0 last:pb-0">
                    <span className="text-sm text-foreground/75 flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />{a.name}</span>
                    <span className="font-bold text-foreground tnum whitespace-nowrap">{a.price}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-muted py-24 lg:py-32">
        <div className="shell grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <FadeUp>
              <p className="eyebrow mb-4">FAQ</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground leading-[1.07]">Questions, answered.</h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-8">
            <FaqList />
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
