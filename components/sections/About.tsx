"use client";
import { motion } from "framer-motion";
import AboutMeAccordion from "../ui/Accordion";
import WordReveal from "@/components/ui/WordReveal";
import Image from "next/image";

interface AboutProps {
  t: {
    title: string;
    accordion1: { title: string; content: string };
    accordion2: { title: string; content: string };
    accordion3: { title: string; content: string };
    accordion4: { title: string; content: string };
  };
}

export default function About({ t }: AboutProps) {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 bg-background overflow-hidden"
    >
      <div className="mb-16 space-y-4">
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

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Profile photo — left column on desktop */}
        <motion.div
          className="md:col-span-2 flex flex-col items-center md:items-start gap-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-[260px] sm:max-w-xs md:max-w-none">
            {/* Decorative offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/30 pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-surface/60 pointer-events-none" />

            {/* Photo container */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface/10 border border-surface/30">
              <Image
                src="/images/image.jpg"
                alt="Rima Nafougui, Software Developer"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 256px, 320px"
                // Fallback handled by the placeholder below
                onError={(e) => {
                  // Hide the img on error so placeholder shows
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            {/* Name tag below photo */}
            <div className="mt-4 pl-1">
              <p className="font-serif italic text-xl text-foreground">
                Rima Nafougui
              </p>
              <p className="text-[10px] uppercase tracking-wider text-primary font-black mt-0.5">
                Builder. Optimist. Aspiring.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Accordion — right column on desktop */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AboutMeAccordion t={t} />
        </motion.div>
      </div>
    </section>
  );
}
