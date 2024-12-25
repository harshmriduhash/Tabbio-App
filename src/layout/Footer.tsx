import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/brand/logo-1.svg";
import { LuLinkedin } from "react-icons/lu";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f9fafb] text-slate-500 px-10 py-10 border-t-gray-400">
      <section className="container mx-auto lg:max-w-7xl 2xl:max-w-full max-w-screen-2xl 2xl:px-[12rem]">
        <div className="grid text-sm grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 border-stroke border-b pt-4 pb-6">
           {/* Column 1: Logo and Social Links */}
          <div className="col-span-2">
            <img src={Logo} className="w-30 mb-2.5" />
            <p className="mb-2.5">
              Smart Resume & Talent Database. Create your professional resume in
              seconds and get hired faster.{" "}
            </p>
            <div className="relative mb-2.5">
              <ul className="flex items-center space-x-2.5">
              <li>
                <a href="#" target="_blank" className="text-slate-800 hover:scale-105 ease-in-out duration-100">
                <FaXTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="text-slate-800 hover:scale-105 ease-in-out duration-100">
                <LuLinkedin size={20} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="text-slate-800 hover:scale-105 ease-in-out duration-100">
                <FaInstagram size={20} />
                </a>
              </li>
              </ul>
            </div>
          </div>
          {/* Column 1: Footer Links */}
          <div className="col-span-1  md:col-span-2 lg:col-span-1">
            <h3 className="font-bold mb-2 text-black">For Jobseekers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-500">
                  Smart Resume
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Application Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Cover Letter
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Company Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Interview Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Linkedin Extension
                </a>
              </li>

              {/* Add more links */}
            </ul>
          </div>

          {/* Column 2: Footer Links */}
          <div className="col-span-1">
            <h3 className="font-bold mb-2 text-black">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-500">
                  Sharelist
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Match to JD
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Talent Hub
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Applicant Builder
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Branded Applicant
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Evaluation Forms
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Footer Links */}
          <div className="col-span-1">
            <h3 className="font-bold mb-2 text-black">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="text-slate-500 hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="/faq" className="text-slate-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="text-slate-500 hover:text-blue-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Contact
                </a>
              </li>
              {/* Add more links */}
            </ul>
          </div>
          {/* Column 4: Footer Links */}
          <div className="col-span-1">
            <h3 className="font-bold mb-2 text-black">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-500">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="text-slate-500">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/affiliate" className="text-slate-500 hover:text-blue-500">
                  Affiliate Program
                </a>
              </li>
              {/* Add more links */}
            </ul>
          </div>

          {/* Column 5: Newsletter*/}
        </div>

        <div className="pt-4 flex justify-between md:flex-row flex-col items-center">
          <p>© 2024 Tabbio. All Rights Reserved</p>
          <ul className="flex items-center gap-3 flex-wrap">
            <li>
              <a href="#" className="text-slate-500 text-[15px]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-500 text-[15px]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-500 text-[15px]">
                Security
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
