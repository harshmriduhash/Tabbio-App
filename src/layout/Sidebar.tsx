import { Fragment, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import logo1 from "../assets/brand/logo-1.svg";
import Modal from "../components/modal";
import { IoBuildOutline, IoDocumentTextOutline } from "react-icons/io5";
import {
  iconVariants,
  itemVariants,
  wrapperVariants,
} from "../AnimatedUi/staggeredDropdown";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { LuBriefcase, LuLogOut } from "react-icons/lu";
import icon from "../assets/svg/t-icon.svg";
import ExtensionModal from "../Pages/PageComponents/ExtensionModal";
import DropdownUser from "./DropdownUser";

const Icons = {
  arrowDown: IoIosArrowDown,
  arrowUp: IoIosArrowUp,
  previous: IoIosArrowBack,
  next: IoIosArrowForward,
};

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: any;
  setSidebarOpen: any;
}) => {
  const { category, signOut } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, _setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );
  const [extension, setExtension] = useState(false);
  const [open, setOpen] = useState(true);
  const [logoutModal, setLogoutModal] = useState(false);
  const handleSignout = async () => {
    signOut();
    navigate("/");
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { [key: string]: any }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { [key: string]: any }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute h-full left-0 top-0 z-9999 max-lg:z-99999 flex border-r border-stroke dark:border-strokedark ${
        sidebarOpen ? "lg:hidden" : "lg:static"
      } w-[260px] flex-col bg-white overflow-y-hidden text-[#4d4d4d] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="lg:flex items-center lg:justify-center w-full gap-2 px-6 pt-7 pb-10">
        <img
          src={logo1}
          alt="Logo"
          className={` w-[140px]
              
           lg:block hidden`}
        />
           {/* <!-- User Area --> */}
           <div className="lg:hidden block"><DropdownUser /></div>
          
          {/* <!-- User Area --> */}
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="sidebar-scrollbar custom-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden  hover:overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className={`p-2 ${sidebarOpen ? "px-0" : "px-2"}`}>
          <Fragment>
            <ul className="gap-4 sm:mb-1 flex flex-col ">
              <li>
                <NavLink
                  to={
                    category === "Candidate"
                      ? `/app/candidate/smart-resume`
                      : ``
                  }
                  className={`group relative flex items-center gap-1 max-lg:mx-2 font-medium rounded-lg  ${
                    !sidebarOpen ? "px-4 py-2" : "pl-5 py-2"
                  } font-medium duration-300 ease-in-out  ${
                    pathname.includes(
                      category === "Candidate"
                        ? `/app/candidate/smart-resume`
                        : `/app/company/dashboard`
                    )
                      ? ` text-primary
                                 bg-primary/15
                                   hover:text-white hover:bg-primary
                                   dark:text-white `
                      : `text-[#4d4d4d] hover:bg-primary/15 hover:text-primary `
                  }`}
                >
                  {category === "Candidate" ? (
                    <span className={``}>
                      <IoDocumentTextOutline size={20} />{" "}
                    </span>
                  ) : (
                    <span></span>
                  )}
                  SmartResume
                </NavLink>
              </li>
              {category === "Candidate" && (
                <li>
                  <motion.div
                    animate={open ? "open" : "closed"}
                    className="relative"
                  >
                    <button
                      onClick={() => setOpen(!open)}
                      className={`group relative flex w-full items-center gap-2.5 text-sm font-medium duration-300 rounded-xl ease-in-out  px-4 py-2 
                       text-[#4d4d4d]`}
                    >
                      <span className="uppercase">Career Tools</span>
                      <motion.span variants={iconVariants} className="ml-auto">
                        <span className="ml-auto text-lg">
                          {open ? <Icons.arrowUp /> : <Icons.next />}
                        </span>
                      </motion.span>
                    </button>

                    <motion.ul
                      initial={wrapperVariants.closed}
                      variants={wrapperVariants}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="flex flex-col z-999 gap-2 ml-5 px-2 py-1 text-sm border-l-2 border-stroke overflow-hidden"
                    >
                      <motion.li
                        variants={itemVariants}
                        onClick={() => navigate(`/app/candidate/applications`)}
                        className={`flex items-center gap-2 py-2 px-1.5 hover:bg-primary/15 hover:text-primary font-medium whitespace-nowrap rounded-md    transition-colors cursor-pointer ${
                          pathname.includes(`/app/candidate/applications`)
                            ? ` text-primary
                                       bg-primary/15
                                         hover:text-white hover:bg-primary
                                         dark:text-white `
                            : `text-[#4d4d4d] hover:bg-primary/15 hover:text-primary `
                        }`}
                      >
                        <span>
                          <LuBriefcase />{" "}
                        </span>{" "}
                        <span>Application</span>
                      </motion.li>
                      <motion.li
                        variants={itemVariants}
                        onClick={() =>
                          navigate(`/app/candidate/resume-builder`)
                        }
                        className={`flex items-center gap-2 py-2 px-1.5 font-medium hover:bg-primary/15 hover:text-primary whitespace-nowrap rounded-md   transition-colors cursor-pointer ${
                          pathname.includes(`/app/candidate/resume-builder`)
                            ? ` text-primary
                                       bg-primary/15
                                         hover:text-white hover:bg-primary
                                         dark:text-white `
                            : `text-[#4d4d4d] hover:bg-primary/15 hover:text-primary `
                        }`}
                      >
                        <span>
                          <IoBuildOutline />{" "}
                        </span>{" "}
                        <span>CV Builder</span>
                      </motion.li>
                      <motion.li
                        variants={itemVariants}
                        onClick={() => setExtension(true)}
                        className={`flex items-center gap-2 py-2 px-1.5 font-medium hover:bg-primary/15 hover:text-primary whitespace-nowrap rounded-md   transition-colors cursor-pointer`}
                      >
                        <span>
                          <img src={icon} className="w-3" />
                        </span>{" "}
                        <span>Job Board Extension</span>
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                </li>
              )}
            </ul>
          </Fragment>

          <div className="absolute bottom-8 w-full right-0 pr-2 pl-2.5">
            <NavLink
              to={""}
              onClick={() => setLogoutModal(true)}
              className={`group relative flex items-center gap-2.5  rounded-xl py-2 px-4 font-medium hover:text-red-600 duration-300 ease-in-out`}
            >
              <LuLogOut className="w-5 h-5" />
              Logout
            </NavLink>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
      <Modal
        show={logoutModal}
        onHide={() => setLogoutModal(false)}
        size="md:w-[450px] w-[350px]"
      >
        <div className="flex flex-col justify-center">
          <span className="mx-auto inline-block bg-danger/15 rounded-full p-4 text-red-600 mb-3">
            <LuLogOut size={24} />
          </span>

          <h1 className="text-lg text-black/90 mb-6 text-center">
            Are you sure you want to logout?
          </h1>

          <div className="-mx-3 flex flex-col gap-y-6 px-6">
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={() => setLogoutModal(false)}
                className="block w-full rounded-full border border-primary bg-primary p-3 text-center font-medium text-white transition hover:opacity-95"
              >
                No
              </button>
            </div>
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={() => handleSignout()}
                className="block w-full rounded-full text-meta-1 border border-meta-1 bg-white p-3 text-center font-medium hover:text-white transition hover:bg-meta-1"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </Modal>
      {extension && (
        <ExtensionModal show={extension} onHide={() => setExtension(false)} />
      )}
    </aside>
  );
};

export default Sidebar;
