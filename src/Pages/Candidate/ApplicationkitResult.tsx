import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ReactDOM from "react-dom";
import { LuBuilding2, LuCrown } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { ContentAccordion } from "../../components/Accordion";
import { FaArrowRightLong, FaRegStar } from "react-icons/fa6";
import {
  IoCopyOutline,
  IoDocumentTextOutline,
  IoReturnUpBack,
} from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import { VscWand } from "react-icons/vsc";
import { BsDownload, BsEye } from "react-icons/bs";
import LiveResume, { ResumePreview } from "../PageComponents/Resume";
import { interviewTipsData, mockResumeData } from "../../data/mockData";
import { MdEdit } from "react-icons/md";
import { usePDF } from "react-to-pdf";
import LiveResumeDoc from "../PageComponents/ResumeDocument";
import { pdf } from "@react-pdf/renderer";
import MDEditor from "@uiw/react-md-editor";
import { FiDownload } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type ApplicationResultProps = {
  show: boolean;
  onHide: () => void;
};

const ApplicationResult: React.FC<ApplicationResultProps> = ({
  show,
  onHide,
}) => {
  const [mainView, setMainview] = useState(true);
  const [resumeView, setResumeView] = useState(false);
  const [coverLetter, setCoverLetter] = useState(false);
  const [intelligence, setIntelligence] = useState(false);
  const [successKit, setSuccessKit] = useState(false);
  const { targetRef } = usePDF({ filename: "page.pdf" });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [sampleData, _setSampleData] = useState({
    cover_letter: `Dear [Employer's Name],

    I am excited to apply for the Human Resources position at [Company Name]. With [X years] of experience in HR management, including recruitment, employee relations, and performance management, I am confident in my ability to contribute effectively to your team.

    In my previous role at [Your Current/Previous Company], I streamlined the onboarding process, reducing turnover by 20% and improving employee satisfaction. I am particularly drawn to [Company Name] because of your commitment to diversity and inclusion, which aligns with my passion for creating a positive work environment.

    I look forward to the opportunity to discuss how my skills and experiences can support your HR goals.
    Thank you for considering my application.
    
    Best regards,  
    Ahmed Mohammad AlDhraif AlShamsi
    
    
        `,
  });

  const handleDownload = async (component: any) => {
    // Generate a blob of the PDF
    console.log(component);
    const blob = await pdf(component).toBlob();

    // Create a blob URL
    const url = URL.createObjectURL(blob);

    // Create a link and click it to download the file
    const link = document.createElement("a");
    link.href = url;
    link.download = "document.pdf"; // Set the file name
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!show) {
    return null;
  }
  return ReactDOM.createPortal(
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="w-full h-full fixed inset-0 z-[999999] bg-[#F2F4F6] backdrop-blur-2xl"
      >
        {mainView && (
          <div className="relative h-screen">
            <div className="w-full bg-primary flex items-center md:px-6 py-6 px-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="bg-white/25 rounded-lg text-yellow-200 w-9 h-9 flex items-center justify-center">
                  <LuCrown />
                </span>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-0">
                    Your Application Kit is Ready!
                  </h3>
                  <p className="text-zinc-200">
                    Every component has been optimized for Software Engineer at
                    Example Corp
                  </p>
                </div>
              </div>

              <button
                onClick={onHide}
                className="absolute top-[12px] md:top-[20px] text-white right-2 bg-white/25 hover:bg-white/30 rounded-full p-[4px]"
              >
                <RxCross2 size={18} className="" />
              </button>
            </div>
            <div className="h-[80%] overflow-y-auto custom-scrollbar pt-6 pb-28 max-sm:pb-[12rem] px-6 max-sm:px-2">
              <div className="grid lg:grid-cols-2 grid-cols-1 border border-stroke shadow-md rounded-2xl divide-x gap-3 divide-stroke px-1.5 pb-4">
                <div className="px-3">
                  <h2 className="flex items-center gap-2 py-3">
                    <IoDocumentTextOutline className="text-primary" /> Core
                    Documents
                  </h2>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <ContentAccordion
                      defaultOpen
                      title={
                        <div className="flex gap-2 items-center">
                          <span>
                            <RiRobot2Line size={18} className="text-primary" />
                          </span>
                          <p className="font-medium text-zinc-800">
                            AI Optimized Resume
                          </p>
                        </div>
                      }
                    >
                      <div>
                        <div>
                          <ul className="text-sm font-medium text-zinc-500 space-y-2 mb-6">
                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>Skills aligned with job requirements</span>
                            </li>
                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>ATS-optimized formatting</span>
                            </li>

                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>Highlighted relevant achievements</span>
                            </li>
                          </ul>

                          <div className="bg-[#DBEAFE80] rounded-lg mb-3 p-3 flex flex-col gap-2 items-center justify-center">
                            <button
                              onClick={() => {
                                setMainview(false);
                                setResumeView(true);
                              }}
                              className="text-center hover:scale-105 duration-150 text-sm flex items-center gap-1 text-zinc-600"
                            >
                              <span>
                                <BsEye />
                              </span>{" "}
                              Preview
                            </button>
                            <div className="w-full min-h-[220px] max-h-[250px] 2xl:max-h-[300px] 3xl:max-h-[350px] 4xl:max-h-[550px] overflow-auto custom-scrollbar h-full bg-white">
                              <ResumePreview resumeData={mockResumeData} />
                            </div>
                            <p className="text-center text-sm text-zinc-600">
                              Click on the eye icon to view full preview
                            </p>
                          </div>
                        </div>
                      </div>
                    </ContentAccordion>

                    <ContentAccordion
                      title={
                        <div className="flex gap-2 items-center">
                          <span>
                            <VscWand size={18} className="text-[#9333EA]" />
                          </span>
                          <p className="font-medium text-zinc-800">
                            Smart Cover Letter
                          </p>
                        </div>
                      }
                    >
                      <div>
                        <div>
                          <ul className="text-sm font-medium text-zinc-500 space-y-2 mb-6">
                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>Personalized to company culture</span>
                            </li>
                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>Highlights key qualifications</span>
                            </li>

                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>Compelling value proposition</span>
                            </li>
                          </ul>

                          <div className="bg-[#DBEAFE80] rounded-lg mb-3 p-3 flex flex-col gap-2 items-center justify-center">
                            <button
                              onClick={() => {
                                setMainview(false);
                                setCoverLetter(true);
                              }}
                              className="text-center hover:scale-105 duration-150 text-sm flex items-center gap-1 text-zinc-600"
                            >
                              <span>
                                <BsEye />
                              </span>{" "}
                              Preview
                            </button>
                            <div className="w-full min-h-[220px] max-h-[250px] 2xl:max-h-[300px] 3xl:max-h-[350px] 4xl:max-h-[550px] overflow-auto custom-scrollbar h-full bg-white">
                              <p className="text-[12px] px-2 py-2">
                                {sampleData?.cover_letter}
                              </p>
                            </div>
                            <p className="text-center text-sm text-zinc-600">
                              Click on the eye icon to view full preview
                            </p>
                          </div>
                        </div>
                      </div>
                    </ContentAccordion>
                  </div>
                </div>
                <div className="px-3">
                  <h2 className="flex items-center gap-2 py-3">
                    <LuCrown className="text-yellow-400" /> Premium Resources
                  </h2>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <ContentAccordion
                      title={
                        <div className="flex gap-2 items-center">
                          <span>
                            <LuBuilding2 size={18} className="text-[#D97706]" />
                          </span>
                          <p className="font-medium text-zinc-800">
                            Company Intelligence
                          </p>
                        </div>
                      }
                    >
                      <div>
                        <div>
                          <ul className="text-sm font-medium text-zinc-500 space-y-2 mb-6">
                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>Culture and values analysis</span>
                            </li>
                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>Recent company news</span>
                            </li>

                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>Industry position insights</span>
                            </li>
                          </ul>

                          <div className="bg-[#DBEAFE80] rounded-lg mb-3 p-3 flex flex-col gap-2 items-center justify-center">
                            <button
                              onClick={() => {
                                setMainview(false);
                                setIntelligence(true);
                              }}
                              className="text-center hover:scale-105 duration-150 text-sm flex items-center gap-1 text-zinc-600"
                            >
                              <span>
                                <BsEye />
                              </span>{" "}
                              Preview
                            </button>
                            <div className="w-full min-h-[220px] max-h-[250px] 2xl:max-h-[300px] 3xl:max-h-[350px] 4xl:max-h-[550px] overflow-auto custom-scrollbar h-full bg-white">
                              <p className="text-[12px] px-2 py-2">
                                {sampleData?.cover_letter}
                              </p>
                            </div>
                            <p className="text-center text-sm text-zinc-600">
                              Click on the eye icon to view full preview
                            </p>
                          </div>
                        </div>
                      </div>
                    </ContentAccordion>

                    <ContentAccordion
                      title={
                        <div className="flex gap-2 items-center">
                          <span>
                            <RiRobot2Line size={18} className="text-success" />
                          </span>
                          <p className="font-medium text-zinc-800">
                            Interview Success Kit
                          </p>
                        </div>
                      }
                    >
                      <div>
                        <div>
                          <ul className="text-sm font-medium text-zinc-500 space-y-2 mb-6">
                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>Custom interview questions</span>
                            </li>
                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>STAR response templates</span>
                            </li>

                            <li className="flex items-center gap-1">
                              <span>
                                <FaRegStar className="text-yellow-400" />
                              </span>
                              <span>Salary negotiation tips</span>
                            </li>
                          </ul>

                          <div className="bg-[#DBEAFE80] rounded-lg mb-3 p-3 flex flex-col gap-2 items-center justify-center">
                            <button
                              onClick={() => {
                                setMainview(false);
                                setSuccessKit(true);
                              }}
                              className="text-center hover:scale-105 duration-150 text-sm flex items-center gap-1 text-zinc-600"
                            >
                              <span>
                                <BsEye />
                              </span>{" "}
                              Preview
                            </button>
                            <div className="w-full min-h-[220px] max-h-[250px] 2xl:max-h-[300px] 3xl:max-h-[350px] 4xl:max-h-[550px] overflow-auto custom-scrollbar h-full bg-white">
                              <div className="w-full px-3 py-4">
                                {interviewTipsData.map(
                                  (item: any, index: number) => {
                                    return (
                                      <div key={index} className="">
                                        <button
                                          onClick={() => toggleItem(index)}
                                          className="w-full py-2 text-left text-[12px] flex justify-between items-center"
                                        >
                                          <div className="flex ml-4 gap-2 items-center">
                                            <span>{index + 1}</span>
                                            <span>{item.title}</span>
                                          </div>
                                          <div>
                                            {openIndex === index ? (
                                              <IoIosArrowUp className="dark:text-primary mr-4" />
                                            ) : (
                                              <IoIosArrowDown className="dark:text-primary mr-4" />
                                            )}
                                          </div>
                                        </button>
                                        {openIndex === index && (
                                          <div className="py-3 px-4 text-xs bg-slate-50/50 flex flex-col gap-3 dark:text-slate-50 mb-5 rounded-b-md">
                                            {item?.content?.map(
                                              (val: any, idx: number) => (
                                                <div className="" key={idx}>
                                                  <p className="text-blue-600 underline mb-1.5">
                                                    {val?.header}:
                                                  </p>
                                                  <ul className="space-y-2 text-zinc-700">
                                                    {val?.pointers?.map(
                                                      (
                                                        pointer: string,
                                                        i: number
                                                      ) => (
                                                        <li
                                                          key={i}
                                                          className="flex items-center gap-1"
                                                        >
                                                          <TbArrowBigRightLinesFilled className="text-primary" />{" "}
                                                          {pointer}
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                            <p className="text-center text-sm text-zinc-600">
                              Click on the eye icon to view full preview
                            </p>
                          </div>
                        </div>
                      </div>
                    </ContentAccordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 px-8 py-2.5 bg-[#F2F4F6] flex max-sm:flex-col w-full items-center justify-between max-sm:gap-1.5 gap-3">
              <p className="text-zinc-500 max-sm:text-center">
                Your application kit has been crafted with precision. Good luck!
                🌟
              </p>
              <button className="bg-primary text-white justify-center font-semibold group rounded-md py-2.5 px-8 flex items-center gap-2">
                Apply Now{" "}
                <FaArrowRightLong className="group-hover:ml-4 duration-200" />
              </button>
            </div>
          </div>
        )}

        {resumeView && (
          <div className="relative h-screen overflow-y-auto custom-scrollbar w-full">
            <button
              onClick={() => {
                setResumeView(false);
                setMainview(true);
              }}
              className="flex items-center text-lg text-zinc-800 gap-2 my-3 mx-3"
            >
              <span>
                <IoReturnUpBack />
              </span>
              <span>Back</span>
            </button>
            <div className="flex w-full justify-center items-center pb-6">
              <div
                ref={targetRef}
                className="xl:max-w-[70%] lg:max-w-[90%] w-full"
              >
                {/* <LiveResume  /> */}
                {/* <PDFViewer>
                <ResumePDF resumeData={mockResumeData} />

  </PDFViewer> */}
                <LiveResume resumeData={mockResumeData} />
              </div>
            </div>
            <div className="fixed right-4 bottom-4">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg  divide-x divide divide-stroke bg-primary text-white">
                <button
                  onClick={() => {
                    handleDownload(
                      <LiveResumeDoc resumeData={mockResumeData} />
                    );
                  }}
                  className="flex items-center gap-1 hover:opacity-90"
                >
                  <BsDownload /> Download
                </button>
                {/* <PDFDownloadLink
      document={<ResumePDF resumeData={mockResumeData} />}
      fileName="resume.pdf"
    >
   
    <span>{ "Download PDF"}</span>
 
    </PDFDownloadLink> */}
                <button className="flex items-center gap-1 hover:opacity-90 px-2">
                  <MdEdit /> Edit
                </button>
              </div>
            </div>
          </div>
        )}

        {coverLetter && (
          <div className="w-full h-full flex justify-center md:items-center bg-black bg-opacity-50">
            <div
              className={`w-full md:max-w-[70%] lg:max-w-[60%] absolute bg-white md:rounded-2xl shadow-lg p-4`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Company Overview</h2>
                <button
                  onClick={() => {
                    setCoverLetter(false);
                    setMainview(true);
                  }}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-8 max-sm:px-2">
                <div className="flex flex-wrap gap-3.5 justify-between items-center">
                  <div className="flex items-center rounded-lg">
                    <button className="px-4 flex items-center gap-2 py-2 bg-[#E0E0E080] hover:bg-zinc-200 rounded-l-lg">
                      <FiDownload /> Download PDF
                    </button>
                    <button className="px-4 flex items-center gap-2 py-2 bg-[#E0E0E080] rounded-r-lg hover:bg-zinc-200">
                      <IoCopyOutline /> Copy
                    </button>
                  </div>
                  <div>
                    <button className="relative inline-flex items-center justify-center p-[2.5px] mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-[#2563EB] to-[#9333EA] group-hover:from-[#9333EA] group-hover:to-[#2563EB] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span className="relative px-8 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        <p className="text-center gap-1 items-center bg-gradient-to-r group-hover:text-white from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-flex">
                          <HiOutlineSparkles className="text-primary group-hover:text-white" />{" "}
                          Regenerate
                        </p>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="wmde-markdown-var overflow-y-auto custom-scrollbar max-sm:h-[58vh] bg-white mt-6 mb-9">
                  <MDEditor
                    value={sampleData?.cover_letter ?? ""}
                    preview="preview"
                    height={370}
                    className="bg-white"
                    hideToolbar
                  />
                </div>

                <div className="flex justify-end items-center gap-3">
                  <button
                    className="px-4 flex items-center gap-2 py-2 font-medium text-black"
                    onClick={() => {
                      setCoverLetter(false);
                      setMainview(true);
                    }}
                  >
                    Close
                  </button>
                  <div>
                    <button className="px-6 py-2 bg-primary rounded-full text-white hover:bg-primary/95">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {intelligence && (
          <div className="w-full h-full flex justify-center md:items-center bg-black bg-opacity-50">
            <div
              className={`w-full md:max-w-[70%] lg:max-w-[60%] absolute bg-white md:rounded-2xl shadow-lg p-4`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Company Intelligence</h2>
                <button
                  onClick={() => {
                    setIntelligence(false);
                    setMainview(true);
                  }}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-8 max-sm:px-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center rounded-lg">
                    <button className="px-4 flex items-center gap-2 py-2 bg-[#E0E0E080] rounded-r-lg hover:bg-zinc-200">
                      <IoCopyOutline /> Copy
                    </button>
                  </div>
                  <div>
                    <button className="relative inline-flex items-center justify-center p-[2.5px] mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-[#2563EB] to-[#9333EA] group-hover:from-[#9333EA] group-hover:to-[#2563EB] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span className="relative px-8 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        <p className="text-center gap-1 items-center bg-gradient-to-r group-hover:text-white from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-flex">
                          <HiOutlineSparkles className="text-primary group-hover:text-white" />{" "}
                          Regenerate
                        </p>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="wmde-markdown-var bg-white max-sm:h-[65vh] overflow-y-auto custom-scrollbar  mt-6 mb-9">
                  <MDEditor
                    value={sampleData?.cover_letter ?? ""}
                    preview="preview"
                    height={370}
                    className="bg-white"
                    hideToolbar
                  />
                </div>

                <div className="flex justify-end items-center gap-3">
                  <button
                    className="px-4 flex items-center gap-2 py-2 font-medium text-black"
                    onClick={() => {
                      setCoverLetter(false);
                      setMainview(true);
                    }}
                  >
                    Close
                  </button>
                  <div>
                    <button className="px-6 py-2 bg-primary rounded-full text-white hover:bg-primary/95">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {successKit && (
          <div className="w-full h-full flex justify-center md:items-center bg-black bg-opacity-50">
            <div
              className={`w-full md:max-w-[70%] lg:max-w-[60%] absolute bg-white md:rounded-2xl shadow-lg p-4`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Interview Success Kit</h2>
                <button
                  onClick={() => {
                    setSuccessKit(false);
                    setMainview(true);
                  }}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-8 max-sm:px-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center rounded-lg">
                    <button className="px-4 flex items-center gap-2 py-2 bg-[#E0E0E080] rounded-r-lg hover:bg-zinc-200">
                      <IoCopyOutline /> Copy
                    </button>
                  </div>
                  <div>
                    <button className="relative inline-flex items-center justify-center p-[2.5px] mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-[#2563EB] to-[#9333EA] group-hover:from-[#9333EA] group-hover:to-[#2563EB] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span className="relative px-8 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        <p className="text-center gap-1 items-center bg-gradient-to-r group-hover:text-white from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-flex">
                          <HiOutlineSparkles className="text-primary group-hover:text-white" />{" "}
                          Regenerate
                        </p>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="mt-6 mb-9">
                  <div className="w-full custom-scrollbar overflow-y-auto sm:h-[50vh] h-[65vh]  border border-stroke rounded-xl px-3 py-4">
                    {interviewTipsData.map((item: any, index: number) => {
                      return (
                        <div key={index} className="">
                          <button
                            onClick={() => toggleItem(index)}
                            className="w-full py-2 text-left flex justify-between items-center"
                          >
                            <div className="flex ml-4 gap-2 items-center">
                              <span>{index + 1}</span>
                              <span>{item.title}</span>
                            </div>
                            <div>
                              {openIndex === index ? (
                                <IoIosArrowUp
                                  className="dark:text-primary mr-4"
                                  size={22}
                                />
                              ) : (
                                <IoIosArrowDown
                                  className="dark:text-primary mr-4"
                                  size={22}
                                />
                              )}
                            </div>
                          </button>
                          {openIndex === index && (
                            <div className="py-3 px-4 text-sm bg-slate-50/50 flex flex-col gap-3 dark:text-slate-50 mb-5 rounded-b-md">
                              {item?.content?.map((val: any, idx: number) => (
                                <div className="" key={idx}>
                                  <p className="text-blue-600 underline mb-1.5">
                                    {val?.header}:
                                  </p>
                                  <ul className="space-y-2 text-zinc-700">
                                    {val?.pointers?.map(
                                      (pointer: string, i: number) => (
                                        <li
                                          key={i}
                                          className="flex items-center gap-1"
                                        >
                                          <TbArrowBigRightLinesFilled className="text-primary" />{" "}
                                          {pointer}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-end items-center gap-3">
                  <button
                    className="px-4 flex items-center gap-2 py-2 font-medium text-black"
                    onClick={() => {
                      setSuccessKit(false);
                      setMainview(true);
                    }}
                  >
                    Close
                  </button>
                  <div>
                    <button className="px-6 py-2 bg-primary rounded-full text-white hover:bg-primary/95">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>,
    document.querySelector("#fullModal") as HTMLElement
  );
};

export const ResumeResult: React.FC<ApplicationResultProps> = ({
  show,
  onHide,
}) => {
  const [mainView, setMainview] = useState(true);
  const [resumeView, setResumeView] = useState(false);
  const { targetRef } = usePDF({ filename: "page.pdf" });

  const handleDownload = async (component: any) => {
    // Generate a blob of the PDF
    console.log(component);
    const blob = await pdf(component).toBlob();

    // Create a blob URL
    const url = URL.createObjectURL(blob);

    // Create a link and click it to download the file
    const link = document.createElement("a");
    link.href = url;
    link.download = "document.pdf"; // Set the file name
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!show) {
    return null;
  }
  return ReactDOM.createPortal(
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="w-full h-full fixed inset-0 z-[999999] bg-[#F2F4F6] backdrop-blur-2xl"
      >
        {mainView && (
          <div className="relative h-screen">
            <div className="w-full bg-primary flex items-center md:px-6 py-5 px-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="bg-white/25 rounded-lg text-white w-9 h-9 flex items-center justify-center">
                  <IoDocumentTextOutline size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-0">
                    Your Resume is Ready!
                  </h3>
                  <p className="text-zinc-200">
                  To optimize Every component for a specific job in a company click on create Application Kit below 
                  </p>
                </div>
              </div>

              <button
                onClick={onHide}
                className="absolute top-[12px] md:top-[28px] text-white right-2 md:right-4 bg-white/25 hover:bg-white/30 rounded-full p-[4px]"
              >
                <RxCross2 size={18} className="" />
              </button>
            </div>
            <div className="min-h-[80%] overflow-y-auto custom-scrollbar pt-6 pb-28 max-sm:pb-[12rem] px-6">
              <div className="flex w-full justify-center items-center px-1.5 pb-4">
                <div className="px-3 md:max-w-[500px]">
                  <div>
                    <ContentAccordion
                      title={
                        <h2 className="flex items-center gap-2 py-3">
                          <IoDocumentTextOutline className="text-primary" /> CV
                        </h2>
                      }
                    >
                      <div className="bg-[#DBEAFE80] rounded-lg mb-3 p-3 flex flex-col gap-2 items-center justify-center">
                        <button
                          onClick={() => {
                            setMainview(false);
                            setResumeView(true);
                          }}
                          className="text-center hover:scale-105 duration-150 text-sm flex items-center gap-1 text-zinc-600"
                        >
                          <span>
                            <BsEye />
                          </span>{" "}
                          Preview
                        </button>
                        <div className="w-full min-h-[220px] max-h-[250px] 2xl:max-h-[300px] 3xl:max-h-[350px] 4xl:max-h-[550px] overflow-auto custom-scrollbar h-full bg-white">
                          <ResumePreview resumeData={mockResumeData} />
                        </div>
                        <p className="text-center text-sm text-zinc-600">
                          Click on the eye icon to view full preview
                        </p>
                      </div>
                    </ContentAccordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 px-8 py-2.5 bg-[#F2F4F6] flex max-sm:flex-col w-full items-center justify-between max-sm:gap-1.5 gap-3">
              <p className="text-zinc-500 max-sm:text-center">
              To craft your resume into a complete optimized kit with precision, convert to application kit! 🌟
                
              </p>
              <button className="bg-primary text-white justify-center font-semibold group rounded-md py-2.5 px-8 flex items-center gap-2">
                Create Application Kit{" "}
                <FaArrowRightLong className="group-hover:ml-4 duration-200" />
              </button>
            </div>
          </div>
        )}

        {resumeView && (
          <div className="relative h-screen overflow-y-auto custom-scrollbar w-full">
            <button
              onClick={() => {
                setResumeView(false);
                setMainview(true);
              }}
              className="flex items-center text-lg text-zinc-800 gap-2 my-3 mx-3"
            >
              <span>
                <IoReturnUpBack />
              </span>
              <span>Back</span>
            </button>
            <div className="flex w-full justify-center items-center pb-6">
              <div
                ref={targetRef}
                className="xl:max-w-[70%] lg:max-w-[90%] w-full"
              >
                {/* <LiveResume  /> */}
                {/* <PDFViewer>
                <ResumePDF resumeData={mockResumeData} />

  </PDFViewer> */}
                <LiveResume resumeData={mockResumeData} />
              </div>
            </div>
            <div className="fixed right-4 bottom-4">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg  divide-x divide divide-stroke bg-primary text-white">
                <button
                  onClick={() => {
                    handleDownload(
                      <LiveResumeDoc resumeData={mockResumeData} />
                    );
                  }}
                  className="flex items-center gap-1 hover:opacity-90"
                >
                  <BsDownload /> Download
                </button>
                {/* <PDFDownloadLink
      document={<ResumePDF resumeData={mockResumeData} />}
      fileName="resume.pdf"
    >
   
    <span>{ "Download PDF"}</span>
 
    </PDFDownloadLink> */}
                <button className="flex items-center gap-1 hover:opacity-90 px-2">
                  <MdEdit /> Edit
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>,
    document.querySelector("#fullModal") as HTMLElement
  );
};

export default ApplicationResult;
