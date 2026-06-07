import { Reveal } from "@/components/Reveal";

interface ROIExampleProps {
  title?: string;
  inputs: { label: string; value: string }[];
  result: { label: string; value: string };
  footnote?: string;
}

export function ROIExampleSection({ title = "What this looks like in dollars", inputs, result, footnote }: ROIExampleProps) {
  return (
    <section className="py-20 lg:py-28 surface-cream-warm">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">Mini ROI math</p>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-3xl mb-10 text-balance leading-tight">{title}</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="card-premium p-8 lg:p-12">
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-10">
              {inputs.map((i) => (
                <div key={i.label}>
                  <div className="label-mono mb-3">{i.label}</div>
                  <div className="font-display text-3xl lg:text-4xl text-foreground tnum">{i.value}</div>
                </div>
              ))}
            </div>
            <div className="divider-thin my-8" />
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <div className="label-mono eyebrow-amber mb-3">{result.label}</div>
                <div className="font-display text-5xl lg:text-6xl text-accent tnum tracking-tight">{result.value}</div>
              </div>
              {footnote && <p className="text-sm text-foreground/55 max-w-sm">{footnote}</p>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
