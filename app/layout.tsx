import { Josefin_Sans } from "next/font/google";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Rima Nafougui",
    default: "Rima Nafougui | Software Developer",
  },
  description:
    "Portfolio of Rima Nafougui, a Software Engineering student. Specializing web and mobile development",
  keywords: [
    "Rima Nafougui",
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "Unity Developer",
    "Full Stack",
  ],
};

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
  variable: "--font-josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${josefinSans.className}`}>
      <body>
        {children}{" "}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#ffffff",
              color: "#1a1a1a",
              border: "1px solid #d4d4d4",
              borderRadius: "0px",
              fontFamily: "var(--font-josefin), sans-serif",
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
