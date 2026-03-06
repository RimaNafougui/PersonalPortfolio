"use client";
import { MotionConfig } from "framer-motion";

/**
 * Wraps the app in Framer Motion's MotionConfig with reducedMotion="user".
 * All motion components inside this tree will automatically disable or simplify
 * animations when the OS/browser has "Reduce motion" enabled.
 */
export default function MotionConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
