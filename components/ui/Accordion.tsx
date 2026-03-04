"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";

interface AccordionProps {
  t: {
    accordion1: { title: string; content: string };
    accordion2: { title: string; content: string };
    accordion3: { title: string; content: string };
    accordion4: { title: string; content: string };
  };
}

const items = (t: AccordionProps["t"]) => [
  t.accordion1,
  t.accordion2,
  t.accordion3,
  t.accordion4,
];

export default function AboutMeAccordion({ t }: AccordionProps) {
  return (
    <div className="w-full bg-almond/30 border-t border-gold/30">
      <AccordionPrimitive.Root type="single" collapsible>
        {items(t).map((item, i) => (
          <AccordionPrimitive.Item
            key={i}
            value={String(i)}
            className="border-b border-gold/30 last:border-none"
          >
            <AccordionPrimitive.Header>
              <AccordionPrimitive.Trigger
                className="
                  flex w-full items-center justify-between px-4 py-6 text-left
                  font-sans font-bold text-xl md:text-2xl text-coffee
                  hover:bg-cartier/5 transition-all duration-300
                  data-[state=open]:text-cartier
                  [&[data-state=open]>svg]:rotate-90
                "
              >
                {item.title}
                <ChevronRight
                  size={20}
                  className="text-cartier shrink-0 transition-transform duration-500"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-none data-[state=closed]:animate-none">
              <p className="text-base leading-relaxed text-coffee/70 px-4 pb-6 pt-2 font-medium">
                {item.content}
              </p>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </div>
  );
}
