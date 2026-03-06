"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function PageLoader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 700);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[300] bg-almond flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } }}
    >
      <motion.span
        className="text-7xl font-display font-extrabold text-coffee tracking-tight"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
        exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}
      >
        R.
      </motion.span>
    </motion.div>
  );
}
