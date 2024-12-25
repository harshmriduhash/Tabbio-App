import Layout from "../../layout/LandingLayout";
import { LuUsers } from "react-icons/lu";
import { FaRegHeart, FaRegClock, FaDollarSign } from "react-icons/fa6";
import { FiBriefcase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoFlashOutline, IoLocationOutline } from "react-icons/io5";
import Breadcrumb from "../../components/BreadCrumb";

const CareerPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="bg-gradient-to-b from-transparent to-white">
        <div className="2xl:px-[12rem] md:pt-8 pt-4 md:px-[4rem] px-4">
          <Breadcrumb homeRouteName="Home" homeRoute="/" pageName="Careers" />
        </div>
        <div className="p-8  md:py-6 text grid grid-cols-1 gap-12 xl:max-w-7xl 2xl:max-w-full 2xl:px-[12rem] w-full mx-auto">
          <div className="text-center text-lg text-zinc-500">
            <h1 className="text-center lg:text-6xl sm:text-5xl font-bold text-4xl text-slate-900 tracking-tight">
              Join the Future of{" "}
              <span className="py-2 bg-gradient-to-r from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-block">
                Recruitment
              </span>
            </h1>
            <p className="mb-2">
              Help us transform how the world hires and finds work.
            </p>
          </div>
          <div className="py-[5%]">
            <div className="mb-8 md:mb-14 text-center">
              <h1 className="font-bold text-center lg:text-3xl text-2xl mb-3">
                Why Join Tabbio?
              </h1>
              <p className="text-zinc-600 mb-3">
                We offer competitive benefits and a culture that puts people
                first.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center w-full transition-all mx-auto duration-500 ease xs:gap-y-8 gap-x-6">
              <div className="shadow-lg hover:shadow-xl h-full bg-white  rounded-xl w-full px-4 py-4 space-y-3 flex-col flex justify-center">
                <span className="rounded-md p-2.5 w-10 bg-gradient-to-tr from-[#3B82F61A] to-[#A855F71A] text-slate-900">
                  <FaRegHeart size={20} />
                </span>
                <h1 className="text-black dark:text-white font-semibold text-lg">
                  Health & Wellness
                </h1>
                <p className="text-zinc-500">
                  Comprehensive health coverage and wellness programs
                </p>
              </div>
              <div className="shadow-lg hover:shadow-xl h-full bg-white rounded-xl w-full px-4 py-4 space-y-3 flex-col flex justify-center">
                <span className="rounded-md p-2.5 w-10 bg-gradient-to-tr from-[#3B82F61A] to-[#A855F71A] text-slate-900">
                  <LuUsers size={20} />
                </span>
                <h1 className="text-black dark:text-white font-semibold text-lg">
                  Remote-First
                </h1>
                <p className="text-zinc-500">
                  Work from anywhere with flexible hours
                </p>
              </div>
              <div className="shadow-lg hover:shadow-xl h-full bg-white rounded-xl w-full px-4 py-4 space-y-3 flex-col flex justify-center">
                <span className="rounded-md p-2.5 w-10 bg-gradient-to-tr from-[#3B82F61A] to-[#A855F71A] text-slate-900">
                  <IoFlashOutline size={20} />
                </span>
                <h1 className="text-black dark:text-white font-semibold text-lg">
                  Growth
                </h1>
                <p className="text-zinc-500">
                  Learning budget and career development opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F9fafb] py-[9%] px-8 lg:px-[4rem] 2xl:px-[12rem]">
        <div className="mb-8 md:mb-14 text-center">
          <h1 className="font-bold text-center lg:text-3xl text-2xl mb-3">
            Open Positions
          </h1>
          <p className="text-zinc-600 mb-3">
            Find your next opportunity at Tabbio.
          </p>
        </div>
        <div className="grid grid-cols-1 justify-center items-center w-full transition-all mx-auto duration-500 ease gap-y-8">
          <div className="bg-white shadow-xl rounded-lg p-4 flex md:flex-row flex-col justify-between items-center gap-4">
            <div className="space-y-2">
              <h1 className="text-zinc-950 text-lg font-semibold">
                Senior Frontend Engineer
              </h1>
              <div className="flex gap-3 items-center text-zinc-500 font-normal">
                <span className="flex gap-1 items-center">
                  <FiBriefcase className="text-zinc-900" /> Engineering
                </span>
                <span className="flex gap-1 items-center">
                  <IoLocationOutline />
                  Remote
                </span>
                <span className="flex gap-1 items-center">
                  <FaRegClock className="text-zinc-900" />
                  Full-time
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="">
                  <FaDollarSign className="text-slate-900" />
                </span>
                <span className="">$120k - $180k</span>
              </div>
            </div>
            <div>
              <button className="bg-primary px-6 py-2 text-white rounded-md font-medium hover:scale-105 duration-150">
                Apply Now
              </button>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-4 flex md:flex-row flex-col justify-between items-center gap-4">
            <div className="space-y-2">
              <h1 className="text-zinc-950 text-lg font-semibold">
                Senior Frontend Engineer
              </h1>
              <div className="flex gap-3 items-center text-zinc-500 font-normal">
                <span className="flex gap-1 items-center">
                  <FiBriefcase className="text-zinc-900" /> Engineering
                </span>
                <span className="flex gap-1 items-center">
                  <IoLocationOutline />
                  Remote
                </span>
                <span className="flex gap-1 items-center">
                  <FaRegClock className="text-zinc-900" />
                  Full-time
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="">
                  <FaDollarSign className="text-slate-900" />
                </span>
                <span className="">$120k - $180k</span>
              </div>
            </div>
            <div>
              <button className="bg-primary px-6 py-2 text-white rounded-md font-medium hover:scale-105 duration-150">
                Apply Now
              </button>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-4 flex md:flex-row flex-col justify-between items-center gap-3">
            <div className="space-y-2">
              <h1 className="text-zinc-950 text-lg font-semibold">
                Senior Frontend Engineer
              </h1>
              <div className="flex gap-3 items-center text-zinc-500 font-normal">
                <span className="flex gap-1 items-center">
                  <FiBriefcase className="text-zinc-900" /> Engineering
                </span>
                <span className="flex gap-1 items-center">
                  <IoLocationOutline />
                  Remote
                </span>
                <span className="flex gap-1 items-center">
                  <FaRegClock className="text-zinc-900" />
                  Full-time
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="">
                  <FaDollarSign className="text-slate-900" />
                </span>
                <span className="">$120k - $180k</span>
              </div>
            </div>
            <div>
              <button className="bg-primary px-6 py-2 text-white rounded-md font-medium hover:scale-105 duration-150">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#2563EB] to-[#9333EA] py-[7%] px-8 lg:px-[4rem] 2xl:px-[12rem]">
        <div className="mb-8 text-center">
          <h1 className="font-bold text-center lg:text-3xl text-2xl mb-3 text-white">
            Find your next opportunity at Tabbio.
          </h1>
          <p className="text-zinc-200 mb-3">
            We're always looking for talented people to join our team. Send us
            your resume and we'll keep
            <br className="max-md:hidden" /> you in mind for future
            opportunities.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate("/signup")}
            className="px-12 py-3 bg-white hover:scale-105 duration-150 fonr-semibold text-lg rounded-md border-none text-primary"
          >
            Send Your Resume
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default CareerPage;
