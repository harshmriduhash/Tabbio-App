import MDEditor from "@uiw/react-md-editor";
import React, { useState } from "react";

interface Props {
  text: string;
}

const ReadMoreComponent: React.FC<Props> = ({ text }) => {
  const bodyClass = window.document.body.className;
  const [isExpanded, setIsExpanded] = useState(false);
  const wordsArray = text.split(" ");
  const slicedText = wordsArray.slice(0, 20).join(" ");

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="dark:bg-[#0d1117] mb-5 min-h-[150px] h-auto py-2  rounded-xl">
      <div
        className=""
        data-color-mode={bodyClass.includes("dark") ? "dark" : "light"}
      >
        <div className="wmde-markdown-var ">
          <MDEditor.Markdown
            source={isExpanded ? text : slicedText}
            className="p-3 rounded-sm"
          />
        </div>
      </div>
      {wordsArray.length > 20 && (
        <button
          className="text-slate-500 dark:text-slate-100 hover:underline focus:outline-none px-2"
          onClick={toggleExpanded}
        >
          {isExpanded ? "Hide" : "Read More"}
        </button>
      )}
    </div>
  );
};

export const ReadMoreComponent2: React.FC<Props> = ({ text }) => {
  const bodyClass = window.document.body.className;
  const [isExpanded, setIsExpanded] = useState(false);
  const wordsArray = text.split(" ");
  const slicedText = wordsArray.slice(0, 25).join(" ");

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="!bg-transparent mb-3 h-auto py-2 w-full">
      <div
        className=""
        data-color-mode={bodyClass.includes("dark") ? "dark" : "light"}
      >
        <div className="wmde-markdown-var bg-transparent">
          <MDEditor.Markdown
            source={isExpanded ? text : slicedText}
            className="pt-2"
          />
        </div>
      </div>
      {wordsArray.length > 50 && (
        <button
          className="text-sm hover:text-blue-600 underline focus:outline-none text-blue-500"
          onClick={toggleExpanded}
        >
          {isExpanded ? "hide" : "see more"}
        </button>
      )}
    </div>
  );
};

export const ReadMore: React.FC<Props> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const wordsArray = text.split(" ");
  const slicedText = wordsArray.slice(0, 50).join(" ");

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-5 min-h-[150px] h-auto py-2  rounded-xl w-full">
      <div className="whitespace-pre-wrap break-words text-[16px] leading-normal text-zinc-600 font-normal">
        {isExpanded
          ? text
          : `${slicedText}`}
      </div>
      {wordsArray.length > 50 && (
        <div className="w-full flex justify-between text-zinc-600 items-end">
          <span>...</span>
          <button
            className="text-sm hover:underline focus:outline-none mt-2"
            onClick={toggleExpanded}
          >
             {isExpanded ? "hide" : "...read more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ReadMoreComponent;
