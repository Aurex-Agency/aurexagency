import { Layout } from "@/components/layout/Layout";
import { BookCallDialog } from "@/components/BookCallDialog";
import { Reveal } from "@/components/Reveal";
import {
  ArrowRight, PhoneCall, Clock, DatabaseZap, Cog, Check, Phone,
  ShieldCheck, Sparkles, MapPin, ChevronDown, Bot, Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import aurexProfile from "@/assets/aurex-profile.png";

const pains = [
  { icon: PhoneCall, title: "Missed calls become lost revenue", body: "Voicemails sit. Prospects book with whoever picks up the phone." },
  { icon: Clock, title: "Slow follow-up kills conversion", body: "Leads that wait two hours convert seven times less than leads answered in five minutes." },
  { icon: Cog, title: "Your front desk is buried", body: "Manual texting, calling, and rebooking eats every clean hour of the day." },
  { icon: DatabaseZap, title: "Your database is a goldmine sitting idle", body: "Past patients and customers represent six-figure revenue you have already paid to acquire." },
];

const features = [
  { icon: PhoneCall, title: "Answers every call, 24/7", body: "An AI voice agent that handles inbound calls, qualifies the lead, and books the appointment around the clock." },
  { icon: Clock, title: "Responds in 60 seconds", body: "Instant lead follow-up by text and chat. Every form, every ad, every DM gets a human-quality reply in under a minute." },
  { icon: DatabaseZap, title: "Reactivates your database", body: "We turn your existing customer list into booked revenue with AI-driven outreach campaigns." },
  { icon: Cog, title: "Runs itself", body: "A fully managed system that keeps producing whether or not you are running ads this month." },
];

const steps = [
  { n: "01", t: "Audit", b: "We map exactly where you are losing leads, calls, and bookings today." },
  { n: "02", t: "Build", b: "We install your custom AI infrastructure: voice, chat, automation, and CRM." },
  { n: "03", t: "Launch", b: "We go live and start capturing every inbound opportunity on day one." },
  { n: "04", t: "Optimize", b: "We manage, measure, and improve the system every month, forever." },
];

const tiers = [
  {
    name: "Launchpad",
    price: "Starting at $3,000",
    sub: "plus monthly",
    desc: "Core setup to stop the leaks.",
    features: ["Missed-call text-back", "Booking automation", "AI website chat", "Reputation + reviews engine", "Single CRM pipeline"],
    highlight: false,
  },
  {
    name: "Growth Engine",
    price: "Starting at $7,500",
    sub: "plus monthly",
    desc: "Our flagship. The full lead-to-booking engine.",
    features: ["Everything in Launchpad", "AI voice agent (24/7)", "Database reactivation campaigns", "Paid ad funnel", "Conversion-optimized site"],
    highlight: true,
  },
  {
    name: "Command Center",
    price: "Starting at $12,000",
    sub: "plus monthly",
    desc: "Full done-for-you AI infrastructure.",
    features: ["Everything in Growth Engine", "Advanced multi-pipeline automation", "Smart call routing + lead scoring", "Custom dashboards", "Performance guarantee"],
    highlight: false,
  },
];

const faqs = [
  { q: "How fast can you launch?", a: "Most clients are fully live inside 21 to 30 days from kickoff. Launchpad clients can be live in under two weeks." },
  { q: "What does it actually cost?", a: "Builds start at $3,000 with a monthly management fee. Flagship Growth Engine builds start at $7,500. Pricing depends on the size and complexity of your operation, and we quote on the call." },
  { q: "Do I own the system?", a: "Yes. You own your CRM, your data, your phone numbers, and your customer list. If you ever leave, the engine goes with you." },
  { q: "Is it compliant (HIPAA, texting rules)?", a: "Yes. We build clinic stacks on HIPAA-aligned infrastructure, with BAA-covered tools, A2P 10DLC registered numbers, and full opt-in handling." },
  { q: "What if I already have a CRM?", a: "We integrate. We have built on top of existing CRMs, EMRs, and job-management systems like AcuLynx. We do not force a rebuild if you have something that works." },
  { q: "Do you work outside Mississippi?", a: "Yes. We are based in North Mississippi and run client systems remotely across the country." },
];

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <Layout>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center surface-ink overflow-hidden grain">
        <motion.div style={{ y: yBg, opacity }} className="absolute inset-0 surface-ink-grad" />
        <motion.div
          aria-hidden
          className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30 animate-drift"
          style={{ background: "radial-gradient(circle, hsl(38 92% 52% / 0.6), transparent 70%)" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-32 -right-32 w-[44rem] h-[44rem] rounded-full blur-3xl opacity-25 animate-drift"
          style={{ background: "radial-gradient(circle, hsl(217 80% 55% / 0.7), transparent 70%)", animationDelay: "-8s" }}
        />

        <div className="container relative z-10 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="eyebrow eyebrow-amber mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              AI Growth Infrastructure for Clinics and Home-Services Brands
            </div>
            <h1 className="font-display text-cream text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] font-medium text-balance">
              We build the system that books your calendar <span className="italic text-amber">while you sleep.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-cream/70 max-w-2xl leading-relaxed text-pretty">
              Aurex installs the AI-powered engine that captures every lead, answers every call, and fills your schedule automatically. Built for med spas, hormone clinics, roofers, and HVAC companies.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <BookCallDialog>
                <button className="btn-amber h-14 px-8 text-base">
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </button>
              </BookCallDialog>
              <Link to="/results" className="text-cream/80 hover:text-amber text-sm font-medium inline-flex items-center gap-2 group">
                See the results
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <p className="mt-10 text-sm text-cream/50 tracking-wide">
              Trusted by multi-location clinics and growing home-services brands.
            </p>
          </motion.div>
        </div>

        <motion.div
          aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="surface-cream border-y hairline">
        <div className="container py-10 lg:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {[
            { name: "Uplift Medical", metric: "24+ automated workflows across multiple locations" },
            { name: "Shurden Roofing", metric: "Fully automated lead-to-job pipeline" },
          ].map((c) => (
            <Reveal key={c.name}>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
                <p className="font-display text-2xl lg:text-3xl text-ink font-medium">{c.name}</p>
                <p className="text-ink/60 text-sm lg:text-base">{c.metric}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="surface-cream py-24 lg:py-32">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <div className="eyebrow mb-5">The problem</div>
              <h2 className="font-display text-4xl lg:text-6xl text-ink font-medium leading-[1.05] text-balance">
                Your next customer already reached out. Did anyone answer?
              </h2>
              <p className="mt-6 text-ink/60 text-lg max-w-2xl text-pretty">
                Missed calls go to voicemail and never call back. Leads sit for hours before anyone responds. The front desk is buried. Good prospects quietly book with the competitor who answered first.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pains.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="card-premium p-7 h-full">
                  <div className="w-11 h-11 rounded-lg bg-ink/5 text-ink flex items-center justify-center mb-5">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl text-ink mb-2 font-medium">{p.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="surface-cream-warm py-24 lg:py-32 border-y hairline">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <div className="eyebrow eyebrow-amber mb-5">What we do</div>
              <h2 className="font-display text-4xl lg:text-6xl text-ink font-medium leading-[1.05] text-balance">
                We do not run your ads and disappear. <span className="italic">We build the engine.</span>
              </h2>
              <p className="mt-6 text-ink/60 text-lg max-w-2xl text-pretty">
                Aurex is an AI infrastructure partner, not a marketing agency. We install the owned system that captures, qualifies, books, and reactivates your leads, then we run and optimize it.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="card-premium p-8 h-full group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber-deep flex items-center justify-center shrink-0 group-hover:bg-amber group-hover:text-ink transition-colors">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-ink mb-2 font-medium">{f.title}</h3>
                      <p className="text-ink/60 leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="surface-cream py-24 lg:py-36">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <div className="eyebrow mb-5">Case studies</div>
              <h2 className="font-display text-4xl lg:text-6xl text-ink font-medium leading-[1.05]">
                Real systems. <span className="italic">Real results.</span>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-8 lg:space-y-12">
            {[
              {
                client: "Uplift Medical",
                industry: "Multi-location hormone therapy clinic",
                problem: "Manual scheduling across multiple locations created bottlenecks, dropped leads, and inconsistent patient experience.",
                built: "A full GoHighLevel system with 24+ workflows, three pipelines, an AI conversation bot, smart call routing, and a custom n8n AI orchestration layer.",
                outcome: "24+ automated workflows live. Patient response time reduced from hours to seconds. Front desk freed to focus on in-clinic experience.",
                tag: "Healthcare",
              },
              {
                client: "Shurden Roofing",
                industry: "Roofing and home services",
                problem: "Leads from ads, social, and word-of-mouth were scattered across inboxes, DMs, and voicemail with no single source of truth.",
                built: "An integrated automation stack connecting GoHighLevel, the AcuLynx job system, comment-to-DM automation, and interactive video. One pipeline from first touch to closed job.",
                outcome: "Fully automated lead-to-job pipeline. Every inbound is captured, qualified, routed, and tracked through to invoice.",
                tag: "Home Services",
              },
            ].map((cs, i) => (
              <Reveal key={cs.client} delay={i * 0.1}>
                <article className="card-premium p-8 lg:p-12 grid lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-4">
                    <span className="inline-block text-[11px] uppercase tracking-[0.22em] font-semibold text-amber-deep mb-3">
                      {cs.tag}
                    </span>
                    <h3 className="font-display text-3xl lg:text-4xl text-ink font-medium leading-tight mb-2">
                      {cs.client}
                    </h3>
                    <p className="text-ink/50 text-sm">{cs.industry}</p>
                  </div>
                  <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
                    {[
                      { label: "Problem", body: cs.problem },
                      { label: "Built", body: cs.built },
                      { label: "Outcome", body: cs.outcome },
                    ].map((b) => (
                      <div key={b.label}>
                        <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink/40 mb-2">{b.label}</p>
                        <p className="text-ink/80 text-sm leading-relaxed">{b.body}</p>
                      </div>
                    ))}
                    <div className="sm:col-span-3 pt-2">
                      <Link to="/results" className="inline-flex items-center gap-2 text-ink font-medium text-sm group hover:text-amber-deep">
                        Read the full story <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE AI VOICE DEMO */}
      <section className="surface-ink relative overflow-hidden grain py-24 lg:py-32">
        <div className="absolute inset-0 mesh-amber opacity-40 pointer-events-none" />
        <div className="container relative z-10">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="eyebrow eyebrow-amber mb-5">Live demo</div>
              <h2 className="font-display text-cream text-4xl lg:text-6xl font-medium leading-[1.05] text-balance">
                Do not take our word for it. <span className="italic text-amber">Talk to it.</span>
              </h2>
              <p className="mt-6 text-cream/70 text-lg max-w-2xl">
                Call our live AI receptionist right now. It will answer in two rings, qualify you like a trained front-desk lead, and book you on the calendar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-premium bg-ink/40 backdrop-blur border-cream/10 p-8 lg:p-12 max-w-3xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-amber text-ink flex items-center justify-center shrink-0">
                  <Bot className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="text-cream/60 text-sm mb-1">Live AI receptionist</p>
                  {/* Retell AI agent — replace with live number */}
                  <p className="font-display text-3xl text-cream font-medium">(XXX) XXX-XXXX</p>
                </div>
                <a href="tel:+10000000000" className="btn-amber h-14 px-8 text-base">
                  <Phone className="w-4 h-4" /> Call now
                </a>
              </div>
              <p className="text-cream/40 text-xs mt-6">
                Powered by Retell AI. Live agent. Connected to our calendar in real time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="surface-cream py-24 lg:py-32">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <div className="eyebrow mb-5">How it works</div>
              <h2 className="font-display text-4xl lg:text-6xl text-ink font-medium leading-[1.05]">
                From first call to fully booked in <span className="italic">30 days.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-2xl overflow-hidden border hairline">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="bg-cream p-8 lg:p-10 h-full">
                  <p className="font-display text-amber-deep text-2xl mb-6">{s.n}</p>
                  <h3 className="font-display text-2xl text-ink mb-3 font-medium">{s.t}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="surface-cream-warm py-24 lg:py-32 border-y hairline">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <div className="eyebrow mb-5">Services</div>
              <h2 className="font-display text-4xl lg:text-6xl text-ink font-medium leading-[1.05]">
                Choose your level of <span className="italic">growth.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className={`card-premium p-8 lg:p-10 h-full flex flex-col relative ${t.highlight ? "ring-2 ring-amber bg-ink text-cream" : ""}`}>
                  {t.highlight && (
                    <span className="absolute -top-3 left-8 bg-amber text-ink text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <h3 className={`font-display text-3xl font-medium mb-2 ${t.highlight ? "text-cream" : "text-ink"}`}>{t.name}</h3>
                  <p className={`text-sm mb-6 ${t.highlight ? "text-cream/70" : "text-ink/60"}`}>{t.desc}</p>
                  <div className="mb-6">
                    <p className={`font-display text-3xl font-medium ${t.highlight ? "text-amber" : "text-ink"}`}>{t.price}</p>
                    <p className={`text-xs ${t.highlight ? "text-cream/50" : "text-ink/50"}`}>{t.sub}</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.highlight ? "text-amber" : "text-amber-deep"}`} />
                        <span className={t.highlight ? "text-cream/85" : "text-ink/75"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <BookCallDialog>
                    <button className={t.highlight ? "btn-amber w-full h-12" : "btn-ghost-ink w-full h-12"}>
                      Book a call
                    </button>
                  </BookCallDialog>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="surface-ink py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-amber opacity-25 pointer-events-none" />
        <div className="container relative z-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
              <div className="w-16 h-16 rounded-2xl bg-amber text-ink flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="eyebrow eyebrow-amber mb-3">The guarantee</div>
                <p className="font-display text-cream text-3xl lg:text-5xl font-medium leading-[1.1] text-balance">
                  If we do not deliver the booked appointments we promise in your first 90 days, <span className="italic text-amber">we keep working for free until we do.</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="surface-cream py-24 lg:py-32">
        <div className="container grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <div className="eyebrow mb-5">About</div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink font-medium leading-[1.1] text-balance">
              Built by an operator, <span className="italic">not an agency middleman.</span>
            </h2>
            <p className="mt-6 text-ink/70 text-lg leading-relaxed">
              Aurex was founded by Kalob Adair, who left a career in local media and advertising to build growth systems hands-on for real businesses. Every system we ship has been built, tested, and run by an operator who has actually owned the outcome.
            </p>
            <p className="mt-4 text-ink/60 leading-relaxed">
              We are based in North Mississippi and run client engines remotely nationwide. Personal, accountable, and built to last.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-ink font-medium group">
              Read the full story <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-3xl bg-ink/5 border hairline overflow-hidden relative">
              <img src="/src/assets/aurex-profile.png" alt="Kalob Adair, founder of Aurex Agency" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 rounded-3xl pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-cream-warm py-24 lg:py-32 border-y hairline">
        <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-5">FAQ</div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink font-medium leading-[1.05]">
              Answers, before <span className="italic">you ask.</span>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FAQList />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="surface-ink relative overflow-hidden py-24 lg:py-32 grain">
        <div className="absolute inset-0 surface-ink-grad opacity-90" />
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="eyebrow eyebrow-amber mb-5">
              <MapPin className="w-3.5 h-3.5" /> Limited spots each quarter
            </div>
            <h2 className="font-display text-cream text-5xl lg:text-7xl font-medium leading-[1.02] text-balance">
              Your competitors are answering. <span className="italic text-amber">Are you?</span>
            </h2>
            <p className="mt-6 text-cream/70 text-lg max-w-xl">
              Book a strategy call. We will map your leak points, sketch the system, and quote it on the call.
            </p>
            <div className="mt-8">
              <BookCallDialog>
                <button className="btn-amber h-14 px-8 text-base">
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </button>
              </BookCallDialog>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-premium bg-cream/5 border-cream/15 backdrop-blur p-2 h-[480px]">
              {/* GoHighLevel calendar embed slot */}
              <div className="w-full h-full rounded-xl bg-ink/40 border border-cream/10 flex items-center justify-center text-cream/40 text-sm">
                GoHighLevel calendar embed
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function FAQList() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <ul className="divide-y hairline border-y hairline">
      {faqs.map((f, i) => {
        const open = openIdx === i;
        return (
          <li key={f.q}>
            <button
              onClick={() => setOpenIdx(open ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            >
              <span className="font-display text-xl lg:text-2xl text-ink font-medium pr-4">{f.q}</span>
              <span className={`w-9 h-9 rounded-full border hairline flex items-center justify-center shrink-0 transition-all ${open ? "bg-ink text-cream rotate-180" : "text-ink"}`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-6 text-ink/65 leading-relaxed max-w-2xl">{f.a}</p>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
}
