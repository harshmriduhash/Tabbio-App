import { useApp } from "../../context/AppContext";
import DefaultLayout from "../../layout/DefaultLayout";
import { ResumeUpload } from "../General/ResumeUpload";
import { useState } from "react";
import Modal from "../../components/modal";
import { Switch } from "../../components/form/Switch";
import { CiEdit } from "react-icons/ci";
import { BsCopy, BsEye, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import {
  MdInsertLink,
  MdKeyboardDoubleArrowLeft,
  MdOutlineShield,
  MdShare,
} from "react-icons/md";
import Drawer from "../../components/Drawer";
import Button from "../../components/Button";
import { FaCircle, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineBarChart } from "react-icons/ai";
import { LuClock, LuExternalLink } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
import { TbCopy, TbWorld } from "react-icons/tb";
import CandidateProfile from "../PageComponents/CandidateProfile";
import ResumeAnalytics from "./ResumeAnalytics";
import { UpgradeCandidateSubscription } from "../PageComponents/UpgradeSubscriptionModal";
import { FcReddit } from "react-icons/fc";
import { mockResumeData } from "../../data/mockData";
import { ProfileSummary } from "./SmartResumeComponents";

const SmartResumeSettings: React.FC = () => {
  const { user, updateUser } = useApp();
  const [editLink, setEditLink] = useState(false);
  const prefix = "tabbio.link/";
  const [inputValue, setInputValue] = useState(
    user?.resume_link || "tabbio.link/"
  );
  const [linkModal, setLinkModal] = useState(false);
  const [status, setStatus] = useState(true);

  return (
    <section className="bg-white w-full min-w-[319px] h-full">
      <div className="bg-zinc-50/90 flex items-center gap-1.5 py-2 px-3">
        <SlSettings /> Settings
      </div>
      <div className="p-3">
        {!editLink && (
          <div className="bg-gradient-to-l from-[#EFF6FF] to-[#DBEAFE] rounded-lg px-2 py-2.5">
            <div className="flex items-center gap-2">
              <TbWorld className="text-primary" size={14} />
              <div className="flex flex-col">
                <span className="text-sm">Smart Resume</span>
                <span className="text-xs">
                  Your Smart Resume is {status ? "live" : "not live"}
                </span>
              </div>
              <div className="ml-auto">
                <Switch
                  value={status}
                  checked={user?.resume_link_active}
                  onChange={(value) => {
                    setStatus(value);
                  }}
                  size="sm"
                />
              </div>
            </div>
            <div className="bg-white flex items-center gap-1 py-2 px-2 rounded-md border border-slate-200 my-3">
              <div className="flex items-center gap-2">
                <MdInsertLink className="text-primary" />
                <span className="text-sm">{user?.resume_link}</span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button className="text-primary" onClick={() => {}}>
                  <TbCopy />
                </button>
                <button
                  className="text-primary"
                  onClick={() => setEditLink(true)}
                >
                  <CiEdit size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {editLink && user?.resume_link && (
          <div className="bg-gradient-to-l from-[#EFF6FF] to-[#DBEAFE] rounded-lg px-2 py-2.5">
            <div className="flex items-center gap-2">
              <TbWorld className="text-primary" size={14} />
              <div className="flex flex-col">
                <span className="text-sm">Edit your custom URL</span>
                <span className="text-xs">
                  Personalize the URL for your profile.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 py-2 px-2 my-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const inputValue = e.target.value;
                  // Prevent the user from modifying the prefix
                  if (!inputValue.startsWith(prefix)) {
                    return;
                  }

                  // Update the state but keep the prefix intact
                  setInputValue(inputValue);
                }}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  const inputValue = e.currentTarget.value;
                  // Prevent deleting the prefix using Backspace or Delete keys
                  if (
                    (e.key === "Backspace" || e.key === "Delete") &&
                    inputValue.length === prefix.length
                  ) {
                    e.preventDefault();
                  }
                }}
                placeholder="your-name"
                className={` outline-none w-full px-2 bg-white ml-1 border border-slate-300 rounded-lg py-2 focus:border-primary`}
              />
              <button
                className="bg-primary px-6 py-2.5 rounded-md text-white hover:scale-95 w-full font-medium"
                onClick={() => {
                  updateUser({
                    ...user,
                    resume_link: inputValue,
                  });
                  setLinkModal(true);
                }}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="p-3">
        <div className="flex items-center gap-1.5 mb-3">
          <MdOutlineShield /> Privacy Controls
        </div>
        <div className="flex items-center gap-2 py-4 px-1 mb-5 shadow-md rounded-lg">
          <TbWorld className="text-primary" size={16} />
          <div className="flex flex-col">
            <span className="text-sm">Open to</span>
            <span className="text-xs">
              Let recruiters know your availability
            </span>
          </div>
          <div className="ml-auto">
            <Switch
              value={status}
              checked={user?.resume_link_active}
              onChange={(value) => {
                setStatus(value);
              }}
              size="sm"
            />
          </div>
        </div>{" "}
        <div className="flex items-center gap-2 py-4 px-1 mb-5 shadow-md rounded-lg">
          <TbWorld className="text-primary" size={16} />
          <div className="flex flex-col">
            <span className="text-sm">Last Update Status</span>
            <span className="text-xs">
              Let recruiters know your update time
            </span>
          </div>
          <div className="ml-auto">
            <Switch
              value={status}
              checked={user?.resume_link_active}
              onChange={(value) => {
                setStatus(value);
              }}
              size="sm"
            />
          </div>
        </div>{" "}
        <div className="flex items-center gap-2 py-4 px-1 mb-5 shadow-md rounded-lg">
          <TbWorld className="text-primary" size={16} />
          <div className="flex flex-col">
            <span className="text-sm">Contact Privacy</span>
            <span className="text-xs">Showing all contact details</span>
          </div>
          <div className="ml-auto">
            <Switch
              value={status}
              checked={user?.resume_link_active}
              onChange={(value) => {
                setStatus(value);
              }}
              size="sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 py-4 px-1 mb-5 shadow-md rounded-lg">
          <TbWorld className="text-primary" size={16} />
          <div className="flex flex-col">
            <span className="text-sm">Education Dates</span>
            <span className="text-xs">Showing graduation years</span>
          </div>
          <div className="ml-auto">
            <Switch
              value={status}
              checked={user?.resume_link_active}
              onChange={(value) => {
                setStatus(value);
              }}
              size="sm"
            />
          </div>
        </div>
      </div>
      <Modal
        show={linkModal}
        onHide={() => {
          setLinkModal(false);
        }}
        size="w-full max-w-[450px]"
      >
        <div className="space-y-3 flex-col w-full items-center flex justify-center">
          <h6 className="text-xl text-zinc-800 font-semibold">
            Your Tabbio link is live
          </h6>
          <p className="text-zinc-500 text-center">
            Send it to your Linkedin, Twitter, TikTok, YouTube, and wherever
            your audience are.
          </p>

          <p className="text-3xl font-medium text-primary py-3 text-center">
            {user?.resume_link}
          </p>
          <Button
            size="lg"
            rounded
            onClick={() => {
              setEditLink(false);
            }}
          >
            <BsCopy /> Copy Link
          </Button>
        </div>
      </Modal>
    </section>
  );
};

const ShareCV: React.FC = () => {
  const [url] = useState("https://freecodecamp.org");
  const [buttonText, setButtonText] = useState("Copy");

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setButtonText("Copied!");
      setTimeout(() => {
        setButtonText("Copy");
      }, 3000);
    });
  };
  const text = "Check this out!";
  const title = "Check this out!";

  return (
    <div className="bg-white pb-6">
      <div className="flex items-center gap-4 mb-7">
      <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white rounded-full p-2 hover:bg-blue-900"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedinIn size={22} />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-800"
          aria-label="Share on Facebook Messenger"
        >
          <FaFacebookF size={22} />
        </a>
        <a
          href={`https://twitter.com/messages/compose?text=${text}%20${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-full p-2 hover:bg-zinc-800"
          aria-label="Share on X (Twitter)"
        >
          <BsTwitterX size={20} />
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${text}%20${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white rounded-full p-2 hover:bg-green-700"
          aria-label="Share on WhatsApp"
        >
          <BsWhatsapp size={22} />
        </a>
       
        <a
          href={`https://www.reddit.com/submit?url=${url}&title=${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-700"
          aria-label="Share on Reddit"
        >
          <FcReddit size={22} />
        </a>
      </div>
      <div className="flex items-center border bg-neutral-300 border-stroke rounded-lg">
        <input
          type="text"
          readOnly
          className="flex-1 text-gray-700 rounded-l-lg focus:outline-none bg-white focus-within:ring-0 border-none focus:border-none"
          value="https://yourpal.ai/hello/542566252"
        />
        <button
          className="text-zinc-900 hover:scale-105 px-4 py-1.5 font-medium ml-2"
          onClick={handleCopy} 
        >
         {buttonText}
        </button>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const { user } = useApp();
  const navigate = useNavigate();
  const [active, _setActive] = useState(true);
  const [candidateData] = useState<any | null>(mockResumeData);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [upgradeModal, setUpgradeModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  return (
    <DefaultLayout>
      <section className="">
        <div className="bg-zinc-50/90 py-2.5 px-4.5 text-sm flex flex-wrap lg:items-center justify-between gap-3">
          <div className="flex items-center gap-4 max-sm:justify-between">
            <div className="flex items-center gap-1">
              <FaCircle size={10} className="text-green-500 max-lg:hidden" />
              <span>{user?.plan || "Free Plan"}</span>
              <button
                onClick={() => setUpgradeModal(true)}
                className="py-1 px-1.5 ml-1 text-xs hover:scale-x-105 text-white rounded-full bg-[#C89529]"
              >
                Upgrade <span className="max-lg:hidden">to Premium</span>
              </button>
            </div>
            <button
              onClick={() => setShowAnalytics(true)}
              className="flex items-center gap-1 hover:scale-x-105 duration-100"
            >
              <BsEye className="max-lg:hidden" />
              <span className="max-md:hidden">
                {user?.plan || "10 profile views"}
              </span>
              <AiOutlineBarChart className="text-primary text-lg" />
            </button>
          </div>

          <div className="flex items-center  gap-4">
            <div className="lg:flex hidden items-center gap-1 text-zinc-300 hover:scale-x-105 duration-100">
              <LuClock className="" />
              <span>{user?.plan || "Updated 1d ago"}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCircle size={10} className="text-green-500 max-md:hidden" />
              <span className="max-md:hidden">
                {user?.plan || "tabbio.com/name"}
              </span>
              <button
                onClick={() => setShareModal(true)}
                className="py-1 px-1.5 md:ml-1 max-md:pl-0 flex items-center gap-1 hover:scale-x-105 "
              >
                <MdShare /> <span className="max-md:hidden">Share</span>
              </button>
            </div>
            <button
              onClick={() => navigate("edit")}
              className="text-primary hover:scalex-x-105 inline-flex items-center gap-1.5"
            >
              <span className="">Edit Profile CV</span>{" "}
              <LuExternalLink size={14} className="" />
            </button>
          </div>
        </div>
        <div className="px-2 py-4 md:pl-8 md:pr-2">
          <div className="xl:hidden flex justify-end items-center">
            <button
              onClick={() => setShowDrawer(true)}
              className="px-4 py-1.5 flex items-center text-xl mb-3 gap-3"
            >
              <MdKeyboardDoubleArrowLeft /> <SlSettings />
            </button>
          </div>
          {active ? (
            <div className="w-full flex xl:flex-row flex-col gap-5">
              <div className="">
              <section className="bg-white px-6 py-5 w-full h-full">
                <ProfileSummary resumeData={candidateData} />
                </section>
                <CandidateProfile />
              </div>
              <div className="max-xl:hidden">
                <SmartResumeSettings />
              </div>
            </div>
          ) : (
            <div className="">
              <div className="flex w-full min-h-[85vh] flex-col items-center justify-center pb-10">
                <div className="bg-white flex flex-col gap-3.5 justify-center items-center rounded-xl py-5 px-4 lg:w-[70%] w-[90%]">
                  <span className="p-2 w-12 h-12 rounded-full flex justify-center items-center text-primary bg-primary/10">
                    <CgFileDocument size={28} />
                  </span>
                  <h2 className="text-xl text-center font-semibold text-black dark:text-white">
                    Create Your SmartResume
                  </h2>
                  <p className="text-neutral-500 mb-3">
                    Upload your existing resume or create a new one
                  </p>
                  <div className="px-5 w-full">
                    <ResumeUpload />
                  </div>
                </div>

                <div className="my-6 flex flex-col gap-4 w-full justify-center items-center">
                  <p>OR</p>
                  <Link
                    to={``}
                    className="text-lg text-primary flex items-center gap-2 hover:scale-x-105"
                  >
                    Create SmartResume from Scratch <FiExternalLink />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {showDrawer && (
          <Drawer
            title=""
            isOpen={showDrawer}
            onClose={() => setShowDrawer(false)}
          >
            <div className="mt-10 pb-10">
              <SmartResumeSettings />
            </div>
          </Drawer>
        )}

        {showAnalytics && (
          <ResumeAnalytics
            show={showAnalytics}
            onHide={() => setShowAnalytics(false)}
          />
        )}
        {upgradeModal && (
          <UpgradeCandidateSubscription
            show={upgradeModal}
            onHide={() => {
              setUpgradeModal(false);
            }}
          />
        )}
        {shareModal && (
          <Modal
            title="Share your CV"
            show={shareModal}
            onHide={() => setShareModal(false)}
          >
            <ShareCV />
          </Modal>
        )}
      </section>
    </DefaultLayout>
  );
};

export default Dashboard;
