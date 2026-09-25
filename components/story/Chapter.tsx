"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { ChapterContent } from "@/data/chapters";

interface ChapterProps {
  data: ChapterContent;
  chapterIndex: number;
  totalChapters: number;
  onNext: () => void;
  onBack: () => void;
  isLastChapter: boolean;
}

export default function Chapter({
  data,
  chapterIndex,
  totalChapters,
  onNext,
  onBack,
  isLastChapter,
}: ChapterProps) {
  // Split optional message by newlines if any
  const paragraphs = data.optionalMessage?.split("\n").filter(Boolean) || [];

  return (
    <motion.div
      className="relative w-full h-[100dvh] bg-[#160E0B] overflow-hidden flex flex-col items-center justify-center select-none font-sans"
      initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-[#160E0B]">
        {data.bgImagePath && (
          <Image
            src={data.bgImagePath}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-90"
            priority={chapterIndex === 0}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#160E0B] via-[#160E0B]/60 to-[#160E0B]/10 z-10 backdrop-blur-[2px]" />
        
        <div 
          className="absolute inset-0 z-20 mix-blend-overlay opacity-60"
          style={{ 
            background: `radial-gradient(circle at center, ${data.accentColor || '#6F3E2E'}40 0%, transparent 70%)` 
          }} 
        />
        <div className="absolute inset-0 bg-grain z-30 mix-blend-screen opacity-30 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[390px] h-full flex flex-col z-40 px-6 py-10 mx-auto">
        
        {/* Header: Back Button & Progress */}
        <header className="flex items-center justify-between w-full mb-12">
          {chapterIndex > 0 ? (
            <motion.button
              onClick={onBack}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-[#FFF3E4]/60 hover:text-[#FFF3E4] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-widest font-mono uppercase">Back</span>
            </motion.button>
          ) : (
            <div /> // Spacer
          )}
          
          <div className="text-[10px] font-mono tracking-[0.2em] text-[#FFF3E4]/40">
            {String(chapterIndex + 1).padStart(2, "0")} / {String(totalChapters).padStart(2, "0")}
          </div>
        </header>

        {/* Story Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar min-h-0 flex flex-col relative z-30">
          <div className="my-auto flex flex-col gap-6 py-4">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <h2 
                className="font-instrument text-5xl md:text-6xl leading-none mb-2 drop-shadow-md"
                style={{ color: data.accentColor || '#FFF3E4' }}
              >
                {data.title}
              </h2>
            </motion.div>

            {data.imagePath && (
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.7, duration: 1 }}
                className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden border border-[#FFF3E4]/10 shadow-[0_10px_30px_rgba(22,14,11,0.5)]"
              >
                <Image 
                  src={data.imagePath}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="space-y-4"
            >
              <p className="font-instrument text-3xl md:text-4xl text-[#FFF3E4] leading-snug drop-shadow-md">
                {data.mainMessage}
              </p>

              <p className="text-[#FFF3E4]/90 text-sm md:text-base font-light tracking-wide leading-relaxed drop-shadow-sm">
                {data.supportingMessage}
              </p>

              {paragraphs.map((para, i) => (
                <p key={i} className="text-[#FFF3E4]/80 text-sm md:text-base font-light tracking-wide leading-relaxed drop-shadow-sm">
                  {para}
                </p>
              ))}

              {data.closingLine && (
                <p className="text-[#FFF3E4] text-base md:text-lg italic font-light pt-2 drop-shadow-sm">
                  {data.closingLine}
                </p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Next Button Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-full flex justify-end mt-4 pt-4 border-t border-transparent shrink-0 z-40"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#160E0B]/60 backdrop-blur-md border border-[#FFF3E4]/15 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-[#FFF3E4]/10 transition-colors group"
          >
            <span className="text-[#FFF3E4] text-xs font-semibold tracking-[0.15em]">
              {isLastChapter ? "CONTINUE" : "NEXT CHAPTER"}
            </span>
            <ArrowRight className="w-4 h-4 text-[#FFF3E4]/70 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

      </div>
    </motion.div>
  );
}
