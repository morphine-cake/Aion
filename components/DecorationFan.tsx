"use client";

export default function DecorationFan() {
  const fanBars = [
    { ml: 131, mt: 0, w: 47 },
    { ml: 99, mt: 12, w: 79 },
    { ml: 78, mt: 24, w: 100 },
    { ml: 63, mt: 36, w: 115 },
    { ml: 50, mt: 48, w: 128 },
    { ml: 40, mt: 60, w: 138 },
    { ml: 31, mt: 72, w: 147 },
    { ml: 23, mt: 84, w: 155 },
    { ml: 17, mt: 96, w: 161 },
    { ml: 12, mt: 108, w: 166 },
    { ml: 8, mt: 120, w: 170 },
    { ml: 5, mt: 132, w: 173 },
    { ml: 2, mt: 144, w: 176 },
    { ml: 0, mt: 156, w: 178 },
    { ml: 0, mt: 168, w: 178 },
    { ml: 0, mt: 180, w: 178 },
    { ml: 0, mt: 192, w: 178 },
    { ml: 2, mt: 204, w: 176 },
    { ml: 5, mt: 216, w: 173 },
    { ml: 8, mt: 228, w: 170 },
    { ml: 12, mt: 240, w: 166 },
    { ml: 17, mt: 252, w: 161 },
    { ml: 23, mt: 264, w: 155 },
    { ml: 31, mt: 276, w: 147 },
    { ml: 40, mt: 288, w: 138 },
    { ml: 50, mt: 300, w: 128 },
    { ml: 63, mt: 312, w: 115 },
    { ml: 78, mt: 324, w: 100 },
    { ml: 99, mt: 336, w: 79 },
    { ml: 131, mt: 348, w: 47 },
  ];

  return (
    <div className="fan-container content-stretch flex gap-[12px] items-center leading-[0] relative size-full">
      {/* Left Fan Box */}
      <div className="fan-left grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
        {fanBars.map((bar, index) => (
          <div
            key={`left-${index}`}
            className="fan-bar fan-bar-left [grid-area:1_/_1] bg-[#191f22] h-[4px] rounded-[2px] shadow-[0_1px_0_#FFF,0_-1px_0_rgba(0,0,0,0.08)]"
            style={{
              marginLeft: `${bar.ml}px`,
              marginTop: `${bar.mt}px`,
              width: `${bar.w}px`,
            }}
          />
        ))}
      </div>

      {/* Right Circle Box */}
      <div className="fan-right grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
        {fanBars.map((bar, index) => (
          <div
            key={`right-${index}`}
            className="fan-bar fan-bar-right [grid-area:1_/_1] bg-[#191f22] h-[4px] rounded-[2px] shadow-[0_1px_0_#FFF,0_-1px_0_rgba(0,0,0,0.08)]"
            style={{
              marginLeft: "0px",
              marginTop: `${bar.mt}px`,
              width: `${bar.w}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
