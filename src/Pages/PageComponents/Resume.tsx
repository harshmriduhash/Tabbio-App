import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { FaCircle, FaLinkedinIn } from "react-icons/fa6";

const LiveResume: React.FC<{ resumeData: any }> = ({ resumeData }) => {
  return (
    <section className="w-full">
      {resumeData?.template === "standard" && (
        <div className="bg-white py-10 px-6 overflow-x-auto  w-full ">
          <div className="flex w-full gap-9  mb-10">
            {resumeData?.photo_url && (
              <div className="relative w-55 h-55 rounded-full border bg-zinc-300 border-stroke/60">
                <img
                  className={`rounded-full w-full h-full object-cover`}
                  src={resumeData?.photo_url}
                  alt=""
                />
              </div>
            )}
            <div className="mt-15 font-semibold">
              <h1
                className={`font-medium text-[40px] mb-0`}
                style={{ color: resumeData?.style?.primary_color }}
              >
                {resumeData?.name}
              </h1>
              {resumeData?.role && (
                <h6 className={`text-lg text-zinc-700 mr-2 -mt-2 uppercase`}>
                  {resumeData?.role}
                </h6>
              )}
            </div>
          </div>

          <div className="flex gap-1 w-full">
            <div className="max-w-60">
              {resumeData?.professional_summary && (
                <div className="px-3">
                  <h6 className="font-semibold mb-1">ABOUT ME</h6>
                  <div>
                    <p className="text-zinc-700">
                      {resumeData?.professional_summary}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 mb-9 px-3">
                <div className="flex gap-x-3 gap-y-4.5 items-center flex-wrap text-zinc-700 text-sm font-medium">
                  {resumeData?.location && (
                    <div className="flex gap-1.5 items-center">
                      <SlLocationPin className="text-primary text-lg" />
                      <p>{resumeData?.location}</p>
                    </div>
                  )}
                  {resumeData?.email && (
                    <div className="flex gap-1.5 items-center">
                      <MdOutlineMailOutline className="text-primary text-lg" />
                      <p>{resumeData?.email}</p>
                    </div>
                  )}
                  {resumeData?.phone_number && (
                    <div className="flex gap-1.5 items-center">
                      <MdOutlinePhone className="text-primary text-lg" />
                      <p>{resumeData?.phone_number}</p>
                    </div>
                  )}
                  {resumeData?.website_url && (
                    <div className="flex gap-1.5 items-center">
                      <FiLink className="text-primary text-lg" />
                      <a href={resumeData?.website_url || ""} className="hover:underline hover:text-primary" target="_blank">{resumeData?.website_url}</a>
                    </div>
                  )}
                  {resumeData?.linkedin_url && (
                    <div className="flex gap-1.5 items-center">
                      <FaLinkedinIn className="text-primary text-lg" />
                      <a href={resumeData?.linkedin_url || ""} className="hover:underline hover:text-primary" target="_blank">{resumeData?.linkedin_url}</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full ml-2 px-4">
              {resumeData?.experience && (
                <div>
                  <h6 className="font-bold uppercase mb-1">Experience</h6>
                  <div className="flex flex-col">
                    {resumeData?.experience.map((item: any) => (
                      <div key={item.id} className="relative flex gap-3">
                        {/* Circle with connector line */}
                        <div className="flex flex-col items-center">
                          <FaCircle
                            style={{
                              color: resumeData?.style?.secondary_color,
                            }}
                            size={8}
                            className="mt-2"
                          />
                          {
                            <div className="h-full w-0.5 bg-slate-200 mt-[0.5px]"></div>
                          }
                        </div>

                        {/* Content */}
                        <div className="w-full">
                          <h6
                            className="w-full text-base font-semibold mb-2"
                            style={{
                              color: resumeData?.style?.secondary_color,
                            }}
                          >
                            {item?.company}
                          </h6>
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <p className="text-base uppercase font-semibold text-zinc-800">
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

              {resumeData?.education && (
                <div className="mt-7">
                  <div className="w-full">
                    <h6 className="font-bold uppercase mb-1">Education</h6>
                    <div className="flex flex-col">
                      {resumeData?.education.map(
                        (item: any, _index: number) => (
                          <div key={item.id} className={`relative flex gap-3 `}>
                            <div className="flex flex-col items-center">
                              <FaCircle
                                style={{
                                  color: resumeData?.style?.secondary_color,
                                }}
                                size={8}
                                className="mt-2"
                              />
                              {
                                <div className="h-full w-0.5 bg-slate-200 mt-[0.5px]"></div>
                              }
                            </div>

                            <div className="w-full">
                              <h6
                                className={`w-full text-base font-semibold mb-2`}
                                style={{
                                  color: resumeData?.style?.secondary_color,
                                }}
                              >
                                {item?.school}
                              </h6>
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <p
                                  className={`text-base w-[75%] uppercase font-semibold text-zinc-800`}
                                >
                                  {item?.degree}
                                </p>

                                <span
                                  className={`text-sm uppercase text-zinc-600`}
                                >
                                  {item.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {resumeData?.skills && (
                <div className="mt-7">
                  <div className="py-3">
                    <h6 className="font-bold uppercase mb-2">Skills</h6>

                    <div className="flex flex-wrap gap-x-4 gap-y-3">
                      {resumeData?.skills.map((item: string, index: number) => (
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

              {resumeData?.languages && (
                <div className="mt-7">
                  <div className="py-3">
                    <h6 className="font-bold uppercase mb-2">Languages</h6>

                    <div className="flex flex-wrap gap-x-4 gap-y-3">
                      {resumeData?.languages.map(
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
              {resumeData?.hobbies && (
                <div className="mt-7">
                  <div className="py-3">
                    <h6 className="font-bold uppercase mb-2">Hobbies</h6>

                    <div className="flex flex-wrap gap-x-4 gap-y-3">
                      {resumeData?.hobbies.map(
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export const ResumePreview: React.FC<{ resumeData: any }> = ({ resumeData }) => {
  const [_resumeData1, _setResumeData] = useState<any>({
    style: {
      primary_color: "#0077B5",
      secondary_color: "#0077B5",
    },
    template: "basic",
    name: "",
    role: "",
    photo_url: "",
    experience: [
      {
        id: 1,
        position: "",
        company: "",
        description: "",
        duration: "",
      },
    ],
    education: [
      {
        id: 1,
        degree: "",
        school: "",
        duration: "",
      },
    ],
    skills: [],
    languages: [],
  });

  return (
    <section className="w-full">
      {resumeData?.template === "standard" && (
        <div className="bg-white py-10 px-6 overflow-x-auto  w-full ">
          <div className="flex w-full gap-3  mb-6">
            {resumeData?.photo_url && (
              <div className="relative w-14 h-14 rounded-full border bg-zinc-300 border-stroke/60">
                <img
                  className={`rounded-full w-full h-full object-cover`}
                  src={resumeData?.photo_url}
                  alt=""
                />
              </div>
            )}
            <div className="font-semibold">
              <h1
                className={`font-medium text-base mb-0`}
              >
                {resumeData?.name}
              </h1>
              {resumeData?.role && (
                <h6 className={`text-xs text-zinc-700`}>
                  {resumeData?.role}
                </h6>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="w-full">
              {resumeData?.professional_summary && (
                <div className="px-1">
                  <h6 className="font-semibold mb-1 text-sm">ABOUT ME</h6>
                  <div>
                    <p className="text-zinc-700 text-xs">
                      {resumeData?.professional_summary}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-3 mb-6 px-1">
                <div className="flex gap-x-3 gap-y-2 items-center flex-wrap text-zinc-700 text-xs font-medium">
                  {resumeData?.location && (
                    <div className="flex gap-1.5 items-center">
                      <SlLocationPin className="text-primary" />
                      <p>{resumeData?.location}</p>
                    </div>
                  )}
                  {resumeData?.email && (
                    <div className="flex gap-1.5 items-center">
                      <MdOutlineMailOutline className="text-primary" />
                      <p>{resumeData?.email}</p>
                    </div>
                  )}
                  {resumeData?.phone_number && (
                    <div className="flex gap-1.5 items-center">
                      <MdOutlinePhone className="text-primary" />
                      <p>{resumeData?.phone_number}</p>
                    </div>
                  )}
                  {resumeData?.website_url && (
                    <div className="flex gap-1.5 items-center">
                      <FiLink className="text-primary" />
                      <a href={resumeData?.website_url || ""} className="hover:underline hover:text-primary" target="_blank">{resumeData?.website_url}</a>
                    </div>
                  )}
                  {resumeData?.linkedin_url && (
                    <div className="flex gap-1.5 items-center">
                      <FaLinkedinIn className="text-primary" />
                      <a href={resumeData?.linkedin_url || ""} className="hover:underline hover:text-primary" target="_blank">{resumeData?.linkedin_url}</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full px-1">
              {resumeData?.experience && (
                <div>
                  <h6 className="font-bold mb-1">Experience</h6>
                  <div className="flex flex-col">
                    {resumeData?.experience.map((item: any) => (
                      <div key={item.id} className="relative flex gap-2">
                        {/* Circle with connector line */}
                        <div className="flex flex-col items-center">
                          <FaCircle
                            style={{
                              color: resumeData?.style?.secondary_color,
                            }}
                            size={8}
                            className="mt-2"
                          />
                          {
                            <div className="h-full w-0.5 bg-slate-200 mt-[0.5px]"></div>
                          }
                        </div>

                        {/* Content */}
                        <div className="w-full">
                          <h6
                            className="w-full text-sm font-semibold mb-2"
                            style={{
                              color: resumeData?.style?.secondary_color,
                            }}
                          >
                            {item?.company}
                          </h6>
                          <div className="flex items-center justify-between gap-1 mb-2">
                            <p className="text-sm font-semibold text-zinc-800">
                              {item?.position}
                            </p>
                            <p className="text-xs uppercase text-zinc-600">
                              {item.duration}
                            </p>
                          </div>
                          <div className="w-full pb-6">
                            <div className="text-zinc-700 text-xs w-full">
                              {item?.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {resumeData?.education && (
                <div className="mt-7">
                  <div className="w-full">
                    <h6 className="font-bold mb-1">Education</h6>
                    <div className="flex flex-col">
                      {resumeData?.education.map(
                        (item: any, _index: number) => (
                          <div key={item.id} className={`relative flex gap-3 `}>
                            <div className="flex flex-col items-center">
                              <FaCircle
                                style={{
                                  color: resumeData?.style?.secondary_color,
                                }}
                                size={8}
                                className="mt-2"
                              />
                              {
                                <div className="h-full w-0.5 bg-slate-200 mt-[0.5px]"></div>
                              }
                            </div>

                            <div className="w-full">
                              <h6
                                className={`w-full text-sm font-semibold mb-2`}
                                style={{
                                  color: resumeData?.style?.secondary_color,
                                }}
                              >
                                {item?.school}
                              </h6>
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <p
                                  className={`text-xs w-[75%] uppercase font-semibold text-zinc-800`}
                                >
                                  {item?.degree}
                                </p>

                                <span
                                  className={`text-xs uppercase text-zinc-600`}
                                >
                                  {item.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {resumeData?.skills && (
                <div className="mt-7">
                  <div className="py-3">
                    <h6 className="font-bold mb-2">Skills</h6>

                    <div className="flex flex-wrap gap-x-4 gap-y-3">
                      {resumeData?.skills.map((item: string, index: number) => (
                        <div key={index} className={`item relative py-0 `}>
                          <div className="py-1 bg-zinc-100 rounded-md">
                            <span
                              className={`border-none text-xs font-medium text-zinc-700 px-2`}
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

              {resumeData?.languages && (
                <div className="mt-7">
                  <div className="py-3">
                    <h6 className="font-bold mb-2">Languages</h6>

                    <div className="flex flex-wrap gap-x-4 gap-y-3">
                      {resumeData?.languages.map(
                        (item: string, index: number) => (
                          <div key={index} className={`item relative py-0 `}>
                            <div className="py-1 bg-zinc-100 rounded-md">
                              <span
                                className={`text-xs font-medium text-zinc-700 px-2`}
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
              {resumeData?.hobbies && (
                <div className="mt-7">
                  <div className="py-3">
                    <h6 className="font-bold mb-2">Hobbies</h6>

                    <div className="flex flex-wrap gap-x-4 gap-y-3">
                      {resumeData?.hobbies.map(
                        (item: string, index: number) => (
                          <div key={index} className={`item relative py-0 `}>
                            <div className="py-1 bg-zinc-100 rounded-md">
                              <span
                                className={`text-xs font-medium text-zinc-700 px-2`}
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LiveResume;
