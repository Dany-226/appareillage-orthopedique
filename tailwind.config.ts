import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Stitch design system tokens ────────────────────────────────────
        surface:                      "#fbf9f6",
        "surface-dim":                "#dbdad7",
        "surface-container-lowest":   "#ffffff",
        "surface-container-low":      "#f5f3f0",
        "surface-container":          "#efeeeb",
        "surface-container-high":     "#eae8e5",
        "surface-container-highest":  "#e4e2df",
        "on-surface":                 "#1b1c1a",
        "on-surface-variant":         "#41484d",
        "stitch-primary":             "#00374e",
        "stitch-primary-container":   "#0b4f6c",
        "stitch-on-primary-container":"#8ac0e1",
        "stitch-secondary":           "#8d4f00",
        "stitch-secondary-container": "#fea44b",
        "stitch-on-secondary-container": "#6f3d00",

        // ── Brand palette (kept for backward compatibility) ───────────────
        brand: {
          teal:          "#0B4F6C",
          "teal-light":  "#E1F0F7",
          "teal-muted":  "#D4E8F0",
          amber:         "#E8923A",
          "amber-light": "#FDF3E7",
          "amber-muted": "#FAEBD7",
          dark:          "#1A1A2E",
          light:         "#F7F5F2",
          text:          "#2D2D2D",
          "text-muted":  "#6B6B6B",
        },

        // ── shadcn/ui semantic tokens (CSS-var backed) ────────────────────
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: "hsl(var(--destructive))",
        border:      "hsl(var(--border))",
        input:       "hsl(var(--input))",
        ring:        "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT:              "hsl(var(--sidebar))",
          foreground:           "hsl(var(--sidebar-foreground))",
          primary:              "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent:               "hsl(var(--sidebar-accent))",
          "accent-foreground":  "hsl(var(--sidebar-accent-foreground))",
          border:               "hsl(var(--sidebar-border))",
          ring:                 "hsl(var(--sidebar-ring))",
        },
      },

      // ── Typography ─────────────────────────────────────────────────────
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        display: ["var(--font-heading)", "Georgia", "serif"], // alias
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "ui-monospace", "monospace"],
      },

      fontSize: {
        "display-2xl": ["clamp(3rem,   6vw, 5rem)",    { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "display-xl":  ["clamp(2.25rem,4vw, 3.75rem)", { lineHeight: "1.1",  letterSpacing: "-0.025em" }],
        "display-lg":  ["clamp(1.75rem,3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md":  ["clamp(1.375rem,2vw,2rem)",    { lineHeight: "1.2",  letterSpacing: "-0.015em" }],
        "body-lg":     ["1.125rem",                    { lineHeight: "1.75", letterSpacing: "0" }],
        "body-md":     ["1rem",                        { lineHeight: "1.7",  letterSpacing: "0" }],
        "body-sm":     ["0.875rem",                    { lineHeight: "1.65", letterSpacing: "0" }],
        "label-lg":    ["0.875rem",                    { lineHeight: "1",    letterSpacing: "0.1em" }],
        "label-md":    ["0.75rem",                     { lineHeight: "1",    letterSpacing: "0.08em" }],
        "label-sm":    ["0.6875rem",                   { lineHeight: "1",    letterSpacing: "0.06em" }],
      },

      // ── Spacing ────────────────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "section":     "7rem",
        "section-sm":  "4rem",
        "section-gap": "120px",
        "container-max": "1280px",
      },

      // ── Border radius ──────────────────────────────────────────────────
      borderRadius: {
        card:   "0.5rem",
        button: "0.375rem",
        "4xl":  "2rem",
        "3xl":  "1.5rem",
        lg:     "var(--radius)",
        md:     "calc(var(--radius) - 2px)",
        sm:     "calc(var(--radius) - 4px)",
      },

      // ── Shadows ────────────────────────────────────────────────────────
      boxShadow: {
        "card":       "0 4px 24px rgba(26,26,46,0.08)",
        "card-hover": "0 12px 40px rgba(26,26,46,0.14)",
        "nav":        "0 1px 0 0 rgb(0 0 0 / 0.06)",
        "dropdown":   "0 8px 24px -4px rgb(0 0 0 / 0.14), 0 2px 8px -2px rgb(0 0 0 / 0.08)",
        "teal-glow":  "0 0 32px 0 rgb(11 79 108 / 0.18)",
        "amber-glow": "0 0 24px 0 rgb(232 146 58 / 0.22)",
      },

      // ── Animation ──────────────────────────────────────────────────────
      transitionTimingFunction: {
        "editorial": "cubic-bezier(0.22, 1, 0.36, 1)",
        "spring":    "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth":    "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "counter": {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grain-shift": {
          "0%":   { backgroundPosition: "0 0" },
          "33%":  { backgroundPosition: "40px -30px" },
          "66%":  { backgroundPosition: "-20px 50px" },
          "100%": { backgroundPosition: "0 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-up":        "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in":        "fade-in 0.6s ease both",
        "grain-shift":    "grain-shift 0.9s steps(3) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
