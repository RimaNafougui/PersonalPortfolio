export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6 border-t border-surface py-12">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">{title}</h2>
      {children}
    </section>
  );
}
