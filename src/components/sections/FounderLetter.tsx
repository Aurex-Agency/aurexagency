import { FadeUp } from "@/components/Motion";

export function FounderLetter() {
  return (
    <section className="bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-[820px] px-5 sm:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-deep mb-6">A note from the founder</p>
          <div className="space-y-6 text-xl lg:text-2xl text-coal/80 leading-relaxed font-display tracking-[-0.01em]">
            <p>
              I started Aurex because I kept watching good local businesses lose work they had already earned.
              The call went to voicemail. The lead never got a text back. The follow-up never happened.
            </p>
            <p>
              It is not that owners do not care. They are busy running the actual business. The marketing just
              becomes one more thing duct-taped together at midnight.
            </p>
            <p>
              I believe a business in Tupelo or Oxford deserves the same caliber of system as a company in
              Atlanta or Austin, without the agency overhead or the runaround. So I build them myself, and I
              run them myself. The person you talk to is the person doing the work. That is the whole promise.
            </p>
            <p className="text-clay-deep">
              If that sounds like the kind of partner you have been looking for, let's talk.
            </p>
          </div>
          <p className="mt-8 font-display text-2xl text-coal">
            Kalob<span className="text-coal/55">, Founder of Aurex</span>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
