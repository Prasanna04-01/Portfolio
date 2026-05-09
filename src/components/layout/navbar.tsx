"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, FileText, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site.config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/40 bg-background/70 backdrop-blur-xl py-2.5 shadow-sm"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-px flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-105 transition-all duration-300 shadow-md shadow-primary/10">
            P
          </div>
          <span className="font-heading text-lg font-bold tracking-tight hidden sm:block">
            Prasanna<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          <div className="flex items-center gap-6">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-[12px] font-medium transition-all duration-300",
                    isActive 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground/70 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="h-3.5 w-[1px] bg-border/40 mx-1" />

          <div className="flex items-center gap-0.5">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className="p-1.5 rounded-lg hover:bg-secondary/50 transition-all duration-300 text-muted-foreground/60 hover:text-foreground group"
              aria-label="GitHub"
            >
              <Github className="w-[16px] h-[16px] group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              className="p-1.5 rounded-lg hover:bg-secondary/50 transition-all duration-300 text-muted-foreground/60 hover:text-foreground group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-[16px] h-[16px] group-hover:scale-110 transition-transform" />
            </Link>
            <div className="w-1.5" />
            <Link
              href={siteConfig.resumeUrl}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-[11px] font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-95 glow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-border/40 bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container-px py-6 flex flex-col gap-5">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-muted-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-[1px] w-full bg-border/40" />
              <div className="flex flex-col gap-3">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  className="flex items-center gap-3 text-sm font-medium text-muted-foreground/70 hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Github className="w-4.5 h-4.5" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-[13px] font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="w-4.5 h-4.5" />
                  <span>Resume</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
