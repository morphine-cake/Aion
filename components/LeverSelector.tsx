'use client';

interface LeverSelectorProps {
  value: 5 | 15 | 25;
  onValueChange: (value: 5 | 15 | 25) => void;
  className?: string;
}

export default function LeverSelector({ value, onValueChange, className = '' }: LeverSelectorProps) {
  const handleClick = () => {
    // Rotate to next value: 5 → 15 → 25 → 5
    if (value === 5) {
      onValueChange(15);
    } else if (value === 15) {
      onValueChange(25);
    } else {
      onValueChange(5);
    }
  };

  // Calculate knob position to align with number centers
  // Numbers container: 55px height, justify-center, gap-[6px]
  // Font size: 7.944px
  // Knob height: 8px
  // To center-align knob with numbers, we need to position knob center at number center
  // With justify-center and 3 numbers + 2 gaps, the numbers are centered in 55px
  // Approximate centers: 5 = ~13.5px, 15 = ~27.5px, 25 = ~41.5px from top
  // Knob is 8px high, so position top at (center - 4px)
  // Using transform for better performance (GPU-accelerated)
  const knobTranslateY = value === 5 ? 9.5 : value === 15 ? 23.5 : 37.5;

  return (
    <button
      onClick={handleClick}
      aria-label={`Select duration. Current duration: ${value} minutes`}
      className={`lever-selector box-border content-stretch cursor-pointer flex gap-[16px] items-center px-[8px] py-0 relative size-full ${className}`}
    >
      <div className="lever-selector-numbers content-stretch flex flex-col font-normal gap-[6px] h-[55px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[7.944px] text-[#191f22] text-right w-[10px]">
        <p className="lever-selector-number relative shrink-0 w-full">5</p>
        <p className="lever-selector-number relative shrink-0 w-full">15</p>
        <p className="lever-selector-number relative shrink-0 w-full">25</p>
      </div>
      <div className="lever-selector-track bg-gradient-to-b box-border content-stretch flex from-[#b5b5ae] h-[55px] items-center p-[2px] relative rounded-[2px] shrink-0 to-[#ffffff] w-[10px]">
        <div className="lever-selector-cutout bg-[#191f22] h-[51px] shrink-0 w-[6px]" />
        <div
          className="lever-selector-knob-wrapper absolute content-stretch flex flex-col items-start left-1/2 w-[20px] top-0"
          style={{ 
            transform: `translateX(-50%) translateY(${knobTranslateY}px)`,
            transition: 'transform 500ms ease-in-out',
            willChange: 'transform'
          }}
        >
          <div className="lever-selector-knob-shadow bg-gradient-to-b from-[#44433c] h-[8px] rounded-[1px] shadow-[0px_60px_65px_0px_rgba(0,0,0,0.09),0px_25px_27px_0px_rgba(0,0,0,0.13),0px_13px_14px_0px_rgba(0,0,0,0.16),0px_8px_8px_0px_rgba(0,0,0,0.19),0px_4px_4px_0px_rgba(0,0,0,0.23),0px_1px_2px_0px_rgba(0,0,0,0.32)] shrink-0 to-[#292925] w-full">
            <div className="lever-selector-knob-main absolute bg-gradient-to-b from-[#44433c] inset-0 rounded-[1px] to-[#292925]">
              <div className="lever-selector-knob-inner-shadow absolute inset-0 pointer-events-none shadow-[inset_0px_-1px_1px_0px_rgba(255,255,255,0.19),inset_0px_1px_1px_0px_rgba(255,255,255,0.19),inset_0px_-2px_2px_0px_rgba(0,0,0,0.47)]" />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

