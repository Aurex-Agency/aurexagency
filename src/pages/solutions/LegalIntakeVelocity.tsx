import { Layout } from "@/components/layout/Layout";
import { SolutionHero } from "@/components/SolutionHero";
import { SolutionValueProps, SolutionHowItWorks, SolutionFeatures } from "@/components/SolutionSections";
import { SolutionPricing } from "@/components/SolutionPricing";
import { StickyAuditButton } from "@/components/StickyAuditButton";
import { Scale, PhoneCall, ClipboardCheck, FileText, Zap, Clock } from "lucide-react";

const valueProps = [
  {
    icon: PhoneCall,
    title: "Immediate Call-Bridge",
    description: "Connect your intake team to new leads in under 60 seconds—before the competition even sees the inquiry.",
  },
  {
    icon: ClipboardCheck,
    title: "Conditional Logic Qualification",
    description: "Use automated surveys to filter case types and injury severity instantly.",
  },
  {
    icon: FileText,
    title: "One-Click Retainers",
    description: "Integrate with Make.com to auto-generate and send fee agreements via SMS.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Intake Audit",
    description: "We analyze your current lead response times and identify speed-to-lead gaps.",
  },
  {
    step: "02",
    title: "Velocity Stack Deploy",
    description: "Automated call-bridging, qualification surveys, and document generation go live.",
  },
  {
    step: "03",
    title: "Team Integration",
    description: "Your intake team learns to work alongside the automation, not fight against it.",
  },
  {
    step: "04",
    title: "Performance Tracking",
    description: "Real-time dashboards show lead response times, conversion rates, and case value.",
  },
];

const features = [
  {
    title: "Speed-to-Lead",
    items: [
      "Sub-60-second call bridging",
      "Instant lead notifications",
      "After-hours AI qualification",
      "Multi-channel capture (web, phone, chat)",
    ],
  },
  {
    title: "Case Qualification",
    items: [
      "Conditional logic surveys",
      "Injury severity scoring",
      "Case type routing",
      "Conflict checking integration",
    ],
  },
  {
    title: "Document Automation",
    items: [
      "Auto-generated fee agreements",
      "E-signature integration",
      "Retainer tracking",
      "Case file creation",
    ],
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$500",
    period: "month",
    description: "Essential intake automation for solo practitioners",
    features: [
      "Lead notification automation",
      "Basic qualification surveys",
      "Email support",
      "Monthly analytics",
    ],
    cta: "Start Your Audit",
  },
  {
    name: "Growth",
    price: "$1,500",
    period: "month",
    description: "Complete intake velocity for growing firms",
    features: [
      "Everything in Starter",
      "Call-bridge automation",
      "Document generation",
      "Priority support",
      "Weekly optimization",
    ],
    highlighted: true,
    cta: "Scale Your Intake",
  },
  {
    name: "Enterprise",
    price: "$2,500",
    period: "month",
    description: "Multi-practice legal operations",
    features: [
      "Everything in Growth",
      "Multi-location routing",
      "Custom integrations",
      "Dedicated account manager",
      "Case management sync",
      "24/7 support",
    ],
    cta: "Go Enterprise",
  },
];

export default function LegalIntakeVelocity() {
  return (
    <Layout>
      <SolutionHero
        badge="Law Firm Systems"
        badgeIcon={Scale}
        headline="Win the 'Speed to Lead' Race for"
        highlightedText="Your Law Firm."
        subheadline="The first firm to respond wins the case. We automate your intake, qualification, and document generation so you only focus on high-value litigation."
        ctaText="Scale Your Firm's Intake"
      />

      <SolutionValueProps
        title="The Velocity"
        highlightedTitle="Advantage"
        subtitle="In legal intake, speed isn't just an advantage—it's the difference between winning and losing the case."
        valueProps={valueProps}
      />

      <SolutionHowItWorks
        title="The Intake"
        highlightedTitle="Velocity Stack"
        subtitle="From lead to signed retainer in record time."
        steps={howItWorks}
      />

      <SolutionFeatures
        title="Technical"
        highlightedTitle="Specifications"
        subtitle="Enterprise-grade automation built for legal compliance."
        features={features}
      />

      <SolutionPricing
        title="Investment Tiers"
        subtitle="Choose the right level of automation for your firm"
        tiers={pricingTiers}
      />

      <StickyAuditButton />
    </Layout>
  );
}
