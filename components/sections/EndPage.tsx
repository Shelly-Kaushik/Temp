"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function EndPage({ onReplay }: { onReplay: () => void }) {
  const [stage, setStage] = useState(0);
  const [sparkles, setSparkles] = useState<{ id: number; left: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate sparkles on client-side to avoid hydration mismatch
    const generatedSparkles = [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 5,
    }));
    setSparkles(generatedSparkles);

    const timeline = [
      { s: 1, delay: 1000 },
      { s: 2, delay: 4000 },
      { s: 3, delay: 7000 },
      { s: 4, delay: 11000 },
      { s: 5, delay: 14000 }, // Show replay button
    ];

    const timeouts = timeline.map(({ s, delay }) =>
      setTimeout(() => setStage(s), delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="relative w-full h-[100dvh] bg-[#160E0B] overflow-hidden flex flex-col items-center justify-center select-none font-sans px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1.5 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#160E0B]">
        <Image
          src="/photos/test7.png" // The user asked for this specific path
          alt="Final Memory"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160E0B] via-[#160E0B]/70 to-[#160E0B]/30 z-10 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-grain z-20 mix-blend-screen opacity-30 pointer-events-none" />
      </div>

      {/* Sparkles / Confetti - Subtle CSS Animation */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute w-1 h-1 rounded-full bg-[#FFF3E4] opacity-50 shadow-[0_0_8px_#FFF3E4]"
            initial={{ 
              left: sparkle.left, 
              bottom: "-10%" 
            }}
            animate={{ 
              bottom: "110%",
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: sparkle.delay
            }}
          />
        ))}
      </div>

      <div className="relative z-30 w-full max-w-[390px] h-full flex flex-col justify-center gap-8 text-center py-10">
        
        <AnimatePresence>
          {stage >= 1 && (
            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 2 }}
              className="text-[#FFF3E4]/70 font-light tracking-wide text-sm md:text-base leading-relaxed drop-shadow-sm"
            >
              And that&apos;s the end of this little thing I made for you.
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage >= 2 && (
            <motion.h2
              initial={{ opacity: 0, y: 15, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 2 }}
              className="font-instrument text-5xl md:text-6xl text-[#D88A52] leading-none drop-shadow-md"
            >
              Happy Birthday, Nano.
            </motion.h2>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage >= 3 && (
            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 2 }}
              className="text-[#FFF3E4]/80 font-light tracking-wide text-sm md:text-base leading-relaxed drop-shadow-sm px-2"
            >
              I hope this year gives you everything you&apos;ve been dreaming of, and a little extra happiness you didn&apos;t even ask for.
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage >= 4 && (
            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 2 }}
              className="text-[#FFF3E4] font-medium tracking-wide text-base md:text-lg italic mt-4 drop-shadow-md"
            >
              You deserve all the good things. Always.
            </motion.p>
          )}
        </AnimatePresence>

      </div>

      <AnimatePresence>
        {stage >= 5 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReplay}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-3 w-[85%] max-w-[280px] px-6 py-4 rounded-full bg-[#160E0B]/70 backdrop-blur-md border border-[#FFF3E4]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:bg-[#FFF3E4]/10 transition-colors group"
          >
            <RotateCcw className="w-4 h-4 text-[#FFF3E4]/80 group-hover:-rotate-180 transition-transform duration-700" />
            <span className="text-[#FFF3E4] text-[11px] font-bold tracking-[0.2em] uppercase">
              Replay this little journey
            </span>
          </motion.button>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
