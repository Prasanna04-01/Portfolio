"use client";

import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { siteConfig } from "@/data/site.config";
import Link from "next/link";
import { Navbar } from "./navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/30 selection:text-foreground">
      <Navbar />
      
      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border/80 bg-white/40 backdrop-blur-md pt-24 pb-12">
        <div className="container-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center gap-2 group w-fit">
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl transition-transform group-hover:scale-105 shadow-md shadow-primary/20">
                  P
                </div>
                <span className="font-heading text-xl font-bold tracking-tight text-foreground/90">
                  Prasanna<span className="text-primary">.</span>
                </span>
              </Link>
              <p className="text-muted-foreground max-w-sm leading-relaxed text-[15px] font-medium">
                Building intelligent systems and premium digital experiences with a focus on AI and scalability.
              </p>
              <div className="flex gap-4 pt-2">
                {[
                  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
                  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                  { icon: Instagram, href: siteConfig.links.instagram, label: "Instagram" },
                  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/70">Navigation</h4>
              <ul className="space-y-4">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/70">Contact</h4>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-[15px] text-muted-foreground hover:text-primary transition-colors group font-medium"
                >
                  <Mail className="w-4 h-4 text-primary/60 group-hover:text-primary" />
                  {siteConfig.email}
                </a>
                <div className="flex items-center gap-3 text-[15px] text-muted-foreground font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Available for opportunities
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/80 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[13px] font-bold text-muted-foreground/60">
              © {new Date().getFullYear()} {siteConfig.name}.
            </div>
            <div className="text-[13px] font-bold text-muted-foreground/60 flex items-center gap-2">
              Built with <span className="text-primary font-extrabold">Next.js 15</span> & <span className="text-ai font-extrabold">Tailwind 4</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
