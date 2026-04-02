"use client";
import { motion } from "framer-motion";

interface StatsProps {
  stats: Array<{ value: string; label: string }>;
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section aria-label="Key figures" className="w-full bg-[#253444] border-y border-gold/20 py-12 px-6 md:px-12 lg:px-24">
      <motion.div
        className="max-w-3xl mx-auto flex items-center justify-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center flex-1">
            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-4xl md:text-5xl font-extrabold text-coffee tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#6A89A7] font-bold text-center">
                {stat.label}
              </span>
            </div>
            {i < stats.length - 1 && (
              <div aria-hidden="true" className="w-px h-12 bg-gold/30 flex-shrink-0" />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
