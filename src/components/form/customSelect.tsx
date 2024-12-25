/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useController } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa6";

type SelectProps = {
  label: string;
  name: string;
  rules?: any;
  defaultValue?: string;
  classNames?: string;
  children?: React.ReactNode;
  isRequired?: boolean;
  onChange?: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({
  label,
  name,
  rules,
  children,
  classNames,
  onChange,
  isRequired,
  defaultValue,
}) => {
  const { field, fieldState } = useController({ name, rules, defaultValue });
  const { onChange: onControllerChange, onBlur, value, ref } = field;
  const { error } = fieldState;



  const containerClass = classNames ? "w-full " + classNames : "w-full";

  const handleValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onControllerChange(selectedValue); // Call the onChange function from useController
    onChange?.(selectedValue); // Call the onChange prop if it is provided
  };
  return (
    <div className={containerClass}>
      <label htmlFor={name} className="mb-[0.4rem] text-black dark:text-white flex items-center gap-1">
        {label} {isRequired && <span><FaStarOfLife className="text-danger" size={8} /></span>}
      </label>
      <div className="relative z-20 bg-transparent dark:bg-form-input">
      <select
        id={name}
        name={name}
        onChange={handleValueChange}
        defaultValue={defaultValue}
        onBlur={onBlur}
        value={value}
        ref={ref}
        className="relative z-20 w-full rounded appearance-none
        border border-[#d0d5dd] py-2.5 px-5 outline-none 
        transition focus:border-primary active:border-primary bg-white
        dark:border-form-strokedark dark:bg-form-input 
        dark:focus:border-primary"
      >
        {children}
      </select>
      <span className="absolute top-1/2 cursor-pointer pointer-events-none right-2 z-30 -translate-y-1/2">
          <svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill=""
              ></path>
            </g>
          </svg>
      </span>
        </div>
      {error && <small className="text-danger">{error.message}</small>}
    </div>
  );
};

export default Select;
