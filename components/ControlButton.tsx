'use client';

import Image from 'next/image';

interface ControlButtonProps {
  type: 'Play' | 'Stop' | 'Reset';
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const imgPlay = '/icon/play.svg';
const imgStop = '/icon/stop.svg';
const imgReset = '/icon/reset.svg';

export default function ControlButton({ type, isActive, onClick, className = '' }: ControlButtonProps) {
  const getIcon = () => {
    switch (type) {
      case 'Play':
        return imgPlay;
      case 'Stop':
        return imgStop;
      case 'Reset':
        return imgReset;
    }
  };

  const getButtonGradient = () => {
    switch (type) {
      case 'Play':
        return 'from-[#3F4D3A] to-[#A9B7A1]';
      case 'Stop':
        return 'from-[#A52D1B] to-[#D87060]';
      case 'Reset':
        return 'from-[#B3B1A5] to-[#FCFCF7]';
      default:
        return 'from-[#3F4D3A] to-[#A9B7A1]';
    }
  };

  const getButtonInnerShadow = () => {
    switch (type) {
      case 'Play':
        return 'shadow-[inset_0_-2px_1px_0_#515F48,inset_0_-4px_2px_0_rgba(255,255,255,0.10),inset_0_1px_1px_0_rgba(255,255,255,0.30),inset_0_4px_4px_0_rgba(0,0,0,0.16),0_0_0_1px_#171F22]';
      case 'Stop':
        return 'shadow-[inset_0_-2px_1px_0_#721D10,inset_0_-4px_2px_0_rgba(255,255,255,0.10),inset_0_1px_1px_0_rgba(255,255,255,0.30),inset_0_4px_4px_0_rgba(0,0,0,0.16),0_0_0_1px_#171F22]';
      case 'Reset':
        return 'shadow-[inset_0_-2px_1px_0_#6C6C6C,inset_0_-4px_2px_0_rgba(255,255,255,0.10),inset_0_1px_1px_0_rgba(255,255,255,0.30),inset_0_4px_4px_0_rgba(0,0,0,0.16),0_0_0_1px_#171F22]';
      default:
        return 'shadow-[inset_0_-2px_1px_0_#515F48,inset_0_-4px_2px_0_rgba(255,255,255,0.10),inset_0_1px_1px_0_rgba(255,255,255,0.30),inset_0_4px_4px_0_rgba(0,0,0,0.16),0_0_0_1px_#171F22]';
    }
  };

  const getButtonPressedShadow = () => {
    switch (type) {
      case 'Play':
        return 'shadow-[inset_0_4px_26px_0_rgba(0,0,0,0.68)]';
      case 'Stop':
        return 'shadow-[inset_0_4px_26px_0_rgba(0,0,0,0.68)]';
      case 'Reset':
        return 'shadow-[inset_0_4px_26px_0_rgba(0,0,0,0.45)]';
      default:
        return 'shadow-[inset_0_4px_26px_0_rgba(0,0,0,0.68)]';
    }
  };

  const getMainShadowFilter = () => {
    return 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.52)) drop-shadow(0 3px 3px rgba(0, 0, 0, 0.37)) drop-shadow(0 5px 6px rgba(0, 0, 0, 0.31)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.26)) drop-shadow(0 19px 20px rgba(0, 0, 0, 0.21)) drop-shadow(0 45px 47px rgba(0, 0, 0, 0.14))';
  };

  return (
    <button
      onClick={onClick}
      aria-label={`${type} timer`}
      className={`control-button control-button-${type.toLowerCase()} bg-gradient-to-b box-border content-stretch cursor-pointer flex from-[#b5b5ae] items-center p-[4px] relative rounded-[9999px] size-full to-[#ffffff] ${className}`}
    >
      {/* Main Shadow */}
      <div 
        className={`control-button-main-shadow absolute w-[54px] h-[54px] left-[4px] top-[4px] bg-gradient-to-b ${getButtonGradient()} rounded-[9999px] z-0 transition-opacity ease-in-out ${isActive ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          filter: getMainShadowFilter(),
          transitionDuration: '460ms'
        }}
      />
      
      {/* Main Box */}
      <div className={`control-button-main-box absolute flex w-[54px] h-[54px] left-[4px] top-[4px] justify-center items-center aspect-square rounded-[9999px] bg-gradient-to-b ${getButtonGradient()} ${getButtonInnerShadow()} z-10`}>
      </div>
      
      {/* Pressed Box */}
      <div 
        className={`control-button-pressed-box absolute w-[54px] h-[54px] left-[4px] top-[4px] rounded-[54px] bg-gradient-to-b ${getButtonGradient()} ${getButtonPressedShadow()} z-20 transition-opacity ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ transitionDuration: '460ms' }}
      >
      </div>
      
      {/* Icon */}
      <div className="control-button-icon-wrapper absolute w-[24px] h-[24px] left-[19px] top-[19px] z-30">
        <Image
          alt={type}
          src={getIcon()}
          width={24}
          height={24}
          className="control-button-icon block w-[24px] h-[24px]"
        />
      </div>
    </button>
  );
}

