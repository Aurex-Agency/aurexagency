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
          <div className="rounded-3xl bg-ink text-cream p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 mesh-amber opacity-30 pointer-events-none" />
            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/15 text-amber text-xs uppercase tracking-[0.22em] font-semibold mb-6">
                <ShieldCheck className="w-3.5 h-3.5" /> Risk reversal
              </div>
              <h2 className="font-display text-4xl lg:text-5xl mb-5 text-balance">{title}</h2>
              <p className="text-lg text-cream/80 leading-relaxed">{body}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
