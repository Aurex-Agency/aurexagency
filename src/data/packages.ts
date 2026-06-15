// Single source of truth for the productized three-tier model.
// Used by both the Home teaser and the full Packages page so they never drift.

import {
  ShieldCheck,
  Zap,
  Repeat,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Site-wide config                                                   */
/* ------------------------------------------------------------------ */

// The 15-minute call is booked through a GoHighLevel calendar.
// All "Book a Call" buttons point here. On the Packages page the embed
// lives in the BookingSection (id="book"); elsewhere CTAs link to it.
export const BOOKING_HREF = "/packages#book";

// TODO: confirm the public contact email before launch.
export const CONTACT_EMAIL = "hello@aurexagency.com";

export const TAGLINE = "Protect it. Answer it. Grow it.";

export const nav: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "Growth", href: "/growth" },
  { name: "About", href: "/about" },
];

// Repeated near every price and final CTA. These owners have been burned
// by 12-month agency contracts — killing that fear is half the sale.
export const RISK_REVERSAL = "No contract. Month-to-month. Cancel anytime.";

/* ------------------------------------------------------------------ */
/* The three tiers                                                    */
/* ------------------------------------------------------------------ */

export interface Tier {
  id: string;
  name: string;
  price: number;
  icon: LucideIcon;
  /** One-line outcome shown under the name. */
  outcome: string;
  /** "This is for you if..." qualifier. */
  forYou: string;
  /** 2–3 sentence, outcome-first description. */
  blurb: string;
  /** "Everything in the tier below, plus..." label. */
  inheritNote?: string;
  /** Name of the system this tier adds (for the stacked-value heading). */
  addsSystem?: string;
  /** Benefit-framed feature list (proof it's handled). */
  features: string[];
  /** Boxed guarantee. */
  guarantee: string;
  /** Contrast line that frames this tier against the one below. */
  framing?: string;
  popular?: boolean;
  cta: string;
}

export const tiers: Tier[] = [
  {
    id: "get-found",
    name: "The Get-Found System",
    price: 97,
    icon: ShieldCheck,
    outcome: "Show up, stay found, and look on top of it.",
    forYou: "This is for you if your phone should be ringing more than it is.",
    blurb:
      "Your Google listing is the first thing a customer sees, and it's quietly costing you calls when it's wrong, ignored, or messed with. We watch it every day and keep it working for you, so you look like the obvious choice before anyone even picks up the phone.",
    features: [
      "Every Google review gets a reply within a day, written in your voice, so you look on top of it without lifting a finger.",
      "Your profile is checked every single day. Wrong hours, sneaky edits, even a suspension get caught and fixed before they cost you calls.",
      "We keep an eye on three local competitors so you always know what you're up against.",
      "A plain-English text every week showing exactly what we caught and fixed.",
      "Steady monthly activity that keeps Google showing you to people nearby.",
    ],
    guarantee:
      "If I don't catch and fix at least one real problem on your profile in 90 days, you get every dollar back.",
    cta: "Start with Get-Found",
  },
  {
    id: "front-door",
    name: "The Front Door",
    price: 397,
    icon: Zap,
    popular: true,
    outcome: "Stop losing jobs to whoever calls back first.",
    forYou:
      "This is for you if you're spending money on leads and still losing jobs to whoever calls back first.",
    blurb:
      "You already pay to make the phone ring. The money leaks out when a lead sits for ten minutes and books the other guy. This makes sure every lead gets answered in seconds, gets qualified, and lands on your calendar, day or night, whether you're on a roof or asleep.",
    inheritNote: "Everything in Get-Found, plus the Speed-to-Lead Machine:",
    addsSystem: "the Speed-to-Lead Machine",
    features: [
      "Every lead, from a call, a form, Facebook, anywhere, gets answered in under 60 seconds, day or night.",
      "We text them back, ask the right questions, and put a booked job on your calendar.",
      "No reply in five minutes? An automated voice call goes out so the lead never sits.",
      "Quiet leads get worked for 14 days automatically, so nothing slips through the cracks.",
      "The second a hot lead comes in, your phone buzzes.",
      "Once a month you get a simple report: leads saved, jobs booked, and what that pipeline is worth.",
    ],
    guarantee:
      "If any lead goes more than five minutes without a response in your first 90 days, that month is on me.",
    framing:
      "Get-Found protects the front door. The Front Door makes sure somebody's standing at it.",
    cta: "Get the Front Door",
  },
  {
    id: "growth-engine",
    name: "The Growth Engine",
    price: 597,
    icon: Repeat,
    outcome: "Turn your happy customers into your sales team.",
    forYou:
      "This is for you if your best customers would refer you, they just never get asked.",
    blurb:
      "Your happiest customers are your cheapest source of new work, and most of them never get asked. This puts that on autopilot: it asks for the referral after every job, rewards the people who send you business, and quietly pulls past customers back in when you've got room on the schedule.",
    inheritNote: "Everything in the Front Door, plus the Referral & Repeat System:",
    addsSystem: "the Referral & Repeat System",
    features: [
      "After every job your customer gets asked to refer you, with a $50 reward or $50 to a local cause if they'd rather give back.",
      "Each customer gets their own referral page that tracks their progress and rewards.",
      "Hit a milestone, get rewarded, handled automatically with no spreadsheet to babysit.",
      "Past customers get pulled back in with seasonal and “we're in your neighborhood” campaigns.",
      "Every month you get a Growth Report: referrals, repeat revenue, and your top referrers.",
    ],
    guarantee:
      "Same promise as every tier: no contract and cancel anytime. If it's not earning its keep, you walk.",
    framing:
      "The Front Door stops you losing money. The Growth Engine turns your happy customers into your sales team.",
    cta: "Build the Growth Engine",
  },
];

/* ------------------------------------------------------------------ */
/* Objection-handling FAQ, in the owner's voice                       */
/* ------------------------------------------------------------------ */

export const faqs: { q: string; a: string }[] = [
  {
    q: "How long until I see something?",
    a: "Fast. Most of this is live within a few days of our call, not weeks. The profile work starts catching and fixing things in the first week, and the lead response is answering calls the day it's switched on.",
  },
  {
    q: "What do you need from me?",
    a: "Almost nothing, and that's the whole point. A short call to get access to your Google profile and your phone or lead source, and then you get out of the way and catch the jobs. You're not learning software or logging into anything.",
  },
  {
    q: "Can I switch tiers later?",
    a: "Anytime, both ways. Start on Get-Found and move up when you're ready, or step down if you need to. It's month-to-month, so you're never stuck on the wrong one.",
  },
  {
    q: "What if it doesn't work?",
    a: "There's no contract, so the worst case is you cancel and you've lost a month. On top of that, the first two tiers come with a written guarantee, and if it's not earning its keep, you don't keep paying. The risk is on me, not you.",
  },
  {
    q: "Do I have to be technical?",
    a: "No. If you can answer your phone and read a text, you can use this. I build it, I install it, and I run it. You just take the calls.",
  },
  {
    q: "Am I locked into a contract?",
    a: "Never. Month-to-month, cancel anytime, no cancellation games. I'd rather earn your business every month than trap you in paperwork.",
  },
];

/* ------------------------------------------------------------------ */
/* "What this replaces" value anchors                                 */
/* ------------------------------------------------------------------ */

export const valueAnchors: string[] = [
  "A part-time front-desk person costs you well over $1,500 a month and goes home at five. This never clocks out.",
  "One roofing or HVAC job you didn't lose pays for a year of the Get-Found System.",
  "You're already paying for the leads. This just makes sure you actually catch them.",
];
