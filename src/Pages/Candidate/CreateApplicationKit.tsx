import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  FaArrowRightLong,
  FaCircle,
  FaRegFile,
  FaRegStar,
} from "react-icons/fa6";
import { RiRobot2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { VscWand } from "react-icons/vsc";
import { TextArea } from "../../components/form";
import Stepper from "../../components/Stepper";
import { IoDocumentTextOutline, IoSparklesOutline } from "react-icons/io5";
import { FileUpload } from "../General/ResumeUpload";
import { FiUpload } from "react-icons/fi";
import { motion } from "framer-motion";
import { LuBuilding2, LuCrown } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import ProgressBar from "../../components/ProgressBar";
import ApplicationResult from "./ApplicationkitResult";

type Props = {
  show?: boolean;
  onHide: () => void;
};

const CreateApplicationKit: React.FC<Props> = ({ show, onHide }) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const [value, setValue] = React.useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [loadingStep, setLoadingStep] = useState(0);
  const [resultModal, setResultModal] = useState(false);

  const stepRefs = useRef<HTMLDivElement[]>([]);

  const [tabData] = useState([
    {
      stepNumber: 1,
      label: "Choose Resume",
      icon: <IoDocumentTextOutline />,
    },
    {
      stepNumber: 2,
      label: "Job Details",
      icon: <RiRobot2Line />,
    },
    {
      stepNumber: 3,
      label: "Generating",
      icon: <VscWand />,
    },
    // {
    //   stepNumber: 3,
    //   label: "Complete",
    //   icon: <FaCheck />,
    // },
  ]);

  const steps = [
    {
      title: "AI Analysis",
      description: "Analyzing resume and job requirements",
      details: [
        "Extracting key qualifications",
        "Analyzing experience relevance",
        "Evaluating skill matches",
      ],
      bgColor: "bg-primary",
      icon: <RiRobot2Line />,
    },
    {
      title: "Smart Optimization",
      description: "Enhancing application materials",
      bgColor: "bg-gradient-to-br from-[#7C3AED] via-[#9333EA] to-[#C026D3]",
      icon: <VscWand />,
    },
    {
      title: "Company Intelligence",
      description: "Gathering strategic insights",
      bgColor: "bg-gradient-to-br from-[#C026D3] via-[#DB2777] to-[#E11D48]",
      icon: <LuBuilding2 />,
    },
    {
      title: "Final Assembly",
      description: "Creating your premium kit",
      bgColor: "bg-gradient-to-br from-[#E11D48] via-[#DC2626] to-[#EA580C]",
      icon: <LuCrown />,
    },
  ];

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.8, duration: 0.5 },
    }),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  useEffect(() => {
    if (stepRefs.current[loadingStep]) {
      stepRefs.current[loadingStep].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [loadingStep]);

  useEffect(() => {
    if ((loadingStep + 1) === steps.length) {
      setResultModal(true);
    }
  }, [loadingStep]);

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="w-screen h-screen z-9999 bg-black bg-opacity-50 fixed top-0 flex md:items-center justify-center text-[#444444] overflow-x-auto">
      <div
        className={` bg-white py-5  flex flex-col md:min-w-[55%] md:max-w-[55%] min-w-full   md:rounded-2xl justify-center md:mx-6 md:my-auto mx-0`}
        ref={modalRef}
      >
        <div className="flex flex-col justify-center relative">
          <div className="flex items-center md:px-6 px-4">
            <div className="flex items-center gap-2">
              <span className="bg-primary rounded-full text-white w-9 h-9 flex items-center justify-center">
                <RiRobot2Line />
              </span>
              <div>
                <h3 className="font-semibold text-black dark:text-white text-lg mb-0">
                  Create Application Kit™
                </h3>
                <p className="text-zinc-500">
                  Let our AI craft your perfect application
                </p>
              </div>
            </div>

            <button
              onClick={onHide}
              className="absolute -top-[12px] text-zinc-900 right-2 bg-slate-200 hover:bg-slate-300 rounded-full p-[4px]"
            >
              <RxCross2 size={18} className="" />
            </button>
          </div>

          <div className="mt-10 mb-8 px-1">
            <Stepper
              steps={tabData}
              activeStep={activeStep}
              // setCompleted={handleSetCompleted}
              // setActiveStep={(step) => setActiveStep(step)}
              // control={true}
            />
          </div>

          <div className="py-5 h-[55vh] px-7 max-sm:px-2.5 overflow-y-auto no-scrollbar">
            {activeStep === 0 ? (
              <div>
                <div
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="px-4 py-5 bg-gradient-to-r from-[#EFF6FF] to-[#EEF2FF] border border-[#DBEAFE] cursor-pointer rounded-xl"
                >
                  <div className="flex items-center max-sm:items-start w-full gap-2">
                    <span className="bg-primary rounded-xl text-white max-sm:h-8 max-sm:w-8 max-sm:rounded-full w-12 h-12 flex items-center justify-center">
                      <RiRobot2Line />
                    </span>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white mb-0">
                        Continue with SmartResume™
                      </h3>
                      <p className="text-zinc-500 text-sm">
                        Use your existing optimized resume with AI enhancement
                      </p>
                    </div>
                    <span className="text-primary ml-auto max-md:w-8">
                      <FaArrowRightLong />
                    </span>
                  </div>
                </div>

                <div className="my-12">
                  <FileUpload>
                    <p className="font-bold text-neutral-700 text-center text-lg pt-4">
                      Drag & drop your resume here
                    </p>

                    <p className="text-neutral-500 text-center text-base">
                      or click to browse your files
                    </p>

                    <div className="flex gap-5 text-sm text-neutral-500 items-center justify-center w-full mt-3">
                      <p className="flex items-center gap-1">
                        <span>
                          <FaRegFile />
                        </span>
                        PDF, DOC, DOCX
                      </p>

                      <span>
                        <FaCircle size={4} className="rounded-full" />
                      </span>
                      <p className="flex items-center gap-1">
                        <span>
                          <FiUpload />
                        </span>
                        Up to 10MB
                      </p>
                    </div>
                  </FileUpload>
                </div>
              </div>
            ) : activeStep === 1 ? (
              <div>
                <div>
                  <TextArea
                    placeholder="Include the job title, company name, and full job description..."
                    label={
                      <span className="flex items-center gap-1">
                        <RiRobot2Line className="text-primary" />
                        Paste the job posting details below
                      </span>
                    }
                    value={value}
                    onChange={(val: string) => setValue(val)}
                    row={8}
                    props={{ roundedLg: true }}
                  />
                </div>

                <div className="bg-[#F9FAFB] border-stroke py-4 px-3 rounded-lg shadow mt-5">
                  <div className="flex gap-2 mb-2 items-start ">
                    <span>
                      <IoSparklesOutline
                        size={24}
                        className="text-[#4F46E5] font-bold"
                      />
                    </span>
                    <div className="text-[#4F46E5]">
                      <h6 className="text-slate-600 font-semibold mb-0.5">
                        AI-Powered Optimization
                      </h6>
                      <p className="text-[15px] text-slate-500">
                        Our AI will analyze the job details to create a
                        perfectly tailored application kit, including:
                      </p>
                      <ul className="text-sm font-semibold space-y-2 my-2">
                        <li className="flex items-center gap-1">
                          <span>
                            <FaRegStar className="text-yellow-400" />
                          </span>
                          <span>Optimized resume with relevant keywords</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <span>
                            <FaRegStar className="text-yellow-400" />
                          </span>
                          <span>Customized cover letter</span>
                        </li>

                        <li className="flex items-center gap-1">
                          <span>
                            <FaRegStar className="text-yellow-400" />
                          </span>
                          <span>Interview preparation materials</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-4 my-7 w-full flex items-center gap-6 justify-end">
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="text-zinc-700 hover:scale-105 duration-150"
                  >
                    Back
                  </button>
                  <button
                    disabled={value === ""}
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="bg-primary disabled:bg-opacity-50 text-white justify-center font-semibold group rounded-md py-3 px-8 flex items-center gap-2"
                  >
                    Create Application Kit{" "}
                    <VscWand className="group-hover:ml-4 duration-200" />
                  </button>
                </div>
              </div>
            ) : activeStep === 2 ? (
              <div>
                <div className="flex items-center justify-center gap-2">
                  <span className="bg-primary rounded-full text-white w-14 h-14 flex items-center justify-center">
                    <RiRobot2Line size={28} />
                  </span>
                </div>

                <div className="space-y-5 my-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      ref={(el) => (stepRefs.current[index] = el!)}
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: index <= loadingStep ? 1 : 0.3 }}
                      transition={{ duration: 0.7 }}
                      className={`bg-[#F9FAFB] rounded-xl px-5 py-6 flex items-start relative gap-3 mb-5 ${
                        index === loadingStep ? "shadow-lg" : ""
                      }`}
                    >
                      <div className="flex max-sm:flex-col gap-2 mb-2 items-start">
                        <span
                          className={`${step.bgColor} rounded-xl text-white max-sm:w-6 max-sm:h-6 w-12 h-12 flex items-center justify-center`}
                        >
                          {step.icon}
                        </span>
                        <div className="text-primary max-sm:w-full">
                          <h6 className="text-slate-600 font-semibold mb-0.5">
                            {step.title}
                          </h6>
                          <p className="text-[15px] text-slate-500">
                            {step.description}
                          </p>
                          {step.details && (
                            <motion.ul
                              initial="hidden"
                              animate={
                                index <= loadingStep ? "visible" : "hidden"
                              }
                              className="text-sm list-item list-disc font-semibold ml-4.5 space-y-2 my-2"
                            >
                              {step.details.map((detail, i) => (
                                <motion.li
                                  key={i}
                                  variants={listVariants}
                                  custom={i}
                                >
                                  <span>{detail}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </div>
                      </div>
                      <p
                        className={`${
                          index <= loadingStep && index !== loadingStep
                            ? "text-primary"
                            : "text-primary/80"
                        } ml-auto text-sm flex gap-1 items-center max-sm:absolute max-sm:top-5.5 max-sm:right-2`}
                      >
                        {index <= loadingStep && index !== loadingStep && (
                          <FaCheckCircle />
                        )}{" "}
                        {index === loadingStep
                          ? "Processing..."
                          : index <= loadingStep
                          ? "Complete"
                          : ""}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Div */}
                <div className="py-4">
                  <div className="mb-1.5">
                    <ProgressBar percent={35} />
                  </div>
                  <div className="flex w-full justify-between gap-6 text-sm text-zinc-500">
                    <p>Processing your application</p>
                    <p className="text-primary">35%</p>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      {resultModal && (
        <ApplicationResult
          show={resultModal}
          onHide={() => {
            onHide();
            setResultModal(false);
          }}
        />
      )}
    </div>,

    document.querySelector("#modal") as HTMLElement
  );
};

export default CreateApplicationKit;
