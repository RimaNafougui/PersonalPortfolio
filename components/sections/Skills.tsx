"use client";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { languages, frameworks, databases, IDEs } from "@/lib/data";
import {
  Code2,
  Layers,
  Database,
  GitBranch,
  Terminal,
  Cloud,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

interface SkillsProp {
  t: {
    title: string;
    languages: string;
    framework: string;
    ides: string;
    cloud: string;
    databases: string;
    versionControl: string;
  };
}

export default function Skills({ t }: SkillsProp) {
  const skillCategories = [
    {
      title: t.languages,
      data: languages,
      icon: Code2,
      count: languages.length,
    },
    {
      title: t.framework,
      data: frameworks,
      icon: Layers,
      count: frameworks.length,
    },
    {
      title: t.databases,
      data: databases,
      icon: Database,
      count: databases.length,
    },
    {
      title: t.versionControl,
      data: ["GitHub", "Git"],
      icon: GitBranch,
      count: 2,
    },
    { title: t.ides, data: IDEs, icon: Terminal, count: IDEs.length },
    {
      title: t.cloud,
      data: ["AWS", "Vercel", "Docker", "GitHub Actions"],
      icon: Cloud,
      count: 4,
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-almond">
      <motion.div
        className="mb-16 space-y-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl text-center font-serif italic">
          {t.title}
        </h2>
        <div className="h-1 w-24 bg-cartier mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={idx}
              className="flex flex-col bg-almond/40 p-7 border border-gold/30 hover:border-cartier/40 transition-all duration-500 group relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cartier/0 to-cartier/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Category header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-cartier/40 group-hover:bg-cartier/5 transition-all duration-300">
                    <Icon
                      size={14}
                      className="text-coffee/50 group-hover:text-cartier transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 group-hover:text-coffee transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-stone-500 tabular-nums">
                  {category.count}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.data.map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge size="sm" className="cursor-default transition-all duration-200">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
