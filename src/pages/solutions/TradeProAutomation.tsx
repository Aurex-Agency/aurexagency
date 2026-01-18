import { Layout } from "@/components/layout/Layout";
import { SolutionHero } from "@/components/SolutionHero";
import { SolutionValueProps, SolutionHowItWorks, SolutionFeatures } from "@/components/SolutionSections";
import { SolutionPricing } from "@/components/SolutionPricing";
import { StickyAuditButton } from "@/components/StickyAuditButton";
import { Wrench, Phone, Calendar, Star, MessageSquare, Clock, Zap } from "lucide-react";

const valueProps = [
  {
    icon: Phone,
    title: "Missed Call Text-Back",
    description: "Instantly text back every lead you miss, securing the job before they call your competitor.",
  },
  {
    icon: Calendar,
    title: "24/7 Automated Estimates",
    description: "Allow customers to book on-site estimates directly from your site—even at 2 AM.",
  },
  {
    icon: Star,
    title: "Automated Reputation Engine",
    description: "Trigger 5-star review requests the moment a job is marked 'won' in our CRM.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Systems Audit",
    description: "We analyze your current lead flow, booking process, and customer communication gaps.",
  },
  {
    step: "02",
    title: "Snapshot Deployment",
    description: "Your custom Aurex Snapshot is deployed with all automations pre-configured.",
  },
  {
    step: "03",
    title: "Team Training",
    description: "We train your team on the mobile app and CRM so they can manage jobs from the field.",
  },
  {
    step: "04",
    title: "Ongoing Optimization",
    description: "Monthly reviews ensure your automations evolve with your business growth.",
  },
];

const features = [
  {
    title: "Lead Capture",
    items: [
      "Missed call text-back",
      "Website chat widget",
      "Facebook/Instagram DM sync",
      "Google Business messaging",
    ],
  },
  {
    title: "Job Management",
    items: [
      "Drag-and-drop pipeline",
      "Automated follow-up sequences",
      "Estimate & invoice generation",
      "Job status notifications",
    ],
  },
  {
    title: "Reputation Building",
    items: [
      "Automated review requests",
      "Review response templates",
      "Reputation monitoring",
      "Google ranking optimization",
    ],
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$500",
    period: "month",
    description: "Essential automation for growing trades",
    features: [
      "Missed call text-back",
      "Basic CRM setup",
      "Review request automation",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$1,500",
    period: "month",
    description: "Complete trade business automation",
    features: [
      "Everything in Starter",
      "24/7 booking automation",
      "Multi-tech scheduling",
      "Customer portal",
      "Priority support",
    ],
    highlighted: true,
    cta: "Scale Your Business",
  },
  {
    name: "Enterprise",
    price: "$2,500",
    period: "month",
    description: "Multi-location trade operations",
    features: [
      "Everything in Growth",
      "Multi-location support",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
      "API access",
    ],
    cta: "Go Enterprise",
  },
];

export default function TradeProAutomation() {
  return (
    <Layout>
      <SolutionHero
        badge="Contractors & HVAC"
        badgeIcon={Wrench}
        headline="The Digital Backbone for"
        highlightedText="North Mississippi's Top Trades."
        subheadline="Built for the field. Stop losing jobs to missed calls and manual booking. Scale your HVAC, Plumbing, or Electrical business with the Aurex Snapshot."
        ctaText="See the Contractor Snapshot in Action"
      />

      <SolutionValueProps
        title="Why Trades Choose"
        highlightedTitle="Aurex"
        subtitle="Purpose-built automation for contractors who want to focus on the job, not the paperwork."
        valueProps={valueProps}
      />

      <SolutionHowItWorks
        title="The Contractor"
        highlightedTitle="Snapshot"
        subtitle="From chaos to control in 30 days or less."
        steps={howItWorks}
      />

      <SolutionFeatures
        title="The Complete"
        highlightedTitle="Toolkit"
        subtitle="Everything you need to run a modern trade business."
        features={features}
      />

      <SolutionPricing
        title="Investment Tiers"
        subtitle="Choose the right level of automation for your trade business"
        tiers={pricingTiers}
      />

      <StickyAuditButton />
    </Layout>
  );
}
