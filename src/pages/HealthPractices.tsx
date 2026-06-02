import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { IndustryHero } from "@/components/sections/IndustryHero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ROIExampleSection } from "@/components/sections/ROIExampleSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Users, PhoneOff, Clock, CalendarX, Star } from "lucide-react";

const gaps = [
  { icon: Users, title: "Patients overdue for recall", body: "Hundreds of patients past their recommended visit window. Most simply forgot." },
  { icon: PhoneOff, title: "New patient calls missed", body: "New patient inquiries hitting voicemail go to the practice down the road, often for years." },
  { icon: Clock, title: "Slow response to inquiries", body: "Online requests and webchat replies that take a day cost you new patients quietly every week." },
  { icon: CalendarX, title: "No-shows draining the schedule", body: "Empty chairs and lost capacity. The research on automated reminders is unambiguous." },
  { icon: Star, title: "Few recent reviews", body: "Trust is built in reviews. Most happy patients never leave one unless you ask at the right moment." },
];

export default function HealthPractices() {
  return (
    <Layout>
      <Seo
        title="Patient Recall & Acquisition Systems | Aurex"
        description="Recall the patients you have already earned and stop losing them to no-shows. Aurex builds patient communication systems for clinics, dental, and wellness practices."
        path="/health-practices"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Patient Recall and Acquisition Systems",
          serviceType: "Patient communication and acquisition for health practices",
          provider: { "@type": "Organization", name: "Aurex", url: "https://aurexagency.com/" },
          areaServed: "US",
          audience: { "@type": "BusinessAudience", audienceType: "Clinics, dental practices, and wellness practices" },
          description: "Patient recall, new-patient inquiry response, automated reminders, and reputation systems for health practices.",
        }}
      />
      <IndustryHero
        eyebrow="For Clinics, Dental, and Wellness Practices"
        headline="Recall the patients you have already earned, and stop losing them to no-shows."
        sub="Aurex installs the patient communication systems built for practices. Recall, faster response to new patient inquiries, research-backed reminders, and reputation, all done for you."
        bullets={[
          "Patient recall and reactivation campaigns.",
          "Faster response to every new patient inquiry.",
          "Automated reminders to reduce no-shows.",
          "Reputation engine to strengthen new patient trust.",
        ]}
        defaultIndustry="Health Practice / Clinic / Dental"
      />

      <ProblemSection
        eyebrow="The five leaks in most practices"
        title="Five exact places practices are leaking patients and revenue."
        sub="Operational, not clinical. We focus on the communication systems around your practice so your team can focus on care."
        gaps={gaps}
      />

      <HowItWorksSection
        phases={[
          {
            label: "Phase 1",
            window: "Weeks 1 to 4",
            title: "The Fast Win",
            blurb: "Booked appointments from patients already in your system. No new advertising required.",
            items: [
              { name: "Patient recall and reactivation", desc: "Respectful, on-brand outreach to patients past their recommended visit window." },
              { name: "Missed-call text-back", desc: "Every missed call gets an instant text so new patient inquiries do not go cold." },
              { name: "5-minute response to new patient inquiries", desc: "Every web form, chat, and DM gets a human-quality reply within minutes." },
              { name: "No-Show Shield", desc: "Multi-channel reminder cadence informed by the research on no-show reduction." },
              { name: "Reputation Engine", desc: "Automated review requests after positive visits to strengthen new patient trust." },
            ],
          },
          {
            label: "Phase 2",
            window: "Month 2 and beyond",
            title: "Scale",
            blurb: "Once the schedule is steady, we add recurring-care models and funded patient acquisition.",
            items: [
              { name: "Recurring-care and membership models", desc: "Simple structures that smooth the schedule and improve continuity of care." },
              { name: "Paid acquisition, funded by proof", desc: "New patient ads launch only after the funnel is converting and tracked end to end." },
              { name: "Retention and rebooking automation", desc: "Lifecycle communications that keep patients engaged between visits." },
              { name: "Quarterly business reviews", desc: "We sit down every 90 days, review the numbers, and align on the next quarter." },
            ],
          },
        ]}
      />

      <ROIExampleSection
        title="What this can look like for your practice in 30 days."
        inputs={[
          { label: "Patients overdue for recall", value: "1,500" },
          { label: "Conservative rebooking rate", value: "5%" },
          { label: "Average visit value", value: "$280" },
        ]}
        result={{ label: "Recovered visit revenue, month one", value: "≈ $21,000" }}
        footnote="Illustrative math, not a guarantee. We run the real numbers on your actual recall list during the audit."
      />

      <GuaranteeSection
        title="The Payday Guarantee, for practices."
        body="In your first 30 days, we generate at least 3x your setup fee in attributable, booked patient revenue from your existing recall list. If we do not, we work for free until we do."
      />

      <FinalCTASection
        eyebrow="Free practice revenue audit"
        title="Show us your recall list. We will show you the patients ready to come back."
        sub="A 30 minute call with a real operator. We map your five gaps, project your first 30 days of recovered visits, and walk you through the exact plan. Operational systems only, no clinical or compliance claims."
        defaultIndustry="Health Practice / Clinic / Dental"
        ctaLabel="Send My Practice Audit"
      />
    </Layout>
  );
}
