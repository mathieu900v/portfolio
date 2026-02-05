import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Prevent font loading from blocking text display
  preload: true, // Preload the font
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Prevent font loading from blocking text display
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

// Theme detection script
const themeScript = `
  (function() {
    try {
      // Check for saved theme preference or default to system preference
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      let theme = 'light'; // default
      
      if (savedTheme) {
        theme = savedTheme;
      } else if (systemPrefersDark) {
        theme = 'dark';
      }
      
      // Apply theme
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Store the theme for consistency
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Fallback to light mode if anything fails
      document.documentElement.classList.remove('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="/_next/static/chunks/19fc6e23d72e0867.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
