import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import { meta } from "@/app/sitemap";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const header = {
  title: "Nanobot - The Nano-Focused Multi-Purpose Discord Bot",
  description: "Properly configure the site layout using layout.tsx",
  image: "/",
};

export const metadata: Metadata = {
  title: header.title,
  description: header.description,
  metadataBase: new URL(meta.domain),
  openGraph: {
    siteName: "Nanobot",
    title: header.title,
    description: header.description,
    url: meta.domain,
    type: "website",
    images: header.image,
  },
  twitter: {
    title: header.title,
    description: header.description,
    card: "summary_large_image",
    images: header.image,
  },
};

export const viewport: Viewport = {
  themeColor: meta.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
