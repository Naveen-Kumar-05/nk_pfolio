"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface VerticalFlipbookProps {
  children: React.ReactNode[];
}

export function VerticalFlipbook({ children }: VerticalFlipbookProps) {
  // We create a very tall container to allow scrolling.
  // The number of children determines how many "screens" of scrolling we need.
  // E.g. 4 children = 400vh.
  const containerHeight = `${children.length * 100}vh`;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} style={{ height: containerHeight }} className="relative w-full bg-[#f1efe9]">
      <div className="sticky top-0 h-screen w-full overflow-hidden snap-y snap-mandatory" style={{ perspective: "2500px" }}>
        {children.map((child, index) => {
          // Each child represents a page in the vertical book.
          // Page 0 flips up when scroll is between 0 and (1 / N)
          // Page 1 flips up when scroll is between (1 / N) and (2 / N)
          
          const totalPages = children.length;
          const startFlip = index / totalPages;
          const endFlip = (index + 1) / totalPages;

          // We use Framer Motion to map the scroll position to the rotation.
          // rotateX goes from 0 (flat) to 180 (flipped up completely and over).
          const rotateX = useTransform(
            scrollYProgress,
            [startFlip, endFlip],
            [0, 180]
          );

          // We also push the page backwards in Z-space as it flips up to avoid clipping.
          const z = useTransform(
            scrollYProgress,
            [startFlip, endFlip],
            [0, -200]
          );
          
          const opacity = useTransform(
            scrollYProgress,
            [startFlip, endFlip - 0.05], // Fade out right before 90 deg
            [1, 0]
          );

          // Z-index stacking so the first page is on top.
          const zIndex = totalPages - index;

          return (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full bg-[#fffdf6] shadow-xl border-b border-black/10 origin-top overflow-y-auto custom-scrollbar"
              style={{
                rotateX,
                z,
                opacity,
                zIndex,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden"
              }}
            >
              <div className="min-h-max w-full">
                {child}
              </div>
              
              {/* Optional: Add a slight dark gradient over the page as it flips up to simulate a shadow */}
              <motion.div 
                className="absolute inset-0 pointer-events-none bg-black"
                style={{
                  opacity: useTransform(scrollYProgress, [startFlip, endFlip], [0, 0.4])
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
