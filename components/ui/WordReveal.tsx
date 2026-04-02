"use client";
import { motion } from "framer-motion";

export default function WordReveal({ children }: { children: string }) {
  const words = children.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {word}
          {i < words.length - 1 && "\u00a0"}
        </motion.span>
      ))}
    </>
  );
}
