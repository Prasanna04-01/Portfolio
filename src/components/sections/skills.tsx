"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Brain, Database, Wrench, LucideIcon } from "lucide-react";
import { skills } from "@/data/skills";
import { fadeUp, staggerContainer } from "@/lib/animations";

const categoryIcons: Record<string, LucideIcon> = {
  "Frontend": Code2,
  "Backend": Server,
  "AI/ML": Brain,
  "Databases": Database,
  "Tools": Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-white/20">
      <div className="container-px">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Technical Stack</h2>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Engineering Capabilities</h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((category) => {
            const Icon = categoryIcons[category.category] || Code2;
            return (
              <motion.div
                key={category.category}
                variants={fadeUp}
                className="group glass-panel p-5 md:p-6 rounded-[1.5rem] border-border/40 transition-all duration-500 hover:border-primary/40 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 bg-white/80"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-primary/10">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground/90 tracking-tight">{category.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-xl bg-white border border-border/60 text-[11px] font-bold text-muted-foreground/80 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
