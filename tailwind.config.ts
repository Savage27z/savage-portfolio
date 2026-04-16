import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0B",
          secondary: "#111115",
          tertiary: "#1A1A22",
        },
        accent: {
          gold: "#C9A84C",
          "gold-dim": "#8C6E2E",
          ice: "#6B9BB8",
          blood: "#8B2635",
        },
        text: {
          primary: "#E8E0D0",
          secondary: "#8A8070",
          tertiary: "#4A4540",
        },
        border: {
          subtle: "rgba(201, 168, 76, 0.12)",
          active: "rgba(201, 168, 76, 0.4)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
