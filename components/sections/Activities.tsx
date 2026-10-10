import Section from "@/components/ui/Section";

interface ActivitiesProps {
  t: {
    title: string;
    hobbiesTitle: string;
    hobbies: string;
    items: Array<{
      position: string;
      company: string;
      duration: string;
      description: string;
    }>;
  };
}

export default function Activities({ t }: ActivitiesProps) {
  return (
    <Section id="activities" title={t.title}>
      <ul className="space-y-10">
        {t.items.map((item) => (
          <li key={item.position}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-bold text-foreground">{item.position}</h3>
              <span className="text-sm text-muted">{item.duration}</span>
            </div>
            <p className="text-sm text-muted">{item.company}</p>
            <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
        <li>
          <h3 className="text-lg font-bold text-foreground">{t.hobbiesTitle}</h3>
          <p className="mt-2 leading-relaxed text-muted">{t.hobbies}</p>
        </li>
      </ul>
    </Section>
  );
}
