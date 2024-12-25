import { useState } from "react";

interface TabsProps {
    tabs: { label: string; content: React.ReactNode }[];
  }
  
  const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<string>(
      tabs.length > 0 ? tabs[0]?.label : ""
    );
  
    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement>,
      newActiveTab: string
    ) => {
      e.preventDefault();
      setActiveTab(newActiveTab);
    };
  
    return (
      <div className="bg-white px-10 py-5">
        <div className="flex border-b border-zinc-200">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`${
                activeTab === tab.label ? "border-b-2 border-primary/90" : ""
              } flex-1 text-gray-700 font-medium py-2`}
              onClick={(e) => handleClick(e, tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-10">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              style={{ display: activeTab === tab.label ? "block" : "none" }}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Tabs;