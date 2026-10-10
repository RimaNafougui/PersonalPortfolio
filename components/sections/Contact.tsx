import Section from "@/components/ui/Section";

interface ContactProps {
  t: {
    title: string;
    intro: string;
    email: string;
    linkedinLabel: string;
    githubLabel: string;
  };
}

const link = "text-primary underline underline-offset-4 hover:text-foreground";

export default function Contact({ t }: ContactProps) {
  return (
    <Section id="contact" title={t.title}>
      <p className="leading-relaxed text-muted">{t.intro}</p>
      <p className="mt-4 text-xl font-bold">
        <a href={`mailto:${t.email}`} className={link}>
          {t.email}
        </a>
      </p>
      <p className="mt-4 flex gap-6">
        <a href="https://www.linkedin.com/in/rima-nafougui/" target="_blank" rel="noopener noreferrer" className={link}>
          {t.linkedinLabel}
        </a>
        <a href="https://github.com/RimaNafougui" target="_blank" rel="noopener noreferrer" className={link}>
          {t.githubLabel}
        </a>
      </p>
    </Section>
  );
}
