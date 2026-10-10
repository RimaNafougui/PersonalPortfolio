import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Header from "@/components/layout/Header";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Activities from "@/components/sections/Activities";
import { Separator } from "@/components/ui/separator";
import { Milestone } from "@/components/sections/Roadmap";
import { translations, Language } from "@/lib/translation";

const Footer = dynamic(() => import("@/components/layout/Footer"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Roadmap = dynamic(() => import("@/components/sections/Roadmap"));

export default function HomePage({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <>
      <Header t={t} language={language} />
      <main id="main-content">
        <Hero t={t.hero} language={language} label={t.ui.intro} />
        <About t={t.about} />
        <Separator />
        <Experience t={t.experience} language={language} />
        <Separator />
        <Activities t={t.activities} />
        <Separator />
        <Projects t={t.projects} />
        <Separator />
        <Skills t={t.skills} />
        <Separator />
        <Roadmap
          t={{
            title: t.roadmap.title,
            milestones: t.roadmap.milestones as unknown as Milestone[],
            label: t.ui.careerMilestones,
          }}
        />
        <Separator />
        <Contact t={t.contact} />
        <Separator />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
