import { NavLink, useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import Header from "../../layout/Header";
import { Fragment, useEffect, useRef, useState } from "react";
import Modal from "../../components/modal";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import logo2 from "../../assets/nav-icons/jobseeker.svg";
import { AiOutlineHome } from "react-icons/ai";
import { motion } from "framer-motion";
import { Icons } from "../../components/icons";
import {
  iconVariants,
  itemVariants,
  wrapperVariants,
} from "../../AnimatedUi/staggeredDropdown";
import ResumeEditor from "./Resume";

const ResumeBuilder: React.FC = () => {
  const { user, isLoggedIn, signOut } = useApp();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebar = useRef<any>(null);
  const [logoutModal, setLogoutModal] = useState(false);
  const [open, setOpen] = useState(true);

  const [tab, _setTab] = useState("resume");
  const handleSignout = async () => {
    signOut();
    navigate("/");
  };

  useEffect(() => {
    if (!user && isLoggedIn) {
      navigate("/");
    }
  }, [user, isLoggedIn]);
  return (
    <div className="dark:bg-boxdark-2 bg-[#F2F4F6] dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Component */}
        <aside
          ref={sidebar}
          className={`absolute h-full left-0 top-0 z-9999 flex border-r border-stroke dark:border-strokedark ${
            sidebarOpen ? "lg:hidden" : "lg:static"
          } w-[260px] flex-col bg-white overflow-y-hidden text-[#4d4d4d] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* <!-- SIDEBAR HEADER --> */}
          <div className="flex items-center justify-center w-full gap-2 px-6 pt-7 pb-10">
            <img src={logo2} alt="Logo" className={` w-[125px] block`} />
          </div>
          {/* <!-- SIDEBAR HEADER --> */}

          <div className="sidebar-scrollbar custom-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden  hover:overflow-y-auto duration-300 ease-linear">
            {/* <!-- Sidebar Menu --> */}
            <nav className={`p-2 ${sidebarOpen ? "px-0" : "px-2"}`}>
              <Fragment>
                <ul className="gap-4 sm:mb-1 flex flex-col ">
                  <li>
                    <NavLink
                      to={`/app/jobseeker`}
                      className={`group relative flex items-center gap-2.5 font-medium rounded-sm  ${
                        !sidebarOpen ? "px-4 py-2" : "pl-5 py-3"
                      } font-medium duration-300 rounded-xl ease-in-out  
                             text-[#4d4d4d] hover:bg-jobseeker/15 hover:text-jobseeker`}
                    >
                      <AiOutlineHome className="w-4.5 h-4.5" />
                      {!sidebarOpen && "Job Hub"}
                      <p className="block lg:hidden">Job Hub</p>
                    </NavLink>
                  </li>
                  <li>
                    <motion.div
                      animate={open ? "open" : "closed"}
                      className="relative"
                    >
                      <button
                        onClick={() => setOpen(!open)}
                        className={`group relative flex w-full items-center gap-2.5 font-medium rounded-sm  ${
                          !sidebarOpen ? "px-4 py-2" : "pl-5 py-3"
                        } font-medium duration-300 rounded-xl ease-in-out  
                        text-[#4d4d4d] hover:bg-jobseeker/15 hover:text-jobseeker`}
                      >
                        <span>Resume Builder</span>
                        <motion.span
                          variants={iconVariants}
                          className="ml-auto"
                        >
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
                        className="flex flex-col z-999 gap-2 ml-5 px-2 py-1 border-l-2 border-stroke overflow-hidden"
                      >
                        <motion.li
                          variants={itemVariants}
                        //   onClick={onClick}
                          className={`flex items-center gap-2 py-2 px-4 font-medium whitespace-nowrap rounded-md ${
                            tab === "resume"
                              ? "text-jobseeker bg-jobseeker/15 hover:bg-jobseeker/90 hover:text-white"
                              : "hover:bg-jobseeker/15 hover:text-jobseeker text-[#4d4d4d] "
                          }   transition-colors cursor-pointer`}
                        >
                          <span>Resume</span>
                        </motion.li>
                        <motion.li
                          variants={itemVariants}
                        //   onClick={onClick}
                          className={`flex items-center gap-2 py-2 px-4 font-medium whitespace-nowrap rounded-md ${
                            tab === "cover_letter" 
                              ? "text-jobseeker bg-jobseeker/15 hover:bg-jobseeker/90 hover:text-white"
                              : "hover:bg-jobseeker/15 hover:text-jobseeker text-[#4d4d4d] "
                          }   transition-colors cursor-pointer`}
                        >
                          <span>Cover Letter</span>
                        </motion.li>
                      </motion.ul>
                    </motion.div>
                  </li>
                </ul>
              </Fragment>

              <div className="absolute bottom-8 w-full right-0 pr-2 pl-2.5">
                <div
                  className={`border border-primary relative flex cursor-pointer items-center gap-2.5 mb-3 rounded-full py-2 px-4 font-medium dark:text-primary hover:bg-primary bg-transparent text-primary hover:text-white duration-300 ease-in-out
               `}
                >
                  <MdOutlineFileDownload /> Download Extension
                </div>
                <NavLink
                  to={""}
                  onClick={() => setLogoutModal(true)}
                  className={`group relative flex items-center gap-2.5  rounded-xl py-2 px-4 font-medium hover:text-red-600 duration-300 ease-in-out`}
                >
                  <RiLogoutCircleLine className="w-5 h-5" />
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
                <RiLogoutCircleLine size={24} />
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
        </aside>
        {/* Sidebar Component */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto">
              <ResumeEditor />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
