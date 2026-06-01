import { Layout } from "@/components/layout/Layout";
import { BookCallDialog } from "@/components/BookCallDialog";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Check, ShieldCheck, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const included = [
  { t: "AI Voice Receptionist", b: "Custom-trained voice agent that answers every call 24/7, qualifies the patient, and books to your calendar." },
  { t: "60-Second Lead Response", b: "Every form, ad click, and DM gets an instant human-quality reply in under a minute, every time." },
  { t: "Database Reactivation", b: "AI-driven outreach to your past patients and dormant leads, designed to refill the schedule from your existing list." },
  { t: "Multi-Pipeline CRM Build", b: "Custom GoHighLevel install with pipelines for new, returning, and reactivation patients. Fully managed." },
  { t: "Smart Call Routing", b: "Calls routed by location, intent, and urgency. Overflow handled by the AI voice agent automatically." },
  { t: "Conversion Landing Site", b: "Dedicated high-conversion landing page wired to your funnel and CRM, optimized monthly." },
  { t: "Ad Funnel Integration", b: "Tracked ad funnel with offer testing, lead routing, and conversion reporting." },
  { t: "Performance Dashboard", b: "Live dashboard showing booked appointments, response times, source attribution, and revenue impact." },
];

const faqs = [
  { q: "How much does Growth Engine cost?", a: "Builds start at $7,500 plus a monthly management fee. Final pricing depends on practice size, locations, and integrations. We quote on the strategy call." },
  { q: "Is it HIPAA compliant?", a: "Yes. The clinic stack is built on HIPAA-aligned infrastructure with BAA-covered tooling and A2P 10DLC registered SMS." },
  { q: "How long until we are live?", a: "Most clinics are fully operational in 21 to 30 days from kickoff." },
  { q: "Do we have to switch our EMR?", a: "No. We integrate with what you already use. We will tell you on the call if anything needs to change." },
  { q: "What if it does not work?", a: "If we do not deliver the booked appointments we promise in your first 90 days, we keep working for free until we do." },
];

export default function GrowthEngine() {
  return (
    <Layout>
      {/* Hero */}
      <section className="surface-ink grain pt-32 pb-24 lg:pt-44 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 surface-ink-grad" />
        <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30 animate-drift"
          style={{ background: "radial-gradient(circle, hsl(38 92% 52% / 0.55), transparent 70%)" }} />
        <div className="container relative z-10 max-w-5xl">
          <Reveal>
            <div className="eyebrow eyebrow-amber mb-6">Flagship offer</div>
            <h1 className="font-display text-cream text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-medium leading-[1.02] text-balance">
              The Patient Acquisition and Retention <span className="italic text-amber">Engine.</span>
            </h1>
            <p className="mt-8 text-cream/75 text-lg lg:text-xl max-w-3xl leading-relaxed">
              A fully installed AI infrastructure that captures every inbound, books your calendar around the clock, and reactivates the patients you already have. Done for you. Managed monthly.
            </p>
            <div className="mt-10">
              <BookCallDialog>
                <button className="btn-amber h-14 px-8 text-base">
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </button>
              </BookCallDialog>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem */}
      <section className="surface-cream py-24 lg:py-28">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="eyebrow mb-5">The problem</div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink font-medium leading-[1.05] mb-6 text-balance">
              You do not have an ads problem. <span className="italic">You have a system problem.</span>
            </h2>
            <div className="space-y-5 text-ink/75 text-lg leading-relaxed">
              <p>
                Most clinics and home-services brands spend thousands a month driving traffic, then lose 40 to 70 percent of that pipeline to missed calls, slow follow-up, and a database that nobody touches.
              </p>
              <p>
                More ad spend will not fix it. A better landing page will not fix it. The only thing that fixes it is owned infrastructure that answers, qualifies, books, and reactivates automatically.
              </p>
              <p className="text-ink font-medium">
                That is what the Growth Engine is.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="surface-cream-warm border-y hairline py-24 lg:py-28">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="eyebrow mb-5">What you get</div>
              <h2 className="font-display text-4xl lg:text-5xl text-ink font-medium leading-[1.05]">
                Eight systems, <span className="italic">one engine.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {included.map((it, i) => (
              <Reveal key={it.t} delay={i * 0.04}>
                <div className="card-premium p-7 h-full">
                  <div className="flex items-start gap-3 mb-2">
                    <Check className="w-5 h-5 text-amber-deep mt-1 shrink-0" />
                    <h3 className="font-display text-xl text-ink font-medium">{it.t}</h3>
                  </div>
                  <p className="text-ink/65 leading-relaxed pl-8">{it.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Value framing */}
      <section className="surface-ink relative overflow-hidden py-24 lg:py-32 grain">
        <div className="absolute inset-0 mesh-amber opacity-25" />
        <div className="container relative z-10 max-w-4xl">
          <Reveal>
            <div className="eyebrow eyebrow-amber mb-5">Value vs. cost</div>
            <h2 className="font-display text-cream text-4xl lg:text-5xl font-medium leading-[1.05] mb-10 text-balance">
              Hiring this in-house costs <span className="italic text-amber">a quarter million a year.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { l: "Full-time front desk lead", v: "~$45,000/yr" },
                { l: "Marketing automation specialist", v: "~$75,000/yr" },
                { l: "AI voice integration vendor", v: "~$40,000/yr" },
                { l: "Paid ads and CRM management", v: "~$60,000/yr" },
              ].map((r) => (
                <div key={r.l} className="card-premium bg-cream/5 border-cream/15 p-6 flex items-center justify-between">
                  <p className="text-cream/80">{r.l}</p>
                  <p className="font-display text-cream text-xl">{r.v}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-cream/70 text-lg leading-relaxed">
              The Growth Engine installs all of it for a fraction of the cost, with no hiring, no managing, and no missed quarters waiting for someone to ramp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="surface-cream py-24 lg:py-32">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="eyebrow mb-5">Proof</div>
              <h2 className="font-display text-4xl lg:text-5xl text-ink font-medium leading-[1.05]">
                It is already running. <span className="italic">Every day.</span>
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {[
              {
                client: "Uplift Medical",
                tag: "Multi-location hormone therapy",
                copy: "Full GoHighLevel system with 24+ workflows, three pipelines, an AI conversation bot, smart call routing, and a custom n8n AI orchestration layer connecting EMR data to outreach triggers. Patient response time reduced from hours to seconds across every location.",
              },
              {
                client: "Shurden Roofing",
                tag: "Roofing and home services",
                copy: "Integrated GoHighLevel + AcuLynx stack with comment-to-DM automation, interactive video, and end-to-end pipeline visibility. Every lead captured, qualified, routed, and tracked from first touch to invoice.",
              },
            ].map((c, i) => (
              <Reveal key={c.client} delay={i * 0.08}>
                <article className="card-premium p-8 lg:p-12 grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-amber-deep mb-3">{c.tag}</p>
                    <h3 className="font-display text-3xl lg:text-4xl text-ink font-medium">{c.client}</h3>
                  </div>
                  <p className="lg:col-span-8 text-ink/75 text-lg leading-relaxed">{c.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="surface-ink py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-amber opacity-25" />
        <div className="container relative z-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
              <div className="w-16 h-16 rounded-2xl bg-amber text-ink flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="eyebrow eyebrow-amber mb-3">The 90-day guarantee</div>
                <p className="font-display text-cream text-3xl lg:text-5xl font-medium leading-[1.1] text-balance">
                  We deliver the booked appointments we promise, <span className="italic text-amber">or we work for free until we do.</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-cream-warm border-y hairline py-24 lg:py-28">
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-5">FAQ</div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink font-medium">Common questions.</h2>
          </div>
          <div className="lg:col-span-8">
            <GEFaq items={faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="surface-ink py-24 lg:py-32 relative overflow-hidden grain">
        <div className="absolute inset-0 surface-ink-grad opacity-90" />
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="eyebrow eyebrow-amber mb-5">Ready when you are</div>
            <h2 className="font-display text-cream text-5xl lg:text-7xl font-medium leading-[1.02] text-balance">
              Install the engine. <span className="italic text-amber">Fill the calendar.</span>
            </h2>
            <p className="mt-6 text-cream/70 text-lg max-w-xl">
              Book a strategy call. We will map your leak points, sketch the build, and quote it on the call.
            </p>
            <div className="mt-8">
              <BookCallDialog>
                <button className="btn-amber h-14 px-8 text-base">
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </button>
              </BookCallDialog>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-premium bg-cream/5 border-cream/15 backdrop-blur p-2 h-[480px]">
              {/* GoHighLevel calendar embed slot */}
              <div className="w-full h-full rounded-xl bg-ink/40 border border-cream/10 flex items-center justify-center text-cream/40 text-sm">
                GoHighLevel calendar embed
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function GEFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y hairline border-y hairline">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q}>
            <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-6 py-6 text-left">
              <span className="font-display text-xl lg:text-2xl text-ink font-medium pr-4">{f.q}</span>
              <span className={`w-9 h-9 rounded-full border hairline flex items-center justify-center shrink-0 transition-all ${isOpen ? "bg-ink text-cream rotate-180" : "text-ink"}`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-6 text-ink/65 leading-relaxed max-w-2xl">{f.a}</p>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
}
