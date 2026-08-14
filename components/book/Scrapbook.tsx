"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageProps {
  front: React.ReactNode;
  back: React.ReactNode;
  isFlipped: boolean;
  zIndex: number;
}

const BookPage = ({ front, back, isFlipped, zIndex }: PageProps) => {
  return (
    <motion.div
      className="absolute top-0 right-0 h-full w-full sm:w-1/2 origin-left"
      style={{ zIndex, transformStyle: "preserve-3d" }}
      initial={false}
      animate={{ rotateY: isFlipped ? -180 : 0 }}
      transition={{ type: "spring", stiffness: 40, damping: 14 }}
    >
      {/* Front of Page */}
      <div 
        className="absolute inset-0 backface-hidden bg-[#fffdf6] shadow-xl border-l border-black/10 overflow-y-auto custom-scrollbar"
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.1) 0%, transparent 5%)" }} />
        {front}
      </div>
      
      {/* Back of Page */}
      <div 
        className="absolute inset-0 backface-hidden bg-[#f5eedf] shadow-xl border-r border-black/10 overflow-y-auto custom-scrollbar"
        style={{ 
          backfaceVisibility: "hidden", 
          transform: "rotateY(180deg)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to left, rgba(0,0,0,0.1) 0%, transparent 5%)" }} />
        {back}
      </div>
    </motion.div>
  );
};

export function ScrapbookBook({ pages }: { pages: React.ReactNode[] }) {
  // A book needs pairs of pages. 
  // Page 0 (Cover), Page 1 & 2 (Spread 1), Page 3 & 4 (Spread 2)
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  // We organize content into physical "leaves" (pieces of paper).
  // Leaf 1: front = pages[0], back = pages[1]
  // Leaf 2: front = pages[2], back = pages[3]
  const leaves = [];
  for (let i = 0; i < pages.length; i += 2) {
    leaves.push({
      front: pages[i],
      back: pages[i + 1] || <div className="flex h-full items-center justify-center text-ink/40 font-hand text-2xl">The End</div>
    });
  }

  const turnNext = () => {
    if (currentPageIndex < leaves.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  const turnPrev = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[90vh] py-10 px-4">
      {/* Navigation Controls */}
      <div className="mb-6 flex gap-4 no-print z-50">
        <button 
          onClick={turnPrev} 
          disabled={currentPageIndex === 0}
          className="px-6 py-2 rounded-full border-2 border-ink text-ink font-hand text-xl hover:bg-ink hover:text-paper disabled:opacity-30 transition-colors"
        >
          &larr; Prev Page
        </button>
        <span className="flex items-center font-hand text-xl">
          Page {currentPageIndex * 2} / {leaves.length * 2 - 1}
        </span>
        <button 
          onClick={turnNext} 
          disabled={currentPageIndex === leaves.length - 1}
          className="px-6 py-2 rounded-full border-2 border-ink text-ink font-hand text-xl hover:bg-ink hover:text-paper disabled:opacity-30 transition-colors"
        >
          Next Page &rarr;
        </button>
      </div>

      {/* Book Container */}
      <div 
        className="relative w-full max-w-5xl h-[80vh] min-h-[700px] perspective-[2000px]"
        style={{ perspective: "2000px" }}
      >
        {/* Book Binding/Spine */}
        <div className="absolute top-0 bottom-0 left-1/2 w-4 -ml-2 bg-[#3a2512] z-0 shadow-inner rounded-sm" />

        {/* Render Leaves */}
        {leaves.map((leaf, index) => {
          const isFlipped = index < currentPageIndex;
          // Z-index math:
          // Unflipped pages (right side) need higher z-index for top pages
          // Flipped pages (left side) need higher z-index for top pages (which are higher index)
          const zIndex = isFlipped ? index : leaves.length - index;

          return (
            <BookPage 
              key={index}
              front={leaf.front}
              back={leaf.back}
              isFlipped={isFlipped}
              zIndex={zIndex}
            />
          );
        })}
      </div>
    </div>
  );
}
