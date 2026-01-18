import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { BlueDivider } from "@/components/ui/decorative-elements";

interface SolutionHeroProps {
  badge: string;
  badgeIcon: LucideIcon;
  headline: string;
  highlightedText: string;
  subheadline: string;
  ctaText: string;
  ctaSecondary?: string;
}

export function SolutionHero({
  badge,
  badgeIcon: BadgeIcon,
  headline,
  highlightedText,
  subheadline,
  ctaText,
  ctaSecondary = "See How It Works",
}: SolutionHeroProps) {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(225 80% 8%) 0%, hsl(225 70% 15%) 50%, hsl(225 65% 20%) 100%)" }}>
      {/* Technical grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(hsl(180 100% 45%) 1px, transparent 1px),
          linear-gradient(90deg, hsl(180 100% 45%) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px"
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 py-20 lg:py-28">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BadgeIcon className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono uppercase tracking-wider text-white/70">{badge}</span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {headline}{" "}
            <span className="text-accent">{highlightedText}</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/60 mb-10 px-4 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <AppointmentDialog>
              <Button variant="accent" size="xl" className="group">
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AppointmentDialog>
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
              onClick={() => {
                const section = document.getElementById("how-it-works");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <BlueDivider className="absolute bottom-0" />
      </div>
    </section>
  );
}
