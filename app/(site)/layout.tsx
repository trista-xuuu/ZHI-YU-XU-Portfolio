import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Preloader } from "@/components/Preloader";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";



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

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await client.fetch(siteSettingsQuery);
  const email = siteSettings?.email || "trista10418063@gmail.com";

  return (
    <>
      <Preloader />
      <Header email={email} />
      {children}
      <SiteFooter email={email} />
    </>
  );
}
