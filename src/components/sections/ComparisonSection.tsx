import { Reveal } from "@/components/Reveal";
import { comparison } from "@/data/productized";
import { Check, X } from "lucide-react";

const cols = ["Aurex", "In-house hire", "Traditional agency", "Freelancers"] as const;

export function ComparisonSection({ surface = "surface-cream" }: { surface?: string }) {
  return (
    <section className={`py-24 lg:py-32 ${surface}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-amber mb-4">Why Aurex</p>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground max-w-3xl mb-5 text-balance leading-tight">
            The fastest, most flexible way to run your marketing.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 lg:p-5 w-[22%]"></th>
                  {cols.map((c, i) => (
                    <th
                      key={c}
                      className={`text-left p-4 lg:p-5 font-display text-lg lg:text-xl align-bottom ${
                        i === 0
                          ? "text-accent rounded-t-xl border-x border-t border-accent/30 bg-accent/[0.06]"
                          : "text-foreground/70"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, ri) => (
                  <tr key={row.label} className="border-t hairline">
                    <td className="p-4 lg:p-5 label-mono align-top">{row.label}</td>
                    {(["aurex", "inhouse", "agency", "freelancer"] as const).map((key, ci) => (
                      <td
                        key={key}
                        className={`p-4 lg:p-5 align-top text-sm ${
                          ci === 0
                            ? `text-foreground font-medium border-x border-accent/30 bg-accent/[0.06] ${
                                ri === comparison.length - 1 ? "rounded-b-xl border-b" : ""
                              }`
                            : "text-foreground/60"
                        }`}
                      >
                        <span className="flex items-start gap-2">
                          {ci === 0 ? (
                            <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-foreground/30 mt-0.5 shrink-0" />
                          )}
                          {row[key]}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
