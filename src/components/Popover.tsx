import React, { useState, ReactNode } from 'react';

interface PopoverProps {
  title: string;
  children: ReactNode;
  position: 'top' | 'bottom' | 'left' | 'right';
  icon: ReactNode;
  onClick: () => void;
}

const Popover: React.FC<PopoverProps> = ({ title, children, position, icon, onClick }) => {
  const [showPopover, setShowPopover] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShowPopover(true)}
      onMouseLeave={() => setShowPopover(false)}
    >
      <span className='cursor-pointer z-9999' onClick={onClick}>{icon}</span>
      {showPopover && (
        <div className={`absolute z-9999 ${positionClasses[position]} bg-white dark:bg-black min-w-65 rounded shadow-lg`}>
          <div className="font-semibold border-b border-stroke dark:border-strokedark p-1.5">{title}</div>
          <div className='p-2 text-sm'>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Popover;
