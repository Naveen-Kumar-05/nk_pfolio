"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "வணக்கம்", // Tamil
  "नमस्ते", // Hindi
  "নমস্কার", // Bengali
  "నమస్కారం", // Telugu
  "नमस्कार", // Marathi
  "ನಮಸ್ಕಾರ", // Kannada
  "નમસ્તે", // Gujarati
  "നമസ്കാരം", // Malayalam
  "ନମସ୍କାର", // Odia
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
  "Welcome", // English
];

export function LoadingScreen() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Scroll lock while loading
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [show]);

  useEffect(() => {
    if (index === words.length - 1) {
      const finishTimeout = setTimeout(() => {
        setShow(false);
      }, 700); // Give "Welcome" a bit more time before hiding
      return () => clearTimeout(finishTimeout);
    }

    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 180); // Tamil shows longer at the start

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-paper text-ink"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(58, 47, 47, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(58, 47, 47, 0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center gap-4 text-5xl font-bold sm:text-6xl md:text-7xl">
            <motion.p
              key={index}
              className={index === words.length - 1 ? "font-hand text-6xl sm:text-7xl md:text-8xl" : "font-heading"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
            >
              {words[index]}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
