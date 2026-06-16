/**
 * Design tokens for appareillageorthopedique.fr
 * "Confident medical authority meets human warmth"
 *
 * Import anywhere:
 *   import { colors, motion } from "@/components/ui/design-tokens"
 */

// ─────────────────────────────────────────────
// COLORS
// ─────────────────────────────────────────────

export const colors = {
  brand: {
    teal:       "#0B4F6C",
    tealLight:  "#1A7DA8",
    tealMuted:  "#D4E8F0",
    amber:      "#E8923A",
    amberLight: "#F2B470",
    amberMuted: "#FAEBD7",
    dark:       "#1A1A2E",
    light:      "#F7F5F2",
    text:       "#2D2D2D",
    textMuted:  "#6B6B6B",
  },
  /** HSL channel strings — used with hsl() in inline styles */
  hsl: {
    primary:  "198 82% 23%",
    accent:   "30 79% 57%",
    dark:     "240 28% 14%",
    light:    "36 27% 96%",
    text:     "0 0% 18%",
    muted:    "0 0% 42%",
    border:   "36 14% 88%",
  },
} as const;

// ─────────────────────────────────────────────
// TYPOGRAPHY
// ─────────────────────────────────────────────

export const typography = {
  fonts: {
    display: "var(--font-display)",   // Playfair Display
    sans:    "var(--font-sans)",      // DM Sans
    mono:    "var(--font-mono)",      // DM Mono
  },
  sizes: {
    "display-2xl": "clamp(3rem,   6vw, 5rem)",
    "display-xl":  "clamp(2.25rem,4vw, 3.75rem)",
    "display-lg":  "clamp(1.75rem,3vw, 2.75rem)",
    "display-md":  "clamp(1.375rem,2vw,2rem)",
    "body-lg":     "1.125rem",
    "body-md":     "1rem",
    "body-sm":     "0.875rem",
    "label-lg":    "0.875rem",
    "label-md":    "0.75rem",
    "label-sm":    "0.6875rem",
  },
  tracking: {
    display: "-0.03em",
    body:    "0",
    label:   "0.1em",
    mono:    "0.06em",
  },
  leading: {
    display: 1.08,
    heading: 1.15,
    body:    1.7,
    label:   1,
  },
} as const;

// ─────────────────────────────────────────────
// SPACING
// ─────────────────────────────────────────────

export const spacing = {
  section:   "7rem",
  sectionSm: "4rem",
  gap: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
  },
} as const;

// ─────────────────────────────────────────────
// ELEVATION / SHADOWS
// ─────────────────────────────────────────────

export const shadows = {
  card:      "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 4px 12px -2px rgb(0 0 0 / 0.06)",
  cardHover: "0 4px 6px -1px rgb(0 0 0 / 0.06), 0 16px 32px -4px rgb(0 0 0 / 0.12)",
  nav:       "0 1px 0 0 rgb(0 0 0 / 0.06)",
  dropdown:  "0 8px 24px -4px rgb(0 0 0 / 0.14), 0 2px 8px -2px rgb(0 0 0 / 0.08)",
  tealGlow:  "0 0 32px 0 rgb(11 79 108 / 0.18)",
  amberGlow: "0 0 24px 0 rgb(232 146 58 / 0.22)",
} as const;

// ─────────────────────────────────────────────
// EASING & TIMING
// ─────────────────────────────────────────────

export const easing = {
  editorial: [0.22, 1, 0.36, 1] as const,     // custom ease-out — snappy, editorial
  spring:    [0.34, 1.56, 0.64, 1] as const,  // slight overshoot
  smooth:    [0.4, 0, 0.2, 1] as const,       // material ease-in-out
  linear:    [0, 0, 1, 1] as const,
} as const;

export const duration = {
  instant: 0.1,
  fast:    0.15,
  base:    0.25,
  slow:    0.6,
  reveal:  0.8,
} as const;

// ─────────────────────────────────────────────
// FRAMER MOTION VARIANTS
// ─────────────────────────────────────────────

/**
 * Scroll reveal — fade up with stagger.
 *
 * Usage:
 *   <motion.section variants={motion.staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
 *     <motion.h2 variants={motion.fadeUp}>…</motion.h2>
 *     <motion.p  variants={motion.fadeUp}>…</motion.p>
 *   </motion.section>
 */
export const motionVariants = {

  // Container that staggers children
  staggerContainer: {
    hidden:  {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren:   0.05,
      },
    },
  },

  // Individual child: fade up
  fadeUp: {
    hidden:  { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration.slow,
        ease:     easing.editorial,
      },
    },
  },

  // Faster variant for dense content
  fadeUpFast: {
    hidden:  { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration.base,
        ease:     easing.editorial,
      },
    },
  },

  // Simple fade — for images, backgrounds
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: duration.slow, ease: easing.smooth },
    },
  },

  /**
   * Hero word-split entrance.
   * Split your heading text into words, wrap each in <motion.span>,
   * apply wordReveal to the span and wordRevealContainer to the parent.
   *
   * Usage:
   *   const words = "Mieux comprendre".split(" ")
   *   <motion.h1 variants={motionVariants.wordRevealContainer} initial="hidden" animate="visible">
   *     {words.map((w, i) => (
   *       <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
   *         <motion.span variants={motionVariants.wordReveal} style={{ display: "inline-block" }}>
   *           {w}&nbsp;
   *         </motion.span>
   *       </span>
   *     ))}
   *   </motion.h1>
   */
  wordRevealContainer: {
    hidden:  {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren:   0.1,
      },
    },
  },
  wordReveal: {
    hidden:  { opacity: 0, y: "100%", rotateX: 8 },
    visible: {
      opacity: 1,
      y: "0%",
      rotateX: 0,
      transition: {
        duration: duration.reveal,
        ease:     easing.editorial,
      },
    },
  },

  /**
   * Card hover — subtle lift + shadow.
   * Apply as whileHover on a motion.div card.
   *
   * Usage:
   *   <motion.div whileHover="hover" variants={motionVariants.card}>
   */
  card: {
    rest:  { y: 0,  boxShadow: shadows.card,      transition: { duration: duration.base, ease: easing.smooth } },
    hover: { y: -4, boxShadow: shadows.cardHover,  transition: { duration: duration.base, ease: easing.smooth } },
  },

  /**
   * Stats counter — triggers on scroll enter.
   * Pair with useCountUp() hook or a library like react-countup.
   */
  statReveal: {
    hidden:  { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration.slow,
        ease:     easing.editorial,
      },
    },
  },

  /**
   * Navigation — blur backdrop, smooth hide/show on scroll.
   * Animate between "visible" and "hidden" based on scroll direction.
   *
   * Usage (in a nav component):
   *   const [visible, setVisible] = useState(true)
   *   const [scrolled, setScrolled] = useState(false)
   *   // useScrollDirection() → setVisible(dir === "up")
   *   // useScrollY() → setScrolled(y > 40)
   *
   *   <motion.header
   *     variants={motionVariants.nav}
   *     animate={visible ? "visible" : "hidden"}
   *     initial="visible"
   *   >
   */
  nav: {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: duration.base, ease: easing.smooth },
    },
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: { duration: duration.base, ease: easing.smooth },
    },
  },

  // Nav background — transitions from transparent to blurred on scroll
  navBackground: {
    transparent: {
      backgroundColor: "rgba(247, 245, 242, 0)",
      backdropFilter:  "blur(0px)",
      borderBottomColor: "rgba(0,0,0,0)",
      boxShadow: "none",
    },
    scrolled: {
      backgroundColor: "rgba(247, 245, 242, 0.85)",
      backdropFilter:  "blur(12px)",
      borderBottomColor: "rgba(0,0,0,0.06)",
      boxShadow:       shadows.nav,
      transition: { duration: duration.base, ease: easing.smooth },
    },
  },

  // Page-level entrance (route transition)
  page: {
    initial:  { opacity: 0, y: 8  },
    animate:  { opacity: 1, y: 0, transition: { duration: duration.slow, ease: easing.editorial } },
    exit:     { opacity: 0, y: -8, transition: { duration: duration.base, ease: easing.smooth } },
  },

  // Slide in from left (drawer, sidebar)
  slideInLeft: {
    hidden:  { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { duration: duration.slow, ease: easing.editorial },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: duration.base, ease: easing.smooth },
    },
  },
} as const;

// ─────────────────────────────────────────────
// BREAKPOINTS (for JS usage — mirrors Tailwind defaults)
// ─────────────────────────────────────────────

export const breakpoints = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  "2xl": 1536,
} as const;

// ─────────────────────────────────────────────
// BORDER RADIUS
// ─────────────────────────────────────────────

export const radius = {
  sm:   "0.375rem",
  md:   "0.5rem",
  lg:   "0.625rem",
  xl:   "1rem",
  "2xl":"1.5rem",
  "3xl":"2rem",
  full: "9999px",
} as const;

// ─────────────────────────────────────────────
// VIEWPORT MARGIN — when to trigger scroll animations
// ─────────────────────────────────────────────

export const viewport = {
  once:         true,
  marginNone:   "0px",
  marginSmall:  "-40px",
  marginMedium: "-80px",
  marginLarge:  "-120px",
} as const;
