import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { ArrowRight, X, Check } from "lucide-react";
import { pains } from "@/data/site";

export function PainOutcome() {
  return (
    <section className="bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-deep mb-4">The honest truth</p>
          <h2 className="font-display text-4xl lg:text-5xl text-coal tracking-[-0.02em] max-w-3xl text-balance leading-[1.08]">
            Stop duct-taping your marketing together.
          </h2>
          <p className="mt-5 text-lg text-coal/65 max-w-2xl leading-relaxed">
            Most local businesses lose money in the same handful of places. Here is what that looks like, and
            what it becomes once the system is running.
          </p>
        </FadeUp>

        <Stagger className="mt-14 space-y-4">
          {pains.map((row) => (
            <FadeItem key={row.pain}>
              <div className="grid md:grid-cols-[1fr_auto_1fr] items-stretch gap-4 md:gap-3">
                <div className="rounded-2xl border border-coal/10 bg-bone-200/60 p-6 flex items-start gap-4">
                  <span className="mt-0.5 w-8 h-8 rounded-lg bg-coal/5 text-coal/40 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4" />
                  </span>
                  <p className="text-lg text-coal/55">{row.pain}</p>
                </div>

                <div className="hidden md:flex items-center justify-center text-clay">
                  <ArrowRight className="w-5 h-5" />
                </div>

                <div className="rounded-2xl border border-clay/25 bg-clay/[0.06] p-6 flex items-start gap-4">
                  <span className="mt-0.5 w-8 h-8 rounded-lg bg-clay text-bone flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <p className="text-lg text-coal font-medium">{row.outcome}</p>
                </div>
              </div>
            </FadeItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
