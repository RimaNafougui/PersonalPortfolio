import Link from "next/link";
import { Language } from "@/lib/translation";

const LANGS: { code: Language; href: string; label: string }[] = [
  { code: "en", href: "/", label: "English" },
  { code: "fr", href: "/fr", label: "Français" },
];

export default function LanguageSwitcher({ language }: { language: Language }) {
  return (
    <span className="flex items-center gap-2">
      {LANGS.map(({ code, href, label }, i) => (
        <span key={code} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true" className="text-muted/50">/</span>}
          <Link
            href={href}
            hrefLang={code}
            lang={code}
            aria-label={label}
            aria-current={language === code ? "true" : undefined}
            className={
              language === code
                ? "font-bold text-foreground"
                : "text-muted hover:text-primary"
            }
          >
            {code.toUpperCase()}
          </Link>
        </span>
      ))}
    </span>
  );
}
