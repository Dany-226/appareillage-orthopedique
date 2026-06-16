"use client";

import { motion } from "framer-motion";
import { easing } from "@/components/ui/design-tokens";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Use animate (not whileInView) for content already in the initial viewport */
  eager?: boolean;
};

export function Reveal({ children, delay = 0, className, eager = false }: Props) {
  if (eager) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay, ease: easing.editorial }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.4, delay, ease: easing.editorial }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
