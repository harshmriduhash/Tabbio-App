import React, { useState } from "react";
import Resume from "../PageComponents/Resume";
import { FiLink } from "react-icons/fi";
import Navbar from "../../layout/HomeNav";
import Button from "../../components/Button";
import OnboardCandidate from "../Authentication/OnboardCandidate";

const LiveResume: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [resumeData, _setResumeData] = useState({
    name: "John Doe",
    role: "Software Developer",
    template: "standard",
    style: {
      primary_color: "#007CFF",
      secondary_color: "#0077B5",
    },
    professional_summary:
      "Experienced software developer with a strong background in front-end and back-end development. Skilled in creating dynamic, user-friendly applications and collaborating within agile teams.",
    photo_url:
      "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "San Francisco, CA",
    email: "johndoe@example.com",
    phone_number: "+1 (555) 123-4567",
    website_url: "https://johndoeportfolio.com",
    linkedin_url: "https://linkedin.com/in/johndoe",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
      "TypeScript",
      "Git",
      "Agile Methodologies",
    ],
    hobbies: ["Hiking", "Photography", "Cooking"],
    languages: ["English", "Spanish"],
    experience: [
      {
        id: 1,
        position: "Frontend Developer",
        company: "Tech Solutions Inc.",
        description:
          "Developed responsive web applications using React and JavaScript. Collaborated with designers to create seamless UI experiences.",
        duration: "Jan 2021 - Present",
      },
      {
        id: 2,
        position: "Backend Developer",
        company: "Innovatech Corp.",
        description:
          "Built and maintained REST APIs using Node.js and Express. Improved application performance and data handling.",
        duration: "Aug 2019 - Dec 2020",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        school: "University of California, Berkeley",
        duration: "2015 - 2019",
      },
    ],
  });
  const [onboardModal, setOnboardModal] = useState(false);
  const [showMobileLink, setShow] = useState(false);
  return (
    <section>
      <Navbar />
      <div className="w-full grid lg:grid-cols-4 grid-cols-1 lg:px-12 md:px-4 px-3 gap-5 py-12">
        <div className="col-span-3">
          <div className="flex gap-3 items-center justify-between my-3 w-full">
            <div className="flex items-center gap-1">
              <h1 className="text-xl font-semibold text-zinc-700">
                Live Resume
              </h1>
            </div>
            <div className="flex items-center gap-3 pr-3">
              <button
                className="flex gap-1 bg-primary rounded-md font-medium text-white px-5 py-2 lg:hidden items-center hover:scale-x-105"
                onClick={() => {
                  setShow(!showMobileLink);
                }}
              >
                <FiLink size={22} /> {!showMobileLink ? "Show" : "Hide"} Smart
                Link
              </button>
            </div>
          </div>
          {showMobileLink && (
            <div className="mt-13 lg-hidden mb-5">
              {/* Resume Link */}
              <div className="bg-white shadow-lg rounded-sm py-3 px-3">
                <div className="flex items-center gap-3 justify-between">
                  <p className="2xl:text-xl text-lg font-outfit font-medium mb-2 text-zinc-700">
                    Public Resume & URL
                  </p>
                </div>

                <div className="">
                <div className="flex mb-2.5">
                <span className="inline-flex items-center pl-3 pr-1 text-sm text-zinc-500 border rounded-e-0 border-slate-300 border-e-0 rounded-s-lg">
                  Tabbio.link/
                </span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(e.target.value);
                  }}
                  placeholder="your-name"
                  className="rounded-none rounded-e-lg border border-l-0 border-stroke focus:outline-none focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
                />
              </div>

                  <Button
                    width="full"
                    size="lg"
                    onClick={() => {
                      setOnboardModal(true);
                    }}
                  >
                    Claim my Link
                  </Button>
                  <p className="text-zinc-500 py-2.5 text-center text-sm">
                    It's free and takes less than a minute
                  </p>
                </div>
              </div>
            </div>
          )}
          <Resume resumeData={resumeData} />
        </div>
        <div className="mt-13 lg:block hidden">
          {/* Resume Link */}
          <div className="bg-white shadow-lg rounded-sm py-3 px-3">
            <div className="flex items-center gap-3 justify-between">
              <p className="2xl:text-xl text-lg font-outfit font-medium mb-2 text-zinc-700">
                Public Resume & URL
              </p>
            </div>

            <div>
           
              <div className="flex mb-2.5">
                <span className="inline-flex items-center pl-3 pr-1 text-sm text-zinc-500 border rounded-e-0 border-slate-300 border-e-0 rounded-s-lg">
                  Tabbio.link/
                </span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(e.target.value);
                  }}
                  placeholder="your-name"
                  className="rounded-none rounded-e-lg border border-l-0 border-stroke focus:outline-none focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
                />
              </div>

              <Button
                width="full"
                rounded
                size="lg"
                onClick={() => {
                  setOnboardModal(true);
                }}
              >
                Claim my Link
              </Button>
              <p className="text-zinc-500 py-2.5 text-center text-sm">
                It's free and takes less than a minute
              </p>
            </div>
          </div>
        </div>
      </div>
      {onboardModal && (
        <OnboardCandidate
          show={onboardModal}
          onHide={() => setOnboardModal(false)}
        />
      )}
    </section>
  );
};

export default LiveResume;
