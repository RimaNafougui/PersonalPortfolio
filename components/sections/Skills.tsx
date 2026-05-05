"use client";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
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
      accent: "group-hover:bg-primary/5 group-hover:border-primary/20",
    },
    {
      title: t.framework,
      data: frameworks,
      icon: Layers,
      count: frameworks.length,
      accent: "group-hover:bg-primary/[0.04] group-hover:border-primary/30",
    },
    {
      title: t.databases,
      data: databases,
      icon: Database,
      count: databases.length,
      accent: "group-hover:bg-muted/5 group-hover:border-muted/30",
    },
    {
      title: t.versionControl,
      data: ["GitHub", "Git"],
      icon: GitBranch,
      count: 2,
      accent: "group-hover:bg-primary/5 group-hover:border-primary/20",
    },
    {
      title: t.ides,
      data: IDEs,
      icon: Terminal,
      count: IDEs.length,
      accent: "group-hover:bg-primary/[0.04] group-hover:border-primary/30",
    },
    {
      title: t.cloud,
      data: ["AWS", "Vercel", "Docker", "GitHub Actions"],
      icon: Cloud,
      count: 4,
      accent: "group-hover:bg-muted/5 group-hover:border-muted/30",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-surface/20"
    >
      <div className="mb-16 space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-7xl text-center font-serif italic">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={idx}
              className={`flex flex-col bg-background p-7 border border-primary/30 transition-all duration-500 group relative overflow-hidden ${category.accent}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {/* Hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-foreground/[0.025] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Category header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-surface/40 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                    <Icon
                      size={14}
                      className="text-muted group-hover:text-primary transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted group-hover:text-foreground transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-muted tabular-nums">
                  {category.count}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.data.map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge
                      size="sm"
                      className="cursor-default transition-all duration-200"
                    >
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
