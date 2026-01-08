import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface SparkleProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  delay?: number;
}

function Sparkle({ size = 20, color = "hsl(43 100% 60%)", style, delay = 0 }: SparkleProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
          fill={color}
        />
      </svg>
    </motion.div>
  );
}

interface GoldSparklesProps {
  count?: number;
  className?: string;
}

export function GoldSparkles({ count = 12, className = "" }: GoldSparklesProps) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 8 + Math.random() * 16,
      delay: Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          size={sparkle.size}
          delay={sparkle.delay}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
        />
      ))}
    </div>
  );
}

export function FloatingOrbs() {
  return (
    <>
      {/* Large background orbs */}
      <motion.div 
        className="absolute top-20 left-[10%] w-72 h-72 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(43 100% 50%) 0%, transparent 70%)"
        }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 right-[10%] w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(0 75% 50%) 0%, transparent 70%)"
        }}
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(43 100% 55%) 0%, transparent 60%)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </>
  );
}

export function RetroGridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(43 100% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(43 100% 50% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-px ${className}`}>
      <div className="absolute inset-0 retro-divider" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-4 h-4 text-accent" />
      </motion.div>
    </div>
  );
}

export function MetallicGoldText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span 
      className={`relative inline-block ${className}`}
      style={{
        background: "linear-gradient(135deg, hsl(48 100% 75%) 0%, hsl(43 100% 55%) 25%, hsl(38 100% 45%) 50%, hsl(43 100% 55%) 75%, hsl(48 100% 75%) 100%)",
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "metallicShift 3s ease-in-out infinite"
      }}
    >
      {children}
    </span>
  );
}