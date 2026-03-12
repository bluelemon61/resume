import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_JP, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Donghoon Lee Resume",
  description: "Personal resume and portfolio website built with Next.js.",
  openGraph: {
    title: "Donghoon Lee Resume",
    description: "Personal resume and portfolio website built with Next.js.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSansKr.variable} ${notoSansJp.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
