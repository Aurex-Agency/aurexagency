import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Reveal } from "@/components/Reveal";

export default function Contact() {
  return (
    <Layout>
      <Seo
        title="Contact Aurex | North Mississippi Marketing Agency"
        description="Contact Aurex, a North Mississippi marketing agency serving Oxford, Tupelo, Southaven and the Memphis area. Tell us about your business and we will map the fastest path to booked revenue."
        path="/contact"
      />
      <section className="pt-32 lg:pt-44 pb-12 surface-cream">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="eyebrow eyebrow-amber mb-5">Contact</p>
            <h1 className="font-display text-5xl lg:text-6xl text-ink text-balance">
              Contact Aurex. Tell us where it hurts.
            </h1>
            <p className="mt-4 text-xl text-ink/70 max-w-2xl">
              We will tell you exactly what to fix.
            </p>
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
