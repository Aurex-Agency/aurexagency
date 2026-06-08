import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { faqs, BOOKING_LINK } from "@/data/site";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-24 bg-bone-200 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-deep mb-4">FAQ</p>
            <h2 className="font-display text-4xl lg:text-5xl text-coal tracking-[-0.02em] text-balance leading-[1.07]">
              Straight answers.
            </h2>
            <p className="mt-5 text-coal/60 leading-relaxed max-w-sm">
              Still wondering about something? Book a call and ask me directly.
            </p>
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-clay-deep font-semibold hover:gap-3 transition-all"
            >
              Book a Call
            </a>
          </FadeUp>
        </div>

        <div className="lg:col-span-8">
          <FadeUp delay={0.08}>
            <div className="border-t border-coal/12">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-coal/12">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg lg:text-xl text-coal">{f.q}</span>
                      <motion.span
                        animate={reduce ? undefined : { rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                          isOpen ? "bg-clay text-bone border-clay" : "border-coal/20 text-coal/60"
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-coal/65 leading-relaxed max-w-2xl">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
