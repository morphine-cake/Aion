'use client';

interface ProgressBarProps {
  progress: number; // 0 to 1
  duration: 5 | 15 | 25;
  className?: string;
}

export default function ProgressBar({ progress, duration, className = '' }: ProgressBarProps) {
  // For different durations, we show different number of bars
  // 5-min → short bar (5 bars)
  // 15-min → medium (15 bars)
  // 25-min → full (25 bars)
  const totalBars = duration;
  const filledBars = Math.floor(progress * totalBars);
  
  return (
    <div className={`progress-bar content-stretch flex gap-[2px] items-center relative shrink-0 w-full ${className}`}>
      {Array.from({ length: totalBars }).map((_, index) => {
        const isFilled = index < filledBars;
        return (
          <div
            key={index}
            className={`progress-bar-item basis-0 grow h-[4px] min-h-px min-w-px rounded-[1px] shrink-0 ${
              isFilled
                ? 'progress-bar-item-filled bg-[rgba(255,255,255,0.9)]'
                : 'progress-bar-item-empty bg-[#0c161b]'
            }`}
          />
        );
      })}
    </div>
  );
}

