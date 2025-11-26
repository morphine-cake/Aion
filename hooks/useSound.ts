"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Custom hook to play sound effects
 * @param soundPath - Path to the sound file (relative to public folder)
 * @returns A function to play the sound
 */
export function useSound(soundPath: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Preload audio on mount
  useEffect(() => {
    const audio = new Audio(soundPath);
    audio.preload = "auto";
    audio.volume = 1.0;

    // Handle loading errors
    const handleError = () => {
      console.error("Error loading audio:", soundPath, audio.error);
    };

    audio.addEventListener("error", handleError);
    audioRef.current = audio;

    return () => {
      // Clean up event listener
      audio.removeEventListener("error", handleError);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, [soundPath]);

  const play = useCallback(() => {
    try {
      // Clone the audio element to allow overlapping sounds
      if (!audioRef.current) {
        // Fallback: create new audio if not initialized
        const audio = new Audio(soundPath);
        audio.volume = 1.0;
        audio.play().catch((error) => {
          console.error("Error playing sound (fallback):", soundPath, error);
        });
        return;
      }

      // Clone for this play call
      const audio = audioRef.current.cloneNode() as HTMLAudioElement;
      audio.volume = 1.0;
      audio.currentTime = 0;

      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Error playing sound:", soundPath, error);
        });
      }

      // Clean up after playing
      audio.addEventListener("ended", () => {
        audio.pause();
        audio.src = "";
      });
    } catch (error) {
      console.error("Error in play function:", soundPath, error);
    }
  }, [soundPath]);

  return play;
}
