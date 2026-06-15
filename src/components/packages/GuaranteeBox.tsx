import { BadgeCheck } from "lucide-react";

/** The visually-boxed guarantee that sits inside each tier card. */
export function GuaranteeBox({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div
      className={`rounded-xl border p-4 flex gap-3 ${
        light
          ? "border-white/15 bg-white/[0.04]"
          : "border-success/30 bg-success/[0.07]"
      }`}
    >
      <BadgeCheck className={`w-5 h-5 shrink-0 mt-0.5 ${light ? "text-brand-cyan" : "text-success"}`} />
      <div>
        <div className={`text-[11px] font-bold uppercase tracking-[0.14em] mb-1 ${light ? "text-white/60" : "text-success"}`}>
          My guarantee
        </div>
        <p className={`text-sm leading-relaxed ${light ? "text-white/80" : "text-foreground/75"}`}>{text}</p>
      </div>
    </div>
  );
}
