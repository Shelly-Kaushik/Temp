"use client";

import { motion } from "motion/react";

export default function EndPagePlaceholder() {
  return (
    <motion.div
      className="relative w-full h-[100dvh] bg-[#160E0B] flex flex-col items-center justify-center select-none font-sans px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-grain z-0 mix-blend-screen opacity-30 pointer-events-none" />

      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="font-instrument text-4xl text-[#FFF3E4] mb-4 z-10"
      >
        YOU MADE IT.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-[#FFF3E4]/60 font-light tracking-widest text-sm z-10"
      >
        One last thing...
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="text-[#D88A52]/80 font-mono tracking-widest text-[10px] mt-12 z-10 uppercase"
      >
        [ Future End Page Placeholder ]
      </motion.p>
    </motion.div>
  );
}
