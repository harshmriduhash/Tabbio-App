import React, { useState } from "react";
import ReactDOM from "react-dom";
import { RxCross2 } from "react-icons/rx";
import {
  AiOutlineBarChart,
  AiOutlineBell,
  AiOutlineDownload,
} from "react-icons/ai";
import { Switch } from "../../components/form/Switch";
import { BsBookmarkPlus, BsEye } from "react-icons/bs";
import Table from "../../components/table";
import { TableLoader } from "../../components/Loader";
import TablePagination from "../../components/table/TablePagination";
import { paginate } from "../../lib/utils";
import { analyticsData } from "../../data/mockData";
import { formatDateString } from "../../lib/utils/formatters";
import { FaRegCalendar, FaRegClock } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { MdShare } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

type ResumeAnalyticsProps = {
  show?: boolean;
  onHide: () => void;
};

const ResumeAnalytics: React.FC<ResumeAnalyticsProps> = ({ show, onHide }) => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [allViews, _setAllViews] = useState<any[]>(analyticsData);

  const pagination = paginate(5, Number(page), Number(itemsPerPage));

  if (!show) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="w-screen h-screen z-9999 bg-black bg-opacity-50 fixed top-0 flex md:items-center justify-center text-[#444444] overflow-x-auto">
      <div
        className={`md:rounded-2xl bg-white md:min-w-[60%]  min-w-full   flex flex-col  justify-center md:mx-6 md:my-auto mx-0`}
      >
        <div className="flex md:items-center max-md:flex-col-reverse md:justify-between gap-5 px-4 py-5 w-full border-b border-stroke">
          <div className="flex gap-2">
            <span className="bg-primary/10 text-primary rounded-md p-2 flex items-center justify-center">
              <AiOutlineBarChart size={18} />{" "}
            </span>
            <div>
              <p className="text-zinc-950">Resume Performance</p>
              <p className="text-sm text-zinc-600">
                Last Updated 1d Nov 10, 7:12am
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center max-md:items-end">
            <div>
              <p className="text-zinc-950 md:text-right">
                Actvity Notifications
              </p>
              <p className="text-sm text-zinc-600 md:text-right">
                Get notified when recruiters interact with your resume
              </p>
            </div>
            <span className="max-md:hidden">
              <AiOutlineBell size={18} />
            </span>
            <div className="max-md:ml-auto">
              <Switch
                value={true}
                checked={true}
                onChange={(_value) => {
                  {
                  }
                }}
                size="sm"
              />
            </div>

            <button
              onClick={onHide}
              className=" text-zinc-900 ml-2 max-md:absolute max-md:right-3 max-md:top-3 bg-slate-200 hover:bg-slate-300 rounded-full p-[4px]"
            >
              <RxCross2 size={18} className="" />
            </button>
          </div>
        </div>
        <div className="relative w-full max-h-[75vh] lg:max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="px-4 py-5 ">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 items-center">
              <div className="p-3 bg-primary/5 border border-stroke rounded-2xl">
                <p className="flex items-center gap-2">
                  <span>
                    <BsEye size={18} className="text-primary" />
                  </span>
                  Total Views
                </p>
                <p className="my-3 text-zinc-950 text-lg font-semibold">
                  1, 247
                </p>
                <p className="text-primary">+12% this week</p>
              </div>
              <div className="p-3 bg-primary/5 border border-stroke rounded-2xl">
                <p className="flex items-center gap-2">
                  <span>
                    <AiOutlineDownload size={18} className="text-primary" />
                  </span>
                  Total Downloads
                </p>
                <p className="my-3 text-zinc-950 text-lg font-semibold">
                  1, 247
                </p>
                <p className="text-primary">+12% this week</p>
              </div>
              <div className="p-3 bg-primary/5 border border-stroke rounded-2xl">
                <p className="flex items-center gap-2">
                  <span>
                    <MdShare size={18} className="text-primary" />
                  </span>
                  Total Shares
                </p>
                <p className="my-3 text-zinc-950 text-lg font-semibold">
                  1, 247
                </p>
                <p className="text-primary">+12% this week</p>
              </div>
              <div className="p-3 bg-primary/5 border border-stroke rounded-2xl">
                <p className="flex items-center gap-2">
                  <span>
                    <BsBookmarkPlus size={18} className="text-primary" />
                  </span>
                  Total Saves
                </p>
                <p className="my-3 text-zinc-950 text-lg font-semibold">
                  1, 247
                </p>
                <p className="text-primary">+12% this week</p>
              </div>
            </div>

            <div className="mt-10">
              {false ? (
                <TableLoader />
              ) : allViews?.length > 0 ? (
                <>
                  <div className="border w-[200px] mb-4 border-stroke px-2.5 py-2 bg-white focus:border-primary flex items-center gap-1 rounded-xl">
                    <span className="w-[10%]">
                      <FaRegCalendar className="text-primary" />
                    </span>
                    <div className="relative z-20 w-[90%] bg-transparent dark:bg-form-input">
                      <select
                        onChange={() => {}}
                        className="relative z-20 w-full px-2 appearance-none
                     bg-transparent outline-none text-zinc-700
                    transition  border-none font-medium
                    bg-white"
                      >
                        <option value={""}>All</option>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                      </select>
                      <span className="absolute top-1/2  cursor-pointer pointer-events-none right-2 z-30 -translate-y-1/2">
                        <IoMdArrowDropdown />
                      </span>
                    </div>
                  </div>
                  <Table show>
                    <Table.TableRow>
                      <Table.Row>Company</Table.Row>
                      <Table.Row>Date</Table.Row>
                      <Table.Row>Action</Table.Row>
                    </Table.TableRow>

                    <Table.TableItems>
                      {allViews?.map((data: any, index: number) => (
                        <Table.CellRows
                          useSelectOption={false}
                          onClick={() => {}}
                          key={data?.id + "-" + index}
                        >
                          <Table.Cell isAction>
                            <div className="flex gap-1.5 items-center text-sm">
                              <span className="text-primary">
                                <LuBuilding2 size={18} />
                              </span>
                              <div>
                                <p className=" text-zinc-500">
                                  {data?.name || "Anonymous"}
                                </p>
                              </div>
                            </div>
                          </Table.Cell>

                          <Table.Cell isAction>
                            <div className="flex gap-1 text-sm items-center text-zinc-500">
                              <span>
                                <FaRegClock size={16} />
                              </span>
                              <span>
                                {data?.date
                                  ? formatDateString(data?.date)
                                  : "Unspecified"}
                              </span>
                            </div>
                          </Table.Cell>

                          <Table.Cell>
                            {data?.action || "Unspecified"}
                          </Table.Cell>
                        </Table.CellRows>
                      ))}
                    </Table.TableItems>
                  </Table>

                  <div className="my-8 flex w-full justify-end">
                    <TablePagination
                      data={allViews}
                      page={page}
                      pagination={pagination}
                      setPage={setPage}
                      setPageLimit={setItemsPerPage}
                      pageLimit={itemsPerPage}
                    />
                  </div>
                </>
              ) : (
                <Table.NoData
                  onAdd={() => {}}
                  hideButton={true}
                  show={
                    allViews === undefined ||
                    allViews === null ||
                    allViews?.length === 0
                  }
                >
                  No Data found
                </Table.NoData>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,

    document.querySelector("#modal") as HTMLElement
  );
};

export default ResumeAnalytics;
