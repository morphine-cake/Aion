"use client";

import ControlButton from "@/components/ControlButton";
import DecorationFan from "@/components/DecorationFan";
import FlipClock from "@/components/FlipClock";
import LeverSelector from "@/components/LeverSelector";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type TimerState = "stopped" | "running" | "paused";
type Duration = 5 | 15 | 25;

export default function Home() {
  const [duration, setDuration] = useState<Duration>(25);
  const [timerState, setTimerState] = useState<TimerState>("stopped");
  const [timeRemaining, setTimeRemaining] = useState(25 * 60); // in seconds
  const [milliseconds, setMilliseconds] = useState(0);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [resetActive, setResetActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Calculate minutes and seconds from timeRemaining
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let msInterval: NodeJS.Timeout;

    if (timerState === "running") {
      // Main timer interval (1 second)
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Timer completed
            setTimerState("stopped");
            setCompletedPomodoros((prev) => prev + 1);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Milliseconds interval (10ms for smoother updates)
      msInterval = setInterval(() => {
        setMilliseconds((prev) => {
          if (prev <= 10) {
            return 1000;
          }
          return prev - 10;
        });
      }, 10);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (msInterval) clearInterval(msInterval);
    };
  }, [timerState]);

  // Handle mount animation
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle play button
  const handlePlay = useCallback(() => {
    if (timerState === "stopped" || timerState === "paused") {
      setTimerState("running");
    }
  }, [timerState]);

  // Handle stop button
  const handleStop = useCallback(() => {
    if (timerState === "running") {
      setTimerState("paused");
    }
  }, [timerState]);

  // Handle reset button
  const handleReset = useCallback(() => {
    setTimerState("stopped");
    setTimeRemaining(duration * 60);
    setMilliseconds(0);
    setResetActive(true);

    // Reset button becomes active for 600ms
    setTimeout(() => {
      setResetActive(false);
    }, 600);
  }, [duration]);

  // Handle duration change
  const handleDurationChange = useCallback((newDuration: Duration) => {
    setDuration(newDuration);
    setTimerState("stopped");
    setTimeRemaining(newDuration * 60);
    setMilliseconds(0);
  }, []);

  // Determine button states
  // Play button: active only when timer is running
  const isPlayActive = timerState === "running";
  // Stop button: active only when timer is paused (not when stopped/idle)
  const isStopActive = timerState === "paused";

  return (
    <main
      className={`app-main h-screen bg-gradient-to-b from-[#F9F9F9] to-[#EDEDED] overflow-hidden ${
        isMounted ? "animate-dissolve-in" : "opacity-0"
      }`}
    >
      <div className="app-wrapper w-full h-full flex flex-col justify-start items-center relative mx-auto scale-75 sm:scale-100">
        {/* Main Container - Clock and Controls */}
        <div className="app-main-container relative grow flex flex-col items-center justify-center gap-[40px] w-auto h-auto pt-0 sm:pt-[70px]">
          {/* Title and Clock Wrapper */}
          <div className="app-content-wrapper flex flex-col gap-[16px]">
            {/* Title Container */}
            <div className="app-title-container w-full flex items-end justify-between px-[4px]">
              {/* Left side - Logo and Subtext */}
              <div className="app-title-left flex flex-col gap-[4px] items-start">
                <div className="app-logo-container relative w-[113px] h-[27px]">
                  <Image
                    src="/assets/logo.svg"
                    alt="AION Logo"
                    fill
                    className="app-logo-image object-contain"
                    priority
                  />
                </div>
                <p className="app-title-text font-sans text-[10px] text-[#191f22] opacity-80">
                  Pomodoro Clock 1.0
                </p>
              </div>

              {/* Right side - Made by Text */}
              <div className="app-title-right text-[10px] text-[#191f22] font-sans text-right">
                <span className="opacity-80">Made by </span>
                <a
                  href="https://burakbasci.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-maker-link opacity-80 hover:underline hover:opacity-100 transition-opacity duration-[168ms] ease-out decoration-inherit text-[#191f22]"
                >
                  Burak Başcı
                </a>
              </div>
            </div>

            {/* Clock */}
            <div className="app-clock-wrapper w-[492.278px] h-[289px]">
              <FlipClock
                minutes={minutes}
                seconds={seconds}
                milliseconds={milliseconds}
                completedPomodoros={completedPomodoros}
                duration={duration}
                isRunning={timerState === "running"}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="app-controls flex items-center gap-0">
            {/* Lever Selector */}
            <div className="app-lever-wrapper w-[52px] h-[55px] mt-[3.5px]">
              <LeverSelector
                value={duration}
                onValueChange={handleDurationChange}
              />
            </div>

            {/* Button Box */}
            <div className="app-button-group flex gap-[24px] ml-[32px]">
              <div className="app-button-wrapper app-button-play-wrapper w-[62px] h-[62px]">
                <ControlButton
                  type="Play"
                  isActive={isPlayActive}
                  onClick={handlePlay}
                />
              </div>
              <div className="app-button-wrapper app-button-stop-wrapper w-[62px] h-[62px]">
                <ControlButton
                  type="Stop"
                  isActive={isStopActive}
                  onClick={handleStop}
                />
              </div>
              <div className="app-button-wrapper app-button-reset-wrapper w-[62px] h-[62px]">
                <ControlButton
                  type="Reset"
                  isActive={resetActive}
                  onClick={handleReset}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Container - Fan Decoration */}
        <div className="app-bottom-container relative grow-0 h-auto flex items-end justify-center w-full">
          <div className="app-fan-wrapper w-[368px] h-[352px] translate-y-[19%]">
            <DecorationFan />
          </div>
        </div>
      </div>
    </main>
  );
}
