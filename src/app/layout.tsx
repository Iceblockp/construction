import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Construction & Architecture",
  description: "We make your dream into reality.",
  icons: "/images.ico",
  openGraph: {
    type: 'website',
    url: '#',
    title: "Construction & Architecture",
    description: "We make your dream into reality.",
    images: [
      {
        url: 'https://metatags.io/images/meta-tags.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction & Architecture',
    description: "We make your dream into reality.",
    images: [
      {
        url: 'https://metatags.io/images/meta-tags.png',
        width: 800,
        height: 600,
        alt: 'Twitter Image Alt',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className={inter.className}>{children}</body>
    </html>
  );
}
