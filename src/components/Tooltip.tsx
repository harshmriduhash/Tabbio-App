// Tooltip.tsx

// Tooltip.tsx

import React, { useRef, useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block cursor-pointer">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {showTooltip && (
        <div className="absolute -left-[64px]  z-999 min-w-8 w-full bg-white dark:bg-black dark:text-white text-black/80 text-sm  py-2.5 px-3 rounded-md shadow-3">
          {text}
        </div>
      )}
    </div>
  );
};

export const Tooltip2: React.FC<TooltipProps> = ({ text, position = 'top', children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<string>(position);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (targetRef.current && tooltipRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let newPosition = position;

      // Determine available space and adjust position if needed
      switch (position) {
        case 'top':
          if (targetRect.top < tooltipRect.height + 10) {
            newPosition = 'bottom';
          }
          break;
        case 'bottom':
          if (window.innerHeight - targetRect.bottom < tooltipRect.height + 10) {
            newPosition = 'top';
          }
          break;
        case 'left':
          if (targetRect.left < tooltipRect.width + 10) {
            newPosition = 'right';
          }
          break;
        case 'right':
          if (window.innerWidth - targetRect.right < tooltipRect.width + 10) {
            newPosition = 'left';
          }
          break;
      }

      setTooltipPosition(newPosition);
    }

    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative cursor-pointer w-full">
      <div
        ref={targetRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          ref={tooltipRef}
          className={`absolute z-999 w-full min-w-16 bg-black text-white text-center text-xs py-1 px-1.5 rounded-md shadow-3 
          ${tooltipPosition === 'top' ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-2' :
            tooltipPosition === 'bottom' ? 'top-full left-1/2 transform -translate-x-1/2 mt-2' :
            tooltipPosition === 'left' ? 'right-full top-1/2 transform -translate-y-1/2 mr-2' :
            'left-full top-1/2 transform -translate-y-1/2 ml-2'}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};
export default Tooltip;

