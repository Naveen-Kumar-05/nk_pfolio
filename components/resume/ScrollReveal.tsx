"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-4xl pt-8 pb-12">
      <motion.div
        layout
        initial={{ height: 120 }}
        animate={{ height: isOpen ? "auto" : 120 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        className="relative mx-auto flex w-full flex-col"
      >
        {/* The Paper Background */}
        <div
          className="absolute inset-0 z-0 w-full"
          style={{
            background: "linear-gradient(to bottom, #f5eedf 0%, #fffdf6 10%, #fffdf6 90%, #e9e0cd 100%)",
            boxShadow: "inset 0 0 40px rgba(180, 160, 130, 0.15)",
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), 50% 100%, 0 calc(100% - 40px))"
          }}
        />

        {/* Top Golden Roll Cylinder */}
        <div className="absolute top-0 left-0 z-20 w-full h-10 rounded-full"
          style={{
            background: "linear-gradient(to bottom, #df9b25 0%, #fce28b 40%, #e3a633 60%, #b37312 100%)",
            boxShadow: "0 6px 12px rgba(58, 47, 47, 0.2)",
          }}
        >
          {/* Scroll Wooden Ends (Left/Right) */}
          <div className="absolute -left-3 top-1/2 -mt-2.5 h-5 w-5 rounded-full bg-[#c08219] shadow-inner" />
          <div className="absolute -right-3 top-1/2 -mt-2.5 h-5 w-5 rounded-full bg-[#c08219] shadow-inner" />
          <div className="absolute -left-6 top-1/2 -mt-2 h-4 w-5 rounded-l-full bg-[#9e630f]" />
          <div className="absolute -right-6 top-1/2 -mt-2 h-4 w-5 rounded-r-full bg-[#9e630f]" />

          {/* Hanging Tassels */}
          <svg className="absolute -left-4 top-8 h-24 w-6 drop-shadow-md" viewBox="0 0 24 100">
            {/* Diamond knot */}
            <path d="M12 0 L18 6 L12 12 L6 6 Z" fill="#df9b25" />
            {/* Beads */}
            <circle cx="12" cy="16" r="3" fill="#df9b25" />
            <circle cx="12" cy="24" r="4" fill="#df9b25" />
            {/* Red tassel skirt */}
            <path d="M10 28 C 8 40, 4 90, 4 100 L 20 100 C 20 90, 16 40, 14 28 Z" fill="#d9381e" />
          </svg>
          <svg className="absolute -right-4 top-8 h-24 w-6 drop-shadow-md" viewBox="0 0 24 100">
            <path d="M12 0 L18 6 L12 12 L6 6 Z" fill="#df9b25" />
            <circle cx="12" cy="16" r="3" fill="#df9b25" />
            <circle cx="12" cy="24" r="4" fill="#df9b25" />
            <path d="M10 28 C 8 40, 4 90, 4 100 L 20 100 C 20 90, 16 40, 14 28 Z" fill="#d9381e" />
          </svg>
        </div>

        {/* The Tied Rope and Tag */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2, y: 20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 z-30 flex cursor-pointer items-center justify-center"
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Vertical Rope */}
              <div className="absolute left-1/2 h-full w-2 -ml-1 bg-amber-900/80 shadow-md"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px)",
                }}
              />
              {/* Engineer Seal (Replacing the Knot) */}
              <div className="absolute left-1/2 top-1/2 h-14 w-14 -ml-7 -mt-7 flex items-center justify-center rounded-full shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #8c6b45 0%, #523b24 100%)",
                  border: "2px solid #3a2512",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.15)"
                }}
              >
                {/* Inner indented circle */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3a2512] shadow-inner" style={{ background: "linear-gradient(135deg, #523b24 0%, #8c6b45 100%)" }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7 text-[#fffaeb] opacity-90 drop-shadow-sm"
                  >
                    {/* Gear body */}
                    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                    {/* Hardhat inside the gear */}
                    <path d="M12 8c-1.9 0-3.5 1.4-3.9 3.2h7.8C15.5 9.4 13.9 8 12 8z" />
                    <path d="M7.5 11.5h9v1.2h-9z" />
                  </svg>
                </div>
              </div>
              {/* Tag */}
              <motion.div 
                className="absolute left-1/2 top-1/2 mt-7 ml-5 flex h-10 items-center justify-center rounded-sm bg-[#fffaeb] px-4 shadow-md border border-ink/10"
                initial={{ rotate: -5, originX: 0, originY: 0 }}
                animate={{ rotate: [-5, 0, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                {/* String attaching tag to seal */}
                <svg className="absolute -top-6 -left-3 h-8 w-8" viewBox="0 0 32 32">
                  <path d="M 4 2 Q 12 16 26 26" fill="none" stroke="rgba(120,60,20,0.8)" strokeWidth="1.5" />
                </svg>
                <span className="font-hand text-lg font-bold text-ink">Pull to open Resume</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content (The Resume) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`relative z-10 w-full px-6 py-12 pb-24 ${!isOpen ? "pointer-events-none" : ""}`}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
