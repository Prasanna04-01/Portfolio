"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  ArrowLeft, 
  CheckCircle2, 
  Search, 
  Share2, 
  History, 
  ShieldAlert, 
  Layout, 
  MessageSquare,
  Cpu,
  ArrowRight,
  Terminal,
  Zap,
  Layers,
  Users,
  AlertTriangle,
  Lightbulb,
  Rocket,
  LucideIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MainLayout } from "@/components/layout/main-layout";
import { repoAnalyzerCaseStudy } from "@/data/case-study-repo-analyzer";
import { ArchitectureViz } from "@/components/shared/architecture-viz";
import { DependencyGraphViz } from "@/components/shared/dependency-graph-viz";
import { siteConfig } from "@/data/site.config";
import { fadeUp, staggerContainer } from "@/lib/animations";

const featureIcons: Record<string, LucideIcon> = {
  Search,
  Share2,
  History,
  ShieldAlert,
  Layout,
  MessageSquare,
};

export default function RepoAnalyzerCaseStudy() {
  const data = repoAnalyzerCaseStudy;

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

          {/* 1. Hero Banner */}
          <section className="mb-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[8px] font-bold tracking-widest uppercase">
                    Developer Tool
                  </span>
                  <span className="text-muted-foreground text-xs font-mono">Case Study 02</span>
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-2xl md:text-4xl font-extrabold tracking-tight mb-5 text-foreground/90">
                  Engineering <span className="text-gradient">Repo Analyzer</span>
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
                  <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-border/60">
                    <div className="flex -space-x-1.5">
                      {["Go", "TS", "D3", "Redis"].map((tech) => (
                        <div key={tech} className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-[8px] font-bold">
                          {tech}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">Tech Stack</span>
                  </div>
                </motion.div>
              </div>

              {/* Architecture-inspired Visual */}
              <motion.div
                variants={fadeUp}
                className="relative aspect-square lg:aspect-video glass-panel rounded-[3rem] border-primary/10 overflow-hidden flex items-center justify-center bg-surface-elevated/30"
              >
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="relative z-10 w-full max-w-sm space-y-4">
                  <div className="p-6 rounded-2xl bg-background/80 backdrop-blur-xl border border-primary/20 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Terminal className="w-5 h-5 text-primary" />
                      <div className="h-2 w-24 bg-primary/20 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-full bg-muted rounded-full" />
                      <div className="h-1.5 w-3/4 bg-muted rounded-full" />
                      <div className="h-1.5 w-1/2 bg-primary/40 rounded-full" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 p-4 rounded-2xl bg-primary/10 border border-primary/20 flex flex-col items-center gap-2">
                      <Layers className="w-6 h-6 text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Parser</span>
                    </div>
                    <div className="flex-1 p-4 rounded-2xl bg-ai/10 border border-ai/20 flex flex-col items-center gap-2">
                      <Zap className="w-6 h-6 text-ai" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Graph</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* 2. Problem Statement */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-6">The Challenge</h2>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Why Repo Intelligence Matters</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {data.problem.statement}
                </p>
              </div>
              <div className="space-y-4">
                {data.problem.points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-border/40"
                  >
                    <div className="mt-1 p-1 rounded-full bg-red-500/10 text-red-500">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Solution Overview */}
          <section className="mb-32 py-24 border-y border-border/40">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-6">The Solution</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">A System-Thinking Approach to Codebases</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We engineered a high-performance analyzer that treats code as a living graph of relationships. 
                By focusing on dependency mapping and architectural visibility, we empower teams to navigate 
                complex systems with confidence.
              </p>
            </div>
          </section>

          {/* 4. Repository Workflow */}
          <section className="mb-32">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-12 text-center">Repository Workflow</h2>
            <ArchitectureViz nodes={data.architecture.nodes} />
          </section>

          {/* 5. Dependency Visualization System */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-6">Visualization Core</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Interactive Dependency Mapping</h3>
            </div>
            <DependencyGraphViz />
            <div className="max-w-2xl mx-auto mt-12 text-center">
              <p className="text-muted-foreground leading-relaxed">
                The visualization layer uses D3.js for force-directed layouts, allowing developers 
                to explore relationships at various levels—from high-level modules down to 
                individual source files and their specific imports.
              </p>
            </div>
          </section>

          {/* 6. Key Features */}
          <section className="mb-32 py-24 bg-surface-elevated/30 rounded-[4rem]">
            <div className="container-px">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-12 text-center">Platform Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.solution.features.map((feature, i) => {
                  const Icon = featureIcons[feature.icon] || Layout;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group glass-panel p-8 rounded-3xl border-border/40 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 7. Technical Architecture */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-6">Technical Architecture</h2>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Built for Performance</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The system is architected with a decoupled frontend and backend. The **FastAPI backend** 
                    orchestrates the high-performance **Go-based parser** to handle concurrent file scanning 
                    and AST analysis.
                  </p>
                  <p>
                    Data is processed into a relational graph structure, which is then served via a 
                    REST API to the **TypeScript/React frontend**. Interactive rendering is handled by 
                    **D3.js**, ensuring smooth navigation even in large repositories.
                  </p>
                  <div className="pt-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-semibold text-foreground">Lexical Analysis & AST Generation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-semibold text-foreground">Graph-based Dependency Extraction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-semibold text-foreground">Force-directed Layout Rendering</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-panel p-8 rounded-[3rem] border-primary/10 aspect-square flex items-center justify-center">
                <div className="relative w-full max-w-xs aspect-square border-2 border-dashed border-border rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-surface border border-border shadow-xl">
                    <Terminal className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-4 rounded-2xl bg-surface border border-border shadow-xl">
                    <Cpu className="w-6 h-6 text-ai" />
                  </div>
                  <div className="p-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center">
                    <div className="text-center animate-[counter-spin_20s_linear_infinite]">
                      <Share2 className="w-12 h-12 text-primary mb-2 mx-auto" />
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Core Engine</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Contribution & Teamwork */}
          <section className="mb-32 py-24 bg-primary/5 rounded-[4rem] border border-primary/10">
            <div className="container-px flex flex-col md:flex-row items-center gap-12">
              <div className="p-6 rounded-[2.5rem] bg-background border border-border shadow-2xl">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Collaboration</h2>
                <h3 className="text-3xl font-bold mb-6">24-Hour Hackathon Delivery</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  Built as part of an intensive 24-hour engineering hackathon, this project required 
                  seamless coordination. We divided work into three distinct streams: Backend Parsing, 
                  Graph Logic, and Visualization Layer. This parallel workflow allowed us to deliver 
                  a fully functional prototype with premium UI within the strict time constraints.
                </p>
              </div>
            </div>
          </section>

          {/* 9, 10, 11, 12: Challenges, Learnings, Limitations, Future */}
          <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Engineering Challenges */}
            <div className="p-10 rounded-[3rem] bg-surface border border-border/40">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-red-500/10 text-red-500">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Engineering Challenges</h3>
              </div>
              <ul className="space-y-6">
                {data.challenges.map((challenge, i) => (
                  <li key={i} className="space-y-2">
                    <div className="font-bold text-foreground">{challenge.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Learnings */}
            <div className="p-10 rounded-[3rem] bg-surface border border-border/40">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-green-500/10 text-green-500">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Key Learnings</h3>
              </div>
              <ul className="space-y-4">
                {data.learnings.map((learning, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed font-medium">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current Limitations */}
            <div className="p-10 rounded-[3rem] bg-surface border border-border/40">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-yellow-500/10 text-yellow-500">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Current Limitations</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Limited initial language support (primarily Go and TypeScript).",
                  "Basic parsing logic without full semantic understanding.",
                  "Absence of AST-level analysis for complex function relationships.",
                  "Performance bottlenecks in extremely large (>100k files) repositories."
                ].map((limit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0 mt-2" />
                    <span className="text-sm text-muted-foreground leading-relaxed font-medium">{limit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="p-10 rounded-[3rem] bg-primary text-primary-foreground">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-white/10 text-white">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Future Roadmap</h3>
              </div>
              <ul className="space-y-4">
                {data.future.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 13. Visual Showcase */}
          <section className="mb-32">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-12 text-center">Visual Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-panel rounded-3xl border-border/40 overflow-hidden group">
                <div className="aspect-video bg-[#F8FAFC] flex items-center justify-center p-8 relative">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-white border border-border/60">
                    <Image
                      src="/project-assets/repo-analyzer/dashboard.png"
                      alt="Repo Analyzer Dashboard"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-2">Main Dashboard</h4>
                  <p className="text-sm text-muted-foreground">High-level repository health and complexity metrics.</p>
                </div>
              </div>
              <div className="glass-panel rounded-3xl border-border/40 overflow-hidden group">
                <div className="aspect-video bg-[#F8FAFC] flex items-center justify-center p-8 relative">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-white border border-border/60 flex items-center justify-center">
                    <Share2 className="w-16 h-16 text-primary/10" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-2">Dependency Explorer</h4>
                  <p className="text-sm text-muted-foreground">Force-directed graph for navigating module relationships.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 14. GitHub / Actions Section */}
          <section className="mb-16">
            <div className="glass-panel p-12 rounded-[4rem] border-primary/20 bg-linear-to-br from-primary/5 to-transparent text-center">
              <Github className="w-16 h-16 text-primary mb-8 mx-auto" />
              <h3 className="text-3xl font-bold mb-6">Explore the Source</h3>
              <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
                Repo Analyzer is open source. Explore the Go parser, TypeScript visualization logic, 
                and contribute to the future of repository intelligence.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="https://github.com/prasanna/repo-analyzer"
                  target="_blank"
                  className="px-10 py-5 rounded-2xl bg-foreground text-background font-bold transition-all hover:bg-foreground/90 active:scale-95"
                >
                  GitHub Repository
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
