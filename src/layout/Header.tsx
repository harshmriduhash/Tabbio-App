// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import { BsList } from "react-icons/bs";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import DropdownSupport from "./DropdownSupport";
import SlideTab, { Cursor } from "../AnimatedUi/SlideTabs";
import { useState } from "react";
import { CgFileDocument } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { MdBusiness } from "react-icons/md";
import StaggeredDropDown, {
  AnimatedOption,
} from "../AnimatedUi/staggeredDropdown";
import { IoIosArrowDown } from "react-icons/io";
import logo1 from "../assets/brand/logo-1.svg";


type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

const Header = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { changeCategory } = useApp();
  const navigate = useNavigate();
  const [tab, setTab] = useState("Candidate");
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hover, setHover] = useState(false);

  return (
    <header className="sticky top-0 z-9999 bg-light flex w-full bg-transparent dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow bg-light items-center gap-3 py-3 px-4 md:px-6 2xl:px-11">
        <div>
        <img
          src={logo1}
          alt="Logo"
          className={` w-[70px] md:w-[80px]
              
           lg:hidden`}
        />
        
        </div>
        

        <div className="max-md:hidden">
          <ul
            onMouseLeave={() => {
              setPosition((pv) => ({
                ...pv,
                opacity: 0,
              }));
              setHover(false);
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
            className="relative flex w-fit rounded-md shadow-inner shadow-zinc-400/80 bg-[#F5F6FD]"
          >
            <SlideTab
              activeTab={tab}
              tab="Candidate"
              onChange={(tab) => {
                setTab(tab);
                changeCategory(tab);
                navigate(`/app/candidate/dashboard`);
              }}
              setPosition={setPosition}
              noBg={hover}
              landing={false}
              activeColor="text-primary"
            >
              <div className="flex gap-1.5 text-sm items-center">
                <span className="md:flex items-center font-medium gap-1.5 hidden">
                  <CgFileDocument className="" />
                  Smart Resume
                </span>
                <span className="flex text-xs items-center gap-1.5 rounded-full bg-primary/10 px-2 py-1">
                  <TbWorld />
                  Personal
                </span>
              </div>
            </SlideTab>
            <SlideTab
              activeTab={tab}
              onChange={(tab) => {
                setTab(tab);
                changeCategory(tab);
              }}
              setPosition={setPosition}
              noBg={hover}
              landing={false}
              activeColor="text-[#9333EA]"
            >
              <div className="flex gap-1.5 items-center text-sm">
                <span className="md:flex gap-1.5 items-center hidden">
                  <LuUsers className="" />
                  ShareList
                </span>
                <span className="flex items-center gap-1.5 rounded-full px-1.5 py-1 bg-[#9333EA]/10 text-xs">
                  <MdBusiness />
                  Personal
                </span>
              </div>
            </SlideTab>

            <Cursor position={position} landing={false} />
          </ul>
        </div>
        <div
          className={`md:hidden block rounded-md ${
            tab === "Candidate"
              ? "bg-primary/10 text-primary"
              : "bg-[#9333EA]/10 text-[#9333EA]"
          }`}
        >
          <StaggeredDropDown
            buttonIcon={<IoIosArrowDown />}
            buttonText={
              <span className="flex gap-1 items-center max-sm:text-xs">
                {tab === "Candidate" ? <TbWorld className="text-primary" /> : <MdBusiness className="text-[#9333EA]" />}
                {tab === "Candidate" ? "Personal" : "Business"}
              </span>
            }
          >
            <AnimatedOption
              text="Personal"
              Icon={<TbWorld className="text-primary" />}
              onClick={() => {}}
            />

            <AnimatedOption
              text="Business"
              Icon={<MdBusiness className="text-[#9333EA]" />}
              onClick={() => {}}
            />
          </StaggeredDropDown>
        </div>

        <div className="flex ms-auto items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Support --> */}
            <DropdownSupport />
            {/* <!-- Support --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <div className="lg:block hidden"><DropdownUser /></div>
          
          {/* <!-- User Area --> */}

          <div className="flex items-center gap-2 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm  bg-white p-1 shadow-sm dark:border-strokedark dark:bg-boxdark"
          >
            <BsList className="text-primary font-extrabold w-6 h-6" />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
          <NavLink to="/app">
          
          </NavLink>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
