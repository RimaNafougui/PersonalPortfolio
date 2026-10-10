import type { Metadata } from "next";
import RootShell from "@/components/layout/RootShell";
import { metadataEn } from "@/lib/seo";

export const metadata: Metadata = metadataEn;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
