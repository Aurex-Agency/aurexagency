import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { FaqList } from "@/components/sections/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";
import { onboarding, portal } from "@/data/aurex";
import { Check } from "lucide-react";

const comms = [
  { t: "Async-first", b: "All requests and updates live in your queue. If it's not in the queue, it's not in the plan." },
  { t: "One standing check-in", b: "A weekly call on All-Access, biweekly on Ads and Funnel. The pressure-release valve, not daily pings." },
  { t: "1 business-day replies", b: "We respond to queue comments within one business day. A promise we can actually keep." },
  { t: "Emergencies only", b: "One direct channel reserved for genuine fires, like an ad account down or a site offline." },
];

const guardrails = [
  "Cancel anytime. Your current paid month finishes, no future billing.",
  "Pause anytime. We hold your slot for up to 30 days, ideal for seasonal businesses.",
  "Unlimited requests in the backlog, unlimited revisions on the active task.",
  "A hard cap of 8 active clients, so your work never gets buried.",
];

export default function Process() {
  return (
    <Layout>
      <Seo
        title="How It Works | Aurex"
        description="From yes to your first task shipped inside one week. See the Aurex onboarding flow, the client portal, turnaround SLAs, and the simple communication rules that keep delivery premium."
        path="/how-it-works"
      />

      <section className="bg-background pt-32 lg:pt-40 pb-16">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-5">How it works</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] text-foreground text-balance max-w-4xl leading-[1.03]">
              From yes to your first task, inside a week.
            </h1>
            <p className="mt-6 text-xl text-foreground/65 max-w-2xl leading-relaxed">
              A calm, repeatable system that feels premium to you and protects the quality of the work. No chaos, no guesswork.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Onboarding timeline */}
      <section className="bg-background pb-24 lg:pb-28">
        <div className="shell">
          <div className="relative pl-9 sm:pl-12">
            <div className="absolute left-[10px] sm:left-[14px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {onboarding.map((o) => (
                <FadeUp key={o.title} className="relative">
                  <span className="absolute -left-9 sm:-left-12 top-1 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-accent ring-4 ring-background flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent w-24 shrink-0">{o.when}</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{o.title}</h3>
                      <p className="mt-1 text-foreground/65 leading-relaxed max-w-2xl">{o.body}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client portal */}
      <section className="surface-muted py-24 lg:py-32">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow mb-4">Your client portal</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl text-balance leading-[1.07]">
              A private command center, not a shared to-do list.
            </h2>
            <p className="mt-5 text-lg text-foreground/65 max-w-2xl">
              Branded to you, with everything in one place. The ROI dashboard is the part that keeps your investment visible every month.
            </p>
          </FadeUp>
          <Stagger className="mt-12 grid sm:grid-cols-2 gap-5">
            {portal.map((p) => (
              <FadeItem key={p.title} className="h-full">
                <div className="card-soft h-full p-7">
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{p.body}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Communication + guardrails */}
      <section className="bg-background py-24 lg:py-32">
        <div className="shell grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <FadeUp>
              <p className="eyebrow mb-4">Communication</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">High-touch, without the chaos.</h2>
            </FadeUp>
            <Stagger className="space-y-5">
              {comms.map((c) => (
                <FadeItem key={c.t}>
                  <div className="border-l-2 border-accent/40 pl-5">
                    <h3 className="font-bold text-foreground">{c.t}</h3>
                    <p className="text-foreground/60 mt-1 leading-relaxed">{c.b}</p>
                  </div>
                </FadeItem>
              ))}
            </Stagger>
          </div>
          <div>
            <FadeUp>
              <p className="eyebrow mb-4">Scope &amp; guardrails</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">Clean rules, both ways.</h2>
            </FadeUp>
            <div className="card-soft p-7">
              <ul className="space-y-4">
                {guardrails.map((g) => (
                  <FadeUp key={g}>
                    <li className="flex gap-3 text-foreground/75">
                      <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" /> {g}
                    </li>
                  </FadeUp>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-muted py-24 lg:py-32">
        <div className="shell grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <FadeUp>
              <p className="eyebrow mb-4">FAQ</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground leading-[1.07]">Good to know.</h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-8"><FaqList /></div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
