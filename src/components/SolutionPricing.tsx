import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

interface SolutionPricingProps {
  tiers: PricingTier[];
  title?: string;
  subtitle?: string;
}

export function SolutionPricing({ 
  tiers, 
  title = "Investment Tiers",
  subtitle = "Choose the right level of automation for your business"
}: SolutionPricingProps) {
  return (
    <section className="py-16 lg:py-24 relative" style={{ background: "linear-gradient(180deg, hsl(225 70% 18%) 0%, hsl(225 75% 14%) 100%)" }}>
      <div className="container relative z-10 px-4">
        <ScrollReveal className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-mono uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Pricing
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-accent">{title.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <motion.div
                className={`relative rounded-2xl p-6 lg:p-8 h-full flex flex-col ${
                  tier.highlighted 
                    ? "bg-gradient-to-b from-primary/20 to-primary/5 border-2 border-accent" 
                    : "bg-white/5 border border-white/10"
                }`}
                whileHover={{ y: -4, borderColor: tier.highlighted ? "hsl(180 100% 50%)" : "hsl(180 100% 45% / 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-white/50 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-white/50 text-sm">/{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlighted ? "text-accent" : "text-white/50"}`} />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <AppointmentDialog>
                  <Button 
                    variant={tier.highlighted ? "accent" : "outline"} 
                    size="lg" 
                    className={`w-full ${!tier.highlighted && "border-white/20 text-white hover:bg-white/10"}`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </AppointmentDialog>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
