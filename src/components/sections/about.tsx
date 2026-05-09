"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  GraduationCap, 
  Workflow, 
  Code2, 
  Users, 
  Layers, 
  Database, 
  Cpu, 
  Terminal,
  Mail,
  Linkedin,
  Github
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/data/site.config";

export function About() {
  return (
    <section id="about" className="section-padding bg-white/20 overflow-hidden">
      <div className="container-px">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Engineering Identity</h2>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Technical Profile</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT SIDE: Profile Image & Socials */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="relative group">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              {/* Image Framed Container */}
              <div className="relative glass-panel-elevated p-3 rounded-[2rem] border-primary/10 shadow-2xl bg-white overflow-hidden">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-border/40">
                  {siteConfig.profilePhoto && (
                    <Image
                      src={siteConfig.profilePhoto}
                      alt={siteConfig.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  )}
                </div>
              </div>

              {/* Identity Tag */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] glass-panel py-3 px-4 rounded-xl border-primary/10 shadow-xl bg-white/90 text-center z-10">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">{siteConfig.name}</p>
                <p className="text-[9px] font-medium text-muted-foreground uppercase tracking-tight">{siteConfig.role}</p>
              </div>
            </div>

            {/* Quick Contact & Links */}
            <div className="flex flex-col gap-3 pt-6 px-2">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-1.5 rounded-lg bg-primary/5 text-primary border border-primary/10">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-medium tracking-tight">{siteConfig.email}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-1.5 rounded-lg bg-primary/5 text-primary border border-primary/10">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-medium tracking-tight">Pune, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Engineering Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Introduction Card */}
            <motion.div variants={fadeUp} className="glass-panel p-6 md:p-8 rounded-[2rem] bg-white/80 border-border/40">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-primary/5 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-foreground/90">The Journey</h4>
              </div>
              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                <p>
                  My engineering trajectory began with a <span className="text-foreground font-bold">Diploma in Computer Engineering</span> at JSPM (2022-2025). This foundational phase was critical in mastering the fundamentals of system architecture, networking, and low-level programming.
                </p>
                <p>
                  Driven by a fascination for large-scale systems, I transitioned into the <span className="text-foreground font-bold">Bachelor of Engineering</span> program in Information Technology. My current academic focus is at the intersection of <span className="text-primary font-bold italic">distributed systems</span> and <span className="text-ai font-bold italic">AI orchestration</span>.
                </p>
              </div>
            </motion.div>

            {/* Grid of Mindset & Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Engineering Mindset */}
              <motion.div variants={fadeUp} className="glass-panel p-6 rounded-[1.5rem] bg-white/80 border-border/40">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-xl bg-primary/5 text-primary">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider">Engineering Mindset</h4>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Workflow-First", icon: Layers, desc: "Building resilient, predictable interconnected system flows." },
                    { title: "Backend Architecture", icon: Database, desc: "Focus on high-throughput, scalable infrastructure." },
                    { title: "Automation Logic", icon: Cpu, desc: "Streamlining complex deployment and development processes." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] font-bold text-foreground/80 uppercase tracking-tight">{item.title}</p>
                        <p className="text-[10px] text-muted-foreground leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Current Focus Area */}
              <motion.div variants={fadeUp} className="glass-panel p-6 rounded-[1.5rem] bg-white/80 border-border/40">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-xl bg-ai/5 text-ai">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider">Current Focus</h4>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    "AI-driven Orchestration Pipelines",
                    "Scalable Backend Infrastructure",
                    "Workflow Automation & Tooling",
                    "Cloud-Native Development",
                    "Future DevOps Interest"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-2 rounded-xl bg-surface border border-border/40 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-ai" />
                      <span className="text-[11px] font-bold text-foreground/70">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Beyond Coding */}
            <motion.div variants={fadeUp} className="glass-panel p-6 rounded-[1.5rem] bg-white/80 border-border/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/5 text-primary">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider">Beyond Coding</h4>
              </div>
              <div className="space-y-3 text-xs md:text-sm text-muted-foreground leading-relaxed font-medium">
                <p>
                  I actively participate in <span className="text-primary font-bold">hackathons</span> to sharpen my rapid prototyping and technical problem-solving skills under strict engineering constraints.
                </p>
                <p>
                  I believe that <span className="text-foreground font-bold italic">technical documentation</span> and <span className="text-foreground font-bold italic">teamwork</span> are as vital as the code itself for long-term system success.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
