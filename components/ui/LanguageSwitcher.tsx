"use client";
import { motion } from "framer-motion";
import { Language } from "@/lib/translation";

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function LanguageSwitcher({ language, setLanguage }: Props) {
  const languages: Language[] = ["en", "fr"];

  return (
    <div className="relative flex items-center bg-coffee/5 p-1 rounded-full border border-gold/20">
      <div className="absolute inset-y-1 left-1 w-[calc(50%-4px)] transition-transform duration-300 ease-out">
        <motion.div
          initial={false}
          animate={{
            x: language === "en" ? 0 : "100%",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="h-full w-full bg-cartier rounded-full shadow-sm"
        />
      </div>

      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`relative z-10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 w-12 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier focus-visible:ring-offset-1 focus-visible:ring-offset-almond
            ${
              language === lang
                ? "text-almond"
                : "text-coffee/60 hover:text-coffee"
            }
          `}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
