import React from "react";
import ReactDOM from "react-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiRobot2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { VscWand } from "react-icons/vsc";
import { TextArea } from "../../components/form";

type Props = {
  show?: boolean;
  onHide: () => void;
};

const AiMatchModal: React.FC<Props> = ({ show, onHide }) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const [value, setValue] = React.useState("");
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
        className={` bg-white py-5  flex flex-col lg:max-w-[55%]  md:rounded-2xl justify-center md:mx-6 md:my-auto mx-0`}
        ref={modalRef}
      >
        <div className="flex flex-col justify-center relative">
          <div className="flex items-center md:px-6 px-4">
            <div className="flex items-center gap-2">
              <VscWand size={28} className="text-primary" />
              <h3 className="text-xl font-semibold text-black dark:text-white sm:text-2xl mb-0">
                AI-Powered Applicant Matching
              </h3>
            </div>

            <button
              onClick={onHide}
              className="absolute -top-[12px] text-zinc-900 right-2 bg-slate-200 hover:bg-slate-300 rounded-full p-[4px]"
            >
              <RxCross2 size={18} className="" />
            </button>
          </div>

          <div className="px-10 py-5">
            <div className="bg-[#F9FAFB] border-stroke py-4 px-3 rounded-lg shadow mb-8">
              <div className="flex gap-2 mb-2 items-center text-[#4F46E5] font-semibold text-lg">
                <span>
                  <RiRobot2Line />
                </span>{" "}
                <span>How it works</span>
              </div>
              <p className="text-primary">
                Our AI analyzes the job description to find the best matches
                based on skills, experience, and qualifications. Simply paste
                the job description below and let our AI do the work.
              </p>
            </div>

            <div>
              <TextArea
                placeholder="Paste the full job description here..."
                label="Paste Job Description"
                value={value}
                onChange={(val: string) => setValue(val)}
                row={4}
              />
            </div>

            <div className="mb-4 my-7 w-full flex items-center gap-6 justify-end">
              <button className="text-zinc-700 hover:scale-105 duration-150">
                Cancel
              </button>
              <button disabled={value === ""} className="bg-primary disabled:bg-opacity-50 text-white justify-center font-semibold group rounded-md py-3 px-8 flex items-center gap-2">
                Find Matches{" "}
                <FaArrowRightLong className="group-hover:ml-4 duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,

    document.querySelector("#modal") as HTMLElement
  );
};

export default AiMatchModal;
