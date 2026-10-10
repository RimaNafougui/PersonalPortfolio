import { Language } from "@/lib/translation";

interface HeroProps {
  t: { description: string; ctaResume: string };
  about: string;
  email: string;
  language: Language;
  label: string;
}

const link = "text-primary underline underline-offset-4 hover:text-foreground";

export default function Hero({ t, about, email, language, label }: HeroProps) {
  return (
    <section aria-label={label} className="fade-in pb-12 pt-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Rima Nafougui
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground">{t.description}</p>
      <p className="mt-4 leading-relaxed text-muted">{about}</p>
      <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        <a
          href={language === "fr" ? "/NafouguiRima_FR.pdf" : "/NafouguiRima_EN.pdf"}
          className={link}
        >
          {t.ctaResume}
        </a>
        <a href={`mailto:${email}`} className={link}>
          Email
        </a>
        <a href="https://github.com/RimaNafougui" target="_blank" rel="noopener noreferrer" className={link}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/rima-nafougui/" target="_blank" rel="noopener noreferrer" className={link}>
          LinkedIn
        </a>
      </p>
    </section>
  );
}
