"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { certificates } from "@/data/certificates";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function CertificatesPreview() {
  const previewCerts = certificates.slice(0, 3);

  return (
    <section id="certificates" className="section-padding bg-white/50">
      <div className="container-px">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Verification</h2>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Credentials & Certifications</h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-medium opacity-80">
              A curated collection of professional certifications and academic achievements in AI, Full Stack development, and software engineering.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/certificates"
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white border border-border/80 text-[11px] font-bold text-foreground hover:bg-secondary hover:border-primary/30 transition-all duration-300 shadow-sm"
            >
              View All Certificates
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {previewCerts.map((cert) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              className="group glass-panel overflow-hidden rounded-2xl border-border/40 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 bg-white"
            >
              {/* Image Preview with real Image support */}
              <div className="aspect-[16/10] bg-muted/20 relative overflow-hidden flex items-center justify-center border-b border-border/40 group-hover:border-primary/10 transition-colors">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]" />
                
                {cert.imageUrl ? (
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    <div className="relative transition-transform duration-700 group-hover:scale-[1.02] flex items-center justify-center">
                      <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        width={400}
                        height={250}
                        className="object-contain max-h-[180px] w-auto shadow-sm rounded-lg"
                        priority={false}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 opacity-20">
                    <Award className="w-10 h-10 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Preview Unavailable</span>
                  </div>
                )}
                
                {/* Floating Badge */}
                <div className="absolute top-3.5 right-3.5 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className="px-2 py-0.5 rounded-lg bg-white/90 backdrop-blur-md border border-primary/20 text-[8px] font-bold text-primary tracking-widest uppercase flex items-center gap-1.5 shadow-xl">
                    <CheckCircle2 className="w-2 h-2" />
                    Verified
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start gap-3 mb-4">
                  <h4 className="text-base font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <span className="text-[9px] font-bold font-mono text-primary px-2 py-0.5 rounded-full bg-primary/5 border border-primary/20 shrink-0">
                    {cert.date}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-surface-elevated flex items-center justify-center border border-border/80">
                    <Award className="w-3.5 h-3.5 text-primary/60" />
                  </div>
                  <div className="text-[13px] text-muted-foreground font-bold tracking-tight">{cert.issuer}</div>
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground/50 font-extrabold group-hover:text-primary/60 transition-colors">
                  <div className="w-6 h-[1px] bg-border/60 group-hover:bg-primary/30 transition-colors" />
                  Credential Record
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
