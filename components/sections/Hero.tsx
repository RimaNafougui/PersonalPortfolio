"use client";
import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ArrowRight } from "lucide-react";
import { Language } from "@/lib/translation";
import ResumeDownload from "@/components/ui/ResumeDownload";
import CursorFollower from "@/components/ui/CursorFollower";
import TypingText from "@/components/ui/TypingText";
import MagneticButton from "@/components/ui/MagneticButton";

interface HeroProps {
  t: {
    badge: string;
    intro: string;
    description: string;
    ctaProjects: string;
    ctaResume: string;
    scroll: string;
    stats: Array<{ value: string; label: string }>;
  };
  language: Language;
  ready?: boolean;
}

export default function Hero({ t, language, ready = true }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section
      ref={sectionRef}
      id="main-content"
      aria-label="Introduction"
      className="relative flex flex-col justify-center min-h-screen items-center px-6 pt-20 pb-36 md:px-12 lg:px-20 overflow-hidden"
    >
      <CursorFollower containerRef={sectionRef} />

      {/* Decorative background glows — hidden from assistive tech */}
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] sm:w-[55vw] sm:h-[55vw] md:w-[38vw] md:h-[38vw] bg-coffee/8 rounded-full blur-[90px] -z-10" />
      <div aria-hidden="true" className="absolute top-1/4 right-[15%] w-[35vw] h-[35vw] sm:w-[22vw] sm:h-[22vw] md:w-[18vw] md:h-[18vw] bg-[#6C6D74]/10 rounded-full blur-[60px] -z-10" />
      <div aria-hidden="true" className="absolute bottom-1/4 left-[15%] w-[28vw] h-[28vw] sm:w-[18vw] sm:h-[18vw] md:w-[14vw] md:h-[14vw] bg-cartier/8 rounded-full blur-[50px] -z-10" />
      {/* Grain texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <motion.div
        className="flex flex-col items-center text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate={ready ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight"
        >
          <span className="text-cartier font-extrabold font-display block tracking-[-0.02em] min-h-[1em]">
            <TypingText text="Rima Nafougui" ready={ready} delay={900} speed={75} />
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-xl mt-6 md:mt-8 max-w-2xl leading-relaxed text-[#8a9ab0] font-medium"
        >
          {t.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 mt-10 justify-center items-center"
        >
          <MagneticButton>
            <Link
              href="#projects"
              className="flex items-center gap-2 bg-cartier text-almond px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:shadow-xl transition-all duration-300 active:scale-95 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier focus-visible:ring-offset-2 focus-visible:ring-offset-almond"
            >
              {t.ctaProjects}
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </MagneticButton>
          <MagneticButton>
            <ResumeDownload language={language} />
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 mt-12 justify-center"
        >
          {[
            {
              icon: faGithub,
              href: "https://github.com/RimaNafougui",
              label: "GitHub profile (opens in new tab)",
            },
            {
              icon: faLinkedin,
              href: "https://www.linkedin.com/in/rima-nafougui/",
              label: "LinkedIn profile (opens in new tab)",
            },
          ].map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center justify-center w-14 h-14 rounded-full border border-[#262E36] text-[#8a9ab0] hover:bg-coffee hover:text-almond hover:border-coffee hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier focus-visible:ring-offset-2 focus-visible:ring-offset-almond"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" aria-hidden="true" />
            </Link>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-gold/20 w-full"
        >
          {t.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold text-coffee tabular-nums">{stat.value}</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#6C6D74] font-bold">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator — purely decorative, hidden from screen readers */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-cartier">
          {t.scroll}
        </span>
        <div className="w-[1px] h-12 bg-cartier/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-full h-1/2 bg-coffee"
          />
        </div>
      </motion.div>
    </section>
  );
}
