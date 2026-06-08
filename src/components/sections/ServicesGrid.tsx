import { motion, useReducedMotion } from "framer-motion";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { services } from "@/data/site";

export function ServicesGrid() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-deep mb-4">What's included</p>
          <h2 className="font-display text-4xl lg:text-5xl text-coal tracking-[-0.02em] max-w-3xl text-balance leading-[1.08]">
            Everything your marketing needs, run by one in-house team.
          </h2>
          <p className="mt-5 text-lg text-coal/65 max-w-2xl leading-relaxed">
            Productized and built to work together. No piecing it together from six vendors.
          </p>
        </FadeUp>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <FadeItem key={s.title}>
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group h-full rounded-2xl border border-coal/10 bg-bone-100 p-7 hover:border-clay/40 hover:shadow-[0_24px_50px_-30px_rgba(26,23,20,0.35)] transition-colors"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-clay/10 text-clay border border-clay/20 items-center justify-center mb-5 group-hover:bg-clay group-hover:text-bone transition-colors">
                  <s.icon className="w-5 h-5" />
                </span>
                <h3 className="font-display text-xl text-coal mb-2">{s.title}</h3>
                <p className="text-coal/60 leading-relaxed">{s.body}</p>
              </motion.div>
            </FadeItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
