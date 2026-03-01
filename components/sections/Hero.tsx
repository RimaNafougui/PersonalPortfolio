"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ArrowRight } from "lucide-react";
import { Language } from "@/lib/translation";
import ResumeDownload from "@/components/ui/ResumeDownload";

interface HeroProps {
  t: {
    badge: string;
    intro: string;
    description: string;
    ctaProjects: string;
    ctaResume: string;
    scroll: string;
  };
  language: Language;
}

export default function Hero({ t, language }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      id="hero"
      className="relative flex flex-col justify-center min-h-screen items-center px-6 py-20 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] sm:w-[60vw] sm:h-[60vw] md:w-[40vw] md:h-[40vw] bg-coffeBean/10 rounded-full blur-[100px] -z-10" />

      <motion.div
        className="flex flex-col items-center text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight"
        >
          {t.intro}{" "}
          <span className="text-cartier font-bold font-serif italic block mt-2">
            Rima Nafougui
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-xl mt-6 md:mt-8 max-w-2xl leading-relaxed text-coffeBean/80 font-medium"
        >
          {t.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 mt-10 justify-center items-center"
        >
          <Link
            href="#projects"
            className="flex items-center gap-2 bg-cartier text-gold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 text-sm sm:text-base"
          >
            {t.ctaProjects}
            <ArrowRight size={20} />
          </Link>
          <ResumeDownload language={language} />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 mt-12 justify-center"
        >
          {[
            {
              icon: faGithub,
              href: "https://github.com/Mercuryy200",
              label: "GitHub",
            },
            {
              icon: faLinkedin,
              href: "https://www.linkedin.com/in/rima-nafougui/",
              label: "LinkedIn",
            },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target="_blank"
              aria-label={social.label}
              className="flex items-center justify-center w-14 h-14 rounded-full border border-coffeBean/20 text-coffeBean hover:bg-coffeBean hover:text-cartier hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </Link>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-cartier">
          {t.scroll}
        </span>
        <div className="w-[1px] h-12 bg-cartier/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-full h-1/2 bg-coffeBean"
          />
        </div>
      </motion.div>
    </div>
  );
}
