import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        papaya: "#FF6A00",
        charcoal: "#1C1C1E",
        "soft-black": "#0E0E0F",
        "light-grey": "#E5E5E5"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(14, 14, 15, 0.14)",
        card: "0 16px 50px rgba(14, 14, 15, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
