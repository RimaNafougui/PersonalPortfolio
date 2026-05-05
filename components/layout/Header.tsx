"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { Language, Translation } from "@/lib/translation";
import { cn } from "@/lib/utils";

interface Props {
  t: Translation;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const SECTION_IDS = ["about", "experience", "projects", "skills", "roadmap", "contact"];

export default function Header({ t, language, setLanguage }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  // ── Active section via IntersectionObserver ──────────────────────────────
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Mobile menu focus management ─────────────────────────────────────────
  useEffect(() => {
    if (isMenuOpen) {
      firstMenuItemRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  // ── Scroll shadow ─────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigation = [
    { name: t.nav.about,      href: "#about",      id: "about"      },
    { name: t.nav.experience, href: "#experience", id: "experience" },
    { name: t.nav.projects,   href: "#projects",   id: "projects"   },
    { name: t.nav.skills,     href: "#skills",     id: "skills"     },
    { name: t.nav.roadmap,    href: "#roadmap",    id: "roadmap"    },
    { name: t.nav.contact,    href: "#contact",    id: "contact"    },
    { name: t.nav.blog,       href: "/blog",       id: ""           },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 w-full bg-background/80 backdrop-blur-lg z-[100] border-b border-surface/10 transition-shadow duration-300",
        scrolled && "shadow-[0_1px_16px_rgba(0,0,0,0.4)]"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group" onClick={() => setIsMenuOpen(false)}>
            <div className="flex items-center gap-2">
              <span className="text-4xl lg:text-5xl font-display font-extrabold text-foreground group-hover:text-primary transition-colors duration-500">
                R.
              </span>
              <div className="hidden md:block h-px w-0 group-hover:w-10 bg-primary transition-all duration-700" />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => {
              const isActive = item.id && activeSection === item.id;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group relative text-[10px] font-extrabold uppercase tracking-[0.3em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
                    isActive ? "text-primary" : "text-muted hover:text-foreground"
                  )}
                >
                  {item.name}
                  {/* Hover underline — slides in from left, hidden when active */}
                  <span
                    className={cn(
                      "absolute -bottom-px left-0 h-px w-full bg-current origin-left transition-transform duration-300",
                      isActive ? "scale-x-0" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                  {/* Active indicator dot */}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-300",
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    )}
                  />
                </Link>
              );
            })}

            <div className="h-4 w-px bg-surface/30 mx-1" />
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center lg:hidden gap-4">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X size={24} strokeWidth={1.5} />
              ) : (
                <Menu size={24} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={cn(
          "lg:hidden fixed inset-x-0 bg-background border-b border-surface/20 transition-all duration-500 ease-in-out",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="flex flex-col items-center space-y-7 py-10">
          {navigation.map((item, idx) => {
            const isActive = item.id && activeSection === item.id;
            return (
              <Link
                key={item.name}
                ref={idx === 0 ? firstMenuItemRef : undefined}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
                className={cn(
                  "text-xs font-extrabold uppercase tracking-[0.4em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
                  isActive ? "text-primary" : "text-muted hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
