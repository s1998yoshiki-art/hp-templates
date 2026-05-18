import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // サンプル工務店 ブランドカラー
        // メイン：コンクリート（中南部の都会感・落ち着き）
        // アクセント：テラコッタ（赤瓦の差し色）
        // サブ：生成りクリーム（柔らかさ・温度感）
        concrete: {
          DEFAULT: "#5C6770",
          dark: "#3A4147",
          light: "#9BA3AB",
        },
        terracotta: {
          DEFAULT: "#C8633D",
          dark: "#9B4D2E",
          light: "#E08560",
        },
        cream: "#F4F1EB",
        paper: "#FAF8F4",
        ink: "#2A2D31",
        line: {
          green: "#06C755",
        },
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
        "card-sm": "0 2px 8px rgba(58,65,71,.08)",
        "card-md": "0 8px 24px rgba(58,65,71,.12)",
      },
    },
  },
  plugins: [],
};

export default config;
