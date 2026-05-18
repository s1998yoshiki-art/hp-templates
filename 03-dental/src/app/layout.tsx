import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "仲里歯科医院｜家族4世代の、かかりつけ歯科医院。那覇市久米",
    template: "%s | 仲里歯科医院",
  },
  description:
    "開業40年／那覇市久米の仲里歯科医院。親子2代で守り続ける、家族4世代で通えるかかりつけ歯科医院。一般歯科・小児歯科・矯正・インプラント・審美治療まで対応。旭橋駅徒歩7分。",
  keywords: [
    "仲里歯科医院",
    "那覇市",
    "久米",
    "歯医者",
    "歯科",
    "小児歯科",
    "インプラント",
    "矯正",
    "審美治療",
    "旭橋駅",
    "かかりつけ歯科",
  ],
  metadataBase: new URL("https://nakazato-demo.pages.dev"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://nakazato-demo.pages.dev/",
    siteName: "仲里歯科医院",
    title: "仲里歯科医院｜家族4世代の、かかりつけ歯科医院。",
    description:
      "開業40年／親子2代／那覇市久米。赤ちゃんからお年寄りまで、家族みんなで通える歯科医院です。一般歯科・小児歯科・矯正・インプラント対応。",
    images: [
      {
        url: "https://nakazato-demo.pages.dev/ogp.png",
        width: 1200,
        height: 630,
        alt: "仲里歯科医院｜家族4世代の、かかりつけ歯科医院。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "仲里歯科医院｜家族4世代の、かかりつけ歯科医院。",
    description:
      "開業40年／親子2代／那覇市久米。赤ちゃんからお年寄りまで、家族みんなで通える歯科医院です。一般歯科・小児歯科・矯正・インプラント対応。",
    images: ["https://nakazato-demo.pages.dev/ogp.png"],
  },
  robots: { index: false, follow: false }, // デモサイトのため非インデックス
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${notoSerifJp.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-paper">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
