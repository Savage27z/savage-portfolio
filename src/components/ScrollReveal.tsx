"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance,
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();

  const d = distance ?? (typeof window !== "undefined" && window.innerWidth < 768 ? 20 : 30);

  const directionMap = {
    up: { y: d, x: 0 },
    down: { y: -d, x: 0 },
    left: { x: d, y: 0 },
    right: { x: -d, y: 0 },
  };

  const offset = directionMap[direction];

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
