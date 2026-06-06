import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black Russian
        ink: {
          DEFAULT: "#0e0e0e",
          soft: "#141414",
          card: "#181818",
          line: "#272727",
        },
        // Snow
        snow: {
          DEFAULT: "#fdfdf9",
          dim: "#c9c9c2",
          muted: "#8f8f88",
          faint: "#5e5e58",
        },
        // Cinnabar
        flame: {
          50: "#fdeee9",
          100: "#fbd6cb",
          200: "#f6ab97",
          300: "#f08263",
          400: "#eb5939",
          500: "#d8431f",
          600: "#b3361a",
        },
        // Market signal colors (used in optional trading widgets)
        up: "#22c55e",
        down: "#ef4444",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ticker-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(235,89,57,0.5)" },
          "70%": { boxShadow: "0 0 0 10px rgba(235,89,57,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(235,89,57,0)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
        glow: {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        rise: {
          "0%": { height: "20%" },
          "100%": { height: "100%" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        ticker: "ticker 30s linear infinite",
        "ticker-rev": "ticker-rev 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s infinite",
        "grid-pan": "grid-pan 4s linear infinite",
        glow: "glow 3s ease-in-out infinite",
        blink: "blink 1.4s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
