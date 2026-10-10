import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MotionConfigProvider from "@/components/ui/MotionConfigProvider";
import { personJsonLd } from "@/lib/seo";
import { translations, Language } from "@/lib/translation";
import "@/app/globals.css";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap";

/**
 * The shared <html> shell. Each language has its own root layout so the
 * document language (<html lang>) is correct for browsers and search engines.
 */
export default function RootShell({
  lang,
  children,
}: {
  lang: Language;
  children: React.ReactNode;
}) {
  const ui = translations[lang].ui;

  return (
    <html lang={lang}>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* Cormorant Garamond + Jost from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href={FONTS_URL} />
        <link rel="stylesheet" href={FONTS_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        {/* Skip to main content — visible on focus for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:text-sm focus:font-bold focus:rounded"
        >
          {ui.skip}
        </a>

        <MotionConfigProvider>{children}</MotionConfigProvider>

        <SpeedInsights />
        <Analytics />
        <ScrollToTop label={ui.scrollTop} />
      </body>
    </html>
  );
}
