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
    <section className="py-20 lg:py-28 surface-cream">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">The evidence</p>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-3xl mb-5 text-balance leading-tight">
            We are not selling theories. We run the playbook the research already proved.
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 border-t hairline">
          {proof.map((p, i) => (
            <Reveal key={p.stat} delay={i * 0.08}>
              <div className={`py-10 h-full ${i === 0 ? "md:pr-10" : "md:px-10 border-t md:border-t-0 md:border-l hairline"}`}>
                <div className="font-display text-6xl lg:text-7xl text-accent mb-5 tnum tracking-tight leading-none">{p.stat}</div>
                <p className="text-foreground/75 leading-relaxed mb-6 text-lg">{p.body}</p>
                <p className="label-mono">{p.source}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-sm text-foreground/45 max-w-3xl">
            Sources referenced for context. We will share full citations in your strategy call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
