"use client";

import React from "react";
import { motion } from "framer-motion";

export function AutoScrollReveal({ children }: { children: React.ReactNode }) {
  // Variants for the unrolling animation
  const scrollVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const contentVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto my-4">
      {/* Paper Roll — the curled top edge of a rolled sheet */}
      <div className="relative z-20 w-full h-5 rounded-t-lg"
        style={{
          background: "linear-gradient(to bottom, #e9e0cd 0%, #f5eedf 50%, #ebe2d0 100%)",
          boxShadow: "0 3px 6px rgba(58, 47, 47, 0.12)",
        }}
      />

      {/* The Paper Body — Unrolls when it scrolls into view */}
      <motion.div
        className="relative z-10 w-full origin-top overflow-hidden rounded-b-sm"
        style={{
          background: "linear-gradient(to bottom, #f5eedf 0%, #fffdf6 8%, #fffdf6 92%, #f0e8d5 100%)",
          boxShadow: "inset 0 0 30px rgba(180,160,130,0.1), 0 8px 18px rgba(58,47,47,0.1)",
        }}
        variants={scrollVariants}
        initial="closed"
        whileInView="open"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Paper Texture Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle fold line at the top where the roll meets the flat paper */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(160,140,110,0.3) 20%, rgba(160,140,110,0.3) 80%, transparent)" }}
        />

        {/* Content Container */}
        <motion.div 
          className="relative px-6 py-8 pb-10"
          variants={contentVariants}
        >
          {children}
        </motion.div>

        {/* Bottom paper curl — subtle shadow at the bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-3 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(200,185,160,0.25), transparent)",
          }}
        />
      </motion.div>
    </div>
  );
}

