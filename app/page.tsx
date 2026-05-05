"use client";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Header from "@/components/layout/Header";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { translations, Language } from "@/lib/translation";
import PageLoader from "@/components/ui/PageLoader";
import { AnimatePresence } from "framer-motion";
import { Milestone } from "@/components/sections/Roadmap";

const Footer = dynamic(() => import("@/components/layout/Footer"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Roadmap = dynamic(() => import("@/components/sections/Roadmap"));

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [loading, setLoading] = useState(true);
  const t = translations[language];

  return (
    <>
      <AnimatePresence>
        {loading && <PageLoader onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <Header t={t} language={language} setLanguage={setLanguage} />
      <main id="main-content">
        <Hero t={t.hero} language={language} ready={!loading} />
        <Stats stats={t.hero.stats} />
        <About t={t.about} />
        <Separator />
        <Experience t={t.experience} language={language} />
        <Separator />
        <Projects t={t.projects} />
        <Separator />
        <Skills t={t.skills} />
        <Separator />
        <Roadmap
          t={{
            title: t.roadmap.title,
            milestones: t.roadmap.milestones as unknown as Milestone[],
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
