import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { CtaBand } from "@/components/sections/CtaBand";
import { services, oneTimeBuilds } from "@/data/aurex";
import { ArrowRight, Check, Infinity as InfinityIcon, Timer, Layers } from "lucide-react";

const queue = [
  { icon: Layers, title: "One active task at a time", body: "We focus on a single request until it is done and you approve it. No half-finished pile, no dropped balls." },
  { icon: InfinityIcon, title: "Unlimited requests in your backlog", body: "Queue as much as you want and reprioritize anytime. You always know what is being worked on next." },
  { icon: Timer, title: "3 to 4 day turnaround", body: "Most tasks ship in a few business days. Large builds are broken into stages, each on the clock." },
];

export default function Services() {
  return (
    <Layout>
      <Seo
        title="Services | Aurex"
        description="Everything you can request on an Aurex subscription: paid ads, funnels and CRO, customer-relations automation, content and strategy, CRM management, and dormant-lead follow-up. Plus flat-priced one-time builds."
        path="/services"
      />

      <section className="bg-background pt-32 lg:pt-40 pb-16">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-5">Services</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] text-foreground text-balance max-w-4xl leading-[1.03]">
              One queue. Your whole marketing department.
            </h1>
            <p className="mt-6 text-xl text-foreground/65 max-w-2xl leading-relaxed">
              Add anything across these service lines to your queue. We prioritize, build, launch, and keep it
              running, then report what it returned.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-background pb-24 lg:pb-28">
        <div className="shell">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <FadeItem key={s.title} className="h-full">
                <div className="card-soft card-hover h-full p-7">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-accent/10 text-accent items-center justify-center mb-5">
                    <s.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">{s.body}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Queue mechanic */}
      <section className="surface-muted py-24 lg:py-32">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-4">The delivery model</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl text-balance leading-[1.07]">
              We finish it properly before we start the next thing.
            </h2>
            <p className="mt-5 text-lg text-foreground/65 max-w-2xl">
              Borrowed from the best productized agencies and tuned for senior, founder-led delivery.
            </p>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {queue.map((q) => (
              <FadeItem key={q.title} className="h-full">
                <div className="card-soft h-full p-7">
                  <span className="inline-flex w-11 h-11 rounded-xl bg-accent/10 text-accent items-center justify-center mb-5">
                    <q.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{q.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">{q.body}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* One-time builds */}
      <section className="bg-background py-24 lg:py-32">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-4">One-time builds</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl text-balance leading-[1.07]">
              Own the assets. Flat prices, no quote games.
            </h2>
            <p className="mt-5 text-lg text-foreground/65 max-w-2xl">
              Built fast with a modern stack, so the margin works for you. Buy a build on its own or alongside a plan.
            </p>
          </FadeUp>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {oneTimeBuilds.map((b) => (
              <FadeItem key={b.name} className="h-full">
                <div className="card-soft h-full p-6 flex flex-col">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-bold text-foreground">{b.name}</h3>
                    <span className="text-lg font-extrabold text-accent tnum whitespace-nowrap">{b.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-foreground/60 leading-relaxed flex-1">{b.scope}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
          <FadeUp delay={0.1}>
            <Link to="/pricing" className="mt-10 inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              See subscriptions &amp; add-ons <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <CtaBand title="Ready to put it all in one queue?" />
    </Layout>
  );
}
