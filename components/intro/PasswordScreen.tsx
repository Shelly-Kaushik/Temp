"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, ArrowRight } from "lucide-react";

interface PasswordScreenProps {
  onUnlock: () => void;
}

export default function PasswordScreen({ onUnlock }: PasswordScreenProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "genesis@2022") {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <motion.div
      className="relative w-full h-[100dvh] bg-[#160E0B] overflow-hidden flex flex-col items-center justify-center font-sans px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1.5 }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#160E0B] via-[#6F3E2E]/10 to-[#160E0B] z-0" />
      <div className="absolute inset-0 bg-grain z-10 mix-blend-screen opacity-40 pointer-events-none" />

      <motion.div 
        className="relative z-20 flex flex-col items-center w-full max-w-[320px]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Lock className="w-5 h-5 text-[#FFF3E4]/30 mb-8" />
        
        <h1 className="font-instrument text-4xl text-[#FFF3E4] italic mb-2 tracking-wide text-center drop-shadow-md">
          Restricted Access
        </h1>
        <p className="text-[#FFF3E4]/50 text-[10px] tracking-[0.3em] uppercase font-mono mb-12 text-center">
          SYSTEM NANO.EXE
        </p>

        <form onSubmit={handleSubmit} className="w-full relative">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(false);
            }}
            placeholder="ENTER PROTOCOL"
            className={`w-full bg-transparent border-b ${
              error ? "border-[#FF8FA3]" : "border-[#FFF3E4]/20 focus:border-[#D88A52]"
            } text-[#FFF3E4] text-center px-4 py-3 outline-none transition-colors duration-300 placeholder:text-[#FFF3E4]/20 tracking-[0.25em] font-mono text-xs`}
            autoFocus
          />
          
          <AnimatePresence>
            {password.length > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#D88A52] hover:text-[#FFF3E4] transition-colors p-2"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </form>

        <div className="h-6 mt-6">
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-[#FF8FA3] text-[10px] tracking-widest uppercase font-mono text-center"
              >
                Authentication Failed
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
