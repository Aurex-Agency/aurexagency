import { Reveal } from "@/components/Reveal";

const proof = [
  {
    stat: "Up to 21x",
    body: "more likely to qualify a lead when you respond within five minutes versus thirty.",
    source: "Harvard Business Review",
  },
  {
    stat: "5 to 9%",
    body: "revenue lift from a single one-star improvement in your average review rating.",
    source: "Harvard Business School",
  },
  {
    stat: "Measurable",
    body: "reduction in no-shows from automated reminders, across dozens of clinical studies.",
    source: "Cochrane systematic reviews",
  },
];

export function ProofSection() {
  return (
    <section className="py-20 lg:py-28 surface-cream-warm">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">The evidence</p>
          <h2 className="font-display text-4xl lg:text-5xl text-ink max-w-3xl mb-5 text-balance">
            We are not selling theories. We are running the playbook the research already proved.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {proof.map((p, i) => (
            <Reveal key={p.stat} delay={i * 0.08}>
              <div className="card-premium p-7 h-full">
                <div className="font-display text-4xl text-ink mb-3">{p.stat}</div>
                <p className="text-ink/75 leading-relaxed mb-4">{p.body}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-ink/50 font-semibold">{p.source}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-ink/50 max-w-3xl">
            Sources referenced for context. We will share full citations in your strategy call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
