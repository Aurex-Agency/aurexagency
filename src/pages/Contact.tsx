import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp } from "@/components/Motion";
import { toast } from "@/components/ui/sonner";
import { BOOKING_LINK, CONTACT_EMAIL } from "@/data/aurex";
import { ArrowRight, Check } from "lucide-react";

const expect = [
  "A straight diagnosis of where your revenue is leaking.",
  "The fastest path to provable ROI for your business.",
  "Honest pricing and a clear next step. No pressure.",
];

const inputCls =
  "w-full h-12 px-4 rounded-lg bg-background border hairline text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition";

export default function Contact() {
  const [s, setS] = useState({ name: "", business: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const upd = (k: keyof typeof s) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setS((p) => ({ ...p, [k]: e.target.value }));

  const submit = () => {
    if (!s.name.trim() || !/^\S+@\S+\.\S+$/.test(s.email)) {
      toast.error("Please add your name and a valid email.");
      return;
    }
    setSending(true);
    // TODO: wire to your real form endpoint / CRM (GoHighLevel, Formspree, etc.)
    setTimeout(() => {
      setSending(false);
      toast.success("Got it. We'll reply within one business day.");
      setS({ name: "", business: "", email: "", message: "" });
    }, 600);
  };

  return (
    <Layout>
      <Seo
        title="Book a Call | Aurex"
        description="Book a call with Aurex. A 30-minute conversation to diagnose where your marketing is leaking revenue and map the fastest path to measurable ROI. No contracts, no pressure."
        path="/contact"
      />

      <section className="bg-background pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="shell grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeUp>
            <p className="eyebrow mb-5">Book a call</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-foreground text-balance leading-[1.04]">
              Let's make your marketing measurable.
            </h1>
            <p className="mt-6 text-lg text-foreground/65 leading-relaxed max-w-xl">
              Thirty minutes, one operator, zero fluff. We'll find where your revenue is leaking and show you
              the fastest path to proving ROI.
            </p>

            <ul className="mt-8 space-y-3">
              {expect.map((e) => (
                <li key={e} className="flex gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" /> {e}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {/* TODO: replace BOOKING_LINK in src/data/aurex.ts with your real scheduler */}
              <a href={BOOKING_LINK} target="_blank" rel="noreferrer" className="btn-primary h-14 px-7 text-base">
                Grab a time on the calendar <ArrowRight className="w-4 h-4" />
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-outline h-14 px-7 text-base">Email instead</a>
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="card-soft p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground mb-1">Prefer to send a note?</h2>
              <p className="text-sm text-foreground/55 mb-6">Tell us a little and we'll come prepared.</p>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-foreground/55 mb-2 block">Name</label>
                    <input id="name" className={inputCls} value={s.name} onChange={upd("name")} placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="business" className="text-xs font-semibold uppercase tracking-wide text-foreground/55 mb-2 block">Business</label>
                    <input id="business" className={inputCls} value={s.business} onChange={upd("business")} placeholder="Acme Med Spa" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-foreground/55 mb-2 block">Email</label>
                  <input id="email" type="email" className={inputCls} value={s.email} onChange={upd("email")} placeholder="you@business.com" />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-foreground/55 mb-2 block">What are you trying to fix?</label>
                  <textarea id="message" className={`${inputCls} h-28 py-3 resize-none`} value={s.message} onChange={upd("message")} placeholder="Dead lead list, ads that don't pay back, no follow-up system..." />
                </div>
                <button onClick={submit} disabled={sending} className="btn-primary w-full h-14 text-base disabled:opacity-60">
                  {sending ? "Sending..." : <>Send it over <ArrowRight className="w-4 h-4" /></>}
                </button>
                <p className="text-xs text-foreground/45 text-center">No spam, ever. We reply within one business day.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
