"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

export function WorkflowShowcase() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section id="workflow" className="section-padding bg-white/40 border-y border-border/60">
      <div className="container-px">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Systems Thinking</h2>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Architecture & Workflows</h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-medium opacity-80">
              Visualizing the logical flow and architectural layers of my key engineering projects.
            </p>
          </motion.div>

          {/* Project Switcher */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex p-1 rounded-xl bg-white border border-border/60 shadow-sm"
          >
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProjectId(project.id)}
                className={cn(
                  "px-5 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-300",
                  activeProjectId === project.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {project.id === "healthcare-platform" ? "Healthcare" : "Repo Analyzer"}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 md:p-10 border-border/40 relative overflow-hidden bg-white shadow-xl shadow-primary/5">
          {/* Decorative background grid */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProjectId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="text-center mb-12">
                <h4 className="text-lg font-bold text-foreground mb-1">{activeProject.workflow.title}</h4>
                <p className="text-xs text-muted-foreground">Interactive visualization of system implementation layers</p>
              </div>

              {/* Workflow Diagram */}
              <div className="relative overflow-x-auto pb-10 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                <div className="min-w-[800px] flex items-center justify-between gap-4 px-4">
                  {activeProject.workflow.steps.map((step, i) => (
                    <React.Fragment key={i}>
                      {/* Step Node */}
                      <div className="group relative flex flex-col items-center gap-3 w-36 shrink-0">
                        <div className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110",
                          activeProject.category === "AI" 
                            ? "bg-ai/10 border-ai/20 text-ai group-hover:border-ai/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                            : "bg-primary/10 border-primary/20 text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                        )}>
                          <span className="font-mono text-base font-bold">0{i + 1}</span>
                        </div>
                        
                        <div className="text-center">
                          <div className="font-bold text-sm mb-1 text-foreground">{step.label}</div>
                          <div className="text-[11px] text-muted-foreground leading-tight px-2">
                            {step.description}
                          </div>
                        </div>

                        {/* Tooltip on hover */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-elevated border border-border/60 px-3 py-1.5 rounded-lg text-[10px] font-mono whitespace-nowrap z-20 pointer-events-none shadow-xl">
                          <span className="text-primary mr-2">LOG:</span>
                          Step_{i + 1}_Initialized
                        </div>
                      </div>

                      {/* Connection Line */}
                      {i < activeProject.workflow.steps.length - 1 && (
                        <div className="flex-1 h-[2px] mb-12 relative min-w-[40px]">
                          <div className="absolute inset-0 bg-border/40 rounded-full" />
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className={cn(
                              "absolute inset-0 origin-left rounded-full",
                              activeProject.category === "AI" ? "bg-ai/40" : "bg-primary/40"
                            )}
                          />
                          <ArrowRight className={cn(
                            "absolute right-0 -top-1.5 w-4 h-4",
                            activeProject.category === "AI" ? "text-ai/40" : "text-primary/40"
                          )} />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Footer Info */}
              <div className="flex justify-center mt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-border/40 text-[11px] text-muted-foreground">
                  <Info className="w-3 h-3 text-primary" />
                  Hover over nodes to see implementation logs
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
