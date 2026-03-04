"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { Badge } from "./badge";
import { Separator } from "./separator";
import { Tooltip, TooltipProvider } from "./tooltip";

type ProjectCardProps = {
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
};

const TERMINAL_LINES = [
  { method: "GET",    path: "/api/expenses",         status: "200", methodColor: "text-emerald-400" },
  { method: "POST",   path: "/api/expenses",         status: "201", methodColor: "text-blue-400"    },
  { method: "GET",    path: "/api/expenses/summary", status: "200", methodColor: "text-emerald-400" },
  { method: "DELETE", path: "/api/expenses/:id",     status: "204", methodColor: "text-amber-400"   },
  { method: "POST",   path: "/api/auth/login",       status: "200", methodColor: "text-emerald-400" },
];

function BackendHoverPanel() {
  return (
    <div className="absolute inset-0 bg-coffee flex flex-col justify-center px-5 py-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400 delay-75 font-mono">
      <div className="flex items-center gap-1.5 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-[9px] text-almond/25 uppercase tracking-[0.2em]">
          localhost:8080
        </span>
      </div>

      <div className="space-y-2">
        {TERMINAL_LINES.map((line, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px] leading-none">
            <span className={`font-black w-[52px] text-right flex-shrink-0 ${line.methodColor}`}>
              {line.method}
            </span>
            <span className="text-almond/30 flex-shrink-0">/v1</span>
            <span className="text-almond/70 truncate">{line.path}</span>
            <span className="ml-auto flex-shrink-0 tabular-nums text-almond/35">{line.status}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4 border-t border-almond/10 pt-3">
        <span className="text-cartier text-[10px] font-black">$</span>
        <span className="text-almond/30 text-[10px]">mvn spring-boot:run</span>
        <span className="inline-block w-[7px] h-[11px] bg-almond/30 animate-pulse" />
      </div>
    </div>
  );
}

export default function ProjectCard({
  title,
  problem,
  features,
  keyDecisions,
  technologies,
  github,
  url,
  image,
  type = "frontend",
}: ProjectCardProps) {
  const techList = technologies.split(",").map((t) => t.trim());
  const isBackend = type === "backend";

  return (
    <TooltipProvider delayDuration={200}>
      <div
        className="bg-almond/60 h-full border border-gold shadow-none hover:border-cartier/40 hover:shadow-[0_8px_40px_rgba(28,25,23,0.08)] transition-all duration-500 group rounded-none overflow-hidden flex flex-col cursor-pointer"
        onClick={() => { if (url) window.open(url, "_blank"); }}
        role={url ? "link" : undefined}
        tabIndex={url ? 0 : undefined}
        onKeyDown={(e) => { if (e.key === "Enter" && url) window.open(url, "_blank"); }}
      >
        {/* Hover reveal panel */}
        <div className="relative overflow-hidden h-44 md:h-0 md:group-hover:h-44 transition-all duration-500 ease-in-out">
          <div className="absolute inset-0">
            {isBackend ? (
              <BackendHoverPanel />
            ) : image ? (
              <>
                <Image
                  src={image}
                  alt={`${title} screenshot`}
                  fill
                  className="object-cover object-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 md:scale-[1.02] md:group-hover:scale-100 bg-gold/10"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-almond/80 to-transparent pointer-events-none" />
              </>
            ) : (
              <div className="absolute inset-0 bg-stone-100 flex flex-col items-center justify-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-100">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg,transparent,transparent 19px,rgba(28,25,23,0.04) 19px,rgba(28,25,23,0.04) 20px)," +
                      "repeating-linear-gradient(90deg,transparent,transparent 19px,rgba(28,25,23,0.04) 19px,rgba(28,25,23,0.04) 20px)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c1917" strokeWidth="1.2" strokeOpacity="0.15">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                  <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-cartier/40">
                    Add to /public/images/projects/
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Header: title + tech badges ───────────────────────────────── */}
        <div className="px-6 pt-5 pb-3">
          <div className="flex justify-between w-full items-start gap-2 mb-3">
            <h4 className="font-display font-bold text-xl md:text-2xl text-coffee group-hover:text-cartier transition-colors duration-300 leading-tight">
              {title}
            </h4>
            <div className="flex items-center gap-2 flex-shrink-0 mt-1">
              {isBackend && (
                <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 border border-gold text-stone-400 rounded-full">
                  API
                </span>
              )}
              {url && (
                <ArrowUpRight
                  size={16}
                  className="text-stone-300 opacity-0 group-hover:opacity-100 group-hover:text-cartier transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {techList.slice(0, 4).map((tech) => (
              <Badge key={tech} size="sm">{tech}</Badge>
            ))}
            {techList.length > 4 && (
              <Tooltip
                content={
                  <div className="flex flex-col gap-1 py-1">
                    {techList.slice(4).map((tech) => (
                      <span key={tech} className="text-[10px] font-bold uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                }
              >
                <Badge size="sm" variant="secondary" className="cursor-default">
                  +{techList.length - 4}
                </Badge>
              </Tooltip>
            )}
          </div>
        </div>

        {/* ── Body: problem + features ──────────────────────────────────── */}
        <div className="px-6 py-3 flex-1">
          {/* Problem */}
          <div className="mb-4">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cartier/50 mb-1.5">
              Problem
            </p>
            <p className="text-sm text-coffee leading-relaxed font-medium">
              {problem}
            </p>
          </div>

          {/* Features */}
          <ul className="space-y-1.5">
            {features.slice(0, 2).map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-coffee/50 leading-relaxed">
                <span className="text-cartier mt-0.5 flex-shrink-0 leading-none">→</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* ── Key Decisions ─────────────────────────────────────────────── */}
        <div className="px-6 py-4">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cartier/50 mb-3">
            Key Decisions
          </p>
          <div className="space-y-2.5">
            {keyDecisions.map((decision, i) => (
              <p key={i} className="text-xs text-coffee/55 leading-relaxed">
                {decision}
              </p>
            ))}
          </div>
        </div>

        <Separator />

        {/* ── Footer ────────────────────────────────────────────────────── */}
        <div className="px-6 py-4 flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-300">
            Source Code
          </span>
          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              window.open(github, "_blank");
            }}
            aria-label="View source on GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Button>
        </div>
      </div>
    </TooltipProvider>
  );
}
