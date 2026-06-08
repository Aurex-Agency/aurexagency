import {
  Megaphone,
  Filter,
  Workflow,
  LineChart,
  Database,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";

// TODO: replace with your real SavvyCal / Calendly booking link.
export const BOOKING_LINK = "https://cal.com/aurex";
// TODO: confirm contact email.
export const CONTACT_EMAIL = "hello@aurexagency.com";

export const ONE_LINER = "Your marketing department, on demand. Built to prove ROI.";
export const SUB_LINE =
  "We don't sell you leads and disappear. We turn your marketing into an investment you can actually measure: ads, funnels, follow-up, and the systems behind them, run by a senior in-house team that owns the number.";

export const nav = [
  { name: "How it works", href: "/how-it-works" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Results", href: "/results" },
  { name: "About", href: "/about" },
];

export const whoFor: string[] = [
  "Med spas & cosmetic-medical",
  "Hormone & wellness clinics",
  "Roofing & home services",
  "Insurance agencies",
  "High-ticket local services",
];

export const services: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Megaphone, title: "Paid ads management", body: "Meta and Google campaigns built and managed to a cost-per-booked-job, not impressions." },
  { icon: Filter, title: "Funnels, landing pages & CRO", body: "Pages and funnels engineered to convert the traffic you already pay for into booked revenue." },
  { icon: Workflow, title: "Customer-relations automation", body: "Missed-call text-back, instant lead replies, and follow-up sequences that run themselves." },
  { icon: LineChart, title: "Content & marketing strategy", body: "A clear plan tied to your numbers, plus the content to execute it month after month." },
  { icon: Database, title: "CRM management", body: "Your pipeline, tags, and automations built and maintained inside GoHighLevel." },
  { icon: PhoneCall, title: "Dormant-lead follow-up", body: "We mine the leads already sitting in your CRM and turn the cold ones back into booked jobs." },
];

export interface Tier {
  name: string;
  price: number;
  popular?: boolean;
  best: string;
  tasks: string;
  turnaround: string;
  features: string[];
}

export const tiers: Tier[] = [
  {
    name: "Ads",
    price: 1500,
    best: "For owners who just need ads that pay back.",
    tasks: "1 active task at a time",
    turnaround: "3 to 4 day turnaround",
    features: ["Paid ads management", "Unlimited requests in your backlog", "Monthly ROI report", "Cancel or pause anytime"],
  },
  {
    name: "Funnel",
    price: 2500,
    best: "For fixing what happens after the click.",
    tasks: "1 active task at a time",
    turnaround: "3 to 4 day turnaround",
    features: ["Funnels, landing pages & CRO", "Customer-relations automation", "Unlimited requests in your backlog", "Monthly ROI report", "Cancel or pause anytime"],
  },
  {
    name: "All-Access",
    price: 4000,
    popular: true,
    best: "Your full marketing department, on demand.",
    tasks: "2 active tasks at a time",
    turnaround: "2 to 3 day turnaround",
    features: [
      "Everything in Ads and Funnel",
      "Content & marketing strategy",
      "CRM management",
      "Ongoing dormant-lead follow-up",
      "Quarterly strategy call + report",
      "Cancel or pause anytime",
    ],
  },
];

export const annualNote = "Pay annually and get 2 months free, roughly 17% off, billed for 10 months.";

export const oneTimeBuilds: { name: string; price: string; scope: string }[] = [
  { name: "Website, Starter", price: "$2,500", scope: "Up to 5 pages. Copy, design, build, and basic tracking." },
  { name: "Website, Growth", price: "$4,000", scope: "Up to 10 pages. Custom design, integrations, conversion-built." },
  { name: "Website, Premium", price: "$6,000+", scope: "Full custom, multi-funnel, advanced integrations." },
  { name: "Custom CRM build", price: "$2,000", scope: "GoHighLevel pipelines, automations, calendars, and forms." },
  { name: "CRM, Advanced", price: "$3,500", scope: "Multi-pipeline, full automation suite, integrations, reporting." },
  { name: "Standalone funnel", price: "$1,500", scope: "Landing page, thank-you page, and lead-capture automation." },
];

export const landOffers: { name: string; price: string; body: string; primary?: boolean }[] = [
  {
    name: "Dormant Lead Reactivation",
    price: "$1,500 one-time",
    primary: true,
    body: "A 30-day campaign across the leads already in your CRM. Booked revenue from a cold list in about 30 days, so you see the ROI before you commit to anything monthly.",
  },
  {
    name: "Marketing Blueprint",
    price: "$750",
    body: "A paid strategy intensive that diagnoses exactly what is broken and what to do next. Credited 100% to your first month if you start within 14 days.",
  },
];

export const alacarte: { name: string; price: string }[] = [
  { name: "Extra active task slot", price: "+$850/mo" },
  { name: "Rush turnaround (24 to 48h)", price: "+$300/task" },
  { name: "Always-on priority", price: "+$500/mo" },
];

export const comparison: { label: string; aurex: string; agency: string; freelancer: string }[] = [
  { label: "Who does the work", aurex: "Senior in-house team", agency: "Junior account staff", freelancer: "One person, one skill" },
  { label: "What you actually buy", aurex: "Measurable ROI", agency: "Activity and leads", freelancer: "A single deliverable" },
  { label: "Commitment", aurex: "No lock-in, pause anytime", agency: "6 to 12 month contracts", freelancer: "Per project" },
  { label: "Scope", aurex: "Full marketing dept in one queue", agency: "A scoped retainer", freelancer: "One skill" },
  { label: "Reporting", aurex: "ROI dashboard, monthly", agency: "Vanity metrics", freelancer: "None" },
];

export const onboarding: { when: string; title: string; body: string }[] = [
  { when: "Day 0", title: "Discovery call", body: "We qualify, diagnose, and point you at the right plan or land offer. You can start on the spot." },
  { when: "Day 0 to 1", title: "Agreement + payment", body: "A simple agreement and a payment link. Payment kicks off the rest automatically." },
  { when: "Day 1", title: "Welcome + portal", body: "Your private, branded client portal opens with your request queue and intake form." },
  { when: "Day 1 to 3", title: "Assets & access", body: "Ad accounts, CRM, domain, brand kit, and offers. Collected once, cleanly." },
  { when: "Day 3 to 5", title: "Kickoff & Blueprint", body: "We deliver your Blueprint, set the KPIs, and drop the first task into the queue." },
  { when: "Day 5", title: "First task in progress", body: "Momentum, fast. Your first request is already moving through the queue." },
  { when: "Day 30", title: "First ROI report", body: "The investment becomes visible. This is the moment the model proves itself." },
];

export const portal: { title: string; body: string }[] = [
  { title: "Request queue", body: "A simple board: Backlog, Queued, In Progress, In Review, Done. You always know exactly where things stand." },
  { title: "Active strategy", body: "Your Blueprint, goals, and target KPIs, with the current plan of attack in one place." },
  { title: "ROI dashboard", body: "Monthly results, spend versus return, and the so-what. Your investment, made visible." },
  { title: "Assets & access", body: "Logins, ad accounts, brand kit, and domains, collected once at onboarding." },
];

export const faqs: { q: string; a: string }[] = [
  { q: "How does the queue work?", a: "You add as many requests as you want to your backlog. We work one active task at a time (two on All-Access), finish it properly, then pull in the next. You always know what is being worked on." },
  { q: "What does one active task at a time mean?", a: "We focus on a single request until it is done and you approve it, instead of juggling ten half-finished things. Large builds like a full funnel are broken into stages, each on the standard clock." },
  { q: "Can I really pause or cancel anytime?", a: "Yes. No lock-in. Cancel and your current paid month simply finishes with no future billing. Pause and we hold your slot for up to 30 days, which is perfect for seasonal businesses." },
  { q: "How fast will I get work back?", a: "Standard turnaround is 3 to 4 business days on Ads and Funnel, and 2 to 3 days on All-Access. Need something faster? Rush turnaround delivers in 24 to 48 hours." },
  { q: "What if I just need a website or CRM built?", a: "Those are one-time builds with flat, transparent pricing. You can buy a build on its own or alongside a subscription. No quote games." },
  { q: "Do you actually do the work yourself?", a: "Yes. A senior in-house Aurex team builds and runs your system. No account managers, no junior hand-offs, nothing outsourced." },
  { q: "How do you measure ROI?", a: "Every plan includes a dashboard that ties spend to booked revenue. We report the number that matters, not impressions and reach." },
  { q: "Are there contracts?", a: "No. The whole model is built on betting that results keep you here, not paperwork. Pause or cancel whenever you need to." },
];

// Sample results. TODO: replace with real client metrics and quotes.
export const metrics: { value: number; prefix?: string; suffix?: string; label: string }[] = [
  { value: 30, suffix: " days", label: "to provable ROI from a cold list" },
  { value: 312, label: "dormant leads reactivated" },
  { value: 47000, prefix: "$", label: "in recovered revenue" },
  { value: 1, suffix: " operator", label: "owns your number, start to finish" },
];

export const testimonials: { metric: string; quote: string; name: string; business: string }[] = [
  { metric: "[X]% ROI", quote: "[Real client quote here. Keep it specific and about the result.]", name: "[Client Name]", business: "[Business, Town, MS]" },
  { metric: "[$X] recovered", quote: "[Real client quote here. The dormant-lead win works great as a story.]", name: "[Client Name]", business: "[Business, Town, MS]" },
  { metric: "[X] booked jobs", quote: "[Real client quote here. Make it sound like a relieved owner.]", name: "[Client Name]", business: "[Business, Town, MS]" },
];
