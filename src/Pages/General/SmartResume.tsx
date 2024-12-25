import { useState } from "react";
import { mockResumeData } from "../../data/mockData";
import { LuBriefcase } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FiExternalLink, FiPhone } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdDownload, MdOutlineMail, MdShare } from "react-icons/md";
import Avatar from "../../components/Avatar2";
import getUserInitials from "../../lib/utils/getUserInitials";
import { FaCircle, FaRegCalendar } from "react-icons/fa6";
import { BsBookmarkPlus, BsEye } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

const SmartResume: React.FC = () => {
  const [candidateData] = useState<any | null>(mockResumeData);
  return (
    <section className="h-screen">
      <header className="fixed top-0 left-0 right-0 z-99">
        <div className="w-full justify-center items-center text-sm font-normal flex py-2 gap-1 text-[#1DB053] bg-[#F0FDF4]">
          <FaCircle size={8} className={``} />{" "}
          <span>Available for opportunities</span>
        </div>
        <div className="w-full py-2 px-5 max-sm:px-0 bg-white">
          <div className="w-full flex xl:flex-row flex-col justify-between items-center xl:space-x-6 space-y-4">
            <div className="flex items-center max-sm:flex-wrap max-sm:justify-between gap-3 text-sm max-sm:px-2">
              <span>tabbio.com/ahmed</span>
              <span className="flex items-center gap-1">
                <FaCircle size={8} className={`text-success rounded-full`} />{" "}
                Updated 1h ago
              </span>
              <div className="flex items-center gap-1">
                <BsEye className="" />
                <span className="">{"123 profile views"}</span>
              </div>
              <div className="hidden items-center gap-3 max-sm:flex">
                <button className="text-zinc-500">
                  <MdDownload size={20} />
                </button>
                <button className="">
                  <MdShare size={20} />
                </button>
                <button className="">
                  <TbWorld size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center md:flex-wrap gap-3 xl:ml-auto max-sm:hidden">
              <button className="flex items-center justify-center md:w-[170px] gap-2 text-primary bg-primary/10 rounded-md py-2 max-sm:px-2 text-sm px-4">
                <span className="max-sm:hidden">
                  <MdOutlineMail />
                </span>
                <span>Contact Ahmed</span>
              </button>
              <button className="flex items-center justify-center md:w-[180px] gap-2 text-primary bg-primary/10 rounded-md py-2 text-sm px-4">
                <span className="max-sm:hidden">
                  <FaRegCalendar />
                </span>
                <span> Schedule Interview</span>
              </button>
              <button className="flex items-center justify-center md:w-[175px] gap-2 text-primary bg-primary/10 rounded-md py-2 text-sm px-4">
                <span className="max-sm:hidden">
                  <BsBookmarkPlus />
                </span>
                <span> Save to ShareList</span>
              </button>
              <div className="flex items-center gap-3 max-sm:hidden">
                <button className="text-zinc-500">
                  <MdDownload size={20} />
                </button>
                <button className="">
                  <MdShare size={20} />
                </button>
                <button className="">
                  <TbWorld size={20} />
                </button>
              </div>
            </div>
            <div className="w-full max-sm:flex hidden items-center px-2 justify-between gap-3 xl:ml-auto text-primary text-xs bg-primary/10 py-1.5">
              <button className="flex flex-col gap-1 hover:scale-y-105 items-center justify-center">
                <span className="">
                  <MdOutlineMail />
                </span>
                <span>Contact Ahmed</span>
              </button>
              <button className="flex flex-col gap-1 items-center justify-center">
                <span className="">
                  <FaRegCalendar />
                </span>
                <span> Schedule Interview</span>
              </button>
              <button className="flex flex-col gap-1 items-center justify-center">
                <span className="">
                  <BsBookmarkPlus />
                </span>
                <span> Save to ShareList</span>
              </button>
              <div className="flex items-center gap-3 max-sm:hidden">
                <button className="text-zinc-500">
                  <MdDownload size={20} />
                </button>
                <button className="">
                  <MdShare size={20} />
                </button>
                <button className="">
                  <TbWorld size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full flex flex-col xl:py-[9%] py-[10rem] bg-white justify-center items-center">
        <div className="bg-white px-6 py-5 w-full h-full lg:max-w-[70%] xl:max-w-[65%]">
          <div className="flex md:flex-row flex-col gap-x-10 gap-y-6 mb-8">
            <div>
              <Avatar
                src={candidateData?.photo_url || ""}
                size="largest"
                initials={getUserInitials(candidateData?.name, "")}
              />
            </div>
            <div>
              <div className="my-5">
                <h1 className={`font-medium text-3xl mb-1`}>
                  {candidateData?.name}
                </h1>
                {candidateData?.role && (
                  <h6 className={`text-base text-zinc-600 uppercase`}>
                    {candidateData?.role}
                  </h6>
                )}
              </div>
              <div className="grid lg:grid-cols-3 text-sm gap-x-3 gap-y-4 grid-cols-2">
                <div>
                  <div className="flex items-center gap-1.5 text-zinc-500 font-normal">
                    <span>
                      <LuBriefcase />
                    </span>{" "}
                    <span>Experience</span>
                  </div>
                  <p>7+ Years</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-zinc-500 font-normal">
                    <span>
                      <IoLocationOutline />
                    </span>{" "}
                    <span>Location</span>
                  </div>
                  <p>Abu Dhabi, UAE.</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-zinc-500 font-normal">
                    <span>
                      <FiPhone />
                    </span>{" "}
                    <span>Phone</span>
                  </div>
                  <p>{candidateData?.phone_number}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-zinc-500 font-normal">
                    <span>
                      <MdOutlineMail />
                    </span>{" "}
                    <span>Email</span>
                  </div>
                  <p className="break-words">{candidateData?.email}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-zinc-500 font-normal">
                    <span>
                      <BiLogoLinkedin />
                    </span>{" "}
                    <span>Linkedin</span>
                  </div>
                  <a
                    href={candidateData?.linkedin_url}
                    className="text-black"
                    target="_blank"
                  >
                    {candidateData?.linkedin_url}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT */}
          <div className="w-full mb-8">
            {candidateData?.professional_summary && (
              <div className="px-3">
                <h6 className="font-bold mb-2 flex items-center gap-4 text-zinc-700">
                  About{" "}
                  <span className="text-sm py-1 px-4 font-normal rounded-full bg-[#F2F4F6]">
                    Verified
                  </span>
                </h6>
                <div>
                  <p className="text-zinc-600">
                    {candidateData?.professional_summary}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* EXPERIENCE */}
          <div className="w-full mb-8">
            {candidateData?.experience && (
              <div className="px-3">
                <h6 className="font-bold mb-2 flex items-center gap-4 text-zinc-700">
                  Experience
                </h6>
                <div className="flex flex-col">
                  {candidateData?.experience.map((item: any) => (
                    <div key={item.id} className="relative flex gap-3">
                      {/* Circle with connector line */}
                      <div className="flex flex-col items-center">
                        <FaCircle size={10} className="mt-2 rounded-full" />
                      </div>

                      {/* Content */}
                      <div className="w-full">
                        <h6 className="w-full text-base font-semibold mb-1">
                          {item?.company}
                        </h6>
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <p className="text-sm uppercase font-medium text-zinc-700">
                            {item?.position}
                          </p>
                          <p className="text-sm uppercase text-zinc-600">
                            {item.duration}
                          </p>
                        </div>
                        <div className="w-full pb-6">
                          <div className="text-zinc-700 text-base w-full">
                            {item?.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* EDUCATION */}
          <div className="w-full mb-8">
            {candidateData?.education && (
              <div className="px-3">
                <h6 className="font-bold mb-2 flex items-center gap-4 text-zinc-700">
                  Education
                </h6>
                <div className="flex flex-col">
                  {candidateData?.education.map((item: any) => (
                    <div key={item.id} className="relative flex gap-3">
                      {/* Circle with connector line */}
                      <div className="flex flex-col items-center">
                        <FaCircle size={10} className="mt-2 rounded-full" />
                      </div>

                      {/* Content */}
                      <div className="w-full">
                        <h6 className="w-full text-base font-semibold mb-1">
                          {item?.school}
                        </h6>
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <p className="text-sm uppercase font-medium text-zinc-700">
                            {item?.degree}
                          </p>
                          <p className="text-sm uppercase text-zinc-600">
                            {item.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SKILLS */}
          {candidateData?.skills && (
            <div className="w-full mb-8">
              <div className="py-3 px-3">
                <h6 className="font-bold mb-2 flex items-center gap-4 text-zinc-700">
                  Skills
                </h6>

                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {candidateData?.skills.map((item: string, index: number) => (
                    <div key={index} className={`item relative py-0 `}>
                      <div className="py-1 bg-zinc-100 rounded-md">
                        <span
                          className={`border-none text-sm font-medium text-zinc-700 px-2`}
                        >
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* LANGUAGES */}
          {candidateData?.languages && (
            <div className="mb-8">
              <div className="py-3 px-3">
                <h6 className="font-bold mb-2 flex items-center gap-4 text-zinc-700">
                  Languages
                </h6>

                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {candidateData?.languages.map(
                    (item: string, index: number) => (
                      <div key={index} className={`item relative py-0 `}>
                        <div className="py-1 bg-zinc-100 rounded-md">
                          <span
                            className={`text-sm font-medium text-zinc-700 px-2`}
                          >
                            {item}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
          {/* HOBBIES */}
          {candidateData?.hobbies && (
            <div className="mb-8">
              <div className="py-3 px-3">
                <h6 className="font-bold mb-2 flex items-center gap-4 text-zinc-700">
                  Hobbies
                </h6>

                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {candidateData?.hobbies.map((item: string, index: number) => (
                    <div key={index} className={`item relative py-0 `}>
                      <div className="py-1 bg-zinc-100 rounded-md">
                        <span
                          className={`text-sm font-medium text-zinc-700 px-2`}
                        >
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="fixed left-0 right-0 w-full bottom-0">
        <div className="w-full flex justify-between max-sm:text-xs text-sm items-center py-3 px-5 bg-[#FBFCFC] border border-[#F3F4F6]">
          <p>Powered by Tabbio</p>
          <Link to={`/signup`} className="flex items-center gap-1">
            Create your SmartResume <FiExternalLink />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SmartResume;
