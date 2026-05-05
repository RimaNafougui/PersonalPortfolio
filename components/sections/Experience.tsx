"use client";
import { motion } from "framer-motion";
import Info from "@/components/ui/Info";
import WordReveal from "@/components/ui/WordReveal";
import ResumeDownload from "@/components/ui/ResumeDownload";
import { Language } from "@/lib/translation";

interface ExperienceProp {
  t: {
    title: string;
    viewMore: string;
    items: Array<{
      position: string;
      description: string;
      duration: string;
      company: string;
      reference: string;
    }>;
  };
  language: Language;
}

export default function Experience({ t, language }: ExperienceProp) {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="mb-16 text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic text-center">
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
        className="flex flex-col items-center space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Info viewMore={t.viewMore} items={t.items} />
        <div className="pt-8">
          <ResumeDownload language={language} />
        </div>
      </motion.div>
    </section>
  );
}
