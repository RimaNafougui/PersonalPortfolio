"use client";
import { motion } from "framer-motion";
import Info from "@/components/ui/Info";
import WordReveal from "@/components/ui/WordReveal";

interface ActivitiesProp {
  t: {
    title: string;
    items: Array<{
      position: string;
      description: string;
      duration: string;
      company: string;
      reference: string;
    }>;
  };
}

export default function Activities({ t }: ActivitiesProp) {
  return (
    <section id="activities" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
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
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Info viewMore="" items={t.items} />
      </motion.div>
    </section>
  );
}
