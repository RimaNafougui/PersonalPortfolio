"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const opacity = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 18, mass: 0.5 });
  const springOpacity = useSpring(opacity, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onEnter = () => opacity.set(1);
    const onLeave = () => opacity.set(0);

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [containerRef, x, y, opacity]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 w-10 h-10 rounded-full border border-cartier/30 pointer-events-none z-50"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: springOpacity,
      }}
    />
  );
}
