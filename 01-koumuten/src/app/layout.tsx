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
    default: "サンプル工務店 株式会社｜沖縄中南部の住まいに、確かな仕上がりを。",
    template: "%s | サンプル工務店",
  },
  description:
    "沖縄県那覇市の総合建設業 サンプル工務店。新築工事から、住宅・マンション・店舗のリフォーム工事まで一貫対応。沖縄本島中南部17市町村の住まいの相談先として、確かな仕上がりをお届けします。",
  keywords: [
    "サンプル工務店",
    "那覇市",
    "沖縄",
    "中南部",
    "工務店",
    "新築工事",
    "リフォーム",
    "住宅リフォーム",
    "店舗改装",
    "外壁塗装",
    "水回りリフォーム",
  ],
  metadataBase: new URL("https://sample-koumuten.pages.dev"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://sample-koumuten.pages.dev/",
    siteName: "サンプル工務店 株式会社",
    title: "サンプル工務店 株式会社｜沖縄中南部の住まいに、確かな仕上がりを。",
    description:
      "沖縄県那覇市の総合建設業。新築工事から住宅・マンション・店舗のリフォーム工事まで。沖縄本島中南部17市町村に対応。",
    images: [
      {
        url: "https://sample-koumuten.pages.dev/ogp.png",
        width: 1200,
        height: 630,
        alt: "サンプル工務店｜沖縄中南部の住まいに、確かな仕上がりを。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "サンプル工務店 株式会社｜沖縄中南部の住まいに、確かな仕上がりを。",
    description:
      "沖縄県那覇市の総合建設業。新築工事から住宅・マンション・店舗のリフォーム工事まで。沖縄本島中南部17市町村に対応。",
    images: ["https://sample-koumuten.pages.dev/ogp.png"],
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
