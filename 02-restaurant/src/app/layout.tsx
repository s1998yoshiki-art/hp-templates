import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { SITE } from "@/lib/site";
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
    default: SITE.metaTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.metaDescription,
  keywords: SITE.keywords,
  metadataBase: new URL(SITE.siteUrl),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE.siteUrl,
    siteName: SITE.name,
    title: SITE.metaTitle,
    description: SITE.metaDescription,
    images: [
      {
        url: `${SITE.siteUrl}/images/hero-bg.png`,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.metaTitle,
    description: SITE.metaDescription,
    images: [`${SITE.siteUrl}/images/hero-bg.png`],
  },
  robots: { index: false, follow: false },
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
