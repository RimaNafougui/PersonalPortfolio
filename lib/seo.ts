import type { Metadata } from "next";

export const BASE_URL = "https://rimanafougui.com";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rima Nafougui",
  url: BASE_URL,
  jobTitle: "Software Developer",
  description:
    "Computer Science student and full-stack developer building production web apps, AI retrieval pipelines and APIs.",
  sameAs: [
    "https://github.com/rimanafougui",
    "https://linkedin.com/in/rima-nafougui",
  ],
};

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Rima Nafougui — Software Developer portfolio",
};

/** Links between the two language versions of the home page. */
export const homeAlternates = (canonical: "/" | "/fr"): Metadata["alternates"] => ({
  canonical,
  languages: { en: "/", fr: "/fr", "x-default": "/" },
});

export const metadataEn: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { template: "%s | Rima Nafougui", default: "Rima Nafougui" },
  description:
    "Portfolio of Rima Nafougui — computer science student and software developer building full-stack web apps, AI retrieval pipelines and APIs.",
  keywords: [
    "Rima Nafougui",
    "Software Developer",
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
    siteName: "Rima Nafougui",
    title: "Rima Nafougui | Software Developer",
    description:
      "Computer science student and full-stack developer. Production web apps, AI retrieval pipelines and APIs with tests and CI.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rima Nafougui | Software Developer",
    description:
      "Computer science student and full-stack developer building web apps, AI pipelines and APIs.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const metadataFr: Metadata = {
  ...metadataEn,
  title: { template: "%s | Rima Nafougui", default: "Rima Nafougui" },
  description:
    "Portfolio de Rima Nafougui — étudiante en informatique et développeuse logiciel : applications web full-stack, pipelines de recherche IA et API.",
  openGraph: {
    ...metadataEn.openGraph,
    locale: "fr_CA",
    images: [{ ...OG_IMAGE, alt: "Portfolio de Rima Nafougui, développeuse logiciel" }],
    title: "Rima Nafougui | Développeuse logiciel",
    description:
      "Étudiante en informatique et développeuse full-stack. Applications web, pipelines de recherche IA et API avec tests et CI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rima Nafougui | Développeuse logiciel",
    description:
      "Étudiante en informatique et développeuse full-stack : applications web, pipelines IA et API.",
    images: ["/opengraph-image"],
  },
};
