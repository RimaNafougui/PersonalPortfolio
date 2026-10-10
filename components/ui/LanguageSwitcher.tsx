import Link from "next/link";
import { Language } from "@/lib/translation";

const LANGS: { code: Language; href: string; label: string }[] = [
  { code: "en", href: "/", label: "English" },
  { code: "fr", href: "/fr", label: "Français" },
];

export default function LanguageSwitcher({ language }: { language: Language }) {
  return (
    <div className="relative flex items-center bg-foreground/5 p-1 rounded-full border border-surface/20">
      {LANGS.map(({ code, href, label }) => {
        const active = language === code;
        return (
          <Link
            key={code}
            href={href}
            hrefLang={code}
            lang={code}
            aria-label={label}
            aria-current={active ? "true" : undefined}
            className={`relative z-10 px-4 py-1.5 text-center text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 w-12 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background ${
              active
                ? "bg-primary text-background shadow-sm"
                : "text-foreground/75 hover:text-foreground"
            }`}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
