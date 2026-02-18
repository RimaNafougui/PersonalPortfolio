"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
  Chip,
} from "@heroui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink, ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  features: string[];
  technologies: string;
  github: string;
  url: string | null;
};

export default function ProjectCard({
  title,
  description,
  features,
  technologies,
  github,
  url,
}: ProjectCardProps) {
  const techList = technologies.split(",").map((tech) => tech.trim());

  return (
    <Card
      className="bg-almond/60 h-full border border-gold/30 shadow-none hover:border-cartier/50 hover:shadow-[0_8px_40px_rgba(160,32,33,0.08)] transition-all duration-500 group rounded-none"
      isPressable={!!url}
      onPress={() => {
        if (url) window.open(url, "_blank");
      }}
    >
      <CardHeader className="flex-col items-start px-6 pt-6 pb-3 gap-0">
        {/* Top row: title + external link icon */}
        <div className="flex justify-between w-full items-start gap-2 mb-3">
          <h4 className="font-serif italic text-xl md:text-2xl text-coffee group-hover:text-cartier transition-colors duration-300 leading-tight">
            {title}
          </h4>
          {url && (
            <div className="flex-shrink-0 mt-1">
              <ArrowUpRight
                size={18}
                className="text-gold opacity-0 group-hover:opacity-100 group-hover:text-cartier transition-all duration-300 -translate-y-0.5 translate-x-0.5 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
          )}
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {techList.slice(0, 4).map((tech) => (
            <Chip
              key={tech}
              size="sm"
              variant="flat"
              className="bg-cartier/5 text-cartier border border-cartier/10 text-[9px] px-2 py-0 font-bold uppercase tracking-wider rounded-full h-5"
            >
              {tech}
            </Chip>
          ))}
          {techList.length > 4 && (
            <Chip
              size="sm"
              variant="flat"
              className="bg-gold/10 text-coffee/50 border border-gold/20 text-[9px] px-2 py-0 font-bold uppercase tracking-wider rounded-full h-5"
            >
              +{techList.length - 4} more
            </Chip>
          )}
        </div>
      </CardHeader>

      <CardBody className="px-6 py-3 overflow-hidden flex-1">
        <p className="text-sm text-coffee/70 leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2.5 text-xs text-coffee/65 leading-relaxed"
            >
              <span className="text-cartier mt-0.5 flex-shrink-0 text-base leading-none">
                →
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </CardBody>

      <Divider className="bg-gold/20 mx-6 w-auto" />

      <CardFooter className="px-6 py-4 flex justify-between items-center">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/60">
          Source Code
        </span>
        <Button
          as="a"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          className="rounded-full border border-coffee/20 text-coffee hover:bg-cartier hover:text-almond hover:border-cartier transition-all duration-300"
          isIconOnly
          onClick={(e) => e.stopPropagation()}
        >
          <FontAwesomeIcon icon={faGithub} className="text-lg" />
        </Button>
      </CardFooter>
    </Card>
  );
}
