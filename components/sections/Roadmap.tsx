"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, School } from "lucide-react";

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
      className="py-24 px-6 md:px-12 lg:px-24 bg-almond overflow-hidden"
    >
      <motion.div
        className="mb-20 text-center space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic text-coffee">
          {t.title}
        </h2>
        <div className="h-1 w-24 bg-cartier mx-auto" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline spine — decorative */}
        <motion.div
          aria-hidden="true"
          className="absolute left-8 md:left-1/2 top-0 h-full w-px bg-gold/50 md:-translate-x-1/2"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        <ol aria-label="Career milestones" className="space-y-10 md:space-y-16 relative list-none">
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
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center"
                >
                  <div
                    className={`
                    relative flex items-center justify-center w-16 h-16 rounded-full border-2 bg-almond transition-all duration-500
                    ${
                      isActive
                        ? "border-cartier shadow-[0_0_20px_rgba(68,64,60,0.15)] scale-110"
                        : "border-gold group-hover:border-coffee"
                    }
                  `}
                  >
                    {isActive && (
                      <span className="absolute inline-flex h-full w-full rounded-full bg-cartier opacity-20 animate-ping" />
                    )}
                    <Icon
                      size={24}
                      className={`${
                        isActive
                          ? "text-cartier"
                          : "text-stone-400 group-hover:text-coffee"
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
                    p-5 md:p-8 border border-gold/20 rounded-none transition-all duration-500 relative
                    ${
                      isActive
                        ? "border-cartier/40 shadow-lg"
                        : "hover:border-stone-400/40 hover:shadow-md"
                    }
                    before:absolute before:top-8 ${
                      isEven
                        ? "before:right-[-17px] before:border-l-transparent before:border-r-gold/20"
                        : "before:left-[-17px] before:border-r-transparent before:border-l-gold/20"
                    } before:border-b-transparent before:border-t-transparent before:border-[8px] md:before:content-['']
                  `}
                  >
                    {/* Fixed: was "blocktext-[10px]" (typo), and was "text-gold" (1.2:1 contrast) */}
                    <span
                      className={`block text-[10px] font-black uppercase tracking-[0.3em] mb-2 ${
                        isActive ? "text-cartier" : "text-stone-500"
                      }`}
                    >
                      {item.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-coffee mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-4">
                      {item.institution}
                    </p>
                    <p className="text-stone-600 leading-relaxed font-medium">
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
