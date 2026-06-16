import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { faqs as packageFaqs } from "@/data/packages";

/** Objection-handling FAQ, in the owner's voice. Reused across pages. */
export function Faq({
  items = packageFaqs,
  eyebrow = "Straight answers",
  heading = "The stuff owners actually ask.",
  sub = "Still wondering about something? Book a call and ask me straight.",
  surface = "paper",
}: {
  items?: { q: string; a: string }[];
  eyebrow?: string;
  heading?: string;
  sub?: string;
  surface?: "paper" | "muted";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const surfaceClass = surface === "muted" ? "surface-muted" : "bg-background";

  return (
    <section className={`${surfaceClass} py-20 lg:py-28`}>
      <div className="shell grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <FadeUp>
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              {heading}
            </h2>
            <p className="mt-5 text-foreground/60 leading-relaxed max-w-sm">{sub}</p>
          </FadeUp>
        </div>

        <div className="lg:col-span-8">
          <FadeUp delay={0.08}>
            <div className="border-t hairline">
              {items.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b hairline">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg font-bold text-foreground">{f.q}</span>
                      <motion.span
                        animate={reduce ? undefined : { rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                          isOpen ? "bg-accent text-white border-accent" : "border-foreground/20 text-foreground/60"
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
                          <p className="pb-6 text-foreground/65 leading-relaxed max-w-2xl">{f.a}</p>
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
