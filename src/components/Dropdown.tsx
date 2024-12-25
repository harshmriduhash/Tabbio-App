import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
  buttonContent?: React.ReactNode; 
  buttonText?: string;
  children?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonContent, children, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>
      {buttonContent || <button
        className="border border-gray-500 p-2 rounded-md"
        
      >
        {buttonText}
      </button>}
      </div>
     
      {isOpen && (
        <div className="absolute z-999 mt-2 -left-39 max-h-[17rem] pb-2 sm:-right-27 w-[340px] overflow-y-auto rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
         {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
