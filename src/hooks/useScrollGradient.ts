import { useState, useEffect } from 'react';

export function useScrollGradient() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate gradient colors based on scroll
  // Deep Blue (#1130c3) = hsl(230, 84%, 42%)
  // Light Blue (#00e5e5) = hsl(180, 100%, 45%)
  const getGradientStyle = () => {
    // Interpolate hue from 230 (deep blue) to 180 (cyan)
    const hue = 230 - (scrollProgress * 50);
    // Interpolate saturation from 84% to 100%
    const saturation = 84 + (scrollProgress * 16);
    // Keep lightness around 42-45%
    const lightness = 42 + (scrollProgress * 3);

    return {
      backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    };
  };

  // Get text color that contrasts with background
  const getTextColor = () => {
    // As we move towards lighter cyan, darken the text
    const lightness = 100 - (scrollProgress * 85); // 100% -> 15%
    return {
      color: `hsl(230, 80%, ${lightness}%)`,
    };
  };

  return {
    scrollProgress,
    getGradientStyle,
    getTextColor,
  };
}
