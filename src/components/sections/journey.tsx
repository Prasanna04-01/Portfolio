"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, LucideIcon } from "lucide-react";
import { timeline } from "@/data/experience";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const eventIcons: Record<string, LucideIcon> = {
  education: GraduationCap,
  experience: Briefcase,
  achievement: Award,
};

export function Journey() {
  return (
    <section id="journey" className="section-padding bg-white/40 border-y border-border/60">
      <div className="container-px">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:text-center max-w-xl mx-auto"
        >
          <h2 className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-3">The Progression</h2>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Engineering Journey</h3>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-medium opacity-80">
            A dense timeline of academic milestones, professional experiences, and key technical achievements.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto pl-10 md:pl-0"
        >
          {/* Visible Centered Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200/80 -translate-x-1/2 z-0" />

          {timeline.map((event, index) => {
            const Icon = eventIcons[event.type];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className={cn(
                  "relative mb-4 md:mb-3 flex flex-col md:flex-row items-start md:items-center",
                  isEven ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-3 md:top-auto w-3 h-3 rounded-full bg-white border-2 border-primary -translate-x-1/2 z-10 shadow-sm shadow-primary/20" />

                {/* Content Card */}
                <div className={cn(
                  "w-full md:w-[46%] glass-panel p-3.5 rounded-2xl border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 group bg-white relative overflow-hidden z-10",
                  isEven ? "md:text-right" : "md:text-left"
                )}>
                  {/* Subtle Background Accent */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/[0.02] pointer-events-none" />
                  
                  <div className={cn(
                    "relative z-10 flex items-center gap-2.5 mb-2",
                    isEven ? "md:flex-row-reverse" : ""
                  )}>
                    <div className="p-1.5 rounded-xl bg-primary/5 text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-[9px] font-bold font-mono text-primary tracking-wider uppercase bg-primary/5 px-2.5 py-0.5 rounded-full border border-primary/10">{event.period}</span>
                  </div>
                  
                  <h4 className="relative z-10 text-sm font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors">{event.title}</h4>
                  <div className="relative z-10 text-[10px] font-bold text-muted-foreground/70 mb-2 uppercase tracking-tight">{event.subtitle}</div>
                  <p className="relative z-10 text-[11px] text-muted-foreground leading-relaxed font-medium">
                    {event.description}
                  </p>
                </div>

                {/* Spacer for MD screens */}
                <div className="hidden md:block w-[8%]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
