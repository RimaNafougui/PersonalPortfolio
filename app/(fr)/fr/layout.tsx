import type { Metadata } from "next";
import RootShell from "@/components/layout/RootShell";
import { metadataFr } from "@/lib/seo";

export const metadata: Metadata = metadataFr;

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="fr">{children}</RootShell>;
}
