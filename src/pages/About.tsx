import { Layout } from "@/components/layout/Layout";
import { BookCallDialog } from "@/components/BookCallDialog";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import aurexProfile from "@/assets/aurex-profile.png";

const values = [
  { t: "Operator first", b: "We build like operators because we are operators. Every system has been pressure-tested in a real business." },
  { t: "Owned infrastructure", b: "You own your CRM, your data, your numbers, your customer list. The engine goes with you, always." },
  { t: "Quietly accountable", b: "We do not sell hype. We commit to outcomes and put a guarantee behind them." },
];

export default function About() {
  return (
    <Layout>
      <section className="surface-ink grain pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 surface-ink-grad" />
        <div className="container relative z-10 max-w-4xl">
          <Reveal>
            <div className="eyebrow eyebrow-amber mb-5">About Aurex</div>
            <h1 className="font-display text-cream text-5xl lg:text-7xl font-medium leading-[1.02] text-balance">
              Built by an operator, <span className="italic text-amber">not an agency middleman.</span>
            </h1>
            <p className="mt-6 text-cream/70 text-lg max-w-2xl">
              Aurex is a small, focused team building AI growth infrastructure for clinics and home-services operators who are serious about scaling.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-cream py-20 lg:py-28">
        <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border hairline">
              <img src={aurexProfile} alt="Kalob Adair, founder of Aurex Agency" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="eyebrow mb-5">Founder</div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink font-medium leading-[1.1] mb-6">
              Kalob Adair
            </h2>
            <div className="space-y-5 text-ink/75 text-lg leading-relaxed">
              <p>
                Kalob spent years inside local media and advertising, watching businesses spend real money on ads while leaving most of their inbound on the table. The leak was almost never the ads. It was the system behind them.
              </p>
              <p>
                He left to build that system himself. Aurex was founded to install the AI infrastructure that clinics and home-services brands actually need: voice agents that answer every call, automations that respond in seconds, and pipelines that reactivate the customers they have already paid to acquire.
              </p>
              <p>
                Today Aurex builds, runs, and optimizes those systems for operators across the country, from a quiet office in North Mississippi.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="surface-cream-warm border-y hairline py-20 lg:py-28">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="eyebrow mb-5">What we believe</div>
              <h2 className="font-display text-4xl lg:text-5xl text-ink font-medium leading-[1.05]">
                Three principles, <span className="italic">every build.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="card-premium p-8 h-full">
                  <h3 className="font-display text-2xl text-ink mb-3 font-medium">{v.t}</h3>
                  <p className="text-ink/65 leading-relaxed">{v.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-ink py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-amber opacity-25" />
        <div className="container relative z-10 text-center max-w-3xl">
          <Reveal>
            <h2 className="font-display text-cream text-4xl lg:text-6xl font-medium leading-[1.05]">
              Want to work together? <span className="italic text-amber">Start with a call.</span>
            </h2>
            <div className="mt-8">
              <BookCallDialog>
                <button className="btn-amber h-14 px-8 text-base">
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </button>
              </BookCallDialog>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
