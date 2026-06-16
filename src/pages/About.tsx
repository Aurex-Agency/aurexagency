import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { FadeUp, Stagger, FadeItem } from "@/components/Motion";
import { BookCta } from "@/components/sections/BookCta";
import { MapPin, Gauge, BarChart3, User } from "lucide-react";

const SITE = "https://www.aurexagency.com";

// NOTE: personal details below are easy to edit — refine the wording,
// dates, and specifics to taste. Marked with {/* EDIT */} where relevant.
const beliefs = [
  {
    icon: Gauge,
    title: "Almost nothing on you",
    body: "You've got a business to run. My job is to build the system, install it, and run it, so the work happens without adding a thing to your plate.",
  },
  {
    icon: User,
    title: "Built and live fast",
    body: "No six-month rollouts. I set things up in days and get them working, then keep tuning. You see wins early, not someday.",
  },
  {
    icon: BarChart3,
    title: "Prove it with real numbers",
    body: "No vanity reports. I show you leads caught, jobs booked, and what it's worth, in plain numbers you can actually check.",
  },
];

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE}/about`,
    name: "About Aurex Agency",
    description:
      "Aurex Agency is a one-person shop in North Mississippi building marketing systems for local home-service businesses and cash-pay clinics.",
  };

  return (
    <Layout>
      <Seo
        title="About | Aurex Agency — North Mississippi"
        description="The story behind Aurex Agency: a North Mississippi founder building marketing systems for local home-service businesses and clinics. I'm from here, I work with people here, and I answer my own phone."
        path="/about"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="bg-background pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="shell grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <FadeUp>
              <p className="eyebrow mb-5">About Aurex</p>
              <h1 className="text-[2.6rem] leading-[1.05] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.03] font-extrabold tracking-[-0.03em] text-foreground text-balance">
                I'm local, I build the systems myself, and I answer my own phone.
              </h1>
              <p className="mt-6 text-lg text-foreground/65 leading-relaxed max-w-xl">
                Aurex is a one-person shop on purpose. When you hire me, you get me, not an account manager, not a
                junior, not a call center. The person who builds your system is the person who runs it.
              </p>
            </FadeUp>
          </div>
          <div className="lg:col-span-5">
            <FadeUp delay={0.1}>
              {/* TODO: replace this placeholder with a real founder photo. */}
              <div className="card-soft border-dashed aspect-[4/5] flex flex-col items-center justify-center text-center px-6">
                <span className="inline-flex w-14 h-14 rounded-2xl bg-accent/10 text-accent items-center justify-center mb-4">
                  <User className="w-6 h-6" />
                </span>
                <p className="text-sm font-semibold text-foreground/70">Founder photo</p>
                <p className="mt-1 text-xs text-foreground/45 max-w-[14rem]">Drop a real photo of you here, working, on a job site, or just a clean headshot.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* MY STORY — editable */}
      <section className="bg-background pb-20 lg:pb-28">
        <div className="shell max-w-3xl">
          <FadeUp>
            <p className="eyebrow mb-4">My story</p>
          </FadeUp>
          {/* EDIT: refine these personal details to your liking. */}
          <div className="space-y-6 text-lg lg:text-xl text-foreground/80 leading-relaxed">
            <FadeUp>
              <p>
                I came up playing football, and for a long time that was the whole plan. Then a knee injury, a torn ACL,
                ended that plan for good. When the thing you've built your life around disappears overnight, you learn
                fast how to start over.
              </p>
            </FadeUp>
            <FadeUp>
              <p>
                So I started over. I taught myself marketing, automation, and the AI tools that were just starting to
                change everything, and I got good at making them actually work for real businesses. I spent time as a
                Digital Sales Manager at a local TV station, where I watched good local companies pour money into
                getting noticed and then lose the leads on the back end. Same story, over and over.
              </p>
            </FadeUp>
            <FadeUp>
              <p>
                That's why I built Aurex. Not to sell anybody another tool to figure out, but to build the system that
                catches the calls, answers the leads, and brings customers back, and to run it for them so they can
                stay focused on the actual work.
              </p>
            </FadeUp>
            <FadeUp>
              <p className="text-foreground font-semibold">
                I'm not a big agency. I'm one person who's good at this, working with businesses I can actually look in
                the eye.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHY LOCAL */}
      <section className="surface-muted py-20 lg:py-28">
        <div className="shell grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <FadeUp>
              <span className="inline-flex w-12 h-12 rounded-xl bg-accent/10 text-accent items-center justify-center mb-5">
                <MapPin className="w-5 h-5" />
              </span>
              <p className="eyebrow mb-4">Why local</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
                I'm from here. I work with people here.
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-7">
            <FadeUp delay={0.08}>
              <div className="space-y-5 text-lg text-foreground/70 leading-relaxed">
                <p>
                  I'm from North Mississippi, and these are the businesses I grew up around, the roofer, the HVAC guy,
                  the clinic on Main Street. I understand how word gets around a small town, and how much a reputation
                  is worth here.
                </p>
                <p>
                  When you call me, you get me. I answer my own phone. There's no ticket queue and no account manager
                  reading off a script. If something's wrong, you talk to the person who built it and can fix it.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHAT I BELIEVE */}
      <section className="bg-background py-20 lg:py-28">
        <div className="shell">
          <FadeUp className="max-w-2xl">
            <p className="eyebrow mb-4">What I believe</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-[1.07]">
              Three rules I build everything around.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {beliefs.map((b) => (
              <FadeItem key={b.title} className="h-full">
                <div className="card-soft h-full p-7">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-accent/10 text-accent items-center justify-center mb-5">
                    <b.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">{b.body}</p>
                </div>
              </FadeItem>
            ))}
          </Stagger>
        </div>
      </section>

      <BookCta
        title="Want to talk to the guy who'll actually build it?"
        sub="Book a free 15-minute call. No script, no hand-off, just a straight conversation about where you're losing jobs and how I'd fix it."
      />
    </Layout>
  );
}
