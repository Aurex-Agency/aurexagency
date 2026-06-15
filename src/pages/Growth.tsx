import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp } from "@/components/Motion";
import { BookCta } from "@/components/sections/BookCta";
import { ArrowRight } from "lucide-react";

// NOTE: Placeholder page so the nav link resolves. The full Growth page is
// built in a later step (premium, restrained, "let's talk", no fixed price).
export default function Growth() {
  return (
    <Layout>
      <Seo
        title="Custom Growth Systems | Aurex Agency"
        description="For established home-service businesses and clinics ready to build a complete, custom growth system. Bespoke, scoped per business, starting with a strategy conversation."
        path="/growth"
      />

      <section className="bg-background pt-32 lg:pt-40 pb-20">
        <div className="shell max-w-3xl">
          <FadeUp>
            <p className="eyebrow mb-5">Custom growth systems</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-foreground text-balance leading-[1.04]">
              When you're ready to build the whole machine.
            </h1>
            <p className="mt-6 text-lg text-foreground/65 leading-relaxed">
              The packages are built to be cloned and run fast. This is different: a complete, custom growth system
              scoped around one established business. It starts with a strategy conversation, not a price tag.
            </p>
            <a href="#book-strategy" className="btn-primary h-14 px-7 text-base mt-8 inline-flex">
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </section>

      <div id="book-strategy" className="scroll-mt-24" />
      <BookCta
        title="Let's talk about what you're building."
        sub="A strategy conversation to map the full system: where the growth is, what it takes to capture it, and whether we're the right fit. No fixed price until we both understand the scope."
        note="By conversation. Scoped per business."
      />
    </Layout>
  );
}
