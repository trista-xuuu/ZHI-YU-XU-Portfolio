import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Preloader } from "@/components/Preloader";

const sans = Noto_Sans_TC({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZHI YU XU — Portfolio",
    template: "%s — ZHI YU XU",
  },
  description: "徐芝瑜的網站企劃、UIUX 設計與專案作品集。",
  authors: [{ name: "ZHI YU XU" }],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon_2.svg",
    shortcut: "/favicon_2.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "/",
    title: "ZHI YU XU — Portfolio",
    description: "徐芝瑜的網站企劃、UIUX 設計與專案作品集。",
    siteName: "ZHI YU XU",
    images: [
      {
        url: "/images/projects/kisura.webp",
        width: 1800,
        height: 900,
        alt: "ZHI YU XU — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZHI YU XU — Portfolio",
    description: "徐芝瑜的網站企劃、UIUX 設計與專案作品集。",
    images: ["/images/projects/kisura.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" id="top" suppressHydrationWarning>
      <body className={`${sans.variable}`}>
        <Preloader />
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
