import Layout from "../../layout/LandingLayout";
import { LuBuilding2, LuUsers } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaArrowRightLong, FaArrowTrendUp } from "react-icons/fa6";
import Button from "../../components/Button";

const AffiliatePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="bg-gradient-to-b from-white to-[#EFF6FF]">
        <div className="bg-gradient-to-r from-[#2563EB] to-[#9333EA] w-full py-2 2xl:px-[12rem] md:px-[4rem] px-4">
          <div className="flex w-full justify-between items-center gap-6">
            <div className="flex gap-6 items-center text-white text-sm">
              <p className="flex max-sm:flex-col text-center items-center gap-1">
                <span>
                  <IoMdCheckmarkCircleOutline />
                </span>
                30% Recurring Commission
              </p>
              <p className="flex max-sm:flex-col text-center items-center gap-1">
                <span>
                  <IoMdCheckmarkCircleOutline />
                </span>
                Lifetime Revenue Share
              </p>
            </div>
            <div className="">
              <button className="bg-white text-primary rounded-full py-1 px-5 max-sm:px-2 max-sm:w-[100px] hover:scale-x-105 text-sm">
                Join Now
              </button>
            </div>
          </div>
        </div>
        <div className="2xl:px-[12rem]  pt-4 md:px-[4rem] px-4">
          <Breadcrumb homeRouteName="Home" homeRoute="/" pageName="Affiliate" />
        </div>
        <section className="p-8  md:pt-6 md:pb-14 text grid grid-cols-1 gap-12 xl:max-w-7xl 2xl:max-w-full 2xl:px-[12rem] w-full mx-auto">
          <div className="text-center text-lg text-zinc-500">
            <h1 className="text-center lg:text-6xl sm:text-5xl font-bold text-4xl text-slate-900 tracking-tight">
              Get Paid for What You{" "}
              <span className="py-2 bg-gradient-to-r from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-block">
                Already Do
              </span>
            </h1>
            <p className="mb-2">
              Turn every hire, career advice, or company referral into a
              recurring revenue stream
            </p>
          </div>
          <div className="grid lg:grid-cols-3 mb-6 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center w-full transition-all mx-auto duration-500 ease xs:gap-y-8 gap-x-6">
            <div className="shadow-lg hover:bg-gradient-to-r from-[#2563EB] to-[#9333EA] group h-full bg-white  rounded-xl w-full px-4 py-6 space-y-3 flex-col flex justify-center">
              <div className="flex items-center justify-center gap-2 px-2">
                <LuBuilding2 size={20} />
                <h1 className="text-black group-hover:text-white font-semibold text-lg">
                  Recruiters & Agencies
                </h1>
              </div>

              <p className="text-zinc-500 text-center group-hover:text-white">
                Double-dip: Earn from both placing candidates AND their Tabbio
                subscriptions
              </p>
            </div>
            <div className="shadow-lg hover:bg-gradient-to-r from-[#2563EB] to-[#9333EA] group h-full bg-white  rounded-xl w-full px-4 py-6 space-y-3 flex-col flex justify-center">
              <div className="flex items-center justify-center gap-2 px-2">
                <LuUsers size={20} />
                <h1 className="text-black group-hover:text-white font-semibold text-lg">
                  Career Influencers
                </h1>
              </div>

              <p className="text-zinc-500 text-center group-hover:text-white">
                Transform career advice into recurring revenue
              </p>
            </div>
            <div className="shadow-lg hover:bg-gradient-to-r from-[#2563EB] to-[#9333EA] group h-full bg-white  rounded-xl w-full px-4 py-6 space-y-3 flex-col flex justify-center">
              <div className="flex items-center justify-center gap-2 px-2">
                <HiOutlineOfficeBuilding size={20} />
                <h1 className="text-black group-hover:text-white font-semibold text-lg">
                  Companies & HR Teams
                </h1>
              </div>

              <p className="text-zinc-500 text-center group-hover:text-white">
                Earn while building your talent pipeline
              </p>
            </div>
          </div>

          <div className="bg-white w-full shadow-xl rounded-lg px-4 md:px-6 py-4">
            <h3 className="text-xl md:text-[22.5px] font-semibold text-zinc-900 mb-4">
              Calculate Your Earnings
            </h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="flex flex-col gap-6">
                <p>Monthly Earnings</p>
                <span className="bg-gradient-to-r from-[#BFDBFE] to-[#E9D5FF] h-1 rounded-lg"></span>
                <p className="text-zinc-600">
                  <span className="bg-gradient-to-b from-[#2563EB] text-transparent text-2xl font-bold bg-clip-text to-[#9333EA] inline-block">
                    5
                  </span>{" "}
                  referrals/month
                </p>
              </div>
              <div>
                <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] flex flex-col justify-center rounded-xl px-8 py-5 mb-4">
                  <p className="text-primary text-lg">Monthly Earnings</p>
                  <h6 className="font-semibold md:text-2xl text-xl bg-gradient-to-br from-[20px] w-[60px] from-[#2563EB] text-transparent bg-clip-text to-[#9333EA] inline-block">
                    $880
                  </h6>
                </div>
                <div className="bg-gradient-to-r from-[#FAF5FF] to-[#F3E8FF] flex flex-col justify-center rounded-xl px-8 py-5">
                  <p className="text-violet-600 text-lg">Yearly Earnings</p>
                  <h6 className="font-semibold md:text-2xl text-xl bg-gradient-to-r to-primary from-[#9333EA] from-[20px] w-[100px] text-transparent bg-clip-text  inline-block">
                    $10, 560
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white w-full shadow-xl rounded-lg px-4 md:px-6 py-4">
            <h3 className="text-xl md:text-[22.5px] font-semibold text-zinc-900 mb-4">
              How You'll Earn
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center w-full transition-all mx-auto duration-500 ease xs:gap-y-8 gap-x-6 mb-8">
              <div className="bg-gradient-to-r hover:shadow-lg from-[#F9FAFB] to-[#EFF6FF] group h-full rounded-xl w-full px-4 py-6 space-y-3 flex-col flex justify-center">
                <h1 className="text-black font-semibold text-lg">
                  Place candidates faster
                </h1>

                <p className="text-primary font-medium">
                  Placement Fee + $176/year per candidate
                </p>
              </div>
              <div className="bg-gradient-to-r hover:shadow-lg from-[#F9FAFB] to-[#EFF6FF] group h-full rounded-xl w-full px-4 py-6 space-y-3 flex-col flex justify-center">
                <h1 className="text-black font-semibold text-lg">
                  Refer hiring companies
                </h1>

                <p className="text-primary font-medium">
                  $588/year per company
                </p>
              </div>
              <div className="bg-gradient-to-r hover:shadow-lg from-[#F9FAFB] to-[#EFF6FF] group h-full rounded-xl w-full px-4 py-6 space-y-3 flex-col flex justify-center">
                <h1 className="text-black font-semibold text-lg">
                  Build passive income
                </h1>

                <p className="text-primary font-medium">
                  30% of all referred subscriptions
                </p>
              </div>
            </div>

            <div className="w-full bg-gradient-to-r hover:shadow-lg from-[#EFF6FF] to-[#FAF5FF] px-4 py-6 mb-6">
              <div className="flex gap-2">
                <span>
                  <FaArrowTrendUp size={28} className="text-zinc-800" />
                </span>
                <div>
                  <h1 className="text-primary font-semibold text-lg">
                    Real Example:
                  </h1>

                  <p className="text-zinc-500">
                    A recruiter placing 5 candidates/month earns $10,560+ extra
                    yearly just from Tabbio commissions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center my-8">
            <Button onClick={() => navigate("/signup")} size="lg">
              Start Earning Now <FaArrowRightLong />
            </Button>
            <p className="text-zinc-600 text-center py-3">
              No minimum requirements • Instant approval • Weekly payouts
            </p>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default AffiliatePage;
