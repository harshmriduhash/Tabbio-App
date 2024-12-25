import React from "react";
import ReactDOM from "react-dom";
import { FaRegStar } from "react-icons/fa6";
import { LuBriefcase, LuCrown, LuShield } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoFlashOutline } from "react-icons/io5";
import { HiOutlineDocumentCheck } from "react-icons/hi2";

type Props = {
  show?: boolean;
  onHide: () => void;
};

export const UpgradeCandidateSubscription: React.FC<Props> = ({
  show,
  onHide,
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
    <div className="w-screen h-screen z-9999 bg-black bg-opacity-50 fixed top-0 flex md:items-center justify-center text-[#444444] overflow-x-auto">
      <div
        className={` bg-white py-5  flex flex-col lg:max-w-[55%]  md:rounded-2xl justify-center md:mx-6 md:my-auto mx-0`}
        ref={modalRef}
      >
        <div className="flex flex-col justify-center relative">
          <div className="flex items-center md:px-6 px-4 border-b border-stroke">
            <div className="flex items-center gap-2 pb-2.5">
              <span className="text-[#C28F2C]">
                <LuCrown size={26} />
              </span>

              <h3 className="text-lg font-semibold text-black dark:text-white sm:text-xl mb-0">
                Upgrade to Premium
              </h3>
            </div>

            <button
              onClick={onHide}
              className="absolute -top-[6px] text-zinc-900 right-2 bg-slate-200 hover:bg-slate-300 rounded-full p-[4px]"
            >
              <RxCross2 size={18} className="" />
            </button>
          </div>

          <div className="lg:px-10 md:px-6 px-3.5 pt-14 pb-6">
            <div className="overflow-y-auto pr-1 custom-scrollbar h-[54vh] md:h-[52vh]">
              <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
                <div className="bg-[#F9FAFB] py-4 px-3 rounded-lg">
                  <div className="flex gap-2 mb-2 items-start">
                    <span className="text-[#C28F2C]">
                      <IoFlashOutline size={20} />
                    </span>{" "}
                    <div>
                      <h3 className="text-zinc-900 font-semibold mb-1">
                        AI-Powered Optimization
                      </h3>
                      <p className="text-zinc-500 text-sm">
                        Get real-time job matching and application suggestions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] py-4 px-3 rounded-lg">
                  <div className="flex gap-2 mb-2 items-start">
                    <span className="text-[#C28F2C]">
                      <LuShield size={20} />
                    </span>{" "}
                    <div>
                      <h3 className="text-zinc-900 font-semibold mb-1">
                        Custom Domain Control
                      </h3>
                      <p className="text-zinc-500 text-sm">
                        Unlimited personal URL customization with analytics
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] py-4 px-3 rounded-lg">
                  <div className="flex gap-2 mb-2 items-start">
                    <span className="text-[#C28F2C]">
                      <FaRegStar size={20} />
                    </span>{" "}
                    <div>
                      <h3 className="text-zinc-900 font-semibold mb-1">
                        Premium Templates
                      </h3>
                      <p className="text-zinc-500 text-sm">
                        Access to all professional CV templates and layouts
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] py-4 px-3 rounded-lg">
                  <div className="flex gap-2 mb-2 items-start">
                    <span className="text-[#C28F2C]">
                      <HiOutlineDocumentCheck size={20} />
                    </span>{" "}
                    <div>
                      <h3 className="text-zinc-900 font-semibold mb-1">
                        Tabbio Score™
                      </h3>
                      <p className="text-zinc-500 text-sm">
                        Detailed profile strength insights and improvement
                        recommendations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] py-4 px-3 rounded-lg">
                  <div className="flex gap-2 mb-2 items-start">
                    <span className="text-[#C28F2C]">
                      <RiRobot2Line size={20} />
                    </span>{" "}
                    <div>
                      <h3 className="text-zinc-900 font-semibold mb-1">
                        Application Kit
                      </h3>
                      <p className="text-zinc-500 text-sm">
                        AI-powered cover letters and company-specific insights
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] py-4 px-3 rounded-lg">
                  <div className="flex gap-2 mb-2 items-start">
                    <span className="text-[#C28F2C]">
                      <LuBriefcase size={20} />
                    </span>{" "}
                    <div>
                      <h3 className="text-zinc-900 font-semibold mb-1">
                        Smart Apply Extension
                      </h3>
                      <p className="text-zinc-500 text-sm">
                        One-click applications with automatic CV tailoring
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F3F4F6] py-4 px-3 rounded-lg w-full my-5">
                <div className="flex gap-3 mb-2 items-center">
                  <span className="text-[#C28F2C]">
                    <FaRegStar size={20} />
                  </span>{" "}
                  <div className="text-[#78350F]">
                    <h3 className="font-semibold mb-1">
                      Coming Soon: Enhanced Discovery
                    </h3>
                    <p className="text-sm">
                      Increased visibility in recruiter searches with priority
                      placement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 w-full flex flex-col gap-4.5 items-center justify-center">
              <button className="bg-gradient-to-r shadow-xl from-[#C28F2C] to-[#DAA520] hover:scale-95 duration-150 text-white justify-center font-medium group rounded-md py-3 px-8 flex items-center gap-2">
                Upgrade Now - $29/month
              </button>
              <p className="text-neutral-500 font-normal">No long-term commitment • Cancel anytime </p>
            </div>
          </div>
        </div>
      </div>
    </div>,

    document.querySelector("#modal") as HTMLElement
  );
};
