import { RiSparkling2Line } from "react-icons/ri";
import Button from "../../components/Button";
import Layout from "../../layout/LandingLayout";
import {
  FaArrowRightLong,
  FaArrowTrendUp,
  FaLock,
  FaRegClock,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { JobseekerTestimonials } from "../../data/testimonials";
import { UploadResume } from "./ResumeUpload";
import { MdOutlineShield } from "react-icons/md";
import { InfiniteMovingIcons } from "../../AnimatedUi/animatedCards";
import brandIcons from "../../data/icons";
import { SiSimpleanalytics } from "react-icons/si";
import { LuAward, LuFileSearch, LuUsers } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import useColorMode from "../../hooks/useColorMode";
import { FiBriefcase, FiTarget } from "react-icons/fi";
import { BiBrain } from "react-icons/bi";
import { useState } from "react";
import { IoFlashOutline } from "react-icons/io5";
import { Ratings } from "../../components/Rating";
import { BsBrowserChrome } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProfessionalLandingpage: React.FC = () => {
  const navigate = useNavigate();
  const [colorMode, setColorMode] = useColorMode();
  const [hasEntered, setHasEntered] = useState(false);
  return (
    <Layout>
      <motion.section
        onViewportEnter={() => {
          if (typeof setColorMode === "function" && colorMode === "dark") {
            setHasEntered(false);
            setColorMode("light");
          }
        }}
        className="p-8 md:py-22 text grid grid-cols-1 gap-12 xl:max-w-7xl 2xl:max-w-full 2xl:px-[12rem] w-full mx-auto"
      >
        <div className="text-center text-lg text-zinc-500">
          <p className="text-red-600 bg-red-100/50 inline-flex rounded-full items-center px-4 py-2 mb-6 text-sm gap-2">
            <span>
              <MdOutlineShield />
            </span>
            Tired of updating multiple resumes?
          </p>
          <h1 className="text-center lg:text-6xl sm:text-5xl font-bold text-4xl text-slate-900 tracking-tight">
            Create your <br />
            <span className="py-2 bg-gradient-to-r from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-block">
              SmartResume™ in seconds
            </span>
          </h1>
          <p className="mb-2">The only resume you'll ever need</p>
          <p>
            Get 3x more interviews with a resume that automatically adapts to
            each job posting.
          </p>
        </div>

        <div className="mt-10">
          <UploadResume onChange={() => navigate("/live-resume")} maxWidth="max-w-[800px]" />
        </div>

        <div className="flex w-full justify-center items-center gap-8">
          <Button size="lg" onClick={() => {}}>
            <RiSparkling2Line />
            <span>Get Started</span>
            <FaArrowRightLong className="group-hover:translate-x-1.5" />
          </Button>
          <button>Watch Demo</button>
        </div>
      </motion.section>
      <div className="w-full  flex justify-center items-center  py-4 px-6">
        <InfiniteMovingIcons
          items={brandIcons}
          direction="right"
          speed="slow"
        />
      </div>

      <section className="pb-20 pt-10 bg-white dark:bg-[#111827]">
        <div className="">
          <section className="overflow-hidden flex flex-col justify-center items-center relative">
            <motion.div
              className="pb-[64px] relative flex justify-center items-center py-[10rem] px-8 lg:px-[4rem] 2xl:px-[12rem]"
              initial={{ y: 100, width: "90%" }}
              whileInView={{
                y: -20,
                // scaleY: 1,
                width: "100%",
                transition: {
                  delay: 0.2,
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              onViewportEnter={() => {
                if (
                  typeof setColorMode === "function" &&
                  colorMode === "dark"
                ) {
                  setHasEntered(false);
                  setColorMode("light");
                }
              }}
            >
              <motion.div
                className=" hidden h-40 w-full"
                whileInView={{
                  className: " block",
                }}
              ></motion.div>
              <div className="w-full">
                <div className="mb-8">
                  <h1 className="font-bold text-center lg:text-3xl text-2xl">
                    Unmatchable Features.{" "}
                    <span className="bg-gradient-to-r from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-block">
                      Free Forever
                    </span>
                  </h1>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center w-full transition-all mx-auto duration-500 ease xs:gap-y-8 gap-x-6">
                  <div className="border text-center border-stroke dark:border-strokedark hover:shadow-lg h-full rounded-xl w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2.5 bg-[#EFF6FF] text-slate-900">
                      <CgFileDocument size={20} />
                    </span>
                    <h1 className="text-black dark:text-white font-semibold text-lg">
                      Smart Resume Builder
                    </h1>
                    <p className="text-zinc-500">
                      Create your professional resume with our intuitive builder
                    </p>
                  </div>
                  <div className="border text-center border-stroke dark:border-strokedark rounded-xl hover:shadow-lg h-full w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2.5 bg-[#EFF6FF] text-slate-900">
                      <MdOutlineShield size={20} />{" "}
                    </span>
                    <h1 className="text-black dark:text-white font-semibold text-lg">
                      Custom Resume URL
                    </h1>
                    <p className="text-zinc-500">
                      Get your own you.tabbio.com domain
                    </p>
                  </div>
                  <div className="border text-center border-stroke dark:border-strokedark rounded-xl hover:shadow-lg h-full w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2.5 bg-[#EFF6FF] text-slate-900">
                      <SiSimpleanalytics size={18} />
                    </span>
                    <h1 className="text-black dark:text-white font-semibold text-lg">
                      Basic Analytics
                    </h1>
                    <p className="text-zinc-500">
                      Track basic views and engagement
                    </p>
                  </div>
                  <div className="border text-center border-stroke dark:border-strokedark rounded-xl hover:shadow-lg h-full w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2.5 bg-[#EFF6FF] text-slate-900">
                      <LuUsers size={20} />
                    </span>
                    <h1 className="text-black dark:text-white font-semibold text-lg">
                      Unlimited Views
                    </h1>
                    <p className="text-zinc-500">
                      Share your resume with unlimited viewers
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="pb-[64px] mt-[80px] relative flex flex-col justify-center items-center rounded-[18px] bg-[#111827] py-[5rem] px-8 lg:px-[4rem] 2xl:px-[12rem]"
              initial={{ y: 100, width: "80%" }}
              whileInView={{
                y: -30,
                width: "100%",
                transition: {
                  delay: 0.3,
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              onViewportEnter={() => {
                if (
                  typeof setColorMode === "function" &&
                  colorMode === "dark"
                ) {
                  setHasEntered(false);
                  setColorMode("light");
                }
              }}
            >
              <motion.div
                className="h-30 w-full"
                initial={{ className: "hidden" }}
                onViewportEnter={() => {
                  if (typeof setColorMode === "function" && !hasEntered) {
                    setHasEntered(true);
                    setTimeout(() => {
                      setColorMode("dark");
                    }, 1000);
                  }
                }}
                onViewportLeave={() => {
                  if (typeof setColorMode === "function" && hasEntered) {
                    setHasEntered(false);
                    setColorMode("light");
                  }
                }}
                whileInView={{
                  className: " block",
                }}
              ></motion.div>
              <div className="w-full">
                <div className="mb-8 md:mb-14">
                  <h1 className="font-bold text-center text-white lg:text-3xl text-2xl">
                    Pro. For those who{" "}
                    <span className="bg-gradient-to-r from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-block">
                      want more
                    </span>
                  </h1>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center w-full transition-all mx-auto duration-500 ease xs:gap-y-8 lg:gap-x-3">
                  <div className="text-center bg-[#1e293b] hover:bg-[#2e405c] h-full  rounded-md  w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2 bg-[#3B82F61A] text-primary">
                      <BiBrain />
                    </span>
                    <h1 className="text-white font-semibold text-lg">
                      AI Resume Optimization
                    </h1>
                    <p className="text-zinc-300">
                      Get tailored suggestions for each job application
                    </p>
                  </div>
                  <div className="text-center bg-[#1e293b] hover:bg-[#2e405c] h-full  rounded-md  w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2 bg-[#3B82F61A] text-primary">
                      <BsBrowserChrome />
                    </span>
                    <h1 className="text-white font-semibold text-lg">
                      One-Click Apply
                    </h1>
                    <p className="text-zinc-300">
                      Apply anywhere with our browser extension
                    </p>
                  </div>
                  <div className="text-center bg-[#1e293b] hover:bg-[#2e405c] h-full  rounded-md  w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2 bg-[#3B82F61A] text-primary">
                      <SiSimpleanalytics />
                    </span>
                    <h1 className="text-white font-semibold text-lg">
                      Advanced Analytics
                    </h1>
                    <p className="text-zinc-300">
                      Deep insights into resume performance
                    </p>
                  </div>
                  <div className="text-center bg-[#1e293b] hover:bg-[#2e405c] h-full  rounded-md  w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2 bg-[#3B82F61A] text-primary">
                      <FaLock />
                    </span>
                    <h1 className="text-white font-semibold text-lg">
                      Private Mode
                    </h1>
                    <p className="text-zinc-300">
                      Control who sees your resume
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-center items-center my-12">
                  <Button size="lg" onClick={() => {}}>
                    Upgrade to Pro{" "}
                    <span>
                      <IoFlashOutline size={18} />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="pb-[64px] relative flex justify-center items-center py-[10rem] px-8 lg:px-[4rem] 2xl:px-[12rem]"
              initial={{ y: 100, width: "90%" }}
              whileInView={{
                y: -20,
                // scaleY: 1,
                width: "100%",
                transition: {
                  delay: 0.2,
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              onViewportEnter={() => {
                if (
                  typeof setColorMode === "function" &&
                  colorMode === "dark"
                ) {
                  setHasEntered(false);
                  setColorMode("light");
                }
              }}
            >
              <motion.div
                className=" hidden h-40 w-full"
                whileInView={{
                  className: " block",
                }}
              ></motion.div>
              <div className="w-full">
                <div className="mb-8 md:mb-14 text-center">
                  <h1 className="font-bold text-center lg:text-3xl text-2xl mb-3">
                    Common Job Search Frustrations
                  </h1>
                  <p className="text-zinc-600 mb-3">
                    We understand the challenges of modern job searching
                  </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center w-full transition-all mx-auto duration-500 ease xs:gap-y-8 gap-x-6">
                  <div className="shadow-lg hover:shadow-xl h-full rounded-xl w-full px-4 py-4 space-y-3 flex-col flex justify-center">
                    <span className="rounded-md p-2.5 w-10 bg-[#EFF6FF] text-slate-900">
                      <LuFileSearch size={20} />
                    </span>
                    <h1 className="text-black dark:text-white font-semibold text-lg">
                      Black Hole Applications
                    </h1>
                    <p className="text-zinc-500">
                      Never know if your resume was even seen
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-[45px] rounded-full bg-gradient-to-r from-[#2563EB] to-[#9333EA]"></span>
                      <span>Solution: Real-time tracking & analytics</span>
                    </div>
                  </div>
                  <div className="shadow-lg hover:shadow-xl h-full rounded-xl w-full px-4 py-4 space-y-3 flex-col flex justify-center">
                    <span className="rounded-md p-2.5 w-10 bg-[#EFF6FF] text-slate-900">
                      <BiBrain size={20} />
                    </span>
                    <h1 className="text-black dark:text-white font-semibold text-lg">
                      ATS Rejection
                    </h1>
                    <p className="text-zinc-500">
                      Getting filtered out by ATS systems
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-[45px] rounded-full bg-gradient-to-r from-[#2563EB] to-[#9333EA]"></span>
                      <span>Solution: AI-powered optimization</span>
                    </div>
                  </div>
                  <div className="shadow-lg hover:shadow-xl h-full rounded-xl w-full px-4 py-4 space-y-3 flex-col flex justify-center">
                    <span className="rounded-md p-2.5 w-10 bg-[#EFF6FF] text-slate-900">
                      <FaRegClock size={20} />
                    </span>
                    <h1 className="text-black dark:text-white font-semibold text-lg">
                      Time-Consuming
                    </h1>
                    <p className="text-zinc-500">
                      Hours spent tweaking resumes
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-[45px] rounded-full bg-gradient-to-r from-[#2563EB] to-[#9333EA]"></span>
                      <span>Solution: One-click customization</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </section>

      <section className="py-[9%] px-8 lg:px-[4rem] 2xl:px-[12rem] bg-gradient-to-b from-[#F9fafb] to-white">
        <div>
          <div className="overflow-hidden flex flex-col">
            <motion.div
              className="pb-[64px] py-[5rem] w-full relative flex justify-center items-center "
              initial={{ y: 100 }}
              whileInView={{
                y: -60,
                transition: {
                  delay: 0.2,
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="w-full">
                <div className="mb-8 md:mb-14 text-center">
                  <p className="text-primary bg-primary/10 inline-flex rounded-full items-center px-4 py-2 mb-3 text-sm gap-2">
                    <span>
                      <LuAward />
                    </span>
                    Industry-Leading Performance
                  </p>
                  <h1 className="font-bold text-center lg:text-3xl text-2xl mb-3">
                    Proven Results at Scale
                  </h1>
                  <p className="text-zinc-600 mb-3">
                    Join thousands of professionals who've accelerated their
                    careers with Tabbio
                  </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center w-full transition-all mx-auto duration-500 ease xs:gap-y-8 gap-x-6">
                  <div className="text-center shadow-sm  bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.05)_0%,_rgba(168,_85,_247,_0.05)_100%)] hover:shadow-lg h-full rounded-xl w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2.5 bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.1)_0%,_rgba(168,_85,_247,_0.1)_100%)] text-slate-900">
                      <FaArrowTrendUp size={20} />
                    </span>
                    <h1 className="bg-gradient-to-r from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-block font-semibold text-2xl">
                      <CountUp
                        className="text-inherit -mr-[5px]"
                        start={7}
                        delay={2}
                        end={87}
                        enableScrollSpy
                      />{" "}
                      %
                    </h1>
                    <p className="text-zinc-500">Interview Success Rate</p>
                  </div>
                  <div className="text-center shadow-sm  bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.05)_0%,_rgba(168,_85,_247,_0.05)_100%)] hover:shadow-lg h-full rounded-xl w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2.5 bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.1)_0%,_rgba(168,_85,_247,_0.1)_100%)] text-slate-900">
                      <FaRegClock size={20} />
                    </span>
                    <h1 className="bg-gradient-to-r from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-block font-semibold text-2xl">
                      <CountUp
                        className="text-inherit -mr-[5px]"
                        start={0}
                        delay={2}
                        end={2.5}
                        enableScrollSpy
                      />{" "}
                      x
                    </h1>
                    <p className="text-zinc-500">Faster Job Search</p>
                  </div>
                  <div className="text-center shadow-sm  bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.05)_0%,_rgba(168,_85,_247,_0.05)_100%)] hover:shadow-lg h-full rounded-xl w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2.5 bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.1)_0%,_rgba(168,_85,_247,_0.1)_100%)] text-slate-900">
                      <FiTarget size={20} />
                    </span>
                    <h1 className="bg-gradient-to-r from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-block font-semibold text-2xl">
                      <CountUp
                        className="text-inherit -mr-[5px]"
                        start={3}
                        delay={2}
                        end={93}
                        enableScrollSpy
                      />{" "}
                      %
                    </h1>
                    <p className="text-zinc-500">ATS Match Rate</p>
                  </div>
                  <div className="text-center shadow-sm  bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.05)_0%,_rgba(168,_85,_247,_0.05)_100%)] hover:shadow-lg h-full rounded-xl w-full px-3 py-4 space-y-3 flex-col flex justify-center items-center">
                    <span className="rounded-md p-2.5 bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.1)_0%,_rgba(168,_85,_247,_0.1)_100%)] text-slate-900">
                      <FiBriefcase size={20} />
                    </span>
                    <h1 className="bg-gradient-to-r from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-block font-semibold text-2xl">
                      <CountUp
                        className="text-inherit -mr-[5px]"
                        start={10}
                        delay={2}
                        end={150}
                        enableScrollSpy
                      />{" "}
                      k+
                    </h1>
                    <p className="text-zinc-500">Jobs Landed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="pb-[64px] py-[5rem] w-full relative flex justify-center items-center "
              initial={{ y: 100 }}
              whileInView={{
                y: -60,
                transition: {
                  delay: 0.2,
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="w-full">
                <div className="mb-8 md:mb-14 text-center">
                  <h1 className="font-bold text-center lg:text-3xl text-2xl mb-3">
                    Success Stories
                  </h1>
                  <p className="text-zinc-600 mb-3">
                    Real results from real users
                  </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center w-full transition-all mx-auto duration-500 ease xs:gap-y-8 gap-x-6">
                  {JobseekerTestimonials.map((val, index) => (
                    <div
                      key={index}
                      className="shadow-lg hover:shadow-xl h-full rounded-xl w-full px-4 py-4 space-y-3 flex-col flex justify-center"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8">
                          <img
                            src={val.img}
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div>
                          <p className="text-zinc-950">{val.name}</p>
                          <p className="text-zinc-500 text-sm font-normal">
                            {val.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1 pb-2">
                        <div>
                          <Ratings rating={val.rating} />
                        </div>
                        <p className="bg-primary/5 text-primary text-xs rounded-full py-1 px-2.5">
                          {val.subtitle}
                        </p>
                      </div>
                      <p className="font-normal text-sm text-zinc-500 italic pb-4">
                        {val.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="w-full flex flex-col justify-center items-center my-12">
                  <Button size="lg" onClick={() => {}}>
                    Get Started Free{" "}
                    <span>
                      <FaArrowTrendUp size={18} />
                    </span>
                  </Button>
                  <p className="text-zinc-600 text-center my-3">
                    No credit card required · Free forever plan available
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfessionalLandingpage;
