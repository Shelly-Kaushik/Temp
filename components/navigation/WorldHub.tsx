"use client";

import { motion } from "motion/react";
import { User, BookOpen, Zap, Brain, Briefcase, Heart, Lock } from "lucide-react";

interface WorldHubProps {
  onSelectSection: (sectionId: string) => void;
}

const CATEGORIES = [
  { id: "person", title: "THE PERSON", subtitle: '"Who exactly is Nano?"', icon: User },
  { id: "lore", title: "THE LORE", subtitle: "Stories and chaos.", icon: BookOpen },
  { id: "chaos", title: "THE CHAOS", subtitle: "Statistics and facts.", icon: Zap },
  { id: "mind", title: "THE MIND", subtitle: "AIML & intellect.", icon: Brain },
  { id: "career", title: "THE CAREER", subtitle: "Professional path.", icon: Briefcase },
  { id: "heart", title: "THE HEART", subtitle: "Sweetness detected.", icon: Heart },
  { id: "classified", title: "CLASSIFIED", subtitle: "System override.", icon: Lock },
];

export default function WorldHub({ onSelectSection }: WorldHubProps) {
  return (
    <motion.div
      className="min-h-screen w-full px-6 py-12 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <header className="w-full max-w-md mb-12 text-center pt-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-['Space_Grotesk'] tracking-[0.2em] mb-4 text-[#f4ebd0]"
        >
          WELCOME TO NANO&apos;S WORLD
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm text-[#d5c4a1]/70 font-mono"
        >
          A completely unnecessary documentation of one particular human.
        </motion.p>
      </header>

      <div className="w-full max-w-md grid grid-cols-1 gap-4 pb-20">
        {CATEGORIES.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={category.id}
              onClick={() => onSelectSection(category.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              whileTap={{ scale: 0.98, backgroundColor: "rgba(60, 42, 33, 0.4)" }}
              className="relative w-full text-left p-6 border border-[#3c2a21]/50 bg-[#1e1511]/30 backdrop-blur-sm group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d5c4a1]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <div className="text-[10px] font-mono text-[#c78044] mb-2 tracking-widest">
                    SEC_0{index + 1}
                  </div>
                  <h2 className="text-xl font-['Space_Grotesk'] tracking-wider mb-1 text-[#f4ebd0]">
                    {category.title}
                  </h2>
                  <p className="text-xs text-[#d5c4a1]/60 font-mono italic">
                    {category.subtitle}
                  </p>
                </div>
                <Icon className="w-5 h-5 text-[#d5c4a1]/30 group-hover:text-[#c78044] transition-colors" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
