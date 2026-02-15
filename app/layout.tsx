import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Sora } from "next/font/google";
import "./globals.css";

const rounded = M_PLUS_Rounded_1c({
  variable: "--font-rounded",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  weight: ["500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atto Hub | やわらかく進むプロダクトスタジオ",
  description:
    "Atoをはじめ、待ち時間や現場の不便をやわらかく解決するプロダクトを開発する Atto Hub のコーポレートサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${rounded.variable} ${sora.variable} antialiased`}>{children}</body>
    </html>
  );
}
