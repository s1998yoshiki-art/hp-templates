import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 仲里歯科医院 ブランドカラー
        // メイン：ディープブルー（信頼・医療・清潔）
        // サブ：ソフトミント（清潔感・優しさ）
        // アクセント：やわらかベージュ（親しみ・温もり）
        brand: {
          DEFAULT: "#1E5A8E",
          dark: "#163E60",
          light: "#3A7AB0",
        },
        mint: {
          DEFAULT: "#6FBFB5",
          dark: "#4F9F95",
          light: "#A6D9D2",
        },
        beige: "#F5EFE6",
        paper: "#FAFAF7",
        ink: "#2A2F36",
        sub: "#5A636D",
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
        "card-sm": "0 2px 8px rgba(30,90,142,.08)",
        "card-md": "0 8px 24px rgba(30,90,142,.12)",
      },
    },
  },
  plugins: [],
};

export default config;
