import { FadeUp } from "@/components/Motion";
import { comparison } from "@/data/aurex";
import { Check, X } from "lucide-react";

const heads = ["Aurex", "Agencies", "Freelancers"] as const;

export function ComparisonTable() {
  return (
    <FadeUp>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse">
          <thead>
            <tr>
              <th className="w-[28%] p-4" />
              {heads.map((h, i) => (
                <th
                  key={h}
                  className={`p-4 text-left text-lg font-bold align-bottom ${
                    i === 0 ? "text-accent rounded-t-2xl border-x border-t border-accent/30 bg-accent/[0.05]" : "text-foreground/55"
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, ri) => (
              <tr key={row.label} className="border-t hairline">
                <td className="p-4 align-top text-sm font-semibold text-foreground/70">{row.label}</td>
                {(["aurex", "agency", "freelancer"] as const).map((k, ci) => (
                  <td
                    key={k}
                    className={`p-4 align-top text-sm ${
                      ci === 0
                        ? `font-medium text-foreground border-x border-accent/30 bg-accent/[0.05] ${
                            ri === comparison.length - 1 ? "rounded-b-2xl border-b" : ""
                          }`
                        : "text-foreground/55"
                    }`}
                  >
                    <span className="flex items-start gap-2">
                      {ci === 0 ? (
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-foreground/25 mt-0.5 shrink-0" />
                      )}
                      {row[k]}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeUp>
  );
}
