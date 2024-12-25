import { useEffect, useState } from "react";
import { Sidebar, SidebarBody } from "../../AnimatedUi/sidebar";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import FaqData from "../../data/faqData.json";
import Accordion from "../../components/Accordion";
import { Drawer2 } from "../../components/Drawer";
import { FaQuestion } from "react-icons/fa6";
import { BsLayoutSidebar, BsLayoutSidebarReverse } from "react-icons/bs";

const FaqComponent: React.FC<{ show: boolean; setShow: () => void }> = ({
  show,
  setShow,
}) => {
  const [open, setOpen] = useState(true);
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState("General");
  const [questions, setQuestions] = useState<any[]>([]);
  //   const navigate = useNavigate()
  const tabs = ["General", "Subscription", "YourPal Extension"];

  const [_tab, setTab] = useState<string>(tabs[0]);

  useEffect(() => {
    const selectedCategory = FaqData.find((item) => item.category === category);
    setQuestions(selectedCategory ? selectedCategory.questions : []);
  }, [category]);
  return (
    <Drawer2
      isOpen={show}
      onClose={() => {
        setShow();
      }}
      width="60%"
      title="Frequently Asked Questions"
      Icon={FaQuestion}
    >
      <div
        className={cn(
          "rounded-md relative flex flex-col md:flex-row bg-slate-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700",
          "h-full" // for your use case, use `h-screen` instead of `h-[60vh]`
        )}
      >
        <Sidebar open={open} setOpen={setOpen} animate={open}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-x-hidden">
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className=" text-black dark:text-white font-bold text-xl flex justify-end cursor-pointer"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  {open ? <BsLayoutSidebar /> : <BsLayoutSidebarReverse />}
                </motion.div>
              </>
              {open && (
                <div className="mt-8 flex flex-col space-y-4">
                  {tabs.map((val, index) => (
                    <div
                      key={index}
                      className={`${
                        category === val ? "bg-slate-300" : ""
                      } rounded-md px-2 py-1 hover:bg-slate-300 cursor-pointer`}
                      onClick={() => {
                        setCategory(val);
                        setTab(val);
                        setIndex(0);
                      }}
                    >
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </SidebarBody>
        </Sidebar>
        <div className="flex flex-1">
          <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-6 flex-1 w-full h-full">
            <Accordion items={questions} initialOpenIndex={index} key={index} />
          </div>
        </div>
      </div>
    </Drawer2>
  );
};

export default FaqComponent;
