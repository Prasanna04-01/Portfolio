"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { Database, Cpu, Activity, Zap, Terminal } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Background Decorative Elements - Simplified for SaaS feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-ai/5 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Unified Compact Engineering Composition */}
      <div className="relative z-10 w-full max-w-md px-4">
        {/* Code Card with integrated profile image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel-elevated p-6 rounded-3xl shadow-2xl border-primary/10 bg-white relative overflow-hidden group/editor"
        >
          {/* Top Toolbar */}
          <div className="flex items-center justify-between mb-5 border-b border-border/40 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
              </div>
              <div className="text-[10px] font-bold font-mono text-muted-foreground/40 ml-2 tracking-widest uppercase">orchestrator.ts</div>
            </div>

            {/* Integrated Profile Image - Top Right */}
            {siteConfig.profilePhoto && (
              <div className="w-16 h-16 p-1 rounded-2xl bg-white border border-border/40 shadow-lg group-hover/editor:scale-105 transition-transform duration-500 overflow-hidden shrink-0">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={siteConfig.profilePhoto}
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2 font-mono text-[11px] md:text-[12px] leading-relaxed">
            <div className="flex gap-2.5">
              <span className="text-primary font-bold">import</span>
              <span className="text-foreground/60">{"{ LLMChain }"}</span>
              <span className="text-primary font-bold">from</span>
              <span className="text-ai font-bold">&quot;langchain&quot;</span>
            </div>
            <div className="flex gap-2.5">
              <span className="text-ai font-bold">async function</span>
              <span className="text-foreground/60">initialize() {"{"}</span>
            </div>
            <div className="pl-5 text-muted-foreground/50 font-medium">
              <span className="text-primary font-bold">const</span> pipeline = <span className="text-primary font-bold">new</span> Chain();
            </div>
            <div className="pl-5">
              <span className="text-primary font-bold">return</span> <span className="text-foreground/60">pipeline.start();</span>
            </div>
            <div className="flex gap-1">
              <span className="text-foreground/60">{"}"}</span>
              <span className="animate-pulse text-primary font-bold">|</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
