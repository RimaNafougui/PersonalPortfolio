"use client";
import { motion } from "framer-motion";
import AboutMeAccordion from "../ui/Accordion";
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
      className="py-24 px-6 md:px-12 lg:px-24 bg-almond overflow-hidden"
    >
      <motion.div
        className="mb-16 space-y-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-serif italic text-center">
          {t.title}
        </h2>
        <div className="h-1 w-24 bg-cartier mx-auto" />
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Profile photo — left column on desktop */}
        <motion.div
          className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 lg:w-full max-w-xs">
            {/* Decorative offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-cartier/30 pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-gold/60 pointer-events-none" />

            {/* Photo container */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gold/10 border border-gold/30">
              <Image
                src="/images/profile.JPG"
                alt="Rima Nafougui"
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
              <p className="font-serif italic text-xl text-coffee">
                Rima Nafougui
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cartier font-black mt-0.5">
                Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Availability pill */}
          <div className="flex items-center gap-2 px-4 py-2 border border-cartier/20 rounded-full bg-cartier/5">
            <span className="w-1.5 h-1.5 rounded-full bg-cartier animate-pulse flex-shrink-0" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cartier">
              Available · March 2026
            </span>
          </div>
        </motion.div>

        {/* Accordion — right column on desktop */}
        <motion.div
          className="lg:col-span-3"
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
