import Section from "@/components/ui/Section";
import { languages, frameworks, databases } from "@/lib/data";

interface SkillsProps {
  t: { title: string; languages: string; framework: string; databases: string; cloud: string };
}

export default function Skills({ t }: SkillsProps) {
  const rows = [
    { label: t.languages, items: languages },
    { label: t.framework, items: frameworks },
    { label: t.databases, items: databases },
    { label: t.cloud, items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Git"] },
  ];

  return (
    <Section id="skills" title={t.title}>
      <dl className="space-y-5">
        {rows.map((row) => (
          <div key={row.label} className="sm:grid sm:grid-cols-[10rem_1fr] sm:gap-4">
            <dt className="font-bold text-foreground">{row.label}</dt>
            <dd className="mt-1 text-muted sm:mt-0">{row.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
