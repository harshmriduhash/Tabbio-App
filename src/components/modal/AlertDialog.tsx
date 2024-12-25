import React from "react";
import { BsXCircleFill } from "react-icons/bs";

type AlertDialogProps = {
  show?: boolean;
  children?: React.ReactNode;
  size?: string;
  onHide: () => void;
  title?: string;
};

export default function AlertDialog({
  show,
  onHide,
  size,
  children,
  title,
}: AlertDialogProps) {
  return show ? (
    <div className="fixed top-0 left-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
      <div
        className={`${
          size ? size : "w-full max-w-142.5"
        } rounded-lg bg-white py-12 px-6 text-center dark:bg-boxdark relative`}
      >
        <div className="flex justify-between">
          <h2 className="font-bold absolute left-4 top-4">{title}</h2>
          <button onClick={onHide} className="absolute right-4 top-4">
            <BsXCircleFill size={25} />
          </button>
        </div>
        <div className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
          {children}
        </div>
      </div>
    </div>
  ) : null;
}
