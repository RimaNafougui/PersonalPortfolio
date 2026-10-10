import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { homeAlternates } from "@/lib/seo";

export const metadata: Metadata = { alternates: homeAlternates("/") };

export default function Home() {
  return <HomePage language="en" />;
}
