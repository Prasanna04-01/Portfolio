"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Workflow, 
  Code2, 
  Users,
  Layers,
  Database,
  Cpu
} from "lucide-react";
import { siteConfig } from "@/data/site.config";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function EngineeringProfile() {
  return (
    <section id="overview" className="relative w-full pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.03),transparent_50%)]">
      <div className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Identity & Primary Info */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-6"
          >
            {/* Availability & Image */}
            <motion.div variants={fadeUp} className="relative inline-block group">
              {/* Availability Badge */}
              <div className="absolute -top-3 -right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border/80 text-[8px] font-bold tracking-widest uppercase text-muted-foreground shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                </span>
                Available for Opportunities
              </div>

              {/* Profile Image */}
              <div className="relative glass-panel-elevated p-2 rounded-[2rem] border-primary/10 shadow-2xl bg-white overflow-hidden">
                <div className="relative aspect-square w-48 md:w-56 rounded-2xl overflow-hidden border border-border/40">
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
            </motion.div>

            {/* Identity Info */}
            <motion.div variants={fadeUp} className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-[10px] font-bold text-primary tracking-[0.25em] uppercase">
                  {siteConfig.name}
                </h2>
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
                    {siteConfig.role}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Terminal className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">Computer Engineering Student @ JSPM</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 max-w-md">
                <h2 className="text-sm md:text-base font-bold text-foreground/90 leading-tight">
                  Building AI-driven systems, backend infrastructure, and scalable engineering solutions.
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-medium">
                  {siteConfig.description}
                </p>
              </div>
            </motion.div>

            {/* CTAs & Socials */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4 pt-2">
              <div className="flex flex-wrap gap-3">
                <Link
                  href={siteConfig.resumeUrl}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-xs transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
                >
                  <Download className="w-3.5 h-3.5" />
                  Resume
                </Link>
                <div className="flex items-center gap-2">
                  {[
                    { icon: Github, href: siteConfig.links.github, label: "GitHub" },
                    { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
                  ].map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      className="p-2.5 rounded-xl bg-white border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                      title={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Engineering Context */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Engineering Mindset */}
            <motion.div variants={fadeUp} className="glass-panel p-6 rounded-[1.5rem] bg-white border-border/40 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-primary/5 text-primary">
                  <Workflow className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider">Engineering Mindset</h3>
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
                      <p className="text-[10px] font-bold text-foreground/80 uppercase tracking-tight">{item.title}</p>
                      <p className="text-[10px] text-muted-foreground leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Current Focus Area */}
            <motion.div variants={fadeUp} className="glass-panel p-6 rounded-[1.5rem] bg-white border-border/40 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-ai/5 text-ai">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider">Current Focus</h3>
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
                    <span className="text-[10px] font-bold text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Beyond Coding - Full Width on Mobile, spans 2 cols on Desktop if needed */}
            <motion.div variants={fadeUp} className="md:col-span-2 glass-panel p-6 rounded-[1.5rem] bg-white border-border/40 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/5 text-primary">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider">Beyond Coding</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-muted-foreground leading-relaxed font-medium">
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
