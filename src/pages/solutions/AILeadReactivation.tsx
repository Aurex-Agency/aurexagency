import { Layout } from "@/components/layout/Layout";
import { SolutionHero } from "@/components/SolutionHero";
import { SolutionValueProps, SolutionHowItWorks, SolutionFeatures } from "@/components/SolutionSections";
import { SolutionPricing } from "@/components/SolutionPricing";
import { StickyAuditButton } from "@/components/StickyAuditButton";
import { Database, Zap, Target, DollarSign, MessageSquare, Calendar, Bot } from "lucide-react";

const valueProps = [
  {
    icon: MessageSquare,
    title: "Strategic Handraiser Messaging",
    description: "We re-engage your list with curiosity-based SMS that prompts a 400% higher response rate than standard blasts.",
  },
  {
    icon: Bot,
    title: "24/7 AI Qualification",
    description: "Our agents qualify prospects and book them directly into your calendar while you sleep.",
  },
  {
    icon: DollarSign,
    title: "Risk-Free ROI",
    description: "Target high-value dormant leads for a fraction of the cost of new customer acquisition.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Database Audit",
    description: "We analyze your existing lead database to identify high-value dormant contacts with conversion potential.",
  },
  {
    step: "02",
    title: "AI Agent Training",
    description: "Custom AI agents are trained on your business, services, and qualification criteria.",
  },
  {
    step: "03",
    title: "Reactivation Campaigns",
    description: "Strategic SMS sequences re-engage leads with curiosity-driven messaging that prompts responses.",
  },
  {
    step: "04",
    title: "Automated Booking",
    description: "Qualified leads are automatically booked into your calendar—no manual follow-up required.",
  },
];

const features = [
  {
    title: "AI Conversation Engine",
    items: [
      "Human-grade response quality",
      "Multi-turn conversation handling",
      "Context-aware follow-ups",
      "Objection handling protocols",
    ],
  },
  {
    title: "Lead Intelligence",
    items: [
      "Lead scoring & prioritization",
      "Engagement tracking dashboard",
      "Conversion analytics",
      "Campaign A/B testing",
    ],
  },
  {
    title: "Integration Stack",
    items: [
      "CRM sync (GoHighLevel, HubSpot)",
      "Calendar booking automation",
      "SMS/MMS capabilities",
      "Webhook-ready architecture",
    ],
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$500",
    period: "month",
    description: "Perfect for testing database reactivation",
    features: [
      "Up to 500 lead reactivations/mo",
      "Basic AI qualification",
      "Email support",
      "Monthly performance report",
    ],
    cta: "Start Reactivating",
  },
  {
    name: "Growth",
    price: "$1,500",
    period: "month",
    description: "For businesses ready to scale",
    features: [
      "Up to 2,500 lead reactivations/mo",
      "Advanced AI with custom training",
      "Priority support",
      "Weekly optimization calls",
      "Multi-campaign management",
    ],
    highlighted: true,
    cta: "Scale Your Pipeline",
  },
  {
    name: "Enterprise",
    price: "$2,500",
    period: "month",
    description: "Full database monetization",
    features: [
      "Unlimited lead reactivations",
      "Dedicated AI agent team",
      "24/7 priority support",
      "Custom integrations",
      "White-label options",
      "Dedicated account manager",
    ],
    cta: "Go Enterprise",
  },
];

export default function AILeadReactivation() {
  return (
    <Layout>
      <SolutionHero
        badge="Database Monetization"
        badgeIcon={Database}
        headline="Unlock the Hidden Gold in Your"
        highlightedText="Dormant Lead Database."
        subheadline="We turn your 'dead leads' into active appointments using human-grade AI agents. No new ad spend. Just pure profit recovery."
        ctaText="Calculate Your Database ROI"
      />

      <SolutionValueProps
        title="Why"
        highlightedTitle="Reactivation Works"
        subtitle="Your old leads aren't dead—they're just waiting for the right approach."
        valueProps={valueProps}
      />

      <SolutionHowItWorks
        title="The Reactivation"
        highlightedTitle="Process"
        subtitle="From dormant database to qualified appointments in weeks, not months."
        steps={howItWorks}
      />

      <SolutionFeatures
        title="The Technology"
        highlightedTitle="Stack"
        subtitle="Enterprise-grade AI infrastructure built for lead conversion."
        features={features}
      />

      <SolutionPricing
        title="Investment Tiers"
        subtitle="Choose the right level of database monetization for your business"
        tiers={pricingTiers}
      />

      <StickyAuditButton />
    </Layout>
  );
}
