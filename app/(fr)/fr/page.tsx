import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { homeAlternates } from "@/lib/seo";

export const metadata: Metadata = { alternates: homeAlternates("/fr") };

export default function FrenchHome() {
  return <HomePage language="fr" />;
}
