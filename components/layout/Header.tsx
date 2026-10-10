import Link from "next/link";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { Language, Translation } from "@/lib/translation";

export default function Header({ t, language }: { t: Translation; language: Language }) {
  const home = language === "fr" ? "/fr" : "/";
  const links = [
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.activities, href: "#activities" },
    { name: t.nav.contact, href: "#contact" },
    { name: t.nav.blog, href: "/blog" },
  ];

  return (
    <header className="border-b border-surface">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5">
        <Link href={home} className="font-bold text-foreground">
          Rima Nafougui
        </Link>
        <nav aria-label={t.ui.mainNav} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted underline decoration-transparent decoration-2 underline-offset-8 transition-colors hover:text-primary hover:decoration-primary focus-visible:text-primary focus-visible:decoration-primary">
              {l.name}
            </Link>
          ))}
          <LanguageSwitcher language={language} />
        </nav>
      </div>
    </header>
  );
}
