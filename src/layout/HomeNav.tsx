import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SlideTab, { Cursor } from "../AnimatedUi/SlideTabs";
import Logo from "../assets/brand/logo-1.svg";
import Button from "../components/Button";
import StaggeredDropDown, {
  AnimatedOption,
} from "../AnimatedUi/staggeredDropdown";
import { IoMdArrowDropdown } from "react-icons/io";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const [tab, setTab] = useState(
    pathname.includes("company") ? "company" : "professionals"
  );
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hover, setHover] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` sticky top-0  z-[999] dark:bg-slate-800/80 ${
        navbar ? "dark:bg-slate-900" : ""
      }`}
    >
      <nav
        className={`${
          scroll ? "rounded-b-[40px]" : ""
        } shadow backdrop-blur-md bg-white/50  dark:bg-neutral-1000/80 dark:text-white w-full`}
      >
        <div className="relative mx-auto w-full max-w-screen-2xl 2xl:px-[10rem] 2xl:max-w-full p-2">
          <div className=" gap-4 px-2 mx-auto lg:max-w-7xl 2xl:max-w-full items-center justify-between border-stroke flex md:px-8">
            <div className="text-slate-900 dark:text-white">
              <div className="flex items-center justify-between py-3 md:block">
                <a href="/">
                  <img src={Logo} className="md:w-30 w-20" />
                </a>

                <div className="hidden">
                  {/* <ThemeToggleButton /> */}
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => {
                      setNavbar(!navbar);
                    }}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 dark:text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 dark:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div
              className={` ${
                pathname === "/" || pathname === "/company" ? "" : "hidden "
              }mx-auto`}
            >
              <ul
                onMouseLeave={() => {
                  setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                  }));
                  setHover(false);
                }}
                onMouseEnter={() => {
                  setHover(true);
                }}
                className="relative md:flex hidden w-fit rounded-md bg-[#F5F6FD]"
              >
                <SlideTab
                  activeTab={tab}
                  tab="professionals"
                  onChange={(tab) => {
                    setTab(tab);
                    navigate(`/`);
                  }}
                  setPosition={setPosition}
                  noBg={hover}
                >
                  <div className="flex gap-1.5 items-center">
                    <span className="">For Professionals</span>
                  </div>
                </SlideTab>
                <SlideTab
                  activeTab={tab}
                  tab="company"
                  onChange={(tab) => {
                    setTab(tab);
                    navigate(`/company`);
                  }}
                  setPosition={setPosition}
                  noBg={hover}
                >
                  <div className="flex gap-1.5 items-center">
                    <span className="">For Companies</span>
                  </div>
                </SlideTab>

                <Cursor position={position} />
              </ul>
              <div className="md:hidden block border rounded-lg border-stroke">
                <StaggeredDropDown
                  buttonIcon={<IoMdArrowDropdown />}
                  buttonText={
                    <span className="bg-gradient-to-r from-[#2563EB]  text-transparent bg-clip-text to-[#9333EA] inline-block font-medium">
                      {pathname.includes("company")
                        ? "Company"
                        : "Professionals"}
                    </span>
                  }
                >
                  <AnimatedOption
                    text="Professionals"
                    onClick={() => {
                      navigate(`/`);
                    }}
                  />

                  <AnimatedOption
                    text="Company"
                    onClick={() => {
                      navigate(`/company`);
                    }}
                  />
                </StaggeredDropDown>
              </div>
            </div>

            <div className="">
              <div
                className={`flex-1 justify-self-center pb-3 mt-3 md:block md:pb-0 md:mt-0 `}
              >
                <ul className="items-center justify-center flex space-x-6 space-y-0">
                  <li className="max-md:hidden">
                    <Link to="/signin">Sign in</Link>
                  </li>
                  <li>
                    <Button onClick={() => navigate("/signup")}>
                      Get Started
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
