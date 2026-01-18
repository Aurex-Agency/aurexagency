import { motion } from "framer-motion";
import { type LucideIcon, ArrowRight, Check } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionValuePropsProps {
  title: string;
  highlightedTitle: string;
  subtitle: string;
  valueProps: ValueProp[];
}

export function SolutionValueProps({
  title,
  highlightedTitle,
  subtitle,
  valueProps,
}: SolutionValuePropsProps) {
  return (
    <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(225 65% 20%) 0%, hsl(225 68% 18%) 100%)" }}>
      <div className="container relative z-10 px-4">
        <ScrollReveal className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-mono uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Core Benefits
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            {title} <span className="text-accent">{highlightedTitle}</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {valueProps.map((prop) => (
            <StaggerItem key={prop.title}>
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 group"
                whileHover={{ y: -4, borderColor: "hsl(180 100% 45% / 0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <prop.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {prop.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

interface SolutionHowItWorksProps {
  title?: string;
  highlightedTitle?: string;
  subtitle?: string;
  steps: HowItWorksStep[];
}

export function SolutionHowItWorks({
  title = "How It",
  highlightedTitle = "Works",
  subtitle = "A streamlined process from audit to automation",
  steps,
}: SolutionHowItWorksProps) {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(225 68% 18%) 0%, hsl(225 70% 16%) 100%)" }}>
      <div className="container relative z-10 px-4">
        <ScrollReveal className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-mono uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Process
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            {title} <span className="text-accent">{highlightedTitle}</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden h-full border border-white/10 group"
                  whileHover={{ borderColor: "hsl(180 100% 45% / 0.4)" }}
                >
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center border border-accent/30 group-hover:bg-accent/20 transition-colors">
                    <span className="font-mono text-xl font-bold text-accent">{step.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 pr-16">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

interface FeatureSpec {
  title: string;
  items: string[];
}

interface SolutionFeaturesProps {
  title: string;
  highlightedTitle: string;
  subtitle: string;
  features: FeatureSpec[];
}

export function SolutionFeatures({
  title,
  highlightedTitle,
  subtitle,
  features,
}: SolutionFeaturesProps) {
  return (
    <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(225 70% 16%) 0%, hsl(225 70% 18%) 100%)" }}>
      <div className="container relative z-10 px-4">
        <ScrollReveal className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-mono uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Technical Specs
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            {title} <span className="text-accent">{highlightedTitle}</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>

        <StaggerContainer className={`grid gap-6 max-w-5xl mx-auto ${features.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10"
                whileHover={{ borderColor: "hsl(180 100% 45% / 0.3)" }}
              >
                <h3 className="font-display text-lg font-bold text-white mb-4 pb-3 border-b border-white/10">
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
