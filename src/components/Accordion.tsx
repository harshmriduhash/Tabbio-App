// src/components/Accordion.tsx
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

interface AccordionProps {
  items: {
    title: string | React.ReactNode;
    content: React.ReactNode | any;
    showIcon?: boolean;
    icon?: React.ReactNode;
    accordionHeaderBg?: string;
  }[];
  initialOpenIndex?: number | null;
}
interface Accordion2Props {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}
const Accordion: React.FC<AccordionProps> = ({ items, initialOpenIndex }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    initialOpenIndex !== undefined ? Number(initialOpenIndex) : null
  );

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full bg-white dark:bg-boxdark-2">
      {items.map((item, index) => {
        return (
          <div key={index} className="mb-4 bg-white dark:bg-boxdark-2">
            <button
              onClick={() => toggleItem(index)}
              className="w-full py-2 text-left bg-neutral-100 flex justify-between items-center"
            >
              <div className="flex ml-4 gap-2 items-center">
                {item.showIcon && (
                  <div className="text-zinc-500">{item.icon}</div>
                )}
                <span style={{ color: item.accordionHeaderBg }}>
                  {item.title}
                </span>
              </div>
              <div>
                {openIndex === index ? (
                  <IoIosArrowUp className="dark:text-primary mr-4" size={22} />
                ) : (
                  <IoIosArrowDown
                    className="dark:text-primary mr-4"
                    size={22}
                  />
                )}
              </div>
            </button>
            {openIndex === index && (
              <div className="py-3 px-4 text-sm bg-neutral-100 dark:bg-boxdark-2 dark:text-slate-50 mb-5 rounded-b-md">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const ContentAccordion: React.FC<Accordion2Props> = ({
  title,
  children,
  defaultOpen
}) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth <= 768 && defaultOpen ? true : false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full lg:flex lg:gap-4">
      {/* For large screens, content should always be visible */}
      <div className="hidden lg:block w-full py-4 bg-white shadow-md rounded-xl">
        <div className="mb-2 xl:border-b border-slate-200 px-4 pb-1.5">
          {title}
        </div>
        <div className="px-4">{children}</div>
      </div>

      {/* For small screens, accordion behavior */}
      <div className="block lg:hidden w-full">
        <button
          onClick={toggleAccordion}
          className="w-full flex justify-between items-center p-4 bg-white shadow-md rounded-md"
        >
          <div className="">{title}</div>
          <span>{isOpen ? "-" : "+"}</span>
        </button>

        {/* Accordion content with Framer Motion for animation */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="overflow-hidden bg-white shadow-md rounded-md"
        >
          <div className="p-4">
            <div>{children}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Accordion;
