import type { Config } from "tailwindcss";

const config: Config = {
  // Enable dark mode via class strategy (toggled by DarkModeToggle component)
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── CUSTOMIZE: Fonts ────────────────────────────────────────────────
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-cal)", "var(--font-inter)", "sans-serif"],
      },
      // ─── TD-inspired dark green brand palette ────────────────────────────
      colors: {
        brand: {
          50:  "#f0faf4",
          100: "#d9f0e3",
          200: "#b3e0c7",
          300: "#7dc7a4",
          400: "#4dab80",
          500: "#1b8640", // TD primary green
          600: "#166d34",
          700: "#0f5429",
          800: "#0a3d1e",
          900: "#072e16",
          950: "#04190d",
        },
      },
      // ─── Spacing / Sizing extras ─────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      // ─── Animations ──────────────────────────────────────────────────────
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "counter-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "counter-up": "counter-up 0.4s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      // ─── Box shadows ─────────────────────────────────────────────────────
      boxShadow: {
        "soft-sm": "0 2px 8px 0 rgba(0,0,0,0.06)",
        soft: "0 4px 16px 0 rgba(0,0,0,0.08)",
        "soft-lg": "0 8px 32px 0 rgba(0,0,0,0.10)",
        "soft-xl": "0 16px 48px 0 rgba(0,0,0,0.12)",
        "brand-glow": "0 0 32px 0 rgba(27,134,64,0.30)",
        "brand-glow-lg": "0 0 64px 0 rgba(27,134,64,0.20)",
      },
      // ─── Background gradients ────────────────────────────────────────────
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #1b8640 0%, #0f5429 100%)",
        "brand-gradient":
          "linear-gradient(135deg, #1b8640 0%, #166d34 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
