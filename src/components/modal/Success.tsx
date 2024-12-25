import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

type SuccessModalProps = {
  show?: boolean;
  title?: string;
  desc?: any;
  buttonText?: string;
  cancelButtonText?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: string;
  cancelBtn?: boolean;
  onProceed: () => void;
  onCancel: () => void;
};

export default function SuccessModal({
  show,
  onProceed,
  title,
  desc,
  icon,
  size,
  children,
  buttonText,
  cancelButtonText,
  cancelBtn,
  onCancel,
}: SuccessModalProps) {
  return show ? (
    <div className="fixed top-0 left-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
      <div
        className={`${
          size ? size : "w-full max-w-142.5"
        } rounded-lg bg-white py-12 px-6 text-center dark:bg-boxdark relative`}
      >
        <span className="mx-auto inline-block bg-[#3843D03b] rounded-full p-4 text-primary">
          {icon ? icon : <BsFillPatchCheckFill className="w-8 h-8" />}
        </span>

        <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
          {title}
        </h3>
        <div className="mb-10">{desc}</div>
        {children}
        <div className="-mx-3 flex gap-4 items-center justify-center">
          {cancelBtn && (
            <button
              onClick={() => onCancel()}
              className="block w-[80%] rounded-md border border-stroke bg-gray hover:bg-slate-300/70 p-3 text-center text-black font-medium transition dark:border-strokedark"
            >
              {cancelButtonText || "Go Back"}
            </button>
          )}

          <button
            onClick={() => onProceed()}
            className="block w-[80%] rounded-md border border-stroke bg-primary hover:bg-opacity-90 p-3 text-center text-white font-medium transition"
          >
            {buttonText || "Proceed"}
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
