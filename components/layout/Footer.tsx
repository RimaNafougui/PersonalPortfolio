"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface FooterProps {
  t: {
    rights: string;
    badge: string;
  };
}

export default function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-coffee py-12 px-6 md:px-12 lg:px-24 border-t border-gold/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <p className="font-display font-extrabold text-2xl tracking-tight">
            Rima Nafougui
          </p>
          <p className="text-xs text-[#6B7A8D] font-medium italic">
            Designing &amp; building things for the web
          </p>
          <p className="text-xs uppercase tracking-[0.2em] opacity-40">
            {t.rights} &copy; {currentYear}
          </p>
        </div>

<div className="flex flex-col items-center md:items-end gap-4">
          <Link
            href="#main-content"
            className="text-xs uppercase tracking-[0.2em] font-bold text-[#6B7A8D] hover:text-cartier transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier"
          >
            ↑ Back to top
          </Link>
          <div className="flex gap-3">
            {[
              {
                icon: faGithub,
                href: "https://github.com/RimaNafougui",
                label: "GitHub",
              },
              {
                icon: faLinkedin,
                href: "https://www.linkedin.com/in/rima-nafougui/",
                label: "LinkedIn",
              },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 text-[#6B7A8D] hover:text-cartier hover:border-cartier hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier focus-visible:ring-offset-2 focus-visible:ring-offset-almond"
              >
                <FontAwesomeIcon icon={social.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
