import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  id,
  position
}: {
  setActive: (id: string | null) => void;
  active: string | null;
  id:string;
  item: any;
  children?: React.ReactNode;
  position?:string;
}) => {
  return (
    <div onClick={() => {
      if (!active) {
        setActive(id)
      } else {
        setActive(null)
      }
    }} className="relative bg-zinc-50/90">
      <motion.div
        transition={{ duration: 0.3 }}
        className="cursor-pointer z-9999 text-black hover:opacity-[0.9] flex space-x-2 items-center"
      >
        {item}
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === id && (
            <div className={`${position ? position : ''} absolute left-1/2 z-99 transform -translate-x-1/2 pt-5`}>
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white  backdrop-blur-sm rounded-md overflow-hidden border border-stroke shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4 max-sm:p-2"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  // setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      // onMouseLeave={() => setActive(null)} // resets the state
      className="relative border border-transparent bg-zinc-50/90 flex flex-wrap justify-between items-center md:justify-center gap-4 max-sm:gap-1.5"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link to={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 w-[140px] h-[70px] rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
