import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  business: z.string().trim().min(1, "Business name is required").max(150),
  industry: z.string().min(1, "Pick an industry"),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(40),
  bottleneck: z.string().trim().min(1, "Tell us your biggest bottleneck").max(1000),
});

const industries = [
  "Med Spa / Aesthetics",
  "Home Services (Roofing, HVAC, Plumbing)",
  "Health Practice / Clinic / Dental",
  "Other Local Service",
];

interface LeadFormProps {
  defaultIndustry?: string;
  ctaLabel?: string;
}

export function LeadForm({ defaultIndustry = "", ctaLabel = "Request My Free Revenue Audit" }: LeadFormProps) {
  const [state, setState] = useState({
    name: "",
    business: "",
    industry: defaultIndustry,
    email: "",
    phone: "",
    bottleneck: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof typeof state) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setState((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = () => {
    const parsed = schema.safeParse(state);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    // Replace with real submission endpoint when ready.
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Got it. We will reach out within one business day.");
      setState({ name: "", business: "", industry: defaultIndustry, email: "", phone: "", bottleneck: "" });
    }, 600);
  };

  const inputCls =
    "w-full h-12 px-4 rounded-xl bg-cream border hairline text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber/50 transition";

  return (
    <div className="card-premium p-6 sm:p-8 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs uppercase tracking-[0.18em] text-ink/60 font-semibold mb-2 block">Name</label>
          <input className={inputCls} value={state.name} onChange={update("name")} placeholder="Jane Doe" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.18em] text-ink/60 font-semibold mb-2 block">Business</label>
          <input className={inputCls} value={state.business} onChange={update("business")} placeholder="Acme Med Spa" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.18em] text-ink/60 font-semibold mb-2 block">Industry</label>
          <select className={inputCls} value={state.industry} onChange={update("industry")}>
            <option value="">Select industry</option>
            {industries.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.18em] text-ink/60 font-semibold mb-2 block">Email</label>
          <input type="email" className={inputCls} value={state.email} onChange={update("email")} placeholder="you@business.com" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs uppercase tracking-[0.18em] text-ink/60 font-semibold mb-2 block">Phone</label>
          <input type="tel" className={inputCls} value={state.phone} onChange={update("phone")} placeholder="(662) 555-0100" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs uppercase tracking-[0.18em] text-ink/60 font-semibold mb-2 block">What is your biggest bottleneck?</label>
          <textarea
            className={`${inputCls} h-28 py-3 resize-none`}
            value={state.bottleneck}
            onChange={update("bottleneck")}
            placeholder="Missed calls, slow follow-up, dead database, no-shows, weak reviews..."
          />
        </div>
      </div>
      <button
        onClick={onSubmit}
        disabled={submitting}
        className="btn-amber w-full h-14 text-base disabled:opacity-60"
      >
        {submitting ? "Sending..." : ctaLabel}
      </button>
      <p className="text-xs text-ink/50 text-center">No spam. No ad pitch. Just a real audit of where your revenue is leaking.</p>
    </div>
  );
}
