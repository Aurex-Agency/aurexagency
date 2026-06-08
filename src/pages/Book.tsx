import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { testimonials } from "@/data/aurex";
import { toast } from "@/components/ui/sonner";
import { z } from "zod";
import { ArrowRight, Clock, ShieldCheck, PhoneCall, Star, Check } from "lucide-react";

const steps = [
  {
    title: "Tell us about your business",
    body: "A two-minute form, no discovery-call gauntlet. Just enough for us to come prepared with real numbers, not a generic pitch.",
  },
  {
    title: "We map your five revenue leaks",
    body: "On a focused 30-minute call, a senior strategist from our team walks your dormant list, missed calls, follow-up speed, no-shows, and reviews.",
  },
  {
    title: "You leave with a 30-day projection",
    body: "Exactly what your first month with Aurex would look like in booked dollars. No obligation, no retainer pitch unless the math warrants it.",
  },
];

const assurances = [
  { icon: PhoneCall, label: "A senior strategist from our team on the line, never an SDR reading a script." },
  { icon: Clock, label: "We reply within one business day. Usually much faster." },
  { icon: ShieldCheck, label: "No pressure. We only pitch a retainer if the numbers justify it." },
];

const days = ["As soon as possible", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const windows = ["Morning (8am – 12pm)", "Midday (12pm – 3pm)", "Afternoon (3pm – 6pm)"];
const industries = [
  "Med Spa / Aesthetics",
  "Home Services (Roofing, HVAC, Plumbing)",
  "Health Practice / Clinic / Dental",
  "Other Local Service",
];

const schema = z.object({
  name: z.string().trim().min(1, "Enter your name").max(100),
  business: z.string().trim().min(1, "Enter your business name").max(150),
  industry: z.string().min(1, "Pick an industry"),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(40),
  day: z.string().min(1, "Pick a preferred day"),
  window: z.string().min(1, "Pick a time window"),
});

const inputCls =
  "w-full h-12 px-4 rounded-lg bg-secondary border hairline text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition";
const labelCls = "label-mono mb-2 block";

const t = testimonials[0];

export default function Book() {
  const [state, setState] = useState({
    name: "",
    business: "",
    industry: "",
    email: "",
    phone: "",
    day: "",
    window: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update =
    (k: keyof typeof state) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setState((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = () => {
    const parsed = schema.safeParse(state);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    // Replace with real scheduling/CRM endpoint when ready.
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      toast.success("Request received. We will confirm your call within one business day.");
    }, 700);
  };

  return (
    <Layout>
      <Seo
        title="Book a Free Marketing Audit | North Mississippi | Aurex"
        description="Book your free 30-minute revenue audit with Aurex, a North Mississippi marketing agency serving Oxford, Tupelo, Southaven and the Memphis area. A senior strategist from our team maps your revenue leaks and projects your first 30 days. No pressure, no SDR pitch."
        path="/book"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Revenue Audit Call",
          provider: { "@type": "Organization", name: "Aurex", url: "https://www.aurexagency.com/" },
          areaServed: "US",
          description:
            "A free 30-minute strategy call where an Aurex senior strategist maps your five revenue leaks and projects your first 30 days of booked revenue.",
        }}
      />

      {/* HERO + BOOKING */}
      <section className="relative pt-36 lg:pt-44 pb-20 lg:pb-28 surface-cream overflow-hidden">
        <div className="absolute inset-0 mesh-amber pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container relative">
          {/* Meta row */}
          <Reveal>
            <div className="flex items-center justify-between border-b hairline pb-6 mb-12">
              <p className="eyebrow eyebrow-amber">Book a call</p>
              <p className="label-mono hidden sm:block">30-minute strategy session · Free</p>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-[2.5rem] leading-[1.04] sm:text-6xl lg:text-7xl text-foreground tracking-tight text-balance max-w-4xl">
              Book your free revenue audit.{" "}
              <span className="italic text-accent">See the money first.</span>
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-foreground/65 max-w-2xl text-pretty">
              Thirty minutes with a senior strategist from our team who will show you exactly where your next month of
              revenue is already hiding, before you spend a dollar on ads.
            </p>
          </Reveal>

          <div className="mt-14 lg:mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT - what to expect */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              {/* What happens */}
              <Reveal delay={0.1}>
                <div>
                  <p className="label-mono mb-6">What happens on the call</p>
                  <div className="border-t hairline">
                    {steps.map((s, i) => (
                      <div
                        key={s.title}
                        className="group flex gap-6 py-6 border-b hairline transition-colors hover:bg-foreground/[0.02]"
                      >
                        <span className="section-index text-2xl lg:text-3xl tnum w-12 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-display text-xl lg:text-2xl text-foreground mb-1.5">{s.title}</h3>
                          <p className="text-foreground/65 leading-relaxed max-w-xl">{s.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Assurances */}
              <Reveal delay={0.15}>
                <ul className="mt-10 grid sm:grid-cols-1 gap-3">
                  {assurances.map((a) => (
                    <li key={a.label} className="flex items-center gap-4 text-foreground/80">
                      <span className="mark w-9 h-9">
                        <a.icon className="w-4 h-4" />
                      </span>
                      <span>{a.label}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Testimonial */}
              <Reveal delay={0.2}>
                <figure className="mt-12 card-premium p-7 lg:p-8 max-w-2xl">
                  <div className="flex items-center gap-1 text-accent mb-4" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent" />
                    ))}
                  </div>
                  <blockquote className="font-display text-xl lg:text-2xl text-foreground leading-snug text-balance">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 pt-5 border-t hairline flex items-center justify-between gap-4 flex-wrap">
                    <span className="text-sm text-foreground/70">
                      <span className="text-foreground font-medium">{t.name}</span> · {t.business}
                    </span>
                    <span className="label-mono eyebrow-amber">{t.metric}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            {/* RIGHT - booking card */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <Reveal delay={0.12}>
                <div className="lg:sticky lg:top-28">
                  <div className="card-premium p-6 sm:p-8 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

                    {done ? (
                      <div className="py-10 text-center">
                        <span className="mark w-14 h-14 mx-auto mb-6">
                          <Check className="w-6 h-6" />
                        </span>
                        <h2 className="font-display text-3xl text-foreground mb-3">You're on the list.</h2>
                        <p className="text-foreground/65 leading-relaxed max-w-sm mx-auto">
                          We'll confirm your call within one business day at the email you provided. Keep an eye
                          on your inbox and your phone.
                        </p>
                        <Link to="/results" className="mt-8 inline-flex btn-ghost-ink h-12 px-6 cursor-pointer">
                          See client results <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    ) : (
                      <>
                        <div className="mb-6">
                          <h2 className="font-display text-2xl text-foreground">Request your call</h2>
                          <p className="text-sm text-foreground/55 mt-1">
                            Takes about two minutes. No ad pitch, just the numbers.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="bk-name" className={labelCls}>Name</label>
                              <input id="bk-name" className={inputCls} value={state.name} onChange={update("name")} placeholder="Jane Doe" />
                            </div>
                            <div>
                              <label htmlFor="bk-business" className={labelCls}>Business</label>
                              <input id="bk-business" className={inputCls} value={state.business} onChange={update("business")} placeholder="Acme Med Spa" />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="bk-industry" className={labelCls}>Industry</label>
                            <select id="bk-industry" className={`${inputCls} cursor-pointer`} value={state.industry} onChange={update("industry")}>
                              <option value="">Select industry</option>
                              {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                            </select>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="bk-email" className={labelCls}>Email</label>
                              <input id="bk-email" type="email" className={inputCls} value={state.email} onChange={update("email")} placeholder="you@business.com" />
                            </div>
                            <div>
                              <label htmlFor="bk-phone" className={labelCls}>Phone</label>
                              <input id="bk-phone" type="tel" className={inputCls} value={state.phone} onChange={update("phone")} placeholder="(662) 555-0100" />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="bk-day" className={labelCls}>Preferred day</label>
                              <select id="bk-day" className={`${inputCls} cursor-pointer`} value={state.day} onChange={update("day")}>
                                <option value="">Select day</option>
                                {days.map((d) => <option key={d} value={d}>{d}</option>)}
                              </select>
                            </div>
                            <div>
                              <label htmlFor="bk-window" className={labelCls}>Time window</label>
                              <select id="bk-window" className={`${inputCls} cursor-pointer`} value={state.window} onChange={update("window")}>
                                <option value="">Select time</option>
                                {windows.map((w) => <option key={w} value={w}>{w}</option>)}
                              </select>
                            </div>
                          </div>

                          <button
                            onClick={onSubmit}
                            disabled={submitting}
                            className="btn-amber w-full h-14 text-base cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {submitting ? "Sending..." : <>Lock in my call <ArrowRight className="w-4 h-4" /></>}
                          </button>

                          <p className="text-xs text-foreground/50 text-center">
                            By requesting a call you agree to be contacted about your audit. No spam, ever.
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  <p className="mt-4 text-center text-sm text-foreground/55">
                    Prefer email?{" "}
                    <a href="mailto:hello@aurexagency.com" className="text-accent hover:underline underline-offset-4">
                      hello@aurexagency.com
                    </a>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <GuaranteeSection />
    </Layout>
  );
}
