import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        billzo: {
          950: "#020617",
          900: "#0a0f1e",
          800: "#111827",
          700: "#1e293b",
          600: "#334155",
          500: "#475569",
        },
        accent: {
          primary: "#3b82f6",
          secondary: "#06b6d4",
          success: "#10b981",
          warning: "#f59e0b",
          glow: "#60a5fa",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
        "glow-line": "glowLine 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        glowLine: {
          "0%": { left: "-30%", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { left: "130%", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scan: {
          "0%": { top: "-5%" },
          "100%": { top: "105%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;