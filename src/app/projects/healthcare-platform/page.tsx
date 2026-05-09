"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  ArrowLeft, 
  CheckCircle2, 
  Brain, 
  Activity, 
  Search, 
  Layout, 
  MessageSquare, 
  Bell,
  Cpu,
  ShieldAlert,
  Rocket
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { healthcareCaseStudy } from "@/data/case-study-healthcare";
import { ArchitectureViz } from "@/components/shared/architecture-viz";
import { siteConfig } from "@/data/site.config";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

const featureIcons: Record<string, LucideIcon> = {
  Brain,
  Activity,
  Search,
  Layout,
  MessageSquare,
  Bell,
};

export default function HealthcareCaseStudy() {
  const data = healthcareCaseStudy;

  return (
    <MainLayout>
      <div className="pt-20 pb-12">
        <div className="container-px">
          {/* Back Button */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[9px] font-bold text-muted-foreground hover:text-primary transition-colors mb-8 group uppercase tracking-widest"
            >
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero Section */}
          <section className="mb-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                  <span className="px-2.5 py-0.5 rounded-full bg-ai/10 text-ai border border-ai/20 text-[8px] font-bold tracking-widest uppercase">
                    Healthcare Tech
                  </span>
                  <span className="text-muted-foreground text-xs font-mono">Case Study 01</span>
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-2xl md:text-4xl font-extrabold tracking-tight mb-5 text-foreground/90">
                  AI-Powered <span className="text-gradient">Healthcare</span> Platform
                </motion.h1>
                
                <motion.p variants={fadeUp} className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-xl font-medium opacity-80">
                  {data.solution.overview}
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs transition-all hover:bg-primary/90 active:scale-95 glow-sm"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </Link>
                </motion.div>
              </div>

              {/* Architecture Preview Visual */}
              <motion.div
                variants={fadeUp}
                className="relative aspect-square lg:aspect-video glass-panel rounded-[2rem] border-primary/10 overflow-hidden flex items-center justify-center bg-surface-elevated/30"
              >
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="z-10 text-center">
                  <div className="p-8 rounded-[2.5rem] bg-background/50 backdrop-blur-xl border border-border/40 shadow-2xl">
                    <Cpu className="w-16 h-16 text-primary mb-4 mx-auto animate-pulse" />
                    <div className="font-mono text-sm text-muted-foreground uppercase tracking-widest">System_Orchestrator.v1</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Problem Statement */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">The Context</h2>
                <h3 className="text-3xl font-bold tracking-tight">Problem Statement</h3>
              </div>
              <div className="lg:col-span-2 space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {data.problem.statement}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.problem.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-surface-elevated/50 border border-border/40">
                      <ShieldAlert className="w-6 h-6 text-primary shrink-0" />
                      <p className="text-sm text-foreground/80 font-medium">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* System Architecture */}
          <section className="mb-32 py-24 bg-surface/30 border-y border-border/40 -mx-4 px-4 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24">
            <div className="container-px">
              <div className="text-center mb-16">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Engineering Blueprint</h2>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight">System Architecture</h3>
              </div>
              <ArchitectureViz nodes={data.architecture.nodes} />
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Implementation</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Key Platform Features</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.solution.features.map((feature, i) => {
                const Icon = featureIcons[feature.icon] || Brain;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group glass-panel p-8 rounded-3xl border-border/40 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="p-3 w-fit rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Contributions & Challenges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            {/* Challenges */}
            <section className="glass-panel p-8 md:p-12 rounded-[2.5rem] border-border/40">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-primary" />
                Engineering Challenges
              </h3>
              <div className="space-y-8">
                {data.challenges.map((challenge, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-foreground mb-2">{challenge.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Learnings */}
            <section className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-primary" />
                Learnings & Growth
              </h3>
              <div className="space-y-6">
                {data.learnings.map((learning, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground font-medium">{learning}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Visual Showcase */}
          <section className="mb-32">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-12 text-center">Visual Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-panel rounded-3xl border-border/40 overflow-hidden group">
                <div className="aspect-video bg-[#F8FAFC] flex items-center justify-center p-8 relative">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-white border border-border/60">
                    <Image
                      src="/project-assets/healthcare/dashboard.jpg"
                      alt="Healthcare Platform Dashboard"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-2">Main Dashboard</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive patient diagnostics and real-time monitoring interface.</p>
                </div>
              </div>
              <div className="glass-panel rounded-3xl border-border/40 overflow-hidden group">
                <div className="aspect-video bg-[#F8FAFC] flex items-center justify-center p-8 relative">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-white border border-border/60 flex items-center justify-center">
                    <Brain className="w-16 h-16 text-primary/10" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-2">AI Reasoning Engine</h4>
                  <p className="text-sm text-muted-foreground">Visualization of the XAI layer providing diagnostic transparency.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Future Roadmap */}
          <section className="mb-32 py-24 rounded-[3rem] bg-linear-to-br from-primary/5 to-ai/5 border border-primary/10">
            <div className="container-px text-center">
              <h3 className="text-3xl font-bold mb-12">Future Scalability & Roadmap</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {data.future.map((item, i) => (
                  <span
                    key={i}
                    className="px-6 py-3 rounded-2xl bg-background/50 border border-border/40 text-sm font-semibold text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h3 className="text-2xl font-bold mb-6">Interested in the technical details?</h3>
            <Link
              href="https://github.com/prasanna/healthcare-ai"
              target="_blank"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-foreground text-background font-bold transition-all hover:scale-105 active:scale-95"
            >
              <Github className="w-6 h-6" />
              Explore Repository
            </Link>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
