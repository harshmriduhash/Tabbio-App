import {
  FaCircle,
  FaCircleCheck,
  FaPlus,
  FaRegClock,
  FaRegStar,
} from "react-icons/fa6";
import { useApp } from "../../context/AppContext";
import DefaultLayout from "../../layout/DefaultLayout";
import { BsEye, BsSliders2Vertical } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { useState } from "react";
import ResumeAnalytics from "./ResumeAnalytics";
import { LuBriefcase, LuBuilding2, LuClock, LuPuzzle } from "react-icons/lu";
import { MdCancel, MdShare } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";
import { RiAwardLine, RiRobot2Line } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi";
import { mockApplicationData } from "../../data/mockData";
import { IoDocumentTextOutline, IoLocationOutline } from "react-icons/io5";
import { formatDateString } from "../../lib/utils/formatters";
import { paginate } from "../../lib/utils";
import TablePagination from "../../components/table/TablePagination";
import StaggeredDropDown, {
  AnimatedOption,
} from "../../AnimatedUi/staggeredDropdown";
import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";
import { BiLoaderAlt } from "react-icons/bi";
import ExtensionModal from "../PageComponents/ExtensionModal";
import AiMatchModal from "./AiMatch";
import AdvancedSearchModal from "./AdvancedSearch";
import CreateApplicationKit from "./CreateApplicationKit";
import Tabs, { Tab } from "../../components/tabs";

const Applications: React.FC = () => {
  const { user } = useApp();
  const [allApplications, _setAllApplications] =
    useState<any[]>(mockApplicationData);
  const [tab2, setTab2] = useState("All");
  const [_status, setStatus] = useState("");
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [extension, setExtension] = useState(false);
  const [aiMatch, setAiMatch] = useState(false);
  const [aiSearch, setAiSearch] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const pagination = paginate(5, Number(page), Number(itemsPerPage));

  return (
    <DefaultLayout>
      <section>
        <div className="bg-zinc-50/90 py-2.5 px-4.5 text-sm flex flex-wrap lg:items-center justify-between gap-3">
          <div className="flex items-center gap-4 max-sm:justify-between">
            <div className="flex items-center gap-1">
              <FaCircle size={10} className="text-green-500 max-lg:hidden" />
              <span>{user?.plan || "Free Plan"}</span>
              <button className="py-1 px-1.5 ml-1 text-xs hover:scale-x-105 text-white rounded-full bg-[#C89529]">
                Upgrade <span className="max-lg:hidden">to Premium</span>
              </button>
            </div>
            <button
              onClick={() => setShowAnalytics(true)}
              className="flex items-center gap-1 hover:scale-x-105 duration-100"
            >
              <BsEye className="max-lg:hidden" />
              <span className="max-md:hidden">
                {user?.plan || "10 profile views"}
              </span>
              <AiOutlineBarChart className="text-primary text-lg" />
            </button>
          </div>

          <div className="flex items-center  gap-4">
            <div className="lg:flex hidden items-center gap-1 text-zinc-300 hover:scale-x-105 duration-100">
              <LuClock className="" />
              <span>{user?.plan || "Updated 1d ago"}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCircle size={10} className="text-green-500 max-md:hidden" />
              <span className="max-md:hidden">
                {user?.plan || "tabbio.com/name"}
              </span>
              <button className="py-1 px-1.5 md:ml-1 max-md:pl-0 flex items-center gap-1 hover:scale-x-105 ">
                <MdShare /> <span className="max-md:hidden">Share</span>
              </button>
            </div>
            <button className="text-primary hover:scalex-x-105 inline-flex items-center gap-1.5">
              <span className="max-md:hidden">Edit Resume</span>{" "}
              <FaRegEdit size={14} className="" />
            </button>
          </div>
        </div>

        <div className="md:px-8 px-3 py-4">
          <div className="mb-5">
            <h3 className="text-zinc-950 font-bold text-lg md:text-xl">
              Application™
            </h3>
            <p className="text-zinc-500">
              Track and manage your job applications
            </p>
          </div>

          <div className="w-full flex items-center justify-between gap-4 lg:flex-row flex-col">
            <div className="bg-white flex items-center rounded-xl border border-stroke justify-between max-lg:w-full px-2 py-2 w-[450px]">
              <div className="relative ">
                <button className="absolute top-1/2 left-0 -translate-y-1/2 pl-3">
                  <TbSearch />
                </button>

                <input
                  type="text"
                  placeholder="Search"
                  // value={search}
                  // onChange={(e) => setSearch(e.target.value)}
                  className=" border-none max-sm:w-[180px]  bg-white text-sm pr-3 pl-8 focus:outline-none "
                />
              </div>
              <div className="flex gap-2 items-center">
                <button className="" onClick={() => setAiSearch(true)}>
                  <BsSliders2Vertical />
                </button>
                <button
                  onClick={() => setAiMatch(true)}
                  className="flex gap-1 items-center justify-center max-sm:w-[100px] px-3 text-sm py-1 hover:scale-y-105 bg-primary/10 text-primary rounded-lg"
                >
                  <RiRobot2Line className="max-sm:text-sm" />
                  AI Match
                  <HiOutlineSparkles className="max-sm:hidden" />
                </button>
              </div>
            </div>
            <div className="flex gap-4 max-md:gap-2 items-center max-lg:w-full">
              <button
                onClick={() => setExtension(true)}
                className="flex gap-2 max-md:flex-col max-md:gap-1 max-md:px-4.5  max-xs:px-2 items-center  justify-center px-6 py-2 rounded-md hover:scale-95 duration-150 text-white bg-gradient-to-br from-[#374151] to-[#1F2937]"
              >
                <span className="md:bg-white/10 md:p-1 text-sm md:rounded-md max-xs:hidden">
                  <LuPuzzle />
                </span>
                Get Chrome Extension
              </button>
              <button
                onClick={() => setCreateModal(true)}
                className="flex max-md:flex-col max-md:gap-1 max-md:py-2 max-md:px-4.5 gap-2 items-center justify-center px-6 py-2.5 rounded-md hover:scale-95 duration-150 text-white bg-primary"
              >
                <FaPlus className="max-md:text-sm max-xs:hidden" /> New
                Application
              </button>
            </div>
          </div>

          <div className="mt-3">
            <Tabs>
              <Tab
                activeTab={tab2}
                onChange={(tab) => {
                  setTab2(tab);
                  setStatus("");
                }}
              >
                All
              </Tab>
              <Tab
                activeTab={tab2}
                onChange={(tab) => {
                  setTab2(tab);
                  setStatus("Draft");
                }}
              >
                Applied
              </Tab>
              <Tab
                activeTab={tab2}
                onChange={(tab) => {
                  setTab2(tab);
                  setStatus("Published");
                }}
              >
                Interviewing
              </Tab>
              <Tab
                // tab=""
                activeTab={tab2}
                onChange={(tab) => {
                  setTab2(tab);
                  setStatus("Pending_Approval");
                }}
              >
                Offered
              </Tab>
              <Tab
                // tab=""
                activeTab={tab2}
                onChange={(tab) => {
                  setTab2(tab);
                  setStatus("Pending_Approval");
                }}
              >
                Accepted
              </Tab>
              <Tab
                // tab=""
                activeTab={tab2}
                onChange={(tab) => {
                  setTab2(tab);
                  setStatus("Pending_Approval");
                }}
              >
                Rejected
              </Tab>
            </Tabs>
          </div>

          <div className="mt-20 w-full">
            {false ? (
              <div className="w-full flex justify-center items-center">
                <div className="bg-white shadow-3 rounded-lg py-8 px-4 flex flex-col items-center gap-6 justify-center w-full md:w-[60%]">
                  <div className="rounded-full text-primary bg-primary/5 flex items-center animate-pulse justify-center w-12 h-12">
                    <LuBriefcase size={32} />
                  </div>
                  <div className="text-center mb-3">
                    <h4 className="text-zinc-950 text-xl font-bold mb-2.5">
                      Loading up your Application kits
                    </h4>
                    <p className="text-zinc-500">
                      Please wait while we fetch your data{" "}
                    </p>
                  </div>
                </div>
              </div>
            ) : allApplications?.length > 0 ? (
              <div className="w-full">
                <ul className="space-y-5 w-full">
                  {allApplications?.map((val: any, index: number) => (
                    <li
                      key={index}
                      className="bg-white w-full shadow-3 rounded-lg p-3"
                    >
                      <div className="flex items-center justify-between md:hidden w-full mb-2">
                        <div>
                          <p className="text-zinc-950 text-lg  max-md:text-base font-bold flex items-center gap-1.5">
                            {val?.job_role}
                            <span>
                              {val?.ai && (
                                <LuPuzzle className="text-slate-500" />
                              )}
                            </span>
                          </p>
                        </div>

                        <div>
                          <StaggeredDropDown>
                            <AnimatedOption
                              text="View Resume"
                              onClick={() => {}}
                            />
                            <AnimatedOption
                              text="View Cover Letter"
                              onClick={() => {}}
                            />
                          </StaggeredDropDown>
                        </div>
                      </div>
                      <div className="flex items-center max-md:flex-wrap text-sm gap-2">
                        <p className="text-zinc-950 text-lg max-md:text-base font-bold max-md:hidden">
                          {val?.job_role}
                        </p>
                        {val?.ai && (
                          <LuPuzzle className="text-slate-500 max-md:hidden" />
                        )}
                        <div>
                          <StaggeredDropDown
                            styles={classNames(
                              "rounded-full px-3 py-1.5 flex items-center gap-2",
                              {
                                "bg-[#2563EB]/10 text-[#2563EB]":
                                  val?.status === "applied",
                                "bg-danger/10 text-danger":
                                  val?.status === "rejected",
                                "bg-[#D97706]/10 text-[#D97706]":
                                  val?.status === "offered",
                                "bg-[#9333EA]/10 text-[#9333EA]":
                                  val?.status === "interviewing",
                                "bg-success/10 text-success":
                                  val?.status === "accepted",
                              }
                            )}
                            buttonText={
                              false ? (
                                <span className={`flex items-center gap-1.5`}>
                                  <BiLoaderAlt className="animate-spin text-zinc-700" />{" "}
                                  Loading
                                </span>
                              ) : (
                                <span className={`flex items-center gap-1.5`}>
                                  {val?.status === "interviewing" ? (
                                    <RiRobot2Line />
                                  ) : val?.status === "accepted" ? (
                                    <FaCircleCheck />
                                  ) : val?.status === "rejected" ? (
                                    <MdCancel className="text-danger" />
                                  ) : val?.status === "offered" ? (
                                    <RiAwardLine />
                                  ) : (
                                    <FaRegClock />
                                  )}
                                  {val?.status}
                                </span>
                              )
                            }
                            buttonIcon={
                              <IoIosArrowForward className="text-zinc-800" />
                            }
                          >
                            <AnimatedOption
                              text="Applied"
                              Icon={<FaRegClock className="text-primary" />}
                              onClick={() => {}}
                            />
                            <AnimatedOption
                              text="Interviewing"
                              Icon={<RiRobot2Line className="text-[#9333EA]" />}
                              onClick={() => {}}
                            />
                            <AnimatedOption
                              text="Offered"
                              Icon={<RiAwardLine className="text-warning" />}
                              onClick={() => {}}
                            />
                            <AnimatedOption
                              text="Accepted"
                              Icon={<FaCircleCheck className="text-success" />}
                              onClick={() => {}}
                            />
                            <AnimatedOption
                              text="Rejected"
                              Icon={<MdCancel className="text-danger" />}
                              onClick={() => {}}
                            />
                          </StaggeredDropDown>
                        </div>

                        <span className="bg-[#F3E8FF] text-[#9333EA] text-sm flex items-center gap-2 rounded-full px-4 py-1">
                          <FaRegStar className="text-[#FBBF24]" />{" "}
                          {val?.match_score + "% Match"}
                        </span>
                        <div className="ml-auto md:block hidden">
                          <StaggeredDropDown>
                            <AnimatedOption
                              text="View Resume"
                              onClick={() => {}}
                            />
                            <AnimatedOption
                              text="View Cover Letter"
                              onClick={() => {}}
                            />
                          </StaggeredDropDown>
                        </div>
                      </div>

                      <div className="my-3 text-zinc-500">
                        <ul className="list-disc gap-x-4 gap-y-1 flex-wrap flex items-center">
                          <li className="flex gap-1 items-center">
                            <LuBuilding2 />
                            {val?.company?.name || "Unknown"}
                          </li>
                          <li className="flex gap-1 items-center">
                            <IoLocationOutline />
                            {val?.company?.location}
                          </li>
                          <li className="flex gap-1 items-center">
                            <FaRegClock />
                            {val?.date
                              ? formatDateString(val?.date)
                              : "Unspecified"}
                          </li>
                        </ul>
                      </div>

                      <div className="text-zinc-500 mb-1.5 flex gap-1 items-center">
                        <span className="text-primary">
                          <IoDocumentTextOutline />
                        </span>
                        <span>{val?.resume_name} Resume</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="my-8 flex w-full justify-end">
                  <TablePagination
                    data={allApplications}
                    page={page}
                    pagination={pagination}
                    setPage={setPage}
                    setPageLimit={setItemsPerPage}
                    pageLimit={itemsPerPage}
                  />
                </div>
              </div>
            ) : (
              <div className="w-full flex justify-center items-center">
                <div className="bg-white shadow-3 rounded-lg py-8 px-4 flex flex-col items-center gap-6 justify-center w-full md:w-[60%]">
                  <div className="rounded-full text-primary bg-primary/5 flex items-center justify-center w-12 h-12">
                    <LuBriefcase size={32} />
                  </div>
                  <div className="text-center">
                    <h4 className="text-zinc-950 text-xl font-bold mb-2.5">
                      Create Your First Application kit
                    </h4>
                    <p className="text-zinc-500">
                      Start Building your kit to track and manage your job
                      applications{" "}
                    </p>
                  </div>

                  <button className="flex gap-2 items-center justify-center px-6 py-2.5 mb-3 rounded-md hover:scale-95 duration-150 text-white bg-primary">
                    <FaPlus /> New Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {showAnalytics && (
          <ResumeAnalytics
            show={showAnalytics}
            onHide={() => setShowAnalytics(false)}
          />
        )}
        {extension && (
          <ExtensionModal show={extension} onHide={() => setExtension(false)} />
        )}
        {aiMatch && (
          <AiMatchModal show={aiMatch} onHide={() => setAiMatch(false)} />
        )}
        {aiSearch && (
          <AdvancedSearchModal
            show={aiSearch}
            onHide={() => setAiSearch(false)}
          >
            <div className="grid grid-cols-2 gap-6"></div>
          </AdvancedSearchModal>
        )}
        {createModal && (
          <CreateApplicationKit
            show={createModal}
            onHide={() => setCreateModal(false)}
          />
        )}
      </section>
    </DefaultLayout>
  );
};

export default Applications;
