import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { translations, Language } from "@/lib/translation";

export default function HomePage({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <>
      <Header t={t} language={language} />
      <main id="main-content" className="mx-auto max-w-3xl px-6">
        <Hero
          t={t.hero}
          about={t.about.text}
          email={t.contact.email}
          language={language}
          label={t.ui.intro}
        />
        <Projects t={t.projects} />
        <Experience t={t.experience} />
        <Skills t={t.skills} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
