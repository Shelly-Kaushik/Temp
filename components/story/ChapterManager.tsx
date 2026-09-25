"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Chapter from "./Chapter";
import { chaptersData } from "@/data/chapters";

interface ChapterManagerProps {
  onComplete: () => void;
  onBackToHome: () => void;
}

export default function ChapterManager({ onComplete, onBackToHome }: ChapterManagerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < chaptersData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      onBackToHome();
    }
  };

  return (
    <div className="w-full h-full bg-[#160E0B]">
      <AnimatePresence mode="wait">
        <Chapter
          key={chaptersData[currentIndex].id}
          data={chaptersData[currentIndex]}
          chapterIndex={currentIndex}
          totalChapters={chaptersData.length}
          onNext={handleNext}
          onBack={handleBack}
          isLastChapter={currentIndex === chaptersData.length - 1}
        />
      </AnimatePresence>
    </div>
  );
}
