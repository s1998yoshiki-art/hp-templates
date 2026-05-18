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

const SITE_URL = "https://ysnaha-demo-cca20863.pages.dev";

export const metadata: Metadata = {
  title: {
    default: "ワイズ那覇整骨院｜那覇市田原・小禄駅徒歩5分／その痛み、原因から整える。",
    template: "%s | ワイズ那覇整骨院",
  },
  description:
    "那覇市田原・小禄駅徒歩5分の整骨院。肩こり・腰痛・首の痛み・交通事故施術・産後骨盤矯正まで。原因を見極めた施術と丁寧なセルフケアアドバイスで、動ける毎日を取り戻します。平日9:00〜19:30、土日祝も対応。各種健康保険・自賠責・労災対応。",
  keywords: [
    "ワイズ那覇整骨院",
    "那覇市",
    "田原",
    "小禄",
    "整骨院",
    "整体",
    "骨盤矯正",
    "産後骨盤矯正",
    "交通事故",
    "むちうち",
    "肩こり",
    "腰痛",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: `${SITE_URL}/`,
    siteName: "ワイズ那覇整骨院",
    title: "ワイズ那覇整骨院｜那覇市田原・小禄駅徒歩5分／その痛み、原因から整える。",
    description:
      "那覇市田原の整骨院。肩こり・腰痛・交通事故施術・産後骨盤矯正まで。平日19:30まで・土日祝も対応。各種保険対応。",
    images: [
      {
        url: `${SITE_URL}/images/ogp.png`,
        width: 1200,
        height: 630,
        alt: "ワイズ那覇整骨院｜那覇市田原・小禄駅徒歩5分",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ワイズ那覇整骨院｜那覇市田原・小禄駅徒歩5分",
    description:
      "那覇市田原の整骨院。肩こり・腰痛・交通事故施術・産後骨盤矯正まで。平日19:30まで・土日祝も対応。",
    images: [`${SITE_URL}/images/ogp.png`],
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
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-paper">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
