import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import MotionConfigProvider from "@/components/ui/MotionConfigProvider";
import { Toaster } from "sonner";
import "./globals.css";

const BASE_URL = "https://rimanafougui.vercel.app";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rima Nafougui",
  url: BASE_URL,
  jobTitle: "Software Developer",
  description:
    "Full-stack developer specialising in web, data engineering, and AI.",
  sameAs: [
    "https://github.com/rimalnafougui",
    "https://linkedin.com/in/rima-nafougui",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Rima Nafougui",
    default: "Rima Nafougui",
  },
  description:
    "Portfolio of Rima Nafougui — software developer specialising in full-stack web, data engineering, and AI.",
  keywords: [
    "Rima Nafougui",
    "Software Engineer",
    "Web Developer",
    "Full Stack",
    "Data Engineering",
    "AI",
    "Next.js",
    "React",
    "Python",
  ],
  authors: [{ name: "Rima Nafougui", url: BASE_URL }],
  creator: "Rima Nafougui",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    siteName: "Rima Nafougui",
    title: "Rima Nafougui | Software Developer",
    description:
      "Full-stack developer specialising in web, data engineering, and AI. Building scalable applications with Next.js, Python, and modern cloud tools.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rima Nafougui — Software Developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rima Nafougui | Software Developer",
    description:
      "Full-stack developer specialising in web, data engineering, and AI.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Cormorant Garamond + Jost from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <ScrollProgress />
        {/* Skip to main content — visible on focus for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:text-sm focus:font-bold focus:rounded"
        >
          Skip to main content
        </a>

        <MotionConfigProvider>{children}</MotionConfigProvider>

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#FFFFFF",
              color: "#14532d",
              border: "1px solid #F5F1EA",
              borderRadius: "4px",
              fontFamily: "'Jost', system-ui, sans-serif",
            },
          }}
        />
        <SpeedInsights />
        <Analytics />
        <ScrollToTop />
      </body>
    </html>
  );
}
