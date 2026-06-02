import { Layout } from "@/components/layout/Layout";
import { IndustryHero } from "@/components/sections/IndustryHero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ROIExampleSection } from "@/components/sections/ROIExampleSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Syringe, PhoneOff, Clock, CalendarX, Star } from "lucide-react";

const gaps = [
  { icon: Syringe, title: "Lapsed patients sitting cold", body: "Members and one-time patients who have not been in for six months. Quietly worth six figures." },
  { icon: PhoneOff, title: "Calls going to voicemail", body: "New patient inquiries hit voicemail and book with the spa down the street the same hour." },
  { icon: Clock, title: "Slow follow-up on inquiries", body: "DMs, forms, and webchat replies that take hours kill your close rate on injectables and packages." },
  { icon: CalendarX, title: "No-shows on $500+ visits", body: "Every empty chair is real revenue gone. Most of it preventable with the right reminder cadence." },
  { icon: Star, title: "Few recent five-star reviews", body: "Your happy patients rarely leave one unless you ask in the right moment with the right system." },
];

export default function MedSpas() {
  return (
    <Layout>
      <IndustryHero
        eyebrow="For Med Spas and Aesthetics"
        headline="Fill your calendar with $500+ visits, starting with the patients already in your system."
        sub="Aurex installs the lead-capture, rebooking, and reminder systems built for med spas. We start with the patients you have already paid to acquire, and prove the revenue before you spend on ads."
        bullets={[
          "Reactivate lapsed patients for injectables, memberships, and packages.",
          "Capture every missed call with instant text-back.",
          "Cut no-shows on high-ticket visits with automated reminders.",
          "Build a recurring membership base that smooths out the calendar.",
        ]}
        defaultIndustry="Med Spa / Aesthetics"
      />

      <ProblemSection
        eyebrow="The five leaks in most med spas"
        title="Five exact places your spa is losing revenue every week."
        sub="Aesthetic margins are too good to leave on the table. We plug each gap with a specific system."
        gaps={gaps}
      />

      <HowItWorksSection
        phases={[
          {
            label: "Phase 1",
            window: "Weeks 1 to 4",
            title: "The Fast Win",
            blurb: "Revenue from patients already in your CRM. No new ad spend required.",
            items: [
              { name: "Lapsed-patient reactivation", desc: "Targeted text and email campaigns to past patients with offers tuned to their last service." },
              { name: "Missed-call text-back", desc: "Every missed call gets an instant text. Conversations start, consults get booked." },
              { name: "5-minute speed-to-lead", desc: "Every form, DM, and webchat gets a human-quality reply in under five minutes, 24/7." },
              { name: "No-Show Shield", desc: "Smart reminder cadence by text and email tuned to high-ticket visits." },
              { name: "Reputation Engine", desc: "Automated review requests at the right moment so your rating climbs and so does your local rank." },
            ],
          },
          {
            label: "Phase 2",
            window: "Month 2 and beyond",
            title: "Scale",
            blurb: "Once the calendar is full, we layer recurring revenue and funded ad acquisition on top.",
            items: [
              { name: "Membership and package recurring revenue", desc: "Simple monthly plans that turn occasional patients into predictable monthly cash flow." },
              { name: "Paid acquisition, funded by proof", desc: "Patient-acquisition ads go live once the system is converting and tracked dollar for dollar." },
              { name: "Rebooking automation", desc: "Lifecycle journeys that keep patients on schedule for recurring services." },
              { name: "Quarterly business reviews", desc: "We sit down every 90 days, show the numbers, and plan the next move with you." },
            ],
          },
        ]}
      />

      <ROIExampleSection
        title="What this can look like for your spa in 30 days."
        inputs={[
          { label: "Lapsed patients in CRM", value: "1,000" },
          { label: "Conservative rebooking rate", value: "4%" },
          { label: "Average visit value", value: "$527" },
        ]}
        result={{ label: "Recovered revenue, month one", value: "≈ $21,000" }}
        footnote="Illustrative math, not a guarantee. We run the real numbers on your actual list during the audit."
      />

      <GuaranteeSection
        title="The Payday Guarantee, for med spas."
        body="In your first 30 days, we generate at least 3x your setup fee in attributable, booked patient revenue from your existing list. If we do not, we work for free until we do."
      />

      <FinalCTASection
        eyebrow="Free med spa revenue audit"
        title="Show us your CRM. We will show you the revenue hiding in it."
        sub="A 30 minute call with a real operator. We audit your five gaps, project your first 30 days, and walk you through the exact plan."
        defaultIndustry="Med Spa / Aesthetics"
        ctaLabel="Send My Med Spa Audit"
      />
    </Layout>
  );
}
