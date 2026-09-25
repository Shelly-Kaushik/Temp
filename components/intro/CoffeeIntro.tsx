"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { birthdayData } from "@/data/birthday";

interface CoffeeIntroProps {
  onEnter: () => void;
}

export default function CoffeeIntro({ onEnter }: CoffeeIntroProps) {
  const [stage, setStage] = useState(0); // 0: initial, 1: glass, 2: coffee, 3: text, 4: ready
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    if (isSkipped) return;

    const timers = [
      setTimeout(() => setStage(1), 500), // Show glass
      setTimeout(() => setStage(2), 1500), // Fill coffee
      setTimeout(() => setStage(3), 3000), // Show initializing text
      setTimeout(() => setStage(4), 5000), // System ready
    ];

    return () => timers.forEach(clearTimeout);
  }, [isSkipped]);

  const handleSkip = () => {
    setIsSkipped(true);
    setStage(4);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden px-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Skip button */}
      {stage < 4 && (
        <motion.button
          className="absolute top-8 right-8 text-xs tracking-[0.2em] text-[#d5c4a1] opacity-50 hover:opacity-100 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          onClick={handleSkip}
        >
          SKIP
        </motion.button>
      )}

      {/* Coffee Glass Animation Container */}
      <div className="relative w-32 h-48 mb-12 flex items-end justify-center">
        <AnimatePresence>
          {stage >= 1 && (
            <motion.div
              key="glass"
              className="absolute inset-0 border-2 border-white/10 rounded-b-xl rounded-t-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Ice cubes */}
              <motion.div 
                className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-sm rotate-12 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: stage >= 1 ? 1 : 0 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div 
                className="absolute bottom-6 right-5 w-8 h-8 bg-white/10 rounded-sm -rotate-12 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: stage >= 1 ? 1 : 0 }}
                transition={{ delay: 0.7 }}
              />

              {/* Coffee Liquid */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e1511] to-[#3c2a21] rounded-b-[10px]"
                initial={{ height: "0%", opacity: 0 }}
                animate={{ height: stage >= 2 ? "85%" : "0%", opacity: stage >= 2 ? 1 : 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                {/* Cream Swirl */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-4 bg-[#f4ebd0]/20 blur-md rounded-full"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: stage >= 2 ? 1 : 0, scaleX: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Text Sequence */}
      <div className="h-40 flex flex-col items-center justify-start text-center">
        <AnimatePresence mode="wait">
          {stage >= 3 && stage < 4 && (
            <motion.div
              key="initializing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-2 font-mono text-xs md:text-sm text-[#d5c4a1]/70 uppercase tracking-widest"
            >
              <p>{birthdayData.intro.title}</p>
              <p>initializing...</p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                personality detected
              </motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                chaos detected
              </motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                cold coffee dependency detected
              </motion.p>
            </motion.div>
          )}

          {stage >= 4 && (
            <motion.div
              key="ready"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center space-y-8"
            >
              <h1 className="text-2xl tracking-[0.3em] font-light text-[#f4ebd0] font-['Space_Grotesk']">
                {birthdayData.intro.systemReady}
              </h1>

              <motion.button
                onClick={onEnter}
                whileTap={{ scale: 0.9, filter: "brightness(1.2) contrast(1.2)" }}
                className="px-6 py-3 border border-[#3c2a21] bg-[#1e1511]/50 text-[#f4ebd0] text-sm tracking-widest hover:bg-[#3c2a21]/50 transition-colors rounded-none"
              >
                {birthdayData.intro.enterButton}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
