"use client";
import { motion } from "framer-motion";

interface InfoProps {
  viewMore: string;
  items: Array<{
    position: string;
    description: string;
    duration: string;
    company: string;
    reference: string;
  }>;
}

export default function Info({ items }: InfoProps) {
  return (
    <div className="w-full space-y-16">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 pb-12 border-b border-gold/20 last:border-none"
        >
          <div className="md:col-span-3 flex flex-col pt-1">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-coffee">
              {item.duration}
            </span>
          </div>

          <div className="md:col-span-9 space-y-4">
            <div className="space-y-1">
              <h3 className="text-2xl md:text-3xl font-serif italic text-coffee group-hover:text-cartier transition-colors duration-500">
                {item.position}
              </h3>
              <p className="text-xs font-bold text-cartier uppercase tracking-widest">
                {item.company}
              </p>
            </div>

            <p className="text-coffee/70 leading-relaxed max-w-2xl font-medium text-sm md:text-base">
              {item.description}
            </p>

            <div className="flex gap-4 pt-2">
              <div className="h-px w-8 bg-gold/40 self-center" />
              <span className="text-[10px] italic text-gold font-semibold uppercase tracking-wider">
                {item.reference}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
