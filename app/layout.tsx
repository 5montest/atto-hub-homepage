import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://atto-hub.com";
const siteName = "ATENELA";
const siteTitle = "ATENELA（アテネラ）| 個人開発と順番待ちツール Ato";
const siteDescription =
  "ATENELA（アテネラ）は個人開発の活動名です。順番待ちツール Ato と、イベントでの運用実績を紹介します。";



export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "ATENELA",
    "Ato",
    "アテネラ",
    "個人開発",
    "順番待ち",
    "queue management",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "ATENELA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
