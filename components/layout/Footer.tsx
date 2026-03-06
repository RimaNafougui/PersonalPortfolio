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
    <footer className="w-full text-coffee py-12 px-6 md:px-24 border-t border-gold/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <p className="font-display font-extrabold text-2xl tracking-tight">
            Rima Nafougui
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">
            {t.rights} &copy; {currentYear}
          </p>
        </div>

        <div className="flex items-center gap-3 px-5 py-2 border border-gold rounded-full bg-stone-100">
          <span className="text-[11px] font-bold uppercase text-stone-500 tracking-widest">
            {t.badge}
          </span>
        </div>

        <div className="flex gap-4">
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
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 text-stone-500 hover:text-cartier hover:border-cartier hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier focus-visible:ring-offset-2 focus-visible:ring-offset-almond"
            >
              <FontAwesomeIcon icon={social.icon} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
