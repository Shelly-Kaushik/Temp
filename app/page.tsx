"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import CinematicHome from "@/components/intro/CinematicHome";
import ChapterManager from "@/components/story/ChapterManager";
import EndPage from "@/components/sections/EndPage";
import MusicToggle from "@/components/ui/MusicToggle";

import PasswordScreen from "@/components/intro/PasswordScreen";

type AppState = "auth" | "intro" | "chapters" | "end";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("auth");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleEnterWorld = () => {
    setAppState("chapters");
  };

  const handleBackToStart = () => {
    setAppState("intro");
  };

  const handleCompleteStory = () => {
    setAppState("end");
  };

  const toggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  const enableMusic = () => {
    setIsMusicPlaying(true);
  };

  return (
    <main className="min-h-screen bg-[#080706] text-[#F3E4C8] overflow-x-hidden selection:bg-[#24150F]">
      <AnimatePresence mode="wait">
        {appState === "auth" && (
          <PasswordScreen key="auth" onUnlock={() => setAppState("intro")} />
        )}

        {appState === "intro" && (
          <CinematicHome 
            key="intro" 
            onEnter={handleEnterWorld} 
            onEnableSound={enableMusic}
            isSoundEnabled={isMusicPlaying}
          />
        )}

        {appState === "chapters" && (
          <ChapterManager key="chapters" onComplete={handleCompleteStory} onBackToHome={handleBackToStart} />
        )}

        {appState === "end" && (
          <EndPage key="end" onReplay={handleBackToStart} />
        )}
      </AnimatePresence>

      <MusicToggle 
        currentSection={appState === "auth" ? "intro" : appState} 
        isPlaying={isMusicPlaying} 
        onToggle={toggleMusic} 
      />
    </main>
  );
}
