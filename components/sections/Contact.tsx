"use client";
import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";

interface ContactTranslation {
  title: string;
  intro: string;
  email: string;
  emailLabel: string;
  linkedinLabel: string;
  githubLabel: string;
}

const LINKS = {
  linkedin: "https://www.linkedin.com/in/rima-nafougui/",
  github: "https://github.com/RimaNafougui",
};

export default function Contact({ t }: { t: ContactTranslation }) {
  const linkStyle =
    "inline-block px-8 py-3 border border-surface text-foreground rounded-full font-bold text-sm hover:bg-surface transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 bg-background flex flex-col items-center border-t border-surface/20"
    >
      <div className="mb-12 text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic text-foreground">
          <WordReveal>{t.title}</WordReveal>
        </h2>
        <motion.div
          className="h-1 w-24 bg-primary mx-auto origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      <motion.div
        className="w-full max-w-xl text-center space-y-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-muted leading-relaxed">{t.intro}</p>
        <a
          href={`mailto:${t.email}`}
          className="block text-2xl sm:text-3xl font-serif italic text-primary underline underline-offset-8 break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {t.email}
        </a>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={linkStyle}>
            {t.linkedinLabel}
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={linkStyle}>
            {t.githubLabel}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
