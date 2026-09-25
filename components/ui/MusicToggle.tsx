"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";

interface MusicToggleProps {
  currentSection: "intro" | "chapters" | "end";
  isPlaying: boolean;
  onToggle: () => void;
}

const TRACKS = {
  intro: "/music/homepage.mp3",
  chapters: "/music/chapters.mp3",
  end: "/music/birthday-wish.mp3",
};

const MAX_VOLUME = 0.4;
const FADE_DURATION = 1500; // ms
const FADE_INTERVAL = 50; // ms

export default function MusicToggle({ currentSection, isPlaying, onToggle }: MusicToggleProps) {
  const [isSupported, setIsSupported] = useState(true);
  
  // Track the currently active audio element
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);
  
  // Track which section's audio is currently loaded
  const loadedSectionRef = useRef<"intro" | "chapters" | "end" | null>(null);

  // Helper to gracefully fade out and stop an audio element
  const fadeOutAndStop = (audio: HTMLAudioElement) => {
    let volume = audio.volume;
    const step = volume / (FADE_DURATION / FADE_INTERVAL);
    
    const fadeOutInterval = setInterval(() => {
      volume = Math.max(0, volume - step);
      audio.volume = volume;
      
      if (volume === 0) {
        clearInterval(fadeOutInterval);
        audio.pause();
        audio.currentTime = 0; // Reset for next time
      }
    }, FADE_INTERVAL);
  };

  // Helper to create and start fading in a new audio element
  const fadeInAndPlay = (audio: HTMLAudioElement) => {
    audio.volume = 0;
    
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          let volume = 0;
          const step = MAX_VOLUME / (FADE_DURATION / FADE_INTERVAL);
          
          const fadeInInterval = setInterval(() => {
            volume = Math.min(MAX_VOLUME, volume + step);
            audio.volume = volume;
            
            if (volume >= MAX_VOLUME) {
              audio.volume = MAX_VOLUME;
              clearInterval(fadeInInterval);
            }
          }, FADE_INTERVAL);
        })
        .catch(() => {
          setIsSupported(false);
        });
    }
  };

  // 1. Handle section changes
  useEffect(() => {
    if (loadedSectionRef.current === currentSection) return;
    
    const oldAudio = activeAudioRef.current;
    
    // Create new audio element
    const newAudio = new Audio(TRACKS[currentSection]);
    newAudio.loop = true;
    
    newAudio.addEventListener("error", () => {
      console.warn(`Missing audio file: ${TRACKS[currentSection]}`);
    });

    loadedSectionRef.current = currentSection;
    activeAudioRef.current = newAudio;

    if (isPlaying) {
      if (oldAudio) {
        fadeOutAndStop(oldAudio);
      }
      fadeInAndPlay(newAudio);
    }

    // Cleanup on unmount
    return () => {
      if (oldAudio) {
        oldAudio.pause();
        oldAudio.removeAttribute("src");
      }
    };
  }, [currentSection]); // only re-run on section change

  // 2. Handle isPlaying state changes externally
  useEffect(() => {
    if (!activeAudioRef.current) return;
    
    if (isPlaying && activeAudioRef.current.paused) {
      activeAudioRef.current.volume = MAX_VOLUME;
      activeAudioRef.current.play().catch(() => setIsSupported(false));
    } else if (!isPlaying && !activeAudioRef.current.paused) {
      activeAudioRef.current.pause();
    }
  }, [isPlaying]);

  if (!isSupported) return null;

  // Don't show the toggle if music is not playing and they haven't explicitly started it?
  // Actually, we want to show it so they can unmute it later.
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#160E0B]/80 backdrop-blur-md border border-[#FFF3E4]/15 rounded-full flex items-center justify-center text-[#FFF3E4] hover:bg-[#FFF3E4]/10 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-[#FFF3E4]" />
      ) : (
        <VolumeX className="w-5 h-5 text-[#FFF3E4]/50" />
      )}
    </motion.button>
  );
}
