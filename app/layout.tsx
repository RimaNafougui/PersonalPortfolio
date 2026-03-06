import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MotionConfigProvider from "@/components/ui/MotionConfigProvider";
import { Toaster } from "sonner";
import "./globals.css";

const BASE_URL = "https://rimanafougui.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Rima Nafougui",
    default: "Rima Nafougui | Software Developer",
  },
  description:
    "Portfolio of Rima Nafougui — software developer specialising in full-stack web, data engineering, and AI. Available for internships March–Aug 2026.",
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
        {/* Cabinet Grotesk from Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400&display=swap"
        />
      </head>
      <body>
        {/* Skip to main content — visible on focus for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-coffee focus:text-almond focus:text-sm focus:font-bold focus:rounded"
        >
          Skip to main content
        </a>

        <MotionConfigProvider>
          {children}
        </MotionConfigProvider>

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#fafaf9",
              color: "#1c1917",
              border: "1px solid #e7e5e4",
              borderRadius: "4px",
              fontFamily: "'Cabinet Grotesk', system-ui, sans-serif",
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
