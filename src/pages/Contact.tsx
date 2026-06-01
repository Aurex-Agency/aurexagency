import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="surface-ink grain pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 surface-ink-grad" />
        <div className="container relative z-10 max-w-4xl">
          <Reveal>
            <div className="eyebrow eyebrow-amber mb-5">Contact</div>
            <h1 className="font-display text-cream text-5xl lg:text-7xl font-medium leading-[1.02] text-balance">
              Book a strategy call. <span className="italic text-amber">Skip the back-and-forth.</span>
            </h1>
            <p className="mt-6 text-cream/70 text-lg max-w-2xl">
              Pick a time on the calendar. We will map your leak points and sketch the build on the call.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-cream py-16 lg:py-24">
        <div className="container grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-8">
            <div className="card-premium p-2 h-[720px] overflow-hidden">
              {/* GoHighLevel calendar embed */}
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/AlXstlmixEoeJ0nP8wuX"
                className="w-full h-full rounded-xl"
                scrolling="yes"
                style={{ border: "none" }}
                title="Book a Strategy Call"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="space-y-6">
              <div className="card-premium p-6">
                <div className="flex items-center gap-3 mb-2 text-ink">
                  <Mail className="w-4 h-4 text-amber-deep" />
                  <p className="text-xs uppercase tracking-[0.18em] font-semibold">Email</p>
                </div>
                <a href="mailto:hello@aurexagency.com" className="font-display text-xl text-ink hover:text-amber-deep">hello@aurexagency.com</a>
              </div>
              <div className="card-premium p-6">
                <div className="flex items-center gap-3 mb-2 text-ink">
                  <Phone className="w-4 h-4 text-amber-deep" />
                  <p className="text-xs uppercase tracking-[0.18em] font-semibold">Phone</p>
                </div>
                <p className="font-display text-xl text-ink">By appointment</p>
              </div>
              <div className="card-premium p-6">
                <div className="flex items-center gap-3 mb-2 text-ink">
                  <MapPin className="w-4 h-4 text-amber-deep" />
                  <p className="text-xs uppercase tracking-[0.18em] font-semibold">Based in</p>
                </div>
                <p className="font-display text-xl text-ink">North Mississippi</p>
                <p className="text-ink/60 text-sm mt-1">Serving clients nationwide.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
