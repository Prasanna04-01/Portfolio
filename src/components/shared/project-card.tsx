"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const imagePath = project.imageUrl;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative"
    >
      <div className="glass-panel overflow-hidden rounded-[2.5rem] border-border/40 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content Section */}
          <div className="p-6 md:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className={cn(
                  "px-2.5 py-0.5 rounded-full text-[8px] font-bold tracking-widest uppercase shadow-sm",
                  project.category === "AI" ? "bg-ai/10 text-ai border border-ai/20" : "bg-primary/10 text-primary border border-primary/20"
                )}>
                  {project.category}
                </span>
                <span className="text-muted-foreground/50 text-[9px] font-bold font-mono tracking-tighter italic">0{index + 1}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-extrabold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300 text-foreground/90">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed max-w-md font-medium">
                {project.description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/40">Technical Core</h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-[12px] text-muted-foreground/90 font-medium">
                      <div className="mt-1 p-0.5 rounded-full bg-primary/10 text-primary">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-xl bg-surface-elevated border border-border/60 text-[9px] font-bold font-mono text-muted-foreground/60 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={project.id === "healthcare-platform" ? "/projects/healthcare-platform" : project.id === "repo-analyzer" ? "/projects/repo-analyzer" : `#case-study-${project.id}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 active:scale-95 glow-sm"
              >
                View Case Study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="p-2.5 rounded-xl bg-white border border-border/80 hover:bg-secondary hover:border-primary/20 transition-all duration-300 active:scale-95 group/btn shadow-sm"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4.5 h-4.5 transition-transform group-hover/btn:scale-110" />
                </Link>
              )}
            </div>
          </div>

          {/* Visual/Preview Section: Refined for UI Screenshots */}
          <div className="relative h-64 lg:h-auto bg-[#F8FAFC] overflow-hidden border-l border-border/40 group/img flex items-center justify-center p-5 lg:p-8">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            
            {imagePath ? (
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover/img:scale-[1.03] group-hover/img:shadow-primary/5 bg-white border border-border/60">
                <Image
                  src={imagePath}
                  alt={`${project.title} Dashboard`}
                  fill
                  className="object-contain p-4 lg:p-6"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
                
                {/* Internal Shine Effect */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover/img:translate-x-full transition-transform duration-1000 z-20" />
              </div>
            ) : (
              <div className="relative w-full h-full glass-panel rounded-3xl border-primary/10 shadow-inner flex items-center justify-center overflow-hidden bg-white/40">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto border border-primary/10">
                    <ArrowUpRight className="w-8 h-8 text-primary opacity-20" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30 block">Platform_UI.v1</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
