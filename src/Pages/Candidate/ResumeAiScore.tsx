import React from "react";
import ReactDOM from "react-dom";
import { FaArrowRightLong, FaRegStar } from "react-icons/fa6";
import { LuChrome } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Logo from "../../assets/svg/t-blue.svg";
import { MdOutlineShield } from "react-icons/md";

type Props = {
  show?: boolean;
  onHide: () => void;
};

const ResumeAiScore: React.FC<Props> = ({ show, onHide }) => {
   
    if (!show) {
      return null;
    }
  
    return ReactDOM.createPortal(
      <div className="w-screen h-screen z-9999 bg-black bg-opacity-50 fixed top-0 flex md:items-center justify-center text-[#444444] overflow-x-auto">
        <div
          className={` bg-white py-5  flex flex-col lg:max-w-[60%]  md:rounded-2xl justify-center md:mx-6 md:my-auto mx-0`}
        >
          <div className="flex flex-col justify-center relative">
            <div className="flex items-center md:px-6 px-4">
              <div className="flex items-center gap-2">
                <img src={Logo} className="" />
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white sm:text-2xl mb-0">
                    Tabbio for Chrome
                  </h3>
                  <p className="text-zinc-500">
                    Apply smarter with AI-powered tools
                  </p>
                </div>
              </div>
  
              <button
                onClick={onHide}
                className="absolute -top-[12px] text-zinc-900 right-2 bg-slate-200 hover:bg-slate-300 rounded-full p-[4px]"
              >
                <RxCross2 size={18} className="" />
              </button>
            </div>
  
            <div className="px-10 pt-14 pb-6">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
                <div className="bg-[#F9FAFB] py-4 px-3 rounded-lg shadow">
                  <div className="flex gap-2 mb-2 items-center font-semibold text-lg">
                    <span className="text-primary">
                      <RiRobot2Line />
                    </span>{" "}
                    <span>AI Assistant</span>
                  </div>
                  <p className="text-zinc-500">
                    Get real-time job matching and application suggestions
                  </p>
                </div>
                <div className="bg-[#F9FAFB] py-4 px-3 rounded-lg shadow">
                  <div className="flex gap-2 mb-2 items-center font-semibold text-lg">
                    <span className="text-primary">
                      <FaRegStar />
                    </span>{" "}
                    <span>Smart Apply</span>
                  </div>
                  <p className="text-zinc-500">
                    One-click applications with auto-tailoredresumes
                  </p>
                </div>
                <div className="bg-[#F9FAFB] py-4 px-3 rounded-lg shadow">
                  <div className="flex gap-2 mb-2 items-center font-semibold text-lg">
                    <span className="text-primary">
                      <MdOutlineShield />
                    </span>{" "}
                    <span>Track Progress</span>
                  </div>
                  <p className="text-zinc-500">
                    Monitor all your applications in one place
                  </p>
                </div>
              </div>
  
              <div className="mb-4 my-7 w-full flex items-center justify-center">
                <button className="bg-primary text-white justify-center font-semibold group rounded-md py-3 px-8 flex items-center gap-2">
                  <LuChrome /> Add to Chrome{" "}
                  <FaArrowRightLong className="group-hover:ml-4 duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>,
  
      document.querySelector("#modal") as HTMLElement
    );
}

export default ResumeAiScore