"use client";

import { motion } from "motion/react";
import { birthdayData } from "@/data/birthday";
import { ArrowLeft } from "lucide-react";

interface PersonSectionProps {
  onBack: () => void;
}

export default function PersonSection({ onBack }: PersonSectionProps) {
  return (
    <motion.div
      className="min-h-screen w-full bg-[#0a0a0a]"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
    >
      <div className="fixed top-0 left-0 w-full p-6 z-50 bg-gradient-to-b from-[#0a0a0a] to-transparent">
        <motion.button
          onClick={onBack}
          whileTap={{ scale: 0.9 }}
          className="flex items-center text-[#d5c4a1] text-xs font-mono tracking-widest hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          RETURN
        </motion.button>
      </div>

      <div className="px-6 pt-32 pb-40 max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-xs font-mono text-[#c78044] mb-4 tracking-[0.3em]">
            01 / THE PERSON
          </div>
          <h2 className="text-3xl font-['Space_Grotesk'] text-[#f4ebd0]">
            Who exactly is {birthdayData.name}?
          </h2>
        </motion.div>

        <div className="space-y-32">
          {birthdayData.personality.map((trait, index) => {
            // Split into label and value if there's a colon for styling
            const parts = trait.split(":");
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left"
              >
                {parts.length > 1 ? (
                  <>
                    <div className="text-sm font-mono tracking-widest text-[#d5c4a1]/50 uppercase mb-2">
                      {parts[0]}:
                    </div>
                    <div className="text-4xl md:text-5xl font-light font-['Space_Grotesk'] tracking-tight text-[#f4ebd0]">
                      {parts[1].trim()}
                    </div>
                  </>
                ) : (
                  <div className="text-4xl md:text-5xl font-light font-['Space_Grotesk'] tracking-wide text-[#f4ebd0] uppercase">
                    {trait}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
