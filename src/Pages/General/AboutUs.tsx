import CountUp from "react-countup";
import Layout from "../../layout/LandingLayout";
import { LuAward, LuRocket, LuUsers } from "react-icons/lu";
import { MdBusiness } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import teamImg1 from "../../assets/images/200.png";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="bg-gradient-to-b from-transparent to-white">
       <div className="2xl:px-[12rem] md:pt-8 pt-4 md:px-[4rem] px-4">
          <Breadcrumb homeRouteName="Home" homeRoute="/" pageName="Careers" />
        </div>
      <section className="p-8  md:pt-6 md:pb-14 text grid grid-cols-1 gap-12 xl:max-w-7xl 2xl:max-w-full 2xl:px-[12rem] w-full mx-auto">
        <div className="text-center text-lg text-zinc-500">
          <h1 className="text-center lg:text-6xl sm:text-5xl font-bold text-4xl text-slate-900 tracking-tight">
            Making Hiring{" "}
            <span className="py-2 bg-gradient-to-r from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-block">
              Human Again
            </span>
          </h1>
          <p className="mb-2">
            We're on a mission to transform how people find jobs and how
            companies <br /> hire talent.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 justify-center items-center w-full transition-all mx-auto duration-500 ease xs:gap-y-8 gap-x-6">
          <div className="text-center h-full rounded-xl w-full px-3 py-4 space-y-2.5 flex-col flex justify-center items-center">
            <span className="rounded-md p-2.5 bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.1)_0%,_rgba(168,_85,_247,_0.1)_100%)] text-slate-900">
              <LuUsers size={20} />
            </span>
            <h1 className="text-black font-semibold text-2xl">
              <CountUp
                className="text-inherit -mr-[5px]"
                start={80000}
                delay={2}
                end={100000}
                enableScrollSpy
              />{" "}
              +
            </h1>
            <p className="text-zinc-500">Active Users</p>
          </div>
          <div className="text-center h-full rounded-xl w-full px-3 py-4 space-y-2.5 flex-col flex justify-center items-center">
            <span className="rounded-md p-2.5 bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.1)_0%,_rgba(168,_85,_247,_0.1)_100%)] text-slate-900">
              <MdBusiness size={20} />
            </span>
            <h1 className="text-black font-semibold text-2xl">
              <CountUp
                className="text-inherit -mr-[5px]"
                start={3000}
                delay={2}
                end={5000}
                enableScrollSpy
              />{" "}
              +
            </h1>
            <p className="text-zinc-500">Partner Companies</p>
          </div>
          <div className="text-center h-full rounded-xl w-full px-3 py-4 space-y-2.5 flex-col flex justify-center items-center">
            <span className="rounded-md p-2.5 bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.1)_0%,_rgba(168,_85,_247,_0.1)_100%)] text-slate-900">
              <TbWorld size={20} />
            </span>
            <h1 className="text-black font-semibold text-2xl">
              <CountUp
                className="text-inherit -mr-[5px]"
                start={20}
                delay={2}
                end={120}
                enableScrollSpy
              />{" "}
              +
            </h1>
            <p className="text-zinc-500">Countries</p>
          </div>
          <div className="text-center h-full rounded-xl w-full px-3 py-4 space-y-2.5 flex-col flex justify-center items-center">
            <span className="rounded-md p-2.5 bg-[linear-gradient(90deg,_rgba(59,_130,_246,_0.1)_0%,_rgba(168,_85,_247,_0.1)_100%)] text-slate-900">
              <LuAward size={20} />
            </span>
            <h1 className="text-black font-semibold text-2xl">
              <CountUp
                className="text-inherit -mr-[5px]"
                start={1}
                delay={2}
                end={15}
                enableScrollSpy
              />{" "}
              +
            </h1>
            <p className="text-zinc-500">Industry Awards</p>
          </div>
        </div>
      </section>
      </section>

      <section className="bg-[#F9fafb] py-[9%] px-8 lg:px-[4rem] 2xl:px-[12rem]">
        <div className="mb-8 md:mb-14 text-center">
          <h1 className="font-bold text-center lg:text-3xl text-2xl mb-3">
            Our Story
          </h1>
          <p className="text-zinc-600 mb-3">
            Founded in 2023, Tabbio emerged from a simple observation: the job
            search and hiring process was broken. <br /> We set out to create a
            platform that would make the experience better for everyone
            involved.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center w-full transition-all mx-auto duration-500 ease xs:gap-y-8 gap-x-6">
          <div className="shadow-lg hover:shadow-xl h-full bg-white  rounded-xl w-full px-4 py-4 space-y-3 flex-col flex justify-center">
            <span className="rounded-md p-2.5 w-10 bg-gradient-to-tr from-[#3B82F61A] to-[#A855F71A] text-slate-900">
              <FaRegHeart size={20} />
            </span>
            <h1 className="text-black dark:text-white font-semibold text-lg">
              User-First Approach
            </h1>
            <p className="text-zinc-500">
              Everything we build starts with understanding user needs.
            </p>
          </div>
          <div className="shadow-lg hover:shadow-xl h-full bg-white rounded-xl w-full px-4 py-4 space-y-3 flex-col flex justify-center">
            <span className="rounded-md p-2.5 w-10 bg-gradient-to-tr from-[#3B82F61A] to-[#A855F71A] text-slate-900">
              <LuRocket size={20} />
            </span>
            <h1 className="text-black dark:text-white font-semibold text-lg">
              Innovation Focus
            </h1>
            <p className="text-zinc-500">
              Constantly pushing boundaries in recruitment technology.
            </p>
          </div>
          <div className="shadow-lg hover:shadow-xl h-full bg-white rounded-xl w-full px-4 py-4 space-y-3 flex-col flex justify-center">
            <span className="rounded-md p-2.5 w-10 bg-gradient-to-tr from-[#3B82F61A] to-[#A855F71A] text-slate-900">
              <LuUsers size={20} />
            </span>
            <h1 className="text-black dark:text-white font-semibold text-lg">
              Inclusive Hiring
            </h1>
            <p className="text-zinc-500">
              Making job search and hiring accessible to everyone.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-[9%] px-8 lg:px-[4rem] 2xl:px-[12rem]">
        <div className="mb-8 md:mb-14 text-center">
          <h1 className="font-bold text-center lg:text-3xl text-2xl mb-3">
            Our Team
          </h1>
          <p className="text-zinc-600 mb-3">
            Meet the passionate people behind Tabbio who are dedicated to
            transforming the future of work.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center w-full transition-all mx-auto duration-500 ease xs:gap-y-8 gap-x-6">
          <div className="flex items-center justify-center flex-col space-y-2.5">
            <div className="w-[127px] h-[127px]">
              <img
                src={teamImg1}
                className="object-cover w-full h-full rounded-full"
                alt="team member image"
              />
            </div>
            <h4 className="text-black dark:text-white font-semibold text-lg">
              John Doe
            </h4>
            <p className="text-zinc-500">Co-founder & CEO</p>
          </div>
          <div className="flex items-center justify-center flex-col space-y-2.5">
            <div className="w-[127px] h-[127px]">
              <img
                src={teamImg1}
                className="object-cover w-full h-full rounded-full"
                alt="team member image"
              />
            </div>
            <h4 className="text-black dark:text-white font-semibold text-lg">
              John Doe
            </h4>
            <p className="text-zinc-500">Co-founder & CEO</p>
          </div>
          <div className="flex items-center justify-center flex-col space-y-2.5">
            <div className="w-[127px] h-[127px]">
              <img
                src={teamImg1}
                className="object-cover w-full h-full rounded-full"
                alt="team member image"
              />
            </div>
            <h4 className="text-black dark:text-white font-semibold text-lg">
              John Doe
            </h4>
            <p className="text-zinc-500">Co-founder & CEO</p>
          </div>
          <div className="flex items-center justify-center flex-col space-y-2.5">
            <div className="w-[127px] h-[127px]">
              <img
                src={teamImg1}
                className="object-cover w-full h-full rounded-full"
                alt="team member image"
              />
            </div>
            <h4 className="text-black dark:text-white font-semibold text-lg">
              John Doe
            </h4>
            <p className="text-zinc-500">Co-founder & CEO</p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#2563EB] to-[#9333EA] py-[7%] px-8 lg:px-[4rem] 2xl:px-[12rem]">
        <div className="mb-8 text-center">
          <h1 className="font-bold text-center lg:text-3xl text-2xl mb-3 text-white">
            Join Our Mission
          </h1>
          <p className="text-zinc-200 mb-3">
            Be part of the revolution in recruitment technology. Join thousands
            of professionals and <br className="max-md:hidden"/> companies already using Tabbio.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={() => navigate('/signup')} className="px-12 py-3 bg-white hover:scale-105 duration-150 fonr-semibold rounded-md border-none text-zinc-900">
            Get Started
          </button>
        </div>
      </section>
    
    </Layout>
  );
};

export default AboutPage;
