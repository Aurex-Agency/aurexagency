import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { faqs } from "@/data/aurex";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  return (
    <FadeUp>
      <div className="border-t hairline">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b hairline">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold text-foreground">{f.q}</span>
                <motion.span
                  animate={reduce ? undefined : { rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
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
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-foreground/65 leading-relaxed max-w-2xl">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </FadeUp>
  );
}
