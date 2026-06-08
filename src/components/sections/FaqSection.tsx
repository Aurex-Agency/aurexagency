import { Reveal } from "@/components/Reveal";
import { faqs } from "@/data/productized";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection({ surface = "surface-cream" }: { surface?: string }) {
  return (
    <section id="faq" className={`py-24 lg:py-32 ${surface}`}>
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow eyebrow-amber mb-4">FAQ</p>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground text-balance leading-tight">
                Questions, answered.
              </h2>
              <p className="mt-5 text-foreground/60 text-pretty max-w-sm">
                Still curious? Book a free intro call and ask us anything.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal delay={0.08}>
            <Accordion type="single" collapsible className="border-t hairline">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b hairline">
                  <AccordionTrigger className="text-left font-display text-lg lg:text-xl text-foreground hover:no-underline py-6">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/65 leading-relaxed text-base pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
