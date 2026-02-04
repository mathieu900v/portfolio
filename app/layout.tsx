import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathieu Voyer | Fractional CTO & Cloud Architect | Greater Bay Area",
  description: "Expert fractional CTO and AWS-certified cloud architect based in Zhuhai, China. Specializing in enterprise banking systems, AI/LLM integration, and scalable cloud infrastructure for the Greater Bay Area.",
  keywords: ["CTO", "Cloud Architect", "AWS", "Greater Bay Area", "Zhuhai", "Hong Kong", "AI Integration", "LLM", "Banking Systems", "Fractional CTO"],
  authors: [{ name: "Mathieu Voyer" }],
  creator: "Mathieu Voyer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hk.mathieuv.pro",
    title: "Mathieu Voyer | Fractional CTO & Cloud Architect",
    description: "Expert fractional CTO and AWS-certified cloud architect based in Zhuhai, China. Serving the Greater Bay Area with enterprise-grade solutions.",
    siteName: "Mathieu Voyer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathieu Voyer | Fractional CTO & Cloud Architect",
    description: "Expert fractional CTO and AWS-certified cloud architect based in Zhuhai, China.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
