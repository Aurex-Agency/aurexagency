import { Layout } from "@/components/layout/Layout";
import { SolutionHero } from "@/components/SolutionHero";
import { SolutionValueProps, SolutionHowItWorks, SolutionFeatures } from "@/components/SolutionSections";
import { SolutionPricing } from "@/components/SolutionPricing";
import { StickyAuditButton } from "@/components/StickyAuditButton";
import { HeartPulse, Shield, ClipboardList, Bell, UserCheck, Lock } from "lucide-react";

const valueProps = [
  {
    icon: ClipboardList,
    title: "Secure Intake Forms",
    description: "Digital paperwork that syncs with your EMR via Keragon's HIPAA-compliant bridge.",
  },
  {
    icon: Bell,
    title: "Lifecycle Reminders",
    description: "Automated pre-op and appointment nudges that prioritize patient privacy.",
  },
  {
    icon: UserCheck,
    title: "Post-Visit Engagement",
    description: "Automated continuity-of-care follow-ups to boost patient satisfaction scores.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Compliance Audit",
    description: "We assess your current workflows and identify HIPAA-compliant automation opportunities.",
  },
  {
    step: "02",
    title: "Secure Integration",
    description: "Patient data flows through encrypted, compliant channels that meet healthcare standards.",
  },
  {
    step: "03",
    title: "Workflow Deployment",
    description: "Automated reminders, intake forms, and follow-ups go live with your team trained.",
  },
  {
    step: "04",
    title: "Continuous Monitoring",
    description: "Ongoing compliance monitoring and optimization to keep your practice running smoothly.",
  },
];

const features = [
  {
    title: "Patient Intake",
    items: [
      "Digital intake forms",
      "Insurance verification",
      "EMR/EHR sync (Keragon bridge)",
      "Consent management",
    ],
  },
  {
    title: "Appointment Management",
    items: [
      "Automated reminders (SMS/Email)",
      "Two-way confirmation",
      "No-show reduction protocols",
      "Waitlist management",
    ],
  },
  {
    title: "Compliance & Security",
    items: [
      "HIPAA-compliant data handling",
      "Encrypted communications",
      "Audit trail logging",
      "BAA agreements included",
    ],
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$500",
    period: "month",
    description: "Essential automation for small practices",
    features: [
      "Appointment reminders",
      "Basic intake forms",
      "HIPAA-compliant SMS",
      "Email support",
    ],
    cta: "Start Your Audit",
  },
  {
    name: "Growth",
    price: "$1,500",
    period: "month",
    description: "Complete patient lifecycle automation",
    features: [
      "Everything in Starter",
      "EMR integration (Keragon)",
      "Post-visit follow-ups",
      "Review management",
      "Priority support",
    ],
    highlighted: true,
    cta: "Scale Your Practice",
  },
  {
    name: "Enterprise",
    price: "$2,500",
    period: "month",
    description: "Multi-location healthcare systems",
    features: [
      "Everything in Growth",
      "Multi-location support",
      "Custom integrations",
      "Dedicated compliance officer",
      "White-label patient portal",
      "24/7 support",
    ],
    cta: "Go Enterprise",
  },
];

export default function PatientLifecycleSystems() {
  return (
    <Layout>
      <SolutionHero
        badge="HIPAA-Compliant Healthcare"
        badgeIcon={HeartPulse}
        headline="HIPAA-Compliant Automation for"
        highlightedText="Modern Medical Clinics."
        subheadline="Reduce no-shows by 30% and eliminate front-desk administrative drag with healthcare-aware patient workflows."
        ctaText="Request a HIPAA-Compliant Systems Audit"
      />

      <SolutionValueProps
        title="Healthcare-Grade"
        highlightedTitle="Automation"
        subtitle="Built from the ground up for medical practices that can't compromise on compliance."
        valueProps={valueProps}
      />

      <SolutionHowItWorks
        title="The Compliance-First"
        highlightedTitle="Approach"
        subtitle="Every automation is designed with HIPAA requirements at its core."
        steps={howItWorks}
      />

      <SolutionFeatures
        title="Technical"
        highlightedTitle="Specifications"
        subtitle="Enterprise-grade infrastructure built for healthcare compliance."
        features={features}
      />

      <SolutionPricing
        title="Investment Tiers"
        subtitle="Choose the right level of automation for your medical practice"
        tiers={pricingTiers}
      />

      <StickyAuditButton />
    </Layout>
  );
}
