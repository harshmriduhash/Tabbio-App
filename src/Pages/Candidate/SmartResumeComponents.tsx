import { useState } from "react";
import { ReadMore } from "../../components/ReadMore";
import Modal from "../../components/modal";
import { LuPencil } from "react-icons/lu";
import { HiOutlineSparkles } from "react-icons/hi";
import { Pill } from "../../components/Pills";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const ProfileSummary: React.FC<{ resumeData: any }> = ({
  resumeData,
}) => {
  const [bio, setBio] = useState(resumeData?.professional_summary);
  const [editBioMode, setEditBioMode] = useState(false);
  const [showCompetencies, setShowCompetencies] = useState(false);

  return (
    <div className="relative">
      <div className="flex w-full justify-between items-center mb-2">
        <h6 className="text-lg font-medium text-zinc-800">Profile Summary</h6>
        <button
          onClick={() => {
            setEditBioMode(true);
          }}
          className="hover:bg-slate-100/50 rounded-full p-2"
        >
          <LuPencil size={18} />
        </button>
      </div>
      <div className="border border-stroke rounded-lg shadow-sm bg-white p-3">
        <ReadMore text={resumeData?.professional_summary} />

        <div className="w-full flex gap-x-3 max-md:flex-wrap gap-y-2 items-center">
          <Pill>{8}+ Years of Experience</Pill>
          <Pill variant="primary">{"Senior"} Level</Pill>
          <Pill variant="none">{"Full Stack Development"}</Pill>
          <Pill variant="success">{"Team Leadership"}</Pill>
        </div>

        <div className="mt-3 ">
          <button
            onClick={() => setShowCompetencies(!showCompetencies)}
            className="flex gap-1.5 items-center mb-2.5 hover:bg-slate-200 bg-slate-100 rounded-full py-1.5 sm:px-3 sm:text-sm px-2 text-xs font-normal"
          >
            Core Competencies{" "}
            <span>
              {!showCompetencies ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
          </button>
          {showCompetencies && (
            <div className="py-2 border-t border-stroke w-full flex gap-2 items-center flex-wrap">
              <Pill>System Architecture</Pill> <Pill>Cloud Infrastructure</Pill>{" "}
              <Pill>Agile/Scrum</Pill> <Pill>DevOps</Pill>{" "}
              <Pill>API Design</Pill> <Pill>Performance Optimization</Pill>
            </div>
          )}
        </div>
      </div>

      <Modal
        show={editBioMode}
        onHide={() => setEditBioMode(false)}
        title="Professional Summary"
        size="max-w-[750px] w-full"
      >
        <div>
          <div>
            <div className="w-full">
              <label
                className="mb-[0.7rem] block text-sm font-normal text-zinc-800 dark:text-white"
                htmlFor="professional_summary"
              >
                You can write about your years of experience, industry, or
                skills. People also talk about their achievements or previous
                job experiences
              </label>
              <div className="relative rounded-lg border border-stroke">
                <textarea
                  className={`
                     w-full 
                     py-3 pl-4.5 pr-4.5 text-zinc-800 font-normal border-none rounded-lg
                     focus:border-primary/50 focus-visible:outline-none custom-scrollbar
                     dark:border-strokedark dark:bg-meta-4
                     dark:text-white dark:focus:border-primary `}
                  name={`About`}
                  placeholder="Enter your professional summary"
                  rows={6}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <div className="px-4 pb-1 pt-3 border-t border-stroke">
                  {" "}
                  <button className="relative inline-flex items-center justify-center text-sm p-[2px] mb-2 me-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#2563EB] to-[#9333EA] group-hover:from-[#9333EA] group-hover:to-[#2563EB] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-3 py-1 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                      <p className="text-center text-xs gap-1 items-center bg-gradient-to-r group-hover:text-white from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-flex">
                        <HiOutlineSparkles className="text-primary group-hover:text-white" />{" "}
                        WRITING ASSISTANT
                      </p>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
