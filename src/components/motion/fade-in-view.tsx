"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface FadeInViewProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export function FadeInView({ children, delay = 0, ...props }: FadeInViewProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
