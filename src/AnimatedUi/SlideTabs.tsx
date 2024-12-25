import { Dispatch, SetStateAction, useRef } from "react";
import { motion } from "framer-motion";

type Position = {
    left: number;
    width: number;
    opacity: number;
  };

const SlideTab = ({
  children,
  setPosition,
  tab,
  activeTab,
  onChange,
  noBg,
  landing=true,
  activeColor
}: {
  children: React.ReactNode;
  tab?: string;
  activeTab: string;
  onChange: (tab: string) => void;
  noBg: boolean;
  setPosition: Dispatch<SetStateAction<Position>>;
  landing?: boolean;
  activeColor?: string
}) => {
  const ref = useRef<null | HTMLLIElement>(null);
  let val: any = tab || ""

  let classNames = landing ? 
  "relative z-10 block cursor-pointer hover:text-primary py-2 px-3 text-sm font-medium md:text-base " : 
  "relative z-10 block cursor-pointer group py-2 px-3 text-sm font-medium md:text-base";
  let clsN = landing ? val === activeTab && !noBg ? classNames+' rounded-lg bg-gradient-to-r from-[#3B82F61A] to-[#A855F71A] shadow-lg text-primary' : classNames+' text-zinc-500' :
  val === activeTab && !noBg ? classNames+` rounded-md bg-white shadow-lg ${activeColor} ` : classNames+' bg-white/50 text-zinc-500'
  ;
  

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={() => onChange(val)}
      className={clsN}    
      >
      {children}
    </li>
  );
};

export const Cursor = ({ position, landing=true }: { position: Position, landing?:boolean }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className={`absolute z-0 h-10 px-3 rounded-md ${landing ? 'bg-gradient-to-r from-[#3B82F61A] to-[#A855F71A] text-primary shadow-md' : 'bg-white shadow-md text-primary'}  py-2`}
    />
  );
};

export default SlideTab;

