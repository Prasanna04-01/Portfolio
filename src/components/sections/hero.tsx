"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site.config";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section className="relative w-full pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.03),transparent_50%)]">
      <div className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Identity & Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start gap-5"
          >
            {/* Availability Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border/80 text-[9px] font-bold tracking-widest uppercase text-muted-foreground shadow-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              Available for Opportunities
            </motion.div>

            {/* Identity & Heading */}
            <motion.div variants={fadeUp} className="space-y-3">
              <div className="space-y-1">
                <h2 className="text-[9px] md:text-[10px] font-bold text-primary tracking-[0.25em] uppercase">
                  {siteConfig.name}
                </h2>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs md:text-sm font-bold text-foreground/80">
                    {siteConfig.role}
                  </span>
                  <span className="text-[10px] md:text-[11px] font-medium text-muted-foreground">
                    Computer Engineering Student @ JSPM
                  </span>
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground">
                Building <span className="text-gradient">AI-driven</span> systems, backend infrastructure, and scalable engineering solutions.
              </h1>
              <p className="max-w-[480px] text-xs md:text-sm text-muted-foreground leading-relaxed font-medium">
                {siteConfig.description}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-0.5">
              <Link
                href="#projects"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] glow-sm"
              >
                View Projects
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-border/80 text-foreground font-bold text-xs transition-all duration-300 hover:bg-secondary hover:border-primary/20 active:scale-[0.98] shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-1">
              {[
                { icon: Github, href: siteConfig.links.github, label: "GitHub" },
                { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground hover:text-foreground transition-all duration-300 group"
                >
                  <div className="p-1.5 rounded-lg bg-white border border-border/60 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300 shadow-sm">
                    <social.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="hidden sm:inline">{social.label}</span>
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: Unified Engineering Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 hidden lg:block relative"
          >
            <div className="relative z-10 p-4 rounded-[2.5rem] bg-white/40 border border-white/60 backdrop-blur-sm shadow-2xl shadow-primary/5">
              <HeroVisual />
            </div>

            {/* Subtle Background Decoration */}
            <div className="absolute -inset-8 bg-primary/5 blur-[80px] rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
