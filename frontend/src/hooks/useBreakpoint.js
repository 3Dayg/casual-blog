import { useState, useEffect } from "react";

const BREAKPOINTS = {
  xs: 400,
  sm: 600,
  md: 900,
  lg: 1200,
};

const getBreakpoint = (width) => {
    if (width < BREAKPOINTS.xs) return "xs";
    if (width < BREAKPOINTS.sm) return "sm";
    if (width < BREAKPOINTS.md) return "md";
    if (width < BREAKPOINTS.lg) return "lg";
    return "xl";
  };

/**
 * Custom React hook that returns the current screen size breakpoint as a string.
 *
 * @returns {"xs" | "sm" | "md" | "lg" | "xl"} The current breakpoint based on window width.
 *
 * Breakpoints:
 *   - "xs": width < 400px
 *   - "sm": 400px <= width < 600px
 *   - "md": 600px <= width < 900px
 *   - "lg": 900px <= width < 1200px
 *   - "xl": width >= 1200px
 */
export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

  const getResponsiveSize = () => {    
    switch (breakpoint) {
      case "xs": return "sm";
      case "sm": return "sm";
      case "md": return "md";
      case "lg": return "lg";
      case "xl": return "lg";
      default: return "md";
    }
  };

  const getResponsiveSpacing = () => {
    switch (breakpoint) {
      case "xs": return "xs";
      case "sm": return "sm";
      case "md": return "sm";
      case "lg": return "md";
      case "xl": return "md";
      default: return "sm";
    }
  };

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { breakpoint, getResponsiveSize, getResponsiveSpacing };
}