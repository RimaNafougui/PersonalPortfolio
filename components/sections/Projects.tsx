"use client";
import { motion, Variants } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string;
  github: string;
  url: string | null;
}

interface ProjectsProp {
  t: {
    title: string;
    items: Record<string, Project>;
  };
}

export default function Projects({ t }: ProjectsProp) {
  const projects = Object.values(t.items);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-24 bg-almond overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 space-y-4"
      >
        <h2 className="text-5xl md:text-7xl font-serif italic text-center">
          {t.title}
        </h2>
        <div className="h-1 w-24 bg-cartier mx-auto" />
        <p className="text-center text-coffee/50 text-xs uppercase tracking-[0.3em] font-bold pt-2">
          {projects.length} selected works
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(320px,auto)]"
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
