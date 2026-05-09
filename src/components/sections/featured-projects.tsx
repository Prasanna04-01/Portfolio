"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/data/projects";
import { fadeUp } from "@/lib/animations";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="container-px">
        <div className="max-w-3xl mb-10 md:mb-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Engineering Showcase</h2>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium opacity-80">
              A selection of high-impact systems where AI orchestration meets scalable backend architecture. 
              Focused on solving complex engineering problems with clean, maintainable code.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
