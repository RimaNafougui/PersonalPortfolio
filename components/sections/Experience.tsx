import Section from "@/components/ui/Section";

interface ExperienceProps {
  t: {
    title: string;
    items: Array<{
      position: string;
      company: string;
      duration: string;
      description: string;
      reference: string;
    }>;
  };
}

export default function Experience({ t }: ExperienceProps) {
  return (
    <Section id="experience" title={t.title}>
      <ul className="space-y-10">
        {t.items.map((item) => (
          <li key={item.position + item.duration}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-bold text-foreground">{item.position}</h3>
              <span className="text-sm text-muted">{item.duration}</span>
            </div>
            <p className="text-sm text-muted">{item.company}</p>
            <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
            {item.reference && <p className="mt-2 text-sm italic text-muted">{item.reference}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
