"use client";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { translations, Language } from "@/lib/translation";
import "./globals.css";
import Roadmap, { Milestone } from "@/components/sections/Roadmap";
import PageLoader from "@/components/ui/PageLoader";
import { AnimatePresence } from "framer-motion";

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
      <Hero t={t.hero} language={language} ready={!loading} />
      <Separator />
      <Projects t={t.projects} />
      <Separator />
      <Skills t={t.skills} />
      <Separator />
      <Experience t={t.experience} language={language} />
      <Separator />
      <About t={t.about} />
      <Separator />
      <Roadmap
        t={{
          title: t.roadmap.title,
          milestones: t.roadmap.milestones as unknown as Milestone[],
        }}
      />{" "}
      <Separator />
      <Contact t={t.contact} />
      <Separator />
      <Footer t={t.footer} />
    </>
  );
}
