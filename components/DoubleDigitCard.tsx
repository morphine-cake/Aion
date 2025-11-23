"use client";

interface DoubleDigitCardProps {
  topValue: string; // e.g., "24"
  bottomValue: string; // e.g., "24" (changes after 300ms)
  className?: string;
}

export default function DoubleDigitCard({
  topValue,
  bottomValue,
  className = "",
}: DoubleDigitCardProps) {
  return (
    <div
      className={`flip-clock-card-wrapper box-border content-stretch flex items-center px-0 py-[24px] relative shrink-0 ${className}`}
    >
      {/* Back Cards for depth effect */}
      <div className="flip-clock-back-card-4 absolute bg-gradient-to-b from-[#dedede] h-[168px] left-0 opacity-20 right-0 rounded-[8px] shadow-[0px_6px_29px_0px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.06),0px_1px_6px_0px_rgba(0,0,0,0.07),0px_1px_3px_0px_rgba(0,0,0,0.08),0px_1px_2px_0px_rgba(0,0,0,0.1),0px_0px_1px_0px_rgba(0,0,0,0.14)] to-[#ffffff] top-1/2 translate-y-[-50%]">
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_1px_0px_inset_rgba(0,0,0,0.06),0px_2px_2px_0px_inset_rgba(255,255,255,0.47)]" />
      </div>
      <div className="flip-clock-back-card-3 absolute bg-gradient-to-b from-[#dedede] h-[156px] left-0 opacity-30 right-0 rounded-[8px] shadow-[0px_6px_29px_0px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.06),0px_1px_6px_0px_rgba(0,0,0,0.07),0px_1px_3px_0px_rgba(0,0,0,0.08),0px_1px_2px_0px_rgba(0,0,0,0.1),0px_0px_1px_0px_rgba(0,0,0,0.14)] to-[#ffffff] top-1/2 translate-y-[-50%]">
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_1px_0px_inset_rgba(0,0,0,0.06),0px_2px_2px_0px_inset_rgba(255,255,255,0.47)]" />
      </div>
      <div className="flip-clock-back-card-2 absolute bg-gradient-to-b from-[#dedede] h-[144px] left-0 opacity-40 right-0 rounded-[8px] shadow-[0px_6px_29px_0px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.06),0px_1px_6px_0px_rgba(0,0,0,0.07),0px_1px_3px_0px_rgba(0,0,0,0.08),0px_1px_2px_0px_rgba(0,0,0,0.1),0px_0px_1px_0px_rgba(0,0,0,0.14)] to-[#ffffff] top-1/2 translate-y-[-50%]">
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_1px_0px_inset_rgba(0,0,0,0.06),0px_2px_2px_0px_inset_rgba(255,255,255,0.47)]" />
      </div>
      <div className="flip-clock-back-card-1 absolute bg-gradient-to-b from-[#dedede] h-[132px] left-0 opacity-60 right-0 rounded-[8px] shadow-[0px_6px_29px_0px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.06),0px_1px_6px_0px_rgba(0,0,0,0.07),0px_1px_3px_0px_rgba(0,0,0,0.08),0px_1px_2px_0px_rgba(0,0,0,0.1),0px_0px_1px_0px_rgba(0,0,0,0.14)] to-[#ffffff] top-1/2 translate-y-[-50%]">
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_1px_0px_inset_rgba(0,0,0,0.06),0px_2px_2px_0px_inset_rgba(255,255,255,0.47)]" />
      </div>

      {/* Main Card - 140px width to fit two digits */}
      <div className="flip-clock-main-card bg-gradient-to-b box-border content-stretch flex flex-col from-[#dedede] h-[120px] items-center justify-center relative rounded-[8px] shadow-[0px_6px_29px_0px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.06),0px_1px_6px_0px_rgba(0,0,0,0.07),0px_1px_3px_0px_rgba(0,0,0,0.08),0px_1px_2px_0px_rgba(0,0,0,0.1),0px_0px_1px_0px_rgba(0,0,0,0.14)] shrink-0 to-[#ffffff] w-[140px]">
        {/* Top half - shows current value (changes instantly) */}
        <div className="flip-clock-top-half content-stretch flex gap-[10px] h-[60px] items-start justify-center relative shrink-0 w-[140px] overflow-hidden">
          <p className="flip-clock-digit-text font-['Helvetica',sans-serif] font-bold leading-[120px] not-italic relative shrink-0 text-[102px] text-[#191f22] text-center w-[140px]">
            {topValue}
          </p>
        </div>
        {/* Bottom half - shows next value (changes after 300ms) */}
        <div className="flip-clock-bottom-half content-stretch flex gap-[10px] h-[60px] items-end justify-center relative shrink-0 w-[140px] overflow-hidden">
          <p className="flip-clock-digit-text font-['Helvetica',sans-serif] font-bold leading-[120px] not-italic relative shrink-0 text-[102px] text-[#191f22] text-center w-[140px]">
            {bottomValue}
          </p>
        </div>
        {/* Middle divider */}
        <div className="flip-clock-middle-divider absolute bg-[#191f22] h-[2px] left-0 right-0 shadow-[0px_-1px_1px_0px_rgba(0,0,0,0.17),0px_1px_1px_0px_#ffffff] top-[calc(50%+0.16px)] translate-y-[-50%]" />
        <div className="flip-clock-card-inner-shadow absolute inset-0 pointer-events-none shadow-[0px_-1px_1px_0px_inset_rgba(0,0,0,0.06),0px_2px_2px_0px_inset_rgba(255,255,255,0.47)]" />
      </div>

      {/* Side cutouts */}
      <div className="flip-clock-side-cutout-left absolute bg-[#191f22] h-[80px] left-[-6px] top-1/2 translate-y-[-50%] w-[12px]" />
      <div className="flip-clock-side-cutout-right absolute bg-[#191f22] h-[80px] right-[-6px] top-1/2 translate-y-[-50%] w-[12px]" />
      <div className="flip-clock-top-cutout absolute bg-[#191f22] h-[39.904px] left-[calc(50%-0.49px)] rounded-[3.07px] shadow-[0px_2px_1px_0px_rgba(0,0,0,0.1)] top-[-2px] translate-x-[-50%] w-[1.023px]" />
    </div>
  );
}
