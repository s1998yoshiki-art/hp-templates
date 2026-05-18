import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand)",
          dark: "var(--brand-dark)",
          light: "var(--brand-light)",
        },
        accent: "var(--accent)",
        line: "var(--line)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        sub: "var(--sub)",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "Hiragino Kaku Gothic ProN", "system-ui", "sans-serif"],
        serif: ["var(--font-noto-serif-jp)", "Hiragino Mincho ProN", "serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "card-sm": "0 2px 8px rgba(28,40,48,.08)",
        "card-md": "0 10px 28px rgba(28,40,48,.14)",
      },
    },
  },
  plugins: [],
};

export default config;
