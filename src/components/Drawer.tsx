import { ReactNode, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactDOM from "react-dom";
import { IconType } from "react-icons";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string | ReactNode;
  width?: string;
}

interface Drawer2Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  width?: string;
  Icon?: IconType | any;
}

const Drawer = ({ isOpen, onClose, children, width, title }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={drawerRef}
      className={`fixed shadow-md overflow-y-auto right-0 custom-scrollbar top-0 h-full ${
        isOpen ? "animate-slideIn" : "animate-slideOut"
      } z-[99999] bg-white dark:bg-boxdark`}
      style={{
        width: width,
        // right: isOpen ? 0 : "-1000px",
      }}
    >
      <div className="h-full ease-in-out">
        <div className="flex justify-between bg-zinc-50/90 gap-1.5 py-2 px-3 items-center mb-3">
          {title && typeof title === "string" ? (
            <h3 className="text-lg font-semibold text-black dark:text-white">
              {title}
            </h3>
          ) : (
            title
          )}

          <button className="p-0" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export const Drawer2 = ({
  isOpen,
  onClose,
  children,
  width,
  title,
  Icon,
}: Drawer2Props) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return ReactDOM.createPortal(
    <div
      ref={drawerRef}
      className={`fixed shadow-3 overflow-y-auto right-0 custom-scrollbar rounded-l-3xl top-0 bottom-0 h-screen ${
        isOpen ? "animate-slideIn" : "animate-slideOut"
      } z-[99999] bg-white dark:bg-boxdark`}
      style={{
        width: width,
        // right: isOpen ? 0 : "-1000px",
      }}
    >
      <div className="pb-5 h-full ease-in-out bg-white rounded border-[1px] border-slate-300 relative overflow-hidden group">
        <div className="">
          <div className="flex w-full justify-between items-center py-8  text-white bg-gradient-to-r from-blue-600 to-violet-600 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-white ml-15 z-10">
              {title}
            </h3>
            <button className="px-5" onClick={onClose}>
              <AiOutlineClose />
            </button>
            <Icon className="absolute top-1 -left-3 text-[80px] text-blue-300 rotate-[20deg]" />
          </div>
        </div>

        {children}
      </div>
    </div>,
    document.querySelector("#drawer") as HTMLElement
  );
};

export default Drawer;
