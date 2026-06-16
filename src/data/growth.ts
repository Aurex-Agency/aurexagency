// Content for the Growth page — custom, bespoke growth systems for
// established businesses. No fixed price; starts with a strategy call.

import {
  Inbox,
  Zap,
  GitBranch,
  Repeat,
  Star,
  BarChart3,
  Building2,
  type LucideIcon,
} from "lucide-react";

// The strategy call is booked through its own GoHighLevel calendar.
export const STRATEGY_HREF = "#book-strategy";

export const qualifiers: string[] = [
  "You're running more than one location, or more than one crew.",
  "You've got real, steady revenue and you're ready to scale it, not start from scratch.",
  "You're already spending on marketing and want all of it pulling in the same direction.",
  "You want a complete system, not one more tool to babysit.",
  "You'd rather own a machine that runs than keep hiring to patch the gaps.",
];

export interface GrowthPillar {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const pillars: GrowthPillar[] = [
  {
    icon: Inbox,
    title: "One front door for every lead",
    body: "Calls, web forms, Facebook, ads, every place a customer reaches out, funneled into one place so nothing comes in and quietly disappears.",
  },
  {
    icon: Zap,
    title: "Answered in seconds, booked while you sleep",
    body: "Every lead gets an instant response and a real spot on the calendar, day or night, so you stop losing jobs to whoever happened to pick up first.",
  },
  {
    icon: GitBranch,
    title: "A pipeline that never drops a lead",
    body: "Follow-up keeps working every lead, politely and automatically, until they book or tell you no. Nothing falls through the cracks because somebody got busy.",
  },
  {
    icon: Repeat,
    title: "Customers who come back",
    body: "Past customers get pulled back in on their own schedule, with the right message at the right time, so the people you already earned keep spending.",
  },
  {
    icon: Star,
    title: "Customers who bring more customers",
    body: "Referrals and reviews handled for you, so your happiest customers quietly grow the business instead of just meaning to.",
  },
  {
    icon: BarChart3,
    title: "The numbers in one place",
    body: "One clear view of what's working, what each job actually costs you, and where the next dollar is coming from. No guessing.",
  },
  {
    icon: Building2,
    title: "Built to run across every location",
    body: "One system, rolled out the same way to every location or crew you've got, so growth doesn't mean more chaos to manage.",
  },
];

export interface GrowthStep {
  n: string;
  title: string;
  body: string;
}

export const process: GrowthStep[] = [
  {
    n: "01",
    title: "Strategy call",
    body: "We talk through where you are, where you want to be, and whether this is even the right move for you. No charge and no pressure.",
  },
  {
    n: "02",
    title: "The blueprint",
    body: "I map the full system around your business, then put one flat number in front of you before any work starts. No hourly billing, no surprises.",
  },
  {
    n: "03",
    title: "Build & install",
    body: "I build it and put it in place, working around your team instead of piling more onto their plate.",
  },
  {
    n: "04",
    title: "Run & optimize",
    body: "Once it's live, I run it and keep tuning it. You watch the numbers, not the software.",
  },
];

export const verticals: { who: string; what: string }[] = [
  {
    who: "Established home-service companies",
    what: "Roofing, HVAC, and plumbing operations scaling past word-of-mouth and ready to grow on purpose.",
  },
  {
    who: "Multi-location med spas & cash-pay clinics",
    what: "Practices building a real patient-acquisition and retention engine across more than one location.",
  },
  {
    who: "Growing insurance agencies",
    what: "Agencies that want every lead worked, every quote followed up, and every renewal kept.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "How much does a custom growth system cost?",
    a: "It depends on what you actually need, and I won't pretend otherwise. After the strategy call I scope the whole thing and put one flat number in front of you before any work starts. No hourly billing and no surprises.",
  },
  {
    q: "How long does it take to build?",
    a: "Most systems are up and running in weeks, not months. I build in stages so you see parts of it working early instead of waiting on the whole thing to go live at once.",
  },
  {
    q: "Do I own it? What happens if we stop working together?",
    a: "It's built around your business and your own accounts. We'll lay out exactly what stays with you up front, so you're never held hostage by your own marketing.",
  },
  {
    q: "Will this work with what I already have?",
    a: "Usually, yes. I build around the tools and accounts you already use wherever it makes sense, and only replace the parts that are actually holding you back.",
  },
  {
    q: "Do you handle more than one location?",
    a: "Yes. That's a big part of the point. A custom system runs the same way across every location or crew you've got, so growing doesn't mean more to keep track of.",
  },
  {
    q: "How is this different from the monthly packages?",
    a: "The packages are off-the-shelf systems at a fixed price, built to get you going fast. This is built from scratch around your business and scoped to your goals. It's a different level of engagement for a different kind of business.",
  },
];
