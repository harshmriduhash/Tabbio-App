import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import { HiOutlineTemplate, HiOutlineUser } from "react-icons/hi";
import {
  MdOutlineArrowForwardIos,
  MdOutlineFileDownload,
} from "react-icons/md";
import { RxTarget } from "react-icons/rx";
import { Link } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";

const Tasks: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
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
      className={`fixed shadow-3 overflow-y-auto right-0 w-[500px] custom-scrollbar  rounded-l-md top-0 bottom-0 h-screen ${
        isOpen ? "animate-slideIn" : "animate-slideOut"
      } z-[99999]`}
    >
      <div className="p-5 z-[9999] h-full ease-in-out shadow-lg backdrop-blur-lg bg-primary/5 rounded border-[1px] border-slate-300 relative overflow-hidden">
        <div className="">
          <div className="flex w-full justify-between items-center transition-transform duration-300">
            <h3 className="md:text-2xl text-lg  font-semibold font-outfit z-10">
              Welcome to YourPal AI
            </h3>

            <button
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200"
              onClick={onClose}
            >
              <AiOutlineClose />
            </button>
          </div>
          <p>Complete these Steps below to get you fully set-up</p>
        </div>

        <div className="my-8">
          <div className="flex flex-col space-y-6">
            <h6 className="text-lg font-semibold font-outfit">
              Let's get you started
            </h6>
            <div className="flex gap-2 items-center border border-neutral-300 rounded-sm p-1">
              <div className="rounded-full p-2">
                <RxTarget className="text-primary" size={20} />
              </div>
              <div className="w-full mb-1.5">
                <p className="mb-1">50% Complete</p>
                <ProgressBar percent={50} />
              </div>
            </div>

            <Link to="/app/persona/add-persona" className="flex gap-2 items-center py-2.5 px-2">
              <div className="rounded-full p-2 bg-primary/15">
                <HiOutlineUser className="text-primary" size={20} />
              </div>
              <div>
                <h6 className="font-medium">Create a Persona</h6>
                <p className="text-sm">Lorem Ipsum ipsum Lorem Ipsum ipsum </p>
              </div>
              <div className="ml-auto">
                <MdOutlineArrowForwardIos />
              </div>
            </Link>

            <Link to="" className="flex gap-2 items-center py-2.5 px-2">
              <div className="rounded-full p-2 bg-primary/15">
                <FiLink className="text-primary" size={20} />
              </div>
              <div>
                <h6 className="font-medium">Link your Linkedin Profile</h6>
                <p className="text-sm">Lorem Ipsum ipsum Lorem Ipsum ipsum </p>
              </div>
              <div className="ml-auto">
                <MdOutlineArrowForwardIos />
              </div>
            </Link>

            <Link to="/app/templates/new-template" className="flex gap-2 items-center py-2.5 px-2">
              <div className="rounded-full p-2 bg-primary/15">
                <HiOutlineTemplate className="text-primary" size={20} />
              </div>
              <div>
                <h6 className="font-medium">Create a Template</h6>
                <p className="text-sm">Lorem Ipsum ipsum Lorem Ipsum ipsum </p>
              </div>
              <div className="ml-auto">
                <MdOutlineArrowForwardIos />
              </div>
            </Link>

            <Link to="" className="flex gap-2 items-center py-2.5 px-2">
              <div className="rounded-full p-2 bg-primary/15">
                <MdOutlineFileDownload className="text-primary" size={20} />
              </div>
              <div>
                <h6 className="font-medium">Download Extension</h6>
                <p className="text-sm">Lorem Ipsum ipsum Lorem Ipsum ipsum </p>
              </div>
              <div className="ml-auto">
                <MdOutlineArrowForwardIos />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <span className="h-40 w-40 bg-primary/25 rounded-full absolute left-0 bottom-0"></span>
      <span className="h-40 w-40 bg-primary/25 rounded-full absolute right-0 top-0"></span>
    </div>,
    document.querySelector("#drawer") as HTMLElement
  );
};

export default Tasks;
