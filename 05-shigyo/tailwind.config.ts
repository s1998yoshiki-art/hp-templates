import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // サンプル行政書士事務所 ブランドカラー
        // メイン：深いネイビー（士業の信頼・知性・伝統）
        // アクセント：ゴールド（士業のフォーマル感・格式）
        // 背景：オフホワイト（清潔感・読みやすさ）
        navy: {
          DEFAULT: "#0B2545",
          dark: "#061833",
          light: "#1F3A66",
        },
        gold: {
          DEFAULT: "#C9A961",
          dark: "#A88944",
          light: "#DBC089",
        },
        slate: {
          DEFAULT: "#2E3440",
          light: "#5A6273",
        },
        paper: "#FAF8F3",
        cream: "#F5F1E8",
        ink: "#1A1F2C",
        line: {
          green: "#06C755",
          DEFAULT: "#E5E1D8",
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
        "card-sm": "0 4px 16px rgba(11,37,69,.08)",
        "card-md": "0 8px 24px rgba(11,37,69,.12)",
      },
    },
  },
  plugins: [],
};

export default config;
