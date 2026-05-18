import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ワイズ那覇整骨院 ブランドカラー
        // メイン：ディープネイビー（信頼・誠実）
        // アクセント：ウォームオレンジ（温かみ・回復）
        // ベース：アイボリー＋ペーパー（清潔感）
        brand: {
          DEFAULT: "#1E3A5F",
          dark: "#142944",
          light: "#3E5F88",
        },
        accent: {
          DEFAULT: "#E97E3F",
          dark: "#C8632C",
          light: "#F4A576",
        },
        cream: "#FAF6EF",
        paper: "#FCFBF8",
        sand: "#F1ECE2",
        ink: "#1F2A37",
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
        "card-sm": "0 2px 8px rgba(30, 58, 95, .08)",
        "card-md": "0 8px 24px rgba(30, 58, 95, .12)",
      },
    },
  },
  plugins: [],
};

export default config;
