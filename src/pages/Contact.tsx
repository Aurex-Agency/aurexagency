import { Layout } from "@/components/layout/Layout";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Reveal } from "@/components/Reveal";

export default function Contact() {
  return (
    <Layout>
      <section className="pt-32 lg:pt-44 pb-12 surface-cream">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-5">Contact</p>
            <h1 className="font-display text-5xl lg:text-6xl text-ink text-balance">
              Tell us where it hurts. We will tell you exactly what to fix.
            </h1>
            <p className="mt-6 text-lg text-ink/70 max-w-2xl">
              Real operator on the other end. No SDR pitch, no agency theater.
            </p>
          </Reveal>
        </div>
      </section>
      <FinalCTASection />
    </Layout>
  );
}
