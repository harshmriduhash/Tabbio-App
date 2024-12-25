import React, { useState } from "react";
import { useController } from "react-hook-form";
import { BsCopy } from "react-icons/bs";
import { FaStarOfLife } from "react-icons/fa6";

type TextareaProps = {
  label: string;
  name: string;
  rules?: any;
  classNames?: string;
  defaultValue?: string;
  placeholder?: string;
  isRequired?: boolean;
  cols?: number;
  props?: any;
  formatValue?: (value: string) => string;
  OnChange?: (value: string) => void;
};

const Textarea: React.FC<TextareaProps> = ({
  label,
  isRequired,
  name,
  rules,
  props,
  OnChange,
  classNames,
  defaultValue,
  placeholder,
}) => {
  const { field, fieldState } = useController({ name, rules, defaultValue });
  const { onChange, onBlur, value, ref } = field;
  const { error } = fieldState;

  const containerClass = classNames
    ? "w-full relative " + classNames
    : "w-full relative";
  const errorData = error ? " border-danger" : "";
  const [charCount, setCharCount] = useState(value ? value.length : 0);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setCharCount(newValue.length);
    onChange(newValue);
    typeof OnChange === "function" ? OnChange(newValue) : {};
  };

  return (
    <div className={containerClass}>
      <label
        htmlFor={name}
        className="mb-3 text-black dark:text-white flex items-center gap-1"
      >
        {label}{" "}
        {isRequired && (
          <span>
            <FaStarOfLife className="text-danger" size={8} />
          </span>
        )}
      </label>
      <div className="relative">
        <textarea
          {...field}
          defaultValue={defaultValue}
          onBlur={onBlur}
          onChange={handleChange}
          value={value || ""}
          ref={ref}
          maxLength={props?.maxLength}
          rows={props?.row || 4}
          placeholder={placeholder}
          className={`w-full rounded border border-stroke custom-scrollbar
         py-3 pl-4.5 pr-4.5 text-black
        focus:border-primary focus-visible:outline-none
        dark:border-strokedark dark:bg-meta-4
        dark:text-white dark:focus:border-primary${errorData}`}
        />
        {props?.maxLength && (
          <div className="text-sm text-neutral-400 absolute bottom-2 left-3 bg-white py-1.5">
            {charCount}/{props.maxLength}
          </div>
        )}
        {props?.copy && (
          <button
            className="text-neutral-400 absolute bottom-2 right-6  bg-white py-1.5"
            onClick={() => {
              navigator.clipboard.writeText(value);
              alert("text copied!");
            }}
          >
            <BsCopy className="hover:text-primary text-lg font-medium" />
          </button>
        )}
      </div>

      {error && <small className="text-danger">{error.message}</small>}
    </div>
  );
};

export default Textarea;
