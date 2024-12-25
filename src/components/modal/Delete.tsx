import React from "react";
import { BsXCircleFill } from "react-icons/bs";

type DeleteProps = {
  show?: boolean;
  title?: string;
  desc?: string;
  disabled?: boolean;
  isLoading?: boolean;
  isLoadingText?: string;
  cancelText?: string;
  okText?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: string;
  onHide: () => void;
  onProceed: () => void;
};

export default function Delete({
  show,
  onHide,
  onProceed,
  title,
  desc,
  disabled,
  isLoading,
  isLoadingText,
  // icon,
  size,
  children,
  cancelText,
  okText,
}: DeleteProps) {
  return show ? (
    <div className="fixed top-0 left-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
      <div
        className={`${
          size ? size : "w-full max-w-[300px] md:max-w-[420px]"
        } rounded-xl bg-white py-12 px-6 text-center dark:bg-boxdark relative`}
      >
        <button onClick={onHide} className="absolute right-4 top-4 text-neutral-300 hover:text-neutral-400">
          <BsXCircleFill size={25} />
        </button>

        {/* <span className="mx-auto inline-block bg-[#bf09093b] rounded-full p-2.5 text-[#ee1919]">
          {icon ? icon : <BsTrash3Fill className="h-[20px] w-[20px]" />}
        </span> */}

        <h3 className="mt-1 pb-2 text-xl font-semibold text-black/80 dark:text-white">
          {title || children}
        </h3>
        <p className="mb-10">{desc}</p>
        <div className="mx-6 flex flex-col gap-y-6">
          <div className="w-full px-3">
            <button
              disabled={disabled}
              onClick={() => onProceed()}
              className="block w-full rounded-full border border-meta-1 hover:bg-meta-1 text-meta-1 py-2 px-3 text-center font-medium hover:text-white transition"
            >
              {isLoading ? isLoadingText : okText || "Yes, Delete"}
            </button>
          </div>
          <div className="w-full px-3">
            <button
              onClick={() => onHide()}
              className="block w-full rounded-full border border-stroke bg-transparent hover:bg-gray px-3 py-2 text-center font-medium text-black transition"
            >
              {cancelText || "No, Cancel"}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
