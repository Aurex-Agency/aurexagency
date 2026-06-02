import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { IndustryHero } from "@/components/sections/IndustryHero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ROIExampleSection } from "@/components/sections/ROIExampleSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { PhoneOff, FileText, Clock, CalendarX, Star } from "lucide-react";

const gaps = [
  { icon: PhoneOff, title: "Missed calls = lost jobs", body: "Homeowners call three contractors. Whoever picks up first wins the job. Voicemail does not." },
  { icon: FileText, title: "Cold quotes piling up", body: "Hundreds of estimates sent, never followed up. Many of those homeowners still have the problem." },
  { icon: Clock, title: "Slow web lead response", body: "A lead waiting two hours has already booked with someone else. Five minutes is the only number that matters." },
  { icon: CalendarX, title: "No-show estimates", body: "Sales reps driving to empty driveways. Reminder texts and confirmations cut this in half." },
  { icon: Star, title: "Thin Google review profile", body: "Local search is won by reviews. Most happy customers never leave one unless asked properly." },
];

export default function HomeServices() {
  return (
    <Layout>
      <Seo
        title="Lead Systems for Roofers, HVAC & Plumbers | Aurex"
        description="Stop letting jobs go to voicemail. Aurex turns missed calls and cold quotes into booked jobs for home service businesses, with 5-minute lead response built in."
        path="/home-services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Home Services Lead Systems",
          serviceType: "Lead generation and follow-up for home service businesses",
          provider: { "@type": "Organization", name: "Aurex", url: "https://aurexagency.com/" },
          areaServed: "US",
          audience: { "@type": "BusinessAudience", audienceType: "Roofers, HVAC, and plumbing contractors" },
          description: "Missed-call text-back, 5-minute lead response, quote follow-up, and review generation for trades.",
        }}
      />
      <IndustryHero
        eyebrow="For Roofers, HVAC, and Plumbers"
        headline="Stop letting jobs go to voicemail. Turn missed calls and old quotes into booked jobs."
        sub="Aurex installs the lead-capture and follow-up systems built for the trades. We turn the missed calls, cold quotes, and slow replies you have today into jobs on the schedule this week."
        bullets={[
          "Instant text-back on every missed call.",
          "5-minute response on every web lead, 24/7.",
          "Reactivate old quotes and past customers for repeat work.",
          "Automated review requests so you win local search.",
        ]}
        defaultIndustry="Home Services (Roofing, HVAC, Plumbing)"
      />

      <ProblemSection
        eyebrow="The five leaks in most home service businesses"
        title="Five exact places trades are leaving jobs on the table."
        sub="The phone is your lifeline. The forms are your pipeline. The follow-up is your bank account. We fix all three."
        gaps={gaps}
      />

      <HowItWorksSection
        phases={[
          {
            label: "Phase 1",
            window: "Weeks 1 to 4",
            title: "The Fast Win",
            blurb: "Jobs booked from leads you already had this month. Zero new ad spend.",
            items: [
              { name: "Missed-call text-back", desc: "Every missed call gets a text within seconds. Conversations stay alive, jobs get scheduled." },
              { name: "5-minute speed-to-lead", desc: "Every web form and ad lead gets a real reply in under five minutes, day or night." },
              { name: "Old-quote reactivation", desc: "Targeted outreach to estimates that never closed. Many homeowners still have the problem." },
              { name: "No-Show Shield for estimates", desc: "Confirmation and reminder cadence so reps stop driving to empty driveways." },
              { name: "Reputation Engine", desc: "Automated five-star review requests after every completed job. Local search rank follows." },
            ],
          },
          {
            label: "Phase 2",
            window: "Month 2 and beyond",
            title: "Scale",
            blurb: "Once the schedule is full, we add maintenance recurring revenue and funded paid acquisition.",
            items: [
              { name: "Maintenance plans and memberships", desc: "Tune-ups, inspections, and priority service plans that print monthly cash." },
              { name: "Paid acquisition, funded by proof", desc: "Lead-gen ads launch only after the funnel is converting and tracked job by job." },
              { name: "Past-customer rebooking", desc: "Yearly tune-ups, seasonal reminders, and referral campaigns that compound." },
              { name: "Quarterly business reviews", desc: "We sit down every 90 days, show the booked revenue, and plan what to fix next." },
            ],
          },
        ]}
      />

      <ROIExampleSection
        title="What this can look like for your shop in 30 days."
        inputs={[
          { label: "Old estimates in the system", value: "300" },
          { label: "Conservative close rate on reactivation", value: "5%" },
          { label: "Average job ticket", value: "$4,200" },
        ]}
        result={{ label: "Recovered job revenue, month one", value: "≈ $63,000" }}
        footnote="Illustrative math, not a guarantee. We run the real numbers on your actual pipeline during the audit."
      />

      <GuaranteeSection
        title="The Payday Guarantee, for the trades."
        body="In your first 30 days, we generate at least 3x your setup fee in attributable, booked job revenue from your existing leads and past customers. If we do not, we work for free until we do."
      />

      <FinalCTASection
        eyebrow="Free home services revenue audit"
        title="Show us your CRM and your missed-call log. We will show you the booked jobs hiding in them."
        sub="A 30 minute call with a real operator. We map your five gaps, project your first 30 days of recovered jobs, and walk you through the exact plan."
        defaultIndustry="Home Services (Roofing, HVAC, Plumbing)"
        ctaLabel="Send My Home Services Audit"
      />
    </Layout>
  );
}
