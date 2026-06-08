import {
  PhoneCall,
  LayoutTemplate,
  Share2,
  Database,
  Workflow,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

// TODO: replace with your real SavvyCal / Calendly booking link.
export const BOOKING_LINK = "https://cal.com/aurex";
// TODO: replace with your real contact email.
export const CONTACT_EMAIL = "hello@aurexagency.com";

export const nav = [
  { name: "System", href: "#system" },
  { name: "Pricing", href: "#pricing" },
  { name: "Results", href: "#results" },
  { name: "FAQ", href: "#faq" },
];

export const pains: { pain: string; outcome: string }[] = [
  { pain: "Missed calls = missed jobs.", outcome: "An AI front desk that answers, texts back, and books, 24/7." },
  { pain: "Leads go cold before you call back.", outcome: "Instant, automated follow-up that works while you work." },
  { pain: "No idea what's actually working.", outcome: "One dashboard. Real numbers. Booked jobs, not vanity metrics." },
  { pain: "Marketing scattered across six tools.", outcome: "One system that runs the whole thing." },
  { pain: "Hiring a team you can't afford.", outcome: "One in-house team. Big-agency results." },
];

export const phases: { n: string; name: string; tag: string; body: string }[] = [
  { n: "01", name: "Foundation", tag: "Weeks 1 to 2", body: "We audit what you have and build your system on solid ground: CRM, lead capture, and an AI front desk that never misses." },
  { n: "02", name: "Growth", tag: "Weeks 3 and on", body: "Funnels, content, follow-up, and ads turn that foundation into booked appointments, tracked down to the dollar." },
  { n: "03", name: "Domination", tag: "Ongoing", body: "Custom automations and constant optimization compound. The system gets smarter while you do less." },
];

export const services: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: PhoneCall, title: "AI Front Desk & Lead Recovery", body: "Answers, texts back, and books your missed calls around the clock." },
  { icon: LayoutTemplate, title: "Funnel & Website Building", body: "Pages built to turn clicks into booked jobs, not just pretty visits." },
  { icon: Share2, title: "Social Media Management", body: "Consistent, on-brand content that keeps you top of mind locally." },
  { icon: Database, title: "CRM & Pipeline Management", body: "Every lead captured, tracked, and nurtured until it closes." },
  { icon: Workflow, title: "Workflow Automation", body: "The busywork runs itself quietly in the background, all day." },
  { icon: MessagesSquare, title: "Client Communication Systems", body: "Text, email, and reminders your customers actually answer." },
];

export interface Tier {
  name: string;
  monthly: number;
  popular?: boolean;
  wedge: string;
  features: string[];
}

export const tiers: Tier[] = [
  {
    name: "Front Desk",
    monthly: 1500,
    wedge: "Your wedge: never miss another lead.",
    features: [
      "AI voice receptionist",
      "Missed-call text-back",
      "Automated lead follow-up",
      "Review automation",
      "Reporting dashboard",
    ],
  },
  {
    name: "Growth System",
    monthly: 3000,
    popular: true,
    wedge: "The full booking engine, built and run.",
    features: [
      "Everything in Front Desk",
      "Funnel built & optimized",
      "Social media management",
      "Meta ad management (ad spend separate)",
      "CRM pipeline management",
      "Monthly strategy + reporting",
    ],
  },
  {
    name: "Market Domination",
    monthly: 5000,
    wedge: "Compounding growth on autopilot.",
    features: [
      "Everything in Growth System",
      "Multi-funnel campaigns",
      "Higher content volume",
      "Custom AI automations",
      "Priority turnaround",
      "Quarterly strategy",
    ],
  },
];

// Quarterly billing discount applied to the displayed monthly rate.
export const QUARTERLY_DISCOUNT = 0.1;

export const oneTimeBuilds: { name: string; price: string }[] = [
  { name: "Marketing Systems Audit", price: "$750" },
  { name: "Funnel / Website Build", price: "$3,000 to $6,000" },
  { name: "Full Marketing System Build", price: "$8,000 to $12,000" },
];

// Sample figures for the metric counters. TODO: replace with real client results.
export const metrics: { value: number; prefix?: string; suffix?: string; label: string }[] = [
  { value: 41, suffix: "%", label: "more booked jobs in 90 days" },
  { value: 312, label: "leads recovered in month one" },
  { value: 38000, prefix: "$", label: "in recovered revenue" },
  { value: 127, label: "5-star reviews generated" },
];

// TODO: replace placeholder testimonials with real client quotes, names, and numbers.
export const testimonials: { metric: string; quote: string; name: string; business: string }[] = [
  {
    metric: "[X]% more booked jobs",
    quote: "[Real client quote goes here. Keep it short, specific, and about the result.]",
    name: "[Client Name]",
    business: "[Business, Town, MS]",
  },
  {
    metric: "[X] leads recovered",
    quote: "[Real client quote goes here. Mention the missed calls or follow-up that got fixed.]",
    name: "[Client Name]",
    business: "[Business, Town, MS]",
  },
  {
    metric: "[$X] recovered revenue",
    quote: "[Real client quote goes here. Make it sound like a relieved business owner.]",
    name: "[Client Name]",
    business: "[Business, Town, MS]",
  },
];

export const faqs: { q: string; a: string }[] = [
  { q: "What exactly do I get?", a: "A complete marketing system, built and run for you. An AI front desk that answers and books, instant lead follow-up, funnels, social, a CRM, and the automations that tie it together. You get the outcomes, not another tool to babysit." },
  { q: "Can I really pause or cancel anytime?", a: "Yes. No contracts and no cancellation games. Pause when things slow down and pick back up whenever you are ready." },
  { q: "How fast do you build it?", a: "Your front desk and lead capture are usually live in the first week or two. Larger builds roll out in phases so you see wins quickly instead of waiting months." },
  { q: "What if I already have a website or CRM?", a: "Good. We plug into what is already working and rebuild only what is holding you back. No rip-and-replace just to run up the bill." },
  { q: "Do you work outside North Mississippi?", a: "Home base is Tupelo, Oxford, and Ripley, but the system runs anywhere. If you are a service business that lives on booked jobs, we should talk." },
  { q: "How is this different from hiring an agency?", a: "The person who builds your system is the person who runs it. No account managers, no junior hand-offs, no telephone game. Senior work and a direct line, every time." },
];
