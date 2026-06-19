// Content for the standalone North Mississippi lead-gen landing page
// (/northmississippi). This is a separate Speed-to-Lead offer from the main
// /packages tiers, so it lives in its own file on purpose.

import {
  Wind,
  Home,
  Droplets,
  HardHat,
  Stethoscope,
  Scale,
  type LucideIcon,
} from "lucide-react";

// TODO: replace with the real campaign phone number before running traffic.
export const PHONE_DISPLAY = "(662) 555-0123";
export const PHONE_TEL = "+16625550123";

// TODO: paste the VSL embed (YouTube / Vimeo / GHL) — see NorthMississippi.tsx.
export const VSL_EMBED_URL = "";

export const serviceAreasShort = ["Oxford", "Tupelo", "Corinth", "Southaven", "Grenada"];
export const serviceAreasFull = [
  "Oxford",
  "Tupelo",
  "Corinth",
  "Southaven",
  "Grenada",
  "New Albany",
  "Booneville",
  "Iuka",
];

export const problemStats: { stat: string; body: string }[] = [
  { stat: "78%", body: "of customers hire the first business to respond. Not the best. Not the cheapest. The fastest." },
  { stat: "51%", body: "of leads are never contacted at all. That's money sitting in your voicemail." },
  { stat: "4–6 hrs", body: "the average response time for a local service business. By then, they've already called someone else." },
];

export const howSteps: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "A lead comes in",
    body: "Someone calls, fills out your website form, or DMs you on Facebook. Most businesses miss this. Yours won't.",
  },
  {
    n: "02",
    title: "The system responds in under 60 seconds",
    body: "An automated, personalized message goes out immediately, by text, email, or DM, and tries to book the appointment on the spot.",
  },
  {
    n: "03",
    title: "You see it all in your dashboard",
    body: "Log in any time and see exactly how many leads came in, how fast they were contacted, and how many appointments got booked without you touching anything.",
  },
];

export interface LanderTier {
  id: string;
  name: string;
  price: number;
  subline: string;
  features: string[];
  popular?: boolean;
}

export const landerTiers: LanderTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 397,
    subline: "For businesses ready to stop missing leads.",
    features: [
      "Missed Call Text Back (auto-books the appointment)",
      "Website Form Speed to Lead (responds in under 60 seconds)",
      "Automated appointment booking attempts",
      "ROI dashboard showing leads captured and revenue protected",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: 597,
    popular: true,
    subline: "For businesses ready to capture every lead from every channel.",
    features: [
      "Everything in Starter",
      "Facebook & Instagram DM auto-booking",
      "Unified inbox (texts, emails, DMs in one place)",
      "Email automations included",
      "Appointment reminder sequences",
      "Automated Google review requests after every job",
    ],
  },
  {
    id: "full",
    name: "Full System",
    price: 997,
    subline: "For businesses serious about dominating their local market.",
    features: [
      "Everything in Growth",
      "Referral text automation",
      "Database reactivation (re-engages old customers)",
      "Monthly strategy call with the Aurex team",
      "Google review response system",
      "Google Business Profile optimization",
      "Monthly competitor GMB report",
    ],
  },
];

// Plan options for the lead form dropdown.
export const planOptions = landerTiers.map((t) => `${t.name} ($${t.price}/mo)`);

export const industries: { icon: LucideIcon; name: string; line: string }[] = [
  { icon: Wind, name: "HVAC Contractors", line: "Every missed call in July is a $2,000 job you didn't get." },
  { icon: Home, name: "Roofing Companies", line: "Storm-season leads don't wait. Your system shouldn't either." },
  { icon: Droplets, name: "Plumbers", line: "Emergency calls are won by whoever responds first. Period." },
  { icon: HardHat, name: "Builders & Remodelers", line: "High-ticket jobs start with a fast first impression." },
  { icon: Stethoscope, name: "Dental & Medical", line: "New-patient inquiries go cold in under an hour." },
  { icon: Scale, name: "Law Firms", line: "A client who doesn't hear back calls the next firm on the list." },
];

// ROI calculator constants (industry-data assumptions from the brief).
export const ROI = {
  uncontactedRate: 0.51,
  wouldConvertRate: 0.3,
  defaultLeads: 20,
  defaultJobValue: 1200,
};
