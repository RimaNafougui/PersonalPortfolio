"use client";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { Divider } from "@heroui/react";
import { useState } from "react";
import { translations, Language } from "@/lib/translation";
import { HeroUIProvider } from "@heroui/react";
import "./globals.css";
import Roadmap, { Milestone } from "@/components/sections/Roadmap";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  return (
    <>
      <HeroUIProvider>
<Header t={t} language={language} setLanguage={setLanguage} />
        <Hero t={t.hero} language={language} />
        <Divider />
        <Projects t={t.projects} />
        <Divider />
        <Skills t={t.skills} />
        <Divider />
        <Experience t={t.experience} language={language} />
        <Divider />
        <About t={t.about} />
        <Divider />
        <Roadmap
          t={{
            title: t.roadmap.title,
            milestones: t.roadmap.milestones as unknown as Milestone[],
          }}
        />{" "}
        <Divider />
        <Contact t={t.contact} />
        <Divider />
        <Footer t={t.footer} />
      </HeroUIProvider>
    </>
  );
}
