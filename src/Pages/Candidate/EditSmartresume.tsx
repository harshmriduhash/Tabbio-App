import { useApp } from "../../context/AppContext";
import DefaultLayout from "../../layout/DefaultLayout";
import { useState } from "react";
import { Switch } from "../../components/form/Switch";
import { MdOutlineColorLens } from "react-icons/md";
import { mockResumeData } from "../../data/mockData";
import { UploadResumePhoto } from "../Authentication/uploadProfilephoto";
import {
  BasicInfo,
  CustomListSection,
  CustomTextSection,
  Education,
  Experience,
  Hobbies,
  Languages,
  ProfessionalSummary,
  Skills,
} from "../PageComponents/ApplicantComponents";
import { Menu, MenuItem } from "../../AnimatedUi/AnimatedNav";
import { HiOutlineTemplate } from "react-icons/hi";
import { Icons } from "../../components/icons";
import { RiLayoutTopLine } from "react-icons/ri";
import { AiOutlineLayout } from "react-icons/ai";
import { TfiLayout } from "react-icons/tfi";
import { DropdownSelect } from "../../components/form/customDropdown";
import { FaCheck, FaPlus } from "react-icons/fa6";
import { IoMdColorFilter } from "react-icons/io";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { Select4 } from "../../components/form/Select";
import { Sketch } from "@uiw/react-color";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";

const fonts = [
  {
    label: "Nunito",
    value: "nunito",
  },
  {
    label: "Josefin Sans",
    value: "josefin",
  },
];
const sizes = [
  {
    label: "Small",
    value: "small",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Large",
    value: "large",
  },
];

const primaryColors = ["#0077B5", "#CC0074", "#FF7D00", "#00C196", "#000000"];
const secondaryColors = ["#333333", "#CC0074", "#FF7D00", "#00C196", "#000000"];

const EditSmartResume: React.FC = () => {
  const {} = useApp();
  const navigate = useNavigate();
  //   const [active, setActive] = useState(true);
  const [active, setActive] = useState<string | null>(null);
  const [resumeData, setResumeData] = useState<any>(mockResumeData);
  const [showPalette, setShowPalette] = useState(false);
  const [showPalette2, setShowPalette2] = useState(false);
  const [on, setOn] = useState(false);

  const [config, setConfig] = useState({
    photo: resumeData?.photo ? true : false,
    about: resumeData?.professional_summary ? true : false,
    experience: resumeData?.experience?.length > 0 ? true : false,
    location: resumeData?.location ? true : false,
    education: resumeData?.education?.length > 0 ? true : false,
    skills: resumeData?.skills?.length > 0 ? true : false,
    languages: resumeData?.languages?.length > 0 ? true : false,
    hobbies: resumeData?.hobbies?.length > 0 ? true : false,
    email: resumeData?.email ? true : false,
    website: resumeData?.website_url ? true : false,
    phone: resumeData?.phone_url ? true : false,
    linkedin: resumeData?.linkedin_url ? true : false,
    role: resumeData?.role ? true : false,
  });
  const [sectionCount, setSectionCount] = useState(0); // To track the number of sections added
  const [customSections, setCustomSections] = useState<any[]>([]);
  const [sectionType, setSectionType] = useState("");
  const [sectionPlacement, setSectionPlacement] = useState("");
  // Function to add a new section to resumeData
  const addCustomSection = (type: string, placement: string) => {
    const newSection = {
      name: `customSection${sectionCount + 1}`,
      type: type, // Store the type
      placement: placement, // Store the placement
      content: type === "list" ? [""] : "", // Initialize based on type
    };

    // Add to customSections array
    setCustomSections((prevSections) => [...prevSections, newSection]);

    // Only add the section name as a key to resumeData
    setResumeData((prevData: any) => ({
      ...prevData,
      [`customSection${sectionCount + 1}`]: newSection.content, // Add key and initial value to resumeData
    }));
    setSectionCount((prevCount) => prevCount + 1);
  };

  const updateSectionName = (oldName: string, newName: string) => {
    // Update customSections array
    setCustomSections((prevSections) =>
      prevSections.map((section) =>
        section.name === oldName ? { ...section, name: newName } : section
      )
    );

    // Update resumeData by changing the key from oldName to newName
    setResumeData((prevData: any) => {
      const { [oldName]: sectionContent, ...rest } = prevData;

      // Check if oldName is a placeholder (e.g., "customSection1")
      const isPlaceholder = oldName.startsWith("customSection");

      // If the old name is a placeholder, remove it and add the new name
      if (isPlaceholder) {
        removeSection(oldName);
      }

      // If the old name is not a placeholder, just update the name
      return {
        ...rest, // Retain everything
        [newName]: sectionContent, // Update the name
      };
    });
  };

  // Function to update section content
  const updateSectionContent = (
    sectionName: string,
    newContent: string | string[]
  ) => {
    // Update the customSections array
    setCustomSections((prevSections) =>
      prevSections.map((section) =>
        section.name === sectionName
          ? { ...section, content: newContent }
          : section
      )
    );

    // Update the content in the resumeData object
    setResumeData((prevData: any) => ({
      ...prevData,
      [sectionName]: newContent, // Update the content of the section in resumeData
    }));
  };

  const removeSection = (sectionName: string) => {
    // Remove the section from the customSections array
    setCustomSections((prevSections) =>
      prevSections.filter((section) => section.name !== sectionName)
    );

    // Remove the section from the resumeData object
    setResumeData((prevData: any) => {
      const { [sectionName]: _, ...rest } = prevData;
      return rest; // Return the remaining sections in resumeData
    });
  };

  return (
    <DefaultLayout>
      <section className="w-full">
        <div className="bg-zinc-50/90 lg:px-9 md:px-6 px-2 py-3 mb-6 w-full">
          <div className="flex flex-wrap gap-3 items-center relative w-full z-99">
            <Menu setActive={setActive}>
              <MenuItem
                setActive={setActive}
                active={active}
                item={
                  <div className="flex space-x-2 items-center">
                    <HiOutlineTemplate />
                    <span>Template</span>
                    <Icons.arrowDown />
                  </div>
                }
                id="template"
              >
                <div className="w-full">
                  <ul className="relative flex flex-col gap-2 text-sm !font-normal list-none rounded-md bg-white">
                    <li
                      onClick={() =>
                        setResumeData((d: any) => ({ ...d, template: "basic" }))
                      }
                      className={`${
                        resumeData?.template === "basic"
                          ? "bg-jobseeker/10 text-[#345624]"
                          : "bg-transparent"
                      } cursor-pointer z-30 flex items-center rounded-md gap-1.5 px-2 py-2  text-center`}
                    >
                      <RiLayoutTopLine />
                      Basic Layout
                    </li>
                    <li
                      onClick={() =>
                        setResumeData((d: any) => ({
                          ...d,
                          template: "standard",
                        }))
                      }
                      className={`${
                        resumeData?.template === "standard"
                          ? "bg-jobseeker/10 text-[#345624]"
                          : "bg-transparent"
                      } cursor-pointer z-30 flex items-center rounded-md gap-1.5 px-2 py-2  text-center`}
                    >
                      <AiOutlineLayout />
                      Standard Layout
                    </li>
                    <li
                      onClick={() =>
                        setResumeData((d: any) => ({
                          ...d,
                          template: "hybrid",
                        }))
                      }
                      className={`${
                        resumeData?.template === "hybrid"
                          ? "bg-jobseeker/10 text-[#345624]"
                          : "bg-transparent"
                      } cursor-pointer z-30 flex items-center rounded-md gap-1.5 px-2 py-2  text-center`}
                    >
                      <TfiLayout />
                      Hybrid Layout
                    </li>
                  </ul>
                </div>
              </MenuItem>

              <MenuItem
                setActive={setActive}
                active={active}
                item={
                  <div className="flex space-x-2 items-center">
                    <HiOutlineTemplate />
                    <span>Typography</span>
                    <Icons.arrowDown />
                  </div>
                }
                id="typography"
              >
                <div className="flex flex-col space-y-4 text-sm w-[300px]">
                  <DropdownSelect
                    label="Fonts"
                    placeholder="Select Font..."
                    options={fonts}
                    onSelect={(val) => {
                      console.log(val);
                    }}
                    defaultValue={{ label: "Nunito", value: "nunito" }}
                  />
                  <DropdownSelect
                    label="Size"
                    placeholder="Select size..."
                    options={sizes}
                    onSelect={(val) => {
                      console.log(val);
                    }}
                    defaultValue={{ label: "Medium", value: "medium" }}
                  />
                </div>
              </MenuItem>

              <div className="relative">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item={
                    <div className="flex space-x-2 items-center">
                      <MdOutlineColorLens />
                      <span>Colors</span>
                      <Icons.arrowDown />
                    </div>
                  }
                  id="colors"
                >
                  <div className="flex flex-col space-y-4  text-sm w-[300px]">
                    <div>
                      <h6>Primary Colors</h6>
                      <div className="flex gap-3 items-center justify-between">
                        {primaryColors?.map((val, index) => (
                          <span
                            onClick={() => {
                              setResumeData((d: any) => ({
                                ...d,
                                style: {
                                  ...d.style,
                                  primary_color: val,
                                },
                              }));
                            }}
                            key={index}
                            className={`h-9 w-9 rounded-full flex justify-center items-center cursor-pointer`}
                            style={{ backgroundColor: val }}
                          >
                            {resumeData?.style?.primary_color === val && (
                              <FaCheck className="text-white" />
                            )}
                          </span>
                        ))}
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowPalette(!showPalette);
                          }}
                          className="h-10 w-10 bg-[#808080] text-white text-lg rounded-full flex justify-center items-center cursor-pointer"
                        >
                          <IoMdColorFilter />
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <h6>Secondary Colors</h6>
                      <div className="flex gap-3 items-center justify-between">
                        {secondaryColors?.map((val, index) => (
                          <span
                            key={index}
                            onClick={() => {
                              setResumeData((d: any) => ({
                                ...d,
                                style: {
                                  ...d.style,
                                  secondary_color: val,
                                },
                              }));
                            }}
                            className={`h-9 w-9 rounded-full flex justify-center items-center cursor-pointer`}
                            style={{ backgroundColor: val }}
                          >
                            {resumeData?.style?.secondary_color === val && (
                              <FaCheck className="text-white" />
                            )}
                          </span>
                        ))}

                        <span
                          onClick={() => setShowPalette2(!showPalette2)}
                          className="h-10 w-10 bg-[#808080] text-white text-lg rounded-full flex justify-center items-center cursor-pointer"
                        >
                          <IoMdColorFilter />
                        </span>
                      </div>
                    </div>
                  </div>
                </MenuItem>
                {showPalette && (
                  <div
                    className={`absolute z-[9999] bg-white flex h-auto left-[225px] top-[80px] flex-col rounded-lg border border-stroke 
                      shadow-default dark:border-strokedark `}
                  >
                    <Sketch
                      color={resumeData?.style?.primary_color}
                      onChange={(color) =>
                        setResumeData((d: any) => ({
                          ...d,
                          style: {
                            ...d.style,
                            primary_color: color.hex,
                          },
                        }))
                      }
                    />
                  </div>
                )}
                {showPalette2 && (
                  <div
                    className={`absolute z-[9999] bg-white flex h-auto left-[225px] top-[150px] flex-col rounded-lg border border-stroke 
                      shadow-default dark:border-strokedark `}
                  >
                    <Sketch
                      color={resumeData?.style?.secondary_color}
                      onChange={(color) =>
                        setResumeData((d: any) => ({
                          ...d,
                          style: {
                            ...d.style,
                            secondary_color: color.hex,
                          },
                        }))
                      }
                    />
                  </div>
                )}
              </div>

              <MenuItem
                setActive={setActive}
                active={active}
                item={
                  <div className="flex space-x-2 items-center">
                    <PiSlidersHorizontalBold />
                    <span>Sections</span>
                    <Icons.arrowDown />
                  </div>
                }
                id="sections"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="px-2 py-1 md:w-[530px] w-full"
                >
                  <div className="grid grid-cols-2 gap-8 justify-between text-sm border-b-2 border-stroke pb-5">
                    <div>
                      <h6 className="mb-2">Personal Details</h6>
                      <ul className="space-y-2.5">
                        <li>
                          <Switch
                            checked={config.location}
                            value={config.location}
                            label="Location"
                            size="sm"
                            onChange={(val) => {
                              setConfig((c) => ({ ...c, location: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked={config.phone}
                            value={config.phone}
                            label="Phone Number"
                            size="sm"
                            onChange={(val) => {
                              setConfig((c) => ({ ...c, phone: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked={config.email}
                            value={config.email}
                            label="Email"
                            size="sm"
                            onChange={(val) => {
                              setConfig((c) => ({ ...c, email: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked={config.website}
                            value={config.website}
                            label="Website"
                            size="sm"
                            onChange={(val) => {
                              setConfig((c) => ({ ...c, website: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked={config.linkedin}
                            value={config.linkedin}
                            label="Linkedin"
                            size="sm"
                            onChange={(val) => {
                              setConfig((c) => ({ ...c, linkedin: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked
                            value={on}
                            label="Custom 1"
                            size="sm"
                            onChange={(val) => {
                              setOn(val);
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked
                            value={on}
                            label="Custom 2"
                            size="sm"
                            onChange={(val) => {
                              setOn(val);
                            }}
                          />
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="space-y-2.5">
                        <li>
                          <Switch
                            checked={config.photo}
                            value={config.photo}
                            label="Picture"
                            size="sm"
                            onChange={(val) => {
                              setConfig((c) => ({ ...c, photo: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked={config.about}
                            value={config.about}
                            label="About Me"
                            size="sm"
                            onChange={(val) => {
                              setConfig((c) => ({ ...c, about: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked={config.role}
                            value={config.role}
                            label="Role"
                            size="sm"
                            onChange={(val) => {
                              setConfig((c) => ({ ...c, role: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked={config.experience}
                            value={config.experience}
                            label="Work Experience"
                            size="sm"
                            onChange={(val) => {
                              setConfig((c) => ({ ...c, experience: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked={config.education}
                            value={config.education}
                            label="Education"
                            size="sm"
                            onChange={(val) => {
                              setConfig((c) => ({ ...c, education: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked={config.skills}
                            value={config.skills}
                            label="Skills"
                            size="sm"
                            onChange={(val) => {
                              setConfig((c) => ({ ...c, skills: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked={config.languages}
                            value={config.languages}
                            label="Languages"
                            size="sm"
                            onChange={(val) => {
                              if (!resumeData?.hobbies) {
                                setResumeData((rd: any) => ({
                                  ...rd,
                                  languages: [""],
                                }));
                              }
                              setConfig((c) => ({ ...c, languages: val }));
                            }}
                          />
                        </li>
                        <li>
                          <Switch
                            checked={config.hobbies}
                            value={config.hobbies}
                            label="Hobbies"
                            size="sm"
                            onChange={(val) => {
                              if (!resumeData?.hobbies) {
                                setResumeData((rd: any) => ({
                                  ...rd,
                                  hobbies: [""],
                                }));
                              }
                              setConfig((c) => ({ ...c, hobbies: val }));
                            }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="py-2">
                    <p className="font-semibold text-sm mb-0">
                      Add a Custom Section
                    </p>
                    <div className="flex gap-2 items-center pb-12">
                      <Select4
                        value={sectionType}
                        onChange={(val: string) => setSectionType(val)}
                      >
                        <option value={""}>Select Type</option>
                        <option value={"text"}>Text Section</option>
                        <option value={"list"}>List Section</option>
                      </Select4>
                      {resumeData?.template === "basic" ? (
                        <Select4
                          value={sectionPlacement}
                          onChange={(val: string) => setSectionPlacement(val)}
                        >
                          <option value={""}>Select Placement...</option>
                          <option value="top">Top Part</option>
                          <option value="bottom">Bottom Part</option>
                        </Select4>
                      ) : (
                        <Select4
                          value={sectionPlacement}
                          onChange={(val: string) => setSectionPlacement(val)}
                        >
                          <option value={""}>Select Placement...</option>
                          <option value={"top"}>Left Column</option>
                          <option value={"bottom"}>Right Column</option>
                        </Select4>
                      )}

                      <button
                        onClick={() =>
                          addCustomSection(sectionType, sectionPlacement)
                        }
                        className="border w-[16%] h-[38px] bg-jobseeker/10 text-sm mt-2 flex justify-center items-center rounded-md border-jobseeker hover:bg-jobseeker hover:text-white"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </MenuItem>

              {/* Color Picker */}
            </Menu>

            <div className="ml-auto flex items-center gap-2">
              <button className="flex items-center gap-2 hover:scale-105 duration-150 text-zinc-700">
                <TbWorld />
              </button>
              <button className="flex items-center gap-2 hover:scale-105 duration-150 text-zinc-700">
                Create New <LuExternalLink />
              </button>
            </div>
          </div>
        </div>

        <div className="px-2 py-4 md:pl-8 md:pr-2">
          <div className="2xl:hidden lg:w-[90%] w-full flex justify-between gap-6 items-end">
            <button
              onClick={() => {}}
              className="flex items-center font-medium mb-3 gap-3 text-lg"
            >
              Exit
            </button>
            <button
              onClick={() => {}}
              className="px-4 py-2 md:px-8 flex bg-primary text-white items-center font-medium text-lg rounded-lg mb-3 gap-3"
            >
              Save Changes
            </button>
          </div>

          <div className="w-full flex 2xl:flex-row flex-col gap-5">
            <div className="w-full 2xl:max-w-[75%] lg:w-[90%]">
              {resumeData?.template === "basic" && (
                <div className="bg-white py-8 px-6 w-full overflow-x-auto custom-scrollbar">
                  <button
                    onClick={() => {
                      console.log(resumeData);
                      console.log(customSections);
                    }}
                  >
                    Console
                  </button>
                  <div className="flex w-full justify-between  mb-25">
                    <div className="flex flex-col mt-10">
                      <input
                        className={`border-none bg-white focus:bg-zinc-200  px-3 font-medium text-[40px] dynamic-input`}
                        style={{ color: resumeData?.style?.primary_color }}
                        placeholder="Your Name"
                        value={resumeData?.name}
                        onChange={(e) =>
                          setResumeData((r: any) => ({
                            ...r,
                            name: e.target.value,
                          }))
                        }
                      />
                      {config.role && (
                        <input
                          className={`border-none text-lg bg-white text-black mr-2 uppercase placeholder:text-black focus:bg-zinc-200 px-4 font-bold`}
                          placeholder="YOUR ROLE"
                          value={resumeData?.role}
                          onChange={(e) =>
                            setResumeData((r: any) => ({
                              ...r,
                              role: e.target.value,
                            }))
                          }
                        />
                      )}
                      <style>
                        {`
                              .dynamic-input::placeholder {
                               color: ${resumeData?.style?.primary_color}
                              }
                            `}
                      </style>
                    </div>
                    {config.photo && (
                      <div>
                        <UploadResumePhoto
                          user={null}
                          setUrl={(val) =>
                            setResumeData((r: any) => ({
                              ...r,
                              photo_url: val,
                            }))
                          }
                        />
                      </div>
                    )}
                  </div>

                  {config.about && (
                    <div>
                      <ProfessionalSummary
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                      />
                    </div>
                  )}

                  <div className="mt-3 mb-9 px-5">
                    <BasicInfo
                      resumeData={resumeData}
                      setResumeData={setResumeData}
                      config={config}
                    />
                  </div>

                  <div className="flex w-full flex-col gap-4">
                    {customSections
                      .filter((section) => section.placement === "top")
                      .map((section, index) => (
                        <div key={index}>
                          {section?.type === "list" ? (
                            <CustomListSection
                              props={{
                                key: section.name,
                                section: resumeData[section.name],
                                sectionContent: resumeData[section.name],
                                updateSectionName: updateSectionName,
                                updateSectionContent: updateSectionContent,
                              }}
                              handleRemove={() => removeSection(section.name)}
                            />
                          ) : (
                            <CustomTextSection
                              props={{
                                key: section.name,
                                section: resumeData[section.name],
                                updateSectionName: updateSectionName,
                                updateSectionContent: updateSectionContent,
                              }}
                              handleRemove={() => removeSection(section.name)}
                            />
                          )}
                        </div>
                      ))}
                  </div>

                  {config.experience && (
                    <div>
                      <Experience
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                      />
                    </div>
                  )}

                  {config.education && (
                    <div className="mt-7">
                      <Education
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                      />
                    </div>
                  )}

                  {config.skills && (
                    <div className="mt-7">
                      <Skills
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                      />
                    </div>
                  )}
                  {config.languages && (
                    <div className="mt-7">
                      <Languages
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                      />
                    </div>
                  )}
                  {config.hobbies && (
                    <div className="mt-7">
                      <Hobbies
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                      />
                    </div>
                  )}
                  {/* Dynamically render custom sections */}
                  <div className="flex w-full flex-col gap-4">
                    {customSections
                      .filter((section) => section.placement === "bottom")
                      .map((section, index) => (
                        <div key={index}>
                          {section?.type === "list" ? (
                            <CustomListSection
                              props={{
                                key: section.name,
                                section: resumeData[section.name],
                                sectionContent: resumeData[section.name],
                                updateSectionName: updateSectionName,
                                updateSectionContent: updateSectionContent,
                              }}
                              handleRemove={() => removeSection(section.name)}
                            />
                          ) : (
                            <CustomTextSection
                              props={{
                                key: section.name,
                                section: resumeData[section.name],
                                updateSectionName: updateSectionName,
                                updateSectionContent: updateSectionContent,
                              }}
                              handleRemove={() => removeSection(section.name)}
                            />
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {resumeData?.template === "standard" && (
                <div className="bg-white py-8 px-6 w-full overflow-x-auto">
                  <div className="flex w-full gap-1  mb-15">
                    {config.photo && (
                      <div>
                        <UploadResumePhoto
                          user={null}
                          props={{ size: "w-60 h-60" }}
                          setUrl={(val) =>
                            setResumeData((r: any) => ({
                              ...r,
                              photo_url: val,
                            }))
                          }
                        />
                      </div>
                    )}
                    <div className="flex flex-col mt-15">
                      <input
                        className={`border-none bg-white focus:bg-zinc-200 px-3 font-medium text-[40px] dynamic-input`}
                        style={{ color: resumeData?.style?.primary_color }}
                        placeholder="Your Name"
                        value={resumeData?.name}
                        onChange={(e) =>
                          setResumeData((r: any) => ({
                            ...r,
                            name: e.target.value,
                          }))
                        }
                      />
                      {config.role && (
                        <input
                          className={`border-none text-lg bg-white text-black mr-2 uppercase placeholder:text-black focus:bg-zinc-200 px-4 font-bold`}
                          placeholder="YOUR ROLE"
                          value={resumeData?.role}
                          onChange={(e) =>
                            setResumeData((r: any) => ({
                              ...r,
                              role: e.target.value,
                            }))
                          }
                        />
                      )}
                      <style>
                        {`
                              .dynamic-input::placeholder {
                               color: ${resumeData?.style?.primary_color}
                              }
                            `}
                      </style>
                    </div>
                  </div>

                  <div className="flex gap-1 w-full">
                    <div className="max-w-60">
                      {config.about && (
                        <div>
                          <ProfessionalSummary
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                          />
                        </div>
                      )}
                      <div className="mt-3 mb-9 px-5">
                        <BasicInfo
                          resumeData={resumeData}
                          setResumeData={setResumeData}
                          config={config}
                        />
                      </div>

                      <div className="flex w-full flex-col gap-4">
                        {customSections
                          .filter((section) => section.placement === "top")
                          .map((section, index) => (
                            <div key={index}>
                              <CustomTextSection
                                props={{
                                  key: section.name,
                                  section: resumeData[section.name],
                                  updateSectionName: updateSectionName,
                                  updateSectionContent: updateSectionContent,
                                }}
                                handleRemove={() => removeSection(section.name)}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="w-full">
                      {config.experience && (
                        <div>
                          <Experience
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                          />
                        </div>
                      )}

                      {config.education && (
                        <div className="mt-7">
                          <Education
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                          />
                        </div>
                      )}

                      {config.skills && (
                        <div className="mt-7">
                          <Skills
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                          />
                        </div>
                      )}

                      {config.languages && (
                        <div className="mt-7">
                          <Languages
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                          />
                        </div>
                      )}
                      {config.hobbies && (
                        <div className="mt-7">
                          <Hobbies
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                          />
                        </div>
                      )}

                      {/* Dynamically render custom sections */}
                      <div className="flex w-full flex-col gap-4">
                        {customSections
                          .filter((section) => section.placement === "bottom")
                          .map((section, index) => (
                            <div key={index}>
                              <CustomTextSection
                                props={{
                                  key: section.name,
                                  section: resumeData[section.name],
                                  updateSectionName: updateSectionName,
                                  updateSectionContent: updateSectionContent,
                                }}
                                handleRemove={() => removeSection(section.name)}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="max-2xl:hidden">
              <div className="bg-white w-full min-w-[319px] h-full">
                <div className="bg-zinc-50/90 flex font-medium items-center gap-1.5 py-2 px-3">
                  <BsPencil size={18} /> Customize Profile
                </div>
                <div className="p-3 flex flex-col space-y-3">
                  <button
                    onClick={() => {
                      navigate(-1);
                    }}
                    className="px-6 py-2.5 bg-primary hover:opacity-90 text-white w-full font-medium text-lg rounded-lg"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => {}}
                    className="w-full px-6 py-2.5 border hover:bg-zinc-100 border-stroke rounded-lg font-medium mb-3 text-lg"
                  >
                    Exit Edit Mode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default EditSmartResume;
