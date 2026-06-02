import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/Reveal";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

// Results page kept simple with placeholder case studies (no fabricated names/numbers).
const placeholders = [
  { vertical: "Med Spa", headline: "[Client result placeholder]", body: "Lapsed-patient reactivation, missed-call text-back, and no-show shield. Real numbers will be published here after client approval." },
  { vertical: "Home Services", headline: "[Client result placeholder]", body: "Old-quote reactivation and 5-minute speed-to-lead. Real numbers will be published here after client approval." },
  { vertical: "Health Practice", headline: "[Client result placeholder]", body: "Patient recall and reminder cadence. Real numbers will be published here after client approval." },
];

export default function Results() {
  return (
    <Layout>
      <section className="pt-32 lg:pt-44 pb-16 surface-cream">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-5">Results</p>
            <h1 className="font-display text-5xl lg:text-7xl text-ink max-w-4xl text-balance">
              We report booked dollars. Not impressions.
            </h1>
            <p className="mt-7 text-xl text-ink/70 max-w-2xl text-pretty">
              Real, attributable client results live here. We do not publish until the client signs off and the numbers are clean.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 surface-cream">
        <div className="container grid md:grid-cols-3 gap-5">
          {placeholders.map((p, i) => (
            <Reveal key={p.vertical} delay={i * 0.08}>
              <div className="card-premium p-7 h-full">
                <p className="eyebrow eyebrow-amber mb-3">{p.vertical}</p>
                <h3 className="font-display text-2xl text-ink mb-3">{p.headline}</h3>
                <p className="text-ink/70 leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTASection />
    </Layout>
  );
}
