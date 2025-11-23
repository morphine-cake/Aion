"use client";

import { useEffect, useState } from "react";
import DoubleDigitCard from "./DoubleDigitCard";
import ProgressBar from "./ProgressBar";

interface FlipClockProps {
  minutes: number;
  seconds: number;
  milliseconds: number;
  completedPomodoros: number;
  duration: 5 | 15 | 25;
  isRunning: boolean;
}

export default function FlipClock({
  minutes,
  seconds,
  milliseconds,
  completedPomodoros,
  duration,
  isRunning,
}: FlipClockProps) {
  const [topMinutes, setTopMinutes] = useState(
    minutes.toString().padStart(2, "0")
  );
  const [bottomMinutes, setBottomMinutes] = useState(
    minutes.toString().padStart(2, "0")
  );
  const [topSeconds, setTopSeconds] = useState(
    seconds.toString().padStart(2, "0")
  );
  const [bottomSeconds, setBottomSeconds] = useState(
    seconds.toString().padStart(2, "0")
  );

  // Get current date in format "28 OCT"
  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();
    return `${day} ${month}`;
  };

  // Calculate progress (0 to 1) - based on remaining time (starts full, decreases)
  const totalSeconds = duration * 60;
  const remainingSeconds = minutes * 60 + seconds;
  const progress = Math.max(0, Math.min(1, remainingSeconds / totalSeconds));

  // Calculate total remaining milliseconds
  // When stopped (milliseconds === 0), show exact total (e.g., 1,500,000)
  // When running, calculate based on remaining time and current millisecond fraction
  const totalMs =
    milliseconds === 0
      ? (minutes * 60 + seconds) * 1000
      : (minutes * 60 + seconds - 1) * 1000 + milliseconds;

  const formattedTotalMs = totalMs.toString();

  useEffect(() => {
    const newMinutes = minutes.toString().padStart(2, "0");
    const newSeconds = seconds.toString().padStart(2, "0");

    // Top value changes first (instant)
    setTopMinutes(newMinutes);
    setTopSeconds(newSeconds);

    // Bottom value changes after 168ms delay
    const timeout = setTimeout(() => {
      setBottomMinutes(newMinutes);
      setBottomSeconds(newSeconds);
    }, 168);

    return () => clearTimeout(timeout);
  }, [minutes, seconds]);

  return (
    <div className="flip-clock-container bg-gradient-to-b box-border content-stretch flex flex-col from-[#b5b5ae] items-start p-[4px] relative rounded-[12px] size-full to-[#ffffff]">
      <div className="flip-clock-screen bg-[#191f22] box-border content-stretch flex flex-col items-start p-[16px] relative rounded-[8px] shrink-0 w-full">
        {/* Top Info */}
        <div className="flip-clock-top-info content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <p className="flip-clock-date font-normal leading-[normal] not-italic relative shrink-0 text-[10px] text-white text-nowrap whitespace-pre">
            {getCurrentDate()}
          </p>
          <div className="flip-clock-info-divider bg-[rgba(255,255,255,0.9)] h-[12px] opacity-10 shrink-0 w-px" />
          <p className="flip-clock-pomodoros basis-0 font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[10px] text-white">
            {completedPomodoros === 0
              ? "You haven’t completed a Pomodoro yet"
              : `Completed ${completedPomodoros} Pomodoros`}
          </p>
        </div>

        {/* Main Clock */}
        <div className="flip-clock-main-display box-border content-stretch flex gap-[20px] items-center px-[60px] py-[24px] relative shrink-0">
          <DoubleDigitCard topValue={topMinutes} bottomValue={bottomMinutes} />

          {/* Separator */}
          <div className="flip-clock-separator content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[12.278px]">
            <div className="flip-clock-separator-dot bg-white h-[12.278px] rounded-[6.139px] shrink-0 w-full" />
            <div className="flip-clock-separator-dot bg-white h-[12.278px] rounded-[6.139px] shrink-0 w-full" />
          </div>

          <DoubleDigitCard topValue={topSeconds} bottomValue={bottomSeconds} />
        </div>

        {/* Bottom Info */}
        <div className="flip-clock-bottom-info content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
          <p className="flip-clock-milliseconds font-light leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.8)] tracking-[1px] w-full">
            {formattedTotalMs} ms
          </p>
          <ProgressBar progress={progress} duration={duration} />
        </div>
      </div>
    </div>
  );
}
