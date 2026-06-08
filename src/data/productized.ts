// Centralized content for the productized "marketing on subscription" model.
// Inspired by the Conversion Factory / DesignJoy structure.
// NOTE: prices are SAMPLE placeholders. Update before launch.

import {
  Megaphone,
  Filter,
  Share2,
  Database,
  Workflow,
  MessagesSquare,
  Mail,
  Star,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const services: Service[] = [
  { icon: Megaphone, title: "Marketing strategy & campaigns", body: "A clear plan and the campaigns to execute it, built around booked revenue, not vanity metrics." },
  { icon: Filter, title: "Funnel building", body: "High-converting landing pages and funnels that turn traffic and leads into booked appointments." },
  { icon: Share2, title: "Social media management", body: "Done-for-you content, scheduling, and engagement that keeps your brand active and credible." },
  { icon: Database, title: "CRM setup & automation", body: "Your pipeline, tags, and automations built and maintained so no lead ever slips through." },
  { icon: Workflow, title: "Client workflows & SOPs", body: "The behind-the-scenes systems and automations that make your operation run without you." },
  { icon: MessagesSquare, title: "Client communication", body: "Missed-call text-back, instant lead replies, and reminder sequences that customers actually answer." },
  { icon: Mail, title: "Email & SMS marketing", body: "Lifecycle campaigns and broadcasts that reactivate past customers and drive repeat revenue." },
  { icon: Star, title: "Reviews & reputation", body: "Automated review requests that lift your rating and your rank in local search." },
  { icon: BarChart3, title: "Reporting & dashboards", body: "One clean dashboard showing the only number that matters: revenue we can tie back to the work." },
];

export interface Step {
  title: string;
  body: string;
}

export const steps: Step[] = [
  { title: "Subscribe to a plan", body: "Pick the plan that fits and get access to your private request board in minutes. No long onboarding." },
  { title: "Request what you need", body: "Add marketing, funnel, social, CRM, or workflow tasks to your board. Reprioritize anytime." },
  { title: "We build and launch", body: "Senior operators deliver in days, revise until it is right, then launch and report on results." },
];

export interface Benefit {
  title: string;
  body: string;
}

export const benefits: Benefit[] = [
  { title: "One flat monthly rate", body: "No hourly billing, no surprise invoices. The same predictable price every month." },
  { title: "Senior operators only", body: "Your work is done by people who have run real campaigns, never handed to juniors." },
  { title: "Unlimited requests", body: "Queue as many tasks as you want. We work through them one or two at a time, fast." },
  { title: "Fast turnarounds", body: "Most requests are delivered in a few business days, not the weeks a typical agency takes." },
  { title: "Manage it in one board", body: "Your whole marketing operation lives in a single board you can see and steer at any time." },
  { title: "Pause or cancel anytime", body: "Going quiet for a season? Pause your plan and pick up your unused time whenever you return." },
];

export interface Plan {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

// Sample pricing only. Replace with real numbers.
export const plans: Plan[] = [
  {
    name: "Essential",
    price: "$2,950",
    cadence: "/month",
    tagline: "For owners who need a steady marketing engine running.",
    features: [
      "One active request at a time",
      "Marketing strategy & campaigns",
      "Client communication systems",
      "Reviews & reputation",
      "Monthly reporting dashboard",
      "Pause or cancel anytime",
    ],
    cta: "Get started",
  },
  {
    name: "Growth",
    price: "$4,950",
    cadence: "/month",
    tagline: "Our most popular plan for businesses ready to scale.",
    popular: true,
    features: [
      "Two active requests at a time",
      "Everything in Essential",
      "Funnel building",
      "Social media management",
      "CRM setup & automation",
      "Email & SMS marketing",
      "Priority turnarounds",
    ],
    cta: "Get started",
  },
  {
    name: "Scale",
    price: "$7,950",
    cadence: "/month",
    tagline: "A full outsourced marketing department for growing teams.",
    features: [
      "Unlimited active requests",
      "Everything in Growth",
      "Client workflows & SOPs",
      "Dedicated marketing strategist",
      "Quarterly strategy planning",
      "Priority support & turnarounds",
    ],
    cta: "Talk to us",
  },
];

export interface ComparisonRow {
  label: string;
  aurex: string;
  inhouse: string;
  agency: string;
  freelancer: string;
}

export const comparison: ComparisonRow[] = [
  { label: "Monthly cost", aurex: "Flat & predictable", inhouse: "$15k+ fully loaded", agency: "$5k to $10k + retainers", freelancer: "Variable per project" },
  { label: "Speed", aurex: "Delivered in days", inhouse: "Months to hire", agency: "Weeks per request", freelancer: "Inconsistent" },
  { label: "Scope", aurex: "Full marketing stack", inhouse: "One skill set", agency: "Locked to a scope", freelancer: "One skill set" },
  { label: "Seniority", aurex: "Senior operators", inhouse: "Hit or miss", agency: "Juniors do the work", freelancer: "Varies widely" },
  { label: "Commitment", aurex: "Pause or cancel anytime", inhouse: "Salary + benefits", agency: "Long contracts", freelancer: "Per engagement" },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  { q: "What exactly can I request?", a: "Anything across marketing, funnel building, social media, CRM and automations, client workflows, communication systems, email and SMS, reviews, and reporting. If it moves your revenue, it is fair game." },
  { q: "How fast will I get my work?", a: "Most individual requests are delivered within a few business days. Larger builds like full funnels or CRM setups are broken into milestones so you always see progress." },
  { q: "Is there a limit to how much I can request?", a: "No. You can add as many requests to your board as you like. We actively work one or two at a time depending on your plan, and move through the queue quickly." },
  { q: "Can I really pause or cancel anytime?", a: "Yes. Pause your subscription when things slow down and keep your unused days for when you return. No long contracts and no cancellation fees." },
  { q: "Who actually does the work?", a: "Senior operators who have run real campaigns and systems. Your work is never handed off to juniors or offshored." },
  { q: "What if I do not like the work?", a: "We revise until it is right. Clear, fast revisions are part of every plan." },
  { q: "Do you offer one-off projects?", a: "Our model is built around subscriptions because that is what produces compounding results, but we will tell you honestly on a quick call if a one-off is a better fit for you." },
  { q: "Are you really based in Mississippi?", a: "Yes. Aurex is based in New Albany, North Mississippi, and we work with local businesses across the region and clients nationwide." },
];
