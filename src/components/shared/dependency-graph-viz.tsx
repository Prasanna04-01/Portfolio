"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, FileCode, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

interface Node {
  id: string;
  label: string;
  type: "module" | "file" | "folder";
  level: number;
}

const nodes: Node[] = [
  { id: "core", label: "Core Engine", type: "module", level: 0 },
  { id: "parser", label: "AST Parser", type: "folder", level: 1 },
  { id: "extractor", label: "Dep Extractor", type: "folder", level: 1 },
  { id: "analyzer", label: "Metrics Engine", type: "folder", level: 1 },
  { id: "golang", label: "go_parser.go", type: "file", level: 2 },
  { id: "ts", label: "ts_parser.ts", type: "file", level: 2 },
  { id: "graph", label: "graph_logic.go", type: "file", level: 2 },
];

export function DependencyGraphViz() {
  return (
    <div className="relative w-full py-20 overflow-hidden">
      <div className="container-px">
        <div className="glass-panel p-8 md:p-16 rounded-[3rem] border-primary/10 bg-surface-elevated/20 relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px]" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
            {/* Level 0: Core */}
            <div className="flex flex-col items-center">
              <NodeCard node={nodes[0]} />
            </div>

            {/* Level 1: Folders */}
            <div className="flex flex-col gap-12">
              {nodes.filter(n => n.level === 1).map(node => (
                <NodeCard key={node.id} node={node} />
              ))}
            </div>

            {/* Level 2: Files */}
            <div className="flex flex-col gap-8">
              {nodes.filter(n => n.level === 2).map(node => (
                <NodeCard key={node.id} node={node} />
              ))}
            </div>

            {/* SVG Connections Overlay (Conceptual) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden md:block">
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Add conceptual lines here if needed, but keeping it minimal as requested */}
            </svg>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 border-t border-border/40 pt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary/40" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Module Layer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500/40" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Logical Groups</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-ai/20 border border-ai/40" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Source Units</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NodeCard({ node }: { node: Node }) {
  const icons = {
    module: Box,
    folder: Folder,
    file: FileCode,
  };
  const Icon = icons[node.type];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      viewport={{ once: true }}
      className={cn(
        "group relative w-48 p-5 rounded-2xl border transition-all duration-300",
        node.type === "module" && "bg-primary/5 border-primary/20 hover:border-primary/40 shadow-lg shadow-primary/5",
        node.type === "folder" && "bg-blue-500/5 border-blue-500/20 hover:border-blue-500/40 shadow-lg shadow-blue-500/5",
        node.type === "file" && "bg-ai/5 border-ai/20 hover:border-ai/40 shadow-lg shadow-ai/5"
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          "p-2 rounded-lg transition-colors",
          node.type === "module" && "bg-primary/10 text-primary",
          node.type === "folder" && "bg-blue-500/10 text-blue-400",
          node.type === "file" && "bg-ai/10 text-ai"
        )}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-tighter opacity-50">{node.type}</span>
          <span className="text-xs font-bold text-foreground truncate">{node.label}</span>
        </div>
      </div>

      {/* Connection points (decorative) */}
      <div className="absolute top-1/2 -left-1 w-2 h-2 rounded-full bg-border border-background border-2 hidden md:block" />
      <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-border border-background border-2 hidden md:block" />
    </motion.div>
  );
}
