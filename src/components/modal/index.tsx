import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { RxCross2 } from "react-icons/rx";

type WarningProps = {
  show?: boolean;
  closeButton?: boolean;
  title?: string | React.ReactNode;
  cancelText?: string;
  okText?: string;
  children?: React.ReactNode;
  size?: string;
  onHide: () => void;
  onProceed?: () => void;
  props?: any;
};

const Modal: React.FC<WarningProps> = ({
  show,
  onHide,
  // onProceed,
  props,
  title,
  children,
  closeButton = true,
  // cancelText,
  // okText,
  size,
}) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click target is outside the modal content and not on the scrollbar
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        event.target !== document.documentElement &&
        closeButton
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
        className={`${size ? size : "md:min-w-[50%] min-w-full"} ${
          props?.roundedMd ? "md:rounded-md" : "md:rounded-2xl"
        } bg-white py-5 max-sm:pt-8 flex flex-col  sm:justify-center md:mx-6 md:my-auto mx-0`}
        ref={modalRef}
      >
        <div className="flex flex-col justify-center relative">
          <div className="flex items-center md:px-6 pb-3 pt-1 px-4 border-b border-slate-100">
            {title && typeof title === "string" ? (
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {title}
              </h3>
            ) : (
              title
            )}

            {closeButton && (
              <button
                onClick={onHide}
                className="absolute -top-[12px] text-zinc-900 right-2 bg-slate-200 hover:bg-slate-300 rounded-full p-[4px]"
              >
                <RxCross2 size={18} className="" />
              </button>
            )}
          </div>

          <div className="px-10 max-sm:px-3 py-5">{children}</div>
        </div>
      </div>
    </div>,

    document.querySelector("#modal") as HTMLElement
  );
};

export const FullModal: React.FC<WarningProps> = ({
  show,
  onHide,
  // onProceed,
  // props,
  title,
  children,
  closeButton = true,
  // cancelText,
  // okText,
  size,
}) => {
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
    <div className="w-screen h-screen z-9999 bg-black bg-opacity-50 fixed top-0 flex justify-center text-[#444444] overflow-x-auto">
      <div className={`${size ? size : "w-full"} bg-white py-5`} ref={modalRef}>
        <div className="flex flex-col justify-center relative">
          <div className="flex items-center md:px-6 px-4">
            <h3 className="pb-2 text-xl font-semibold text-black dark:text-white sm:text-2xl">
              {title}
            </h3>
            {closeButton && (
              <button
                onClick={onHide}
                className="absolute -top-[12px] text-zinc-900 right-2 bg-slate-200 hover:bg-slate-300 rounded-full p-[4px]"
              >
                <RxCross2 size={18} className="" />
              </button>
            )}
          </div>

          <div className="px-10 py-5">{children}</div>
        </div>
      </div>
    </div>,

    document.querySelector("#modal") as HTMLElement
  );
};

interface ModalProps {
  title: string;
  onHide: () => void;
  show: boolean;
  children: React.ReactNode;
  size?: string;
}

export const Modal2: React.FC<ModalProps> = ({
  title,
  onHide,
  show,
  children,
  size,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onHide();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onHide]);

  return (
    <>
      {show && (
        <div className="fixed -z-99999 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div
            className={`${
              size ? size : "min-w-[50%]"
            }absolute bg-white rounded-2xl shadow-lg p-4`}
            ref={modalRef}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button
                onClick={onHide}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
