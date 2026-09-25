"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CinematicHomeProps {
  onEnter: () => void;
  onEnableSound?: () => void;
  isSoundEnabled?: boolean;
}

// Configurable timings in milliseconds
const INTRO_TIMINGS = {
  line1Start: 1500,
  line1End: 3500,
  
  line2Start: 4500,
  line2End: 7000,
  
  line3Start: 8000,
  line3End: 10000,
  
  line4Start: 11000,
  line4End: 13500,
  
  photoReveal: 15000,
  finalText: 17500,
  enterButton: 19500,
};

export default function CinematicHome({ onEnter, onEnableSound, isSoundEnabled }: CinematicHomeProps) {
  const [stage, setStage] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeline = [
      { s: 1, delay: INTRO_TIMINGS.line1Start },  // "So...."
      { s: 2, delay: INTRO_TIMINGS.line1End },    // Empty breathing room
      { s: 3, delay: INTRO_TIMINGS.line2Start },  // "Don't ask..."
      { s: 4, delay: INTRO_TIMINGS.line2End },    // Empty breathing room
      { s: 5, delay: INTRO_TIMINGS.line3Start },  // "I had an idea."
      { s: 6, delay: INTRO_TIMINGS.line3End },    // Empty breathing room
      { s: 7, delay: INTRO_TIMINGS.line4Start },  // "It got slightly out of hand."
      { s: 8, delay: INTRO_TIMINGS.line4End },    // Empty breathing room
      { s: 9, delay: INTRO_TIMINGS.photoReveal }, // Photo reveals
      { s: 10, delay: INTRO_TIMINGS.finalText },  // "So... here we are."
      { s: 11, delay: INTRO_TIMINGS.enterButton },// Enter Button
    ];

    const timeouts = timeline.map(({ s, delay }) =>
      setTimeout(() => setStage(s), delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Shared animation settings for text to ensure slow entry/exit
  const textAnimation = {
    initial: { opacity: 0, filter: "blur(12px)", y: 5 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    exit: { opacity: 0, filter: "blur(12px)", y: -5 },
    transition: { duration: 1.0, ease: "easeInOut" as const }
  };

  return (
    <motion.div
      className="relative w-full h-[100dvh] bg-[#160E0B] overflow-hidden flex flex-col items-center justify-center select-none font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1 }}
    >
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/video/cold-coffee.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 z-10 mix-blend-overlay bg-gradient-to-br from-[#160E0B]/80 via-[#6F3E2E]/40 to-[#A8E6E4]/20 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[#160E0B]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-grain z-10 mix-blend-screen pointer-events-none opacity-50" />

      {/* Main Container */}
      <div className="relative w-full max-w-[390px] h-full flex flex-col z-20 px-6 py-12 mx-auto">
        
        {/* Conversational Text Sequence (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none px-8">
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.p
                key="t1"
                {...textAnimation}
                className="text-[#FFF3E4] font-instrument text-4xl italic text-center"
              >
                So....
              </motion.p>
            )}
            {stage === 3 && (
              <motion.p
                key="t2"
                {...textAnimation}
                className="text-[#FFF3E4] font-instrument text-4xl italic text-center"
              >
                Don&apos;t ask why this exists.
              </motion.p>
            )}
            {stage === 5 && (
              <motion.p
                key="t3"
                {...textAnimation}
                className="text-[#FFF3E4] font-instrument text-4xl italic text-center"
              >
                I had an idea.
              </motion.p>
            )}
            {stage === 7 && (
              <motion.p
                key="t4"
                {...textAnimation}
                className="text-[#FFF3E4] font-instrument text-4xl md:text-5xl italic text-center leading-tight"
              >
                It got slightly<br/>out of hand.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Photo Reveal (Top Right, Asymmetric) */}
        <AnimatePresence>
          {stage >= 9 && (
            <motion.div
              initial={{ opacity: 0, x: 20, filter: "blur(15px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute top-28 right-6 w-[45%] max-w-[180px] aspect-[3/4] z-30"
            >
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "200%", opacity: [0, 1, 0] }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#FFF3E4]/30 to-transparent skew-x-12 z-40"
              />
              <div className="relative w-full h-full overflow-hidden rounded-[2rem_4rem_4rem_1rem] shadow-[-10px_15px_40px_rgba(22,14,11,0.6)] group border border-[#FFF3E4]/10">
                <div className="absolute inset-0 bg-[#6F3E2E]/10 mix-blend-overlay z-20" />
                <div className="absolute inset-0 bg-gradient-to-bl from-[#FFAE8A]/10 to-transparent z-20" />
                <Image 
                  src="/photos/hero.jpeg" 
                  alt="Nano" 
                  fill
                  className="object-cover object-[center_20%] scale-105"
                  priority
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final text */}
        <AnimatePresence>
          {stage >= 10 && (
            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute bottom-44 left-8 z-40"
            >
              <p className="font-instrument text-5xl text-[#FFF3E4] italic leading-tight">
                So...<br/>here we are.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sound Enable Button (Immediate) */}
        {!isSoundEnabled && onEnableSound && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={onEnableSound}
            className="absolute top-12 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#160E0B]/80 backdrop-blur-md border border-[#FFF3E4]/30 text-[#FFF3E4] text-[10px] uppercase tracking-widest font-mono flex items-center gap-2 hover:bg-[#FFF3E4]/10 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            Tap to enable sound 🔊
          </motion.button>
        )}

        {/* Enter Button */}
        <AnimatePresence>
          {stage >= 11 && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.96 }}
              onClick={onEnter}
              className="absolute bottom-16 left-8 z-50 flex items-center gap-4 px-6 py-4 rounded-full bg-[#160E0B]/60 backdrop-blur-md border border-[#FFF3E4]/20 shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(255,174,138,0.25)] hover:border-[#FFAE8A]/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFF3E4]/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              <span className="relative z-10 text-[#FFF3E4] text-xs font-bold tracking-[0.2em]">
                LET&apos;S DO THIS
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 text-[#FFAE8A] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
