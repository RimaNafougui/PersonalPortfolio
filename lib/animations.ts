import type { Variants } from "framer-motion";

// ─── Fade in up ────────────────────────────────────────────────────────────
// Usage: <motion.div variants={fadeInUp} initial="hidden" animate="visible" />
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: 16,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// ─── Fade in ───────────────────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit:    { opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

// ─── Stagger children ──────────────────────────────────────────────────────
// Usage: wrap children with this on a motion.div, give children `fadeInUp`
export const staggerChildren: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// ─── Stagger (faster) ──────────────────────────────────────────────────────
export const staggerFast: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
};

// ─── Page transition ───────────────────────────────────────────────────────
// Usage: wrap page content in <motion.main variants={pageTransition} .../>
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// ─── Scale in ─────────────────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Slide in from left ────────────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Viewport convenience props ────────────────────────────────────────────
// Spread these onto a motion element for a standard scroll-triggered reveal:
// <motion.div {...inViewProps} variants={fadeInUp} />
export const inViewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-60px" },
} as const;
