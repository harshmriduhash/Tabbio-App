import { IoCopyOutline } from "react-icons/io5";
import Modal from "../../components/modal";
import { useState } from "react";
import { interviewTipsData } from "../../data/mockData";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const InterviewKit: React.FC<{
  show: boolean;
  setShow: () => void;
  resumeData: any;
}> = ({ show, setShow }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={setShow}
        title="Interview Success Kit"
        onProceed={() => {}}
        size="w-full max-w-[80%]"
      >
        <div className="px-8">
          <div className="flex justify-between items-center">
            <div className="hidden items-center rounded-lg">
              <button className="px-4 flex items-center gap-2 py-2 bg-[#E0E0E080] rounded-r-lg hover:bg-zinc-200">
                <IoCopyOutline /> Copy
              </button>
            </div>
            <div>
              <button>Regenerate</button>
            </div>
          </div>

          <div className="mt-6 mb-9">
            <div className="w-full bg-white dark:bg-boxdark-2">
              {interviewTipsData.map((item: any, index: number) => {
                return (
                  <div key={index} className="mb-4 bg-white dark:bg-boxdark-2">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full py-2 text-left bg-neutral-100 flex justify-between items-center"
                    >
                      <div className="flex ml-4 gap-2 items-center">
                        <span>{index + 1}</span>
                        <span>{item.title}</span>
                      </div>
                      <div>
                        {openIndex === index ? (
                          <IoIosArrowUp
                            className="dark:text-primary mr-4"
                            size={22}
                          />
                        ) : (
                          <IoIosArrowDown
                            className="dark:text-primary mr-4"
                            size={22}
                          />
                        )}
                      </div>
                    </button>
                    {openIndex === index && (
                      <div className="py-3 px-4 text-sm bg-neutral-100 dark:bg-boxdark-2 dark:text-slate-50 mb-5 rounded-b-md">
                        {item?.content?.map((val: any, idx: number) => (
                          <div className="" key={idx}>
                            <p className="text-blue-600 underline">
                              {val?.header}:
                            </p>
                            <ul className="gap-2">
                              {val?.pointers?.map((pointer:string, i:number) => (
                                <li key={i} className="flex items-center gap-1">
                                 <TbArrowBigRightLinesFilled /> {pointer}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end items-center gap-3">
            <button
              className="px-4 flex items-center gap-2 py-2 font-medium text-black"
              onClick={setShow}
            >
              Close
            </button>
            <div>
              <button className="px-6 py-2 bg-primary rounded-full text-white hover:bg-primary/95">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default InterviewKit;


