import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "サンプル行政書士事務所｜沖縄の許認可・補助金・相続相談",
  description:
    "沖縄県浦添市エリアの行政書士デモLP。許認可申請、補助金申請サポート、相続関連書類の相談導線を分かりやすく整理した営業用サンプルです。",
  metadataBase: new URL("https://sample-shigyo.pages.dev"),
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "サンプル行政書士事務所｜沖縄の許認可・補助金・相続相談",
    description:
      "手続きの不安を、相談しやすい導線に。沖縄県浦添市エリアの行政書士デモLP。",
    url: "https://sample-shigyo.pages.dev",
    siteName: "サンプル行政書士事務所 デモLP",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "行政書士相談を想起させる明るいオフィス空間",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "サンプル行政書士事務所｜沖縄の許認可・補助金・相続相談",
    description:
      "沖縄県浦添市エリアの行政書士デモLP。許認可・補助金・相続の相談導線を整理。",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
