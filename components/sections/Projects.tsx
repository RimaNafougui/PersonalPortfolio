"use client";
import { motion, Variants } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import WordReveal from "@/components/ui/WordReveal";

interface Project {
  title: string;
  description: string;
  problem: string;
  features: string[];
  keyDecisions: string[];
  technologies: string;
  github: string;
  url: string | null;
  image?: string;
  type?: "frontend" | "backend";
}

interface ProjectsProp {
  t: { title: string; items: Record<string, Project> };
}

export default function Projects({ t }: ProjectsProp) {
  const projects = Object.values(t.items);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-24 bg-background overflow-hidden"
    >
      <div className="mb-16 space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic text-center text-foreground">
          <WordReveal>{t.title}</WordReveal>
        </h2>
        <motion.div
          className="h-1 w-24 bg-primary mx-auto origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <p className="text-center text-muted text-[10px] uppercase tracking-[0.3em] font-bold pt-2">
          {projects.length} selected works
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-[minmax(320px,auto)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.github || index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            className="flex flex-col h-full"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
