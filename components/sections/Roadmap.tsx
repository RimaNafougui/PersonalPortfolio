"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, School } from "lucide-react";
import WordReveal from "@/components/ui/WordReveal";

export interface Milestone {
  date: string;
  title: string;
  institution: string;
  description: string;
  status: "completed" | "active" | "future";
}

interface RoadmapProps {
  t: {
    title: string;
    milestones: Milestone[];
  };
}

export default function Roadmap({ t }: RoadmapProps) {
  const icons = {
    completed: GraduationCap,
    active: Briefcase,
    future: School,
  };

  return (
    <section
      id="roadmap"
      className="py-24 px-6 md:px-12 lg:px-24 bg-background overflow-hidden border-t border-foreground/10"
    >
      <div className="mb-20 text-center space-y-4">
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

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline spine — decorative */}
        <motion.div
          aria-hidden="true"
          className="absolute left-8 md:left-1/2 top-0 h-full w-px bg-foreground/20 md:-translate-x-1/2 z-0"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        <ol
          aria-label="Career milestones"
          className="space-y-10 md:space-y-16 relative list-none"
        >
          {t.milestones.map((item, index) => {
            const Icon = icons[item.status];
            const isEven = index % 2 === 0;
            const isActive = item.status === "active";

            return (
              <motion.li
                key={index}
                className={`flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                } group`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline node icon — decorative */}
                <div
                  aria-hidden="true"
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10"
                >
                  <div
                    className={`
                    relative flex items-center justify-center w-16 h-16 rounded-full border-2 bg-background transition-all duration-500
                    ${
                      isActive
                        ? "border-primary shadow-[0_0_20px_rgba(28,43,64,0.25)] scale-110"
                        : "border-foreground/20 group-hover:border-foreground/50"
                    }
                  `}
                  >
                    {isActive && (
                      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-20 animate-ping" />
                    )}
                    <Icon
                      size={24}
                      className={`${
                        isActive
                          ? "text-primary"
                          : "text-muted group-hover:text-foreground"
                      } transition-colors duration-500`}
                    />
                  </div>
                </div>

                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    isEven ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div
                    className={`
                    p-5 md:p-8 bg-background border border-foreground/10 rounded-none transition-all duration-500 relative border-l-[3px]
                    ${
                      isActive
                        ? "border-primary/30 border-l-primary shadow-lg"
                        : item.status === "completed"
                          ? "border-l-muted hover:border-muted/40 hover:shadow-md"
                          : "border-l-foreground/20 hover:border-foreground/30 hover:shadow-md"
                    }
                    before:absolute before:top-8 ${
                      isEven
                        ? "before:right-[-17px] before:border-l-transparent before:border-r-foreground/10"
                        : "before:left-[-17px] before:border-r-transparent before:border-l-foreground/10"
                    } before:border-b-transparent before:border-t-transparent before:border-[8px] md:before:content-['']
                  `}
                  >
                    <span
                      className={`block text-[10px] font-black uppercase tracking-[0.3em] mb-2 ${
                        isActive ? "text-primary" : "text-muted"
                      }`}
                    >
                      {item.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-bold text-muted uppercase tracking-wider mb-4">
                      {item.institution}
                    </p>
                    <p className="text-muted leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
