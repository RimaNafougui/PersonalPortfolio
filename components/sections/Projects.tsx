import Section from "@/components/ui/Section";

interface Project {
  title: string;
  description: string;
  technologies: string;
  github: string;
  url: string | null;
}

interface ProjectsProps {
  t: {
    title: string;
    more: string;
    less: string;
    labels: { sourceCode: string; liveDemo: string };
    items: Record<string, Project>;
  };
}

const link = "text-primary underline underline-offset-4 hover:text-foreground";
const FEATURED = 3;

function ProjectItem({ p, t }: { p: Project; t: ProjectsProps["t"] }) {
  return (
    <li>
      <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{p.description}</p>
      <p className="mt-2 text-sm text-muted">{p.technologies}</p>
      <p className="mt-2 flex gap-5 text-sm">
        <a href={p.github} target="_blank" rel="noopener noreferrer" className={link}>
          {t.labels.sourceCode}
        </a>
        {p.url && (
          <a href={p.url} target="_blank" rel="noopener noreferrer" className={link}>
            {t.labels.liveDemo}
          </a>
        )}
      </p>
    </li>
  );
}

export default function Projects({ t }: ProjectsProps) {
  const all = Object.values(t.items);
  const featured = all.slice(0, FEATURED);
  const more = all.slice(FEATURED);

  return (
    <Section id="projects" title={t.title}>
      <ul className="space-y-10">
        {featured.map((p) => (
          <ProjectItem key={p.github} p={p} t={t} />
        ))}
      </ul>
      {more.length > 0 && (
        <details className="group mt-10">
          <summary className="cursor-pointer text-primary underline underline-offset-4 hover:text-foreground">
            <span className="group-open:hidden">{t.more}</span>
            <span className="hidden group-open:inline">{t.less}</span>
          </summary>
          <ul className="mt-8 space-y-10">
            {more.map((p) => (
              <ProjectItem key={p.github} p={p} t={t} />
            ))}
          </ul>
        </details>
      )}
    </Section>
  );
}
