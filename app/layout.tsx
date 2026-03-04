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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Cabinet Grotesk from Fontshare — replaces Josefin Sans */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400&display=swap"
        />
      </head>
      <body>
        {children}
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
