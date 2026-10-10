export default function Footer({ t }: { t: { rights: string } }) {
  return (
    <footer className="mx-auto max-w-3xl px-6">
      <div className="border-t border-surface py-8 text-sm text-muted">
        Rima Nafougui &copy; {new Date().getFullYear()}. {t.rights}.
      </div>
    </footer>
  );
}
