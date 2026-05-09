"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchitectureNode {
  label: string;
  sublabel: string;
  type: "input" | "process" | "output";
}

interface ArchitectureVizProps {
  nodes: ArchitectureNode[];
}

export function ArchitectureViz({ nodes }: ArchitectureVizProps) {
  return (
    <div className="w-full overflow-x-auto pb-12 scrollbar-hide">
      <div className="min-w-[1000px] flex items-center justify-between gap-6 py-20 px-8">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col items-center gap-6 w-48 shrink-0"
            >
              <div className={cn(
                "w-20 h-20 rounded-[2rem] flex items-center justify-center border transition-all duration-500 group-hover:scale-110 shadow-sm",
                node.type === "input" && "bg-blue-500/5 border-blue-500/10 text-blue-500 group-hover:border-blue-400 group-hover:shadow-blue-500/5",
                node.type === "process" && "bg-primary/5 border-primary/10 text-primary group-hover:border-primary/40 group-hover:shadow-primary/5",
                node.type === "output" && "bg-ai/5 border-ai/10 text-ai group-hover:border-ai/40 group-hover:shadow-ai/5"
              )}>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest">{node.type}</span>
              </div>
              
              <div className="text-center">
                <div className="font-bold text-foreground text-[15px] mb-1.5 group-hover:text-primary transition-colors duration-300">{node.label}</div>
                <div className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.15em] font-bold">
                  {node.sublabel}
                </div>
              </div>

              {/* Decorative accent */}
              <div className={cn(
                "absolute -top-1 -right-1 w-3 h-3 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500",
                node.type === "input" && "bg-blue-400",
                node.type === "process" && "bg-primary",
                node.type === "output" && "bg-ai"
              )} />
            </motion.div>

            {i < nodes.length - 1 && (
              <div className="flex-1 h-[1px] relative min-w-[60px] mb-14">
                <div className="absolute inset-0 bg-border/20" />
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                  className="absolute inset-0 origin-left bg-linear-to-r from-transparent via-primary/30 to-transparent"
                />
                <ArrowRight className="absolute -right-2 -top-1.5 w-4 h-4 text-border/40" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
