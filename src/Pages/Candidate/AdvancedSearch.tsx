import React from "react";
import ReactDOM from "react-dom";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

type Props = {
  show?: boolean;
  onHide: () => void;
  children: React.ReactNode;
};

const AdvancedSearchModal: React.FC<Props> = ({ show, onHide, children }) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click target is outside the modal content and not on the scrollbar
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        event.target !== document.documentElement
      ) {
        onHide(); // Call onHide when clicking outside the modal, excluding the scrollbar
      }
    };

    if (show) {
      // Add the event listener when the modal is shown
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      // Remove the event listener when the modal is hidden
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [show, onHide]);

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="w-screen h-screen z-9999 bg-black bg-opacity-50 fixed top-0 flex md:items-center justify-center text-[#444444] overflow-x-auto">
      <div
        className={` bg-white py-5  flex flex-col lg:max-w-[60%]  md:rounded-2xl justify-center md:mx-6 md:my-auto mx-0`}
        ref={modalRef}
      >
        <div className="flex flex-col justify-center relative">
          <div className="flex items-center md:px-6 px-4">
            <div className="flex items-center gap-2">
              <IoSearch size={28} className="text-primary" />
              <h3 className="text-xl font-semibold text-black dark:text-white sm:text-2xl mb-0">
                Advanced Search
              </h3>
            </div>

            <button
              onClick={onHide}
              className="absolute -top-[12px] text-zinc-900 right-2 bg-slate-200 hover:bg-slate-300 rounded-full p-[4px]"
            >
              <RxCross2 size={18} className="" />
            </button>
          </div>

          <div className="px-10 py-5">{children}</div>
        </div>
      </div>
    </div>,

    document.querySelector("#modal") as HTMLElement
  );
};

export default AdvancedSearchModal;
