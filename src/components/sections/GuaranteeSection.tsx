import { Reveal } from "@/components/Reveal";
import { ShieldCheck } from "lucide-react";

interface GuaranteeProps {
  title?: string;
  body?: string;
}

export function GuaranteeSection({
  title = "The Payday Guarantee",
  body = "In your first 30 days, we generate at least 3x your setup fee in attributable, booked revenue from your existing assets. If we do not, we work for free until we do. Simple.",
}: GuaranteeProps) {
  return (
    <section className="py-20 lg:py-28 surface-cream">
      <div className="container">
        <Reveal>
          <div className="rounded-3xl surface-ink surface-ink-grad grain text-cream p-10 lg:p-16 relative overflow-hidden border border-accent/20">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent via-accent/60 to-transparent" />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent font-mono text-[11px] uppercase tracking-widest font-medium mb-6 border border-accent/25">
                  <ShieldCheck className="w-3.5 h-3.5" /> Risk reversal
                </div>
                <h2 className="font-display text-4xl lg:text-5xl mb-5 text-balance leading-tight">{title}</h2>
                <p className="text-lg text-cream/75 leading-relaxed">{body}</p>
              </div>
              <div className="lg:col-span-4 lg:border-l border-[hsl(var(--foreground)/0.12)] lg:pl-10">
                <div className="font-display text-7xl lg:text-8xl text-accent tnum leading-none">3×</div>
                <p className="mt-3 label-mono text-cream/50">setup fee in booked revenue · 30 days · or we work free</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
