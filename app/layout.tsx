import type { Metadata, Viewport } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const siteUrl = "https://atto-hub.com";
const siteName = "Atto Hub";
const siteTitle = "Atto Hub | Real-World Product Studio";
const siteDescription =
  "Atto Hub develops practical products like Ato to reduce friction in on-site operations and everyday workflows.";

const rounded = M_PLUS_Rounded_1c({
  variable: "--font-rounded",
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  preload: false,
});

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
    "Atto Hub",
    "Ato",
    "product studio",
    "UX",
    "operations design",
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
        alt: "Atto Hub",
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
  themeColor: "#fbfbf9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head />
      <body className={`${rounded.className} ${rounded.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
