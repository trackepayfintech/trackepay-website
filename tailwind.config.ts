import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#110F33",
          light: "#1a1850",
        },
        "orange-primary": "#F48120",
        "orange-dark": "#d97218",
        "orange-light": "#FFF7ED",
        orange: {
          DEFAULT: "#F48120",
          dark: "#d97218",
        },
        "text-primary": "#1E293B",
        "text-body": "#334155",
        "text-muted": "#64748B",
        border: "#E2E8F0",
        "border-light": "#F1F5F9",
        "bg-page": "#F8FAFC",
        "bg-muted": "#F1F5F9",
        "bg-card": "#FFFFFF",
        success: "#059669",
        ring: "#F48120",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
