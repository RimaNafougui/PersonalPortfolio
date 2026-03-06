"use client";
import { Download } from "lucide-react";
import { Language } from "@/lib/translation";

interface ResumeDownloadProps {
  language: Language;
}

export default function ResumeDownload({ language }: ResumeDownloadProps) {
  const handleDownloadResume = () => {
    const resumePath =
      language === "en" ? "/NafouguiRima_EN.pdf" : "/NafouguiRima_FR.pdf";

    const fileName =
      language === "en" ? "NafouguiRima_EN.pdf" : "NafouguiRima_FR.pdf";

    const link = document.createElement("a");
    link.href = resumePath;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttonText =
    language === "en" ? "Download Resume" : "Télécharger le CV";

  return (
    <button
      onClick={handleDownloadResume}
      className="group relative flex items-center gap-2 px-8 py-3.5 border-2 border-coffee text-coffee font-bold rounded-full overflow-hidden transition-all duration-300 hover:text-almond active:scale-95 cursor-pointer shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier focus-visible:ring-offset-2 focus-visible:ring-offset-almond"
    >
      <span className="absolute inset-0 bg-coffee translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />

      <span className="relative z-10 flex items-center gap-2">
        <Download
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
        />
        {buttonText}
      </span>
    </button>
  );
}
