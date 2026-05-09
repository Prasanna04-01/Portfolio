"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Award, 
  Filter, 
  ExternalLink, 
  X,
  Maximize2,
  Calendar,
  Building2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MainLayout } from "@/components/layout/main-layout";
import { certificates } from "@/data/certificates";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const categories = ["All", "AI/ML", "Development", "Data", "Simulations"];

export default function CertificatesPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredCertificates = certificates.filter((cert) => {
    if (filter === "All") return true;
    if (filter === "AI/ML") return cert.title.toLowerCase().includes("ai") || cert.title.toLowerCase().includes("gemini");
    if (filter === "Development") return cert.title.toLowerCase().includes("python") || cert.title.toLowerCase().includes("technology");
    if (filter === "Data") return cert.title.toLowerCase().includes("data");
    if (filter === "Simulations") return cert.title.toLowerCase().includes("simulation");
    return true;
  });

  return (
    <MainLayout>
      <div className="pt-24 pb-16 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.03),transparent_50%)] min-h-screen">
        <div className="container-px">
          {/* Header */}
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            animate="visible"
            className="max-w-2xl mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[9px] font-bold text-muted-foreground hover:text-primary transition-colors mb-5 group uppercase tracking-widest"
            >
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-foreground/90">
              Verified <span className="text-gradient">Credentials</span>
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-medium opacity-80">
              A comprehensive record of my professional certifications, academic achievements, and industry job simulations.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2 mr-2 text-muted-foreground">
              <Filter className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-5 py-2 rounded-xl text-[11px] font-bold transition-all duration-300 border shadow-sm",
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-primary/20"
                    : "bg-white text-muted-foreground border-border/80 hover:border-primary/20 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
                variants={fadeUp}
                className="group glass-panel overflow-hidden rounded-[1.5rem] border-border/40 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-white"
              >
                {/* Image Container */}
                <div className="aspect-[16/10] relative overflow-hidden bg-muted/20 border-b border-border/40 group-hover:border-primary/10 transition-colors flex items-center justify-center">
                  {cert.imageUrl ? (
                    <div className="relative w-full h-full flex items-center justify-center p-2">
                      <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        width={400}
                        height={250}
                        className="object-contain max-h-[180px] w-auto shadow-sm rounded-lg transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 opacity-20">
                      <Award className="w-12 h-12 text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Preview Unavailable</span>
                    </div>
                  )}
                  
                  {/* Actions Overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2.5">
                    <button
                      onClick={() => cert.imageUrl && setSelectedImage(cert.imageUrl)}
                      className="p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-white shadow-xl text-primary hover:scale-110 transition-all active:scale-95"
                      title="Preview Image"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    {cert.url && (
                      <Link
                        href={cert.url}
                        target="_blank"
                        className="p-2.5 rounded-xl bg-primary text-white shadow-xl hover:scale-110 transition-all active:scale-95"
                        title="View Official Record"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
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

                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5 text-muted-foreground">
                      <div className="w-7 h-7 rounded-lg bg-surface-elevated flex items-center justify-center border border-border/80">
                        <Building2 className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[11px] font-bold tracking-tight">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center gap-2.5 text-muted-foreground">
                      <div className="w-7 h-7 rounded-lg bg-surface-elevated flex items-center justify-center border border-border/80">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[11px] font-medium">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Certificate Preview"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
}
