import { useState } from "react";
import { mockResumeData } from "../../data/mockData";
import { LuBriefcase } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import Avatar from "../../components/Avatar2";
import getUserInitials from "../../lib/utils/getUserInitials";
import { FaCircle } from "react-icons/fa6";

const CandidateProfile: React.FC = () => {
  const [candidateData] = useState<any | null>(mockResumeData);
  return (
    <section className="bg-white px-6 py-5 w-full h-full">
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
              {candidateData?.languages.map((item: string, index: number) => (
                <div key={index} className={`item relative py-0 `}>
                  <div className="py-1 bg-zinc-100 rounded-md">
                    <span className={`text-sm font-medium text-zinc-700 px-2`}>
                      {item}
                    </span>
                  </div>
                </div>
              ))}
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
                    <span className={`text-sm font-medium text-zinc-700 px-2`}>
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CandidateProfile;
