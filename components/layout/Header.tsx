"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { Language, Translation } from "@/lib/translation";

interface Props {
  t: Translation;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ t, language, setLanguage }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.roadmap, href: "#roadmap" },
    { name: t.nav.contact, href: "#contact" },
    { name: t.nav.blog, href: "/blog" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-almond/80 backdrop-blur-lg z-[100] border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="group">
            <div className="flex items-center gap-2">
              <span className="text-4xl lg:text-5xl font-serif italic text-coffee group-hover:text-cartier transition-colors duration-500">
                R.
              </span>
              <div className="hidden md:block h-px w-0 group-hover:w-12 bg-cartier transition-all duration-700" />
            </div>
          </Link> 

          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-coffee/70 hover:text-cartier transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}

            <div className="h-4 w-px bg-gold/30 mx-2" />

            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>

          <div className="flex items-center lg:hidden gap-4">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-coffee hover:text-cartier transition-colors"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={28} strokeWidth={1.5} />
              ) : (
                <Menu size={28} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 bg-almond transition-all duration-500 ease-in-out border-b border-gold/20 ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 py-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className="text-xs font-black uppercase tracking-[0.4em] text-coffee hover:text-cartier transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
