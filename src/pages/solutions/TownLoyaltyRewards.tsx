import { Layout } from "@/components/layout/Layout";
import { SolutionHero } from "@/components/SolutionHero";
import { SolutionValueProps, SolutionHowItWorks, SolutionFeatures } from "@/components/SolutionSections";
import { SolutionPricing } from "@/components/SolutionPricing";
import { StickyAuditButton } from "@/components/StickyAuditButton";
import { MapPin, Wallet, Gift, Store, Users, Smartphone } from "lucide-react";

const valueProps = [
  {
    icon: Wallet,
    title: "Digital Wallet Passes",
    description: "Residents add their 'Town Loyalty Rewards' card to Apple or Google Wallet via scannable QR codes.",
  },
  {
    icon: Gift,
    title: "Automated Cross-Promotions",
    description: "Shopping at one participating store triggers a unique offer for another merchant nearby.",
  },
  {
    icon: Users,
    title: "Community-Led Growth",
    description: "A centralized hub for town events and hyper-local deals managed by Aurex Agency.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Town Partnership",
    description: "Your chamber of commerce or downtown association partners with us to launch the program.",
  },
  {
    step: "02",
    title: "Merchant Onboarding",
    description: "Local businesses sign up with minimal setup—we handle all the technology.",
  },
  {
    step: "03",
    title: "Community Launch",
    description: "Residents receive their digital loyalty cards and start earning rewards town-wide.",
  },
  {
    step: "04",
    title: "Ecosystem Growth",
    description: "Cross-promotions and community events drive increasing foot traffic to all merchants.",
  },
];

const features = [
  {
    title: "Digital Infrastructure",
    items: [
      "Apple/Google Wallet integration",
      "QR code check-in system",
      "Real-time point tracking",
      "Push notification campaigns",
    ],
  },
  {
    title: "Merchant Tools",
    items: [
      "Easy POS integration",
      "Cross-promotion builder",
      "Customer analytics dashboard",
      "Reward redemption management",
    ],
  },
  {
    title: "Community Features",
    items: [
      "Town event calendar",
      "Hyper-local deal hub",
      "Resident engagement tracking",
      "Economic impact reporting",
    ],
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$500",
    period: "month",
    description: "For small towns getting started",
    features: [
      "Up to 20 merchants",
      "Basic loyalty program",
      "Digital wallet passes",
      "Email support",
    ],
    cta: "Launch Your Program",
  },
  {
    name: "Growth",
    price: "$1,500",
    period: "month",
    description: "For growing downtown districts",
    features: [
      "Up to 50 merchants",
      "Cross-promotion engine",
      "Event calendar integration",
      "Priority support",
      "Monthly analytics reports",
    ],
    highlighted: true,
    cta: "Scale Your Town",
  },
  {
    name: "Enterprise",
    price: "$2,500",
    period: "month",
    description: "For multi-district ecosystems",
    features: [
      "Unlimited merchants",
      "Multi-district support",
      "Custom branding",
      "Dedicated community manager",
      "Economic impact dashboard",
      "API access",
    ],
    cta: "Go Enterprise",
  },
];

export default function TownLoyaltyRewards() {
  return (
    <Layout>
      <SolutionHero
        badge="Town Loyalty Ecosystem"
        badgeIcon={MapPin}
        headline="A Unified Digital Loyalty Ecosystem for"
        highlightedText="Your Town."
        subheadline="Modernize your 'Main Street.' Give your residents a digital wallet loyalty card that drives cross-promotions between local merchants."
        ctaText="Launch Your Town's Rewards Program"
      />

      <SolutionValueProps
        title="The Ecosystem"
        highlightedTitle="Advantage"
        subtitle="When local businesses work together, the whole community thrives."
        valueProps={valueProps}
      />

      <SolutionHowItWorks
        title="Building the"
        highlightedTitle="Ecosystem"
        subtitle="From concept to community-wide adoption in weeks."
        steps={howItWorks}
      />

      <SolutionFeatures
        title="Platform"
        highlightedTitle="Capabilities"
        subtitle="Everything needed to run a modern town loyalty program."
        features={features}
      />

      <SolutionPricing
        title="Investment Tiers"
        subtitle="Choose the right level for your community"
        tiers={pricingTiers}
      />

      <StickyAuditButton />
    </Layout>
  );
}
