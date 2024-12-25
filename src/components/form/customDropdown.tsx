import React, { useEffect, useRef, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { Icons } from "../icons";

interface SearchMultiDropdownProps {
  options: DropDownOption[];
  onSelect: (selectedOptions: DropDownOption[]) => void;
  setSearch: (searchTerm: string) => void;
  placeholder?: string;
  label: string;
  disabled?: boolean;
  clearData?: boolean;
  setClearData?: (clear: boolean) => void;
  props?: any;
  defaultValue?: DropDownOption[];
}

interface FormDropdownProps {
  options: DropDownOption[];
  onSelect: (selectedOption: DropDownOption | null) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  defaultValue?: DropDownOption | null;
}

interface DropdownSelectProps {
  options: DropDownOption[];
  onSelect: (option: DropDownOption | null) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  defaultValue?: DropDownOption | null;
  loading?: boolean;
  border?: boolean;
  // showSelectedlabel?: boolean;
  showDEropdownIcon?: boolean;
}

export interface DropDownOption {
  label: any;
  value: any;
  func?: (arg: any) => any;
  [key: string]: any;
}

export const SelectDropdown: React.FC<FormDropdownProps> = ({
  options,
  onSelect,
  placeholder,
  label,
  disabled,
  defaultValue = null,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<DropDownOption | null>(
    defaultValue
  );
  const [filteredOptions, setFilteredOptions] =
    useState<DropDownOption[]>(options);
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (options && options.length > 0) {
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  }, [searchTerm, options]);

  useEffect(() => {
    setSelectedOption(defaultValue);
  }, [defaultValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleOptionClick = (option: DropDownOption) => {
    setSelectedOption(option);
    onSelect(option);
    setSearchTerm("");
    setShowMenu(false);
  };

  const handleIconClick = () => {
    if (searchTerm === "") {
      setShowMenu(!showMenu);
    } else {
      setFilteredOptions(options);
      setShowMenu(!showMenu);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div ref={dropdownRef} className="relative">
      {label && (
        <label className="mb-2.5 block text-black dark:text-white">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          disabled={disabled}
          placeholder={selectedOption ? selectedOption.label : placeholder}
          className={`w-full appearance-none rounded 
                    border border-stroke px-5 py-3 
                    outline-none transition focus:border-primary active:border-primary 
                    dark:border-strokedark dark:bg-boxdark-2 
                    dark:focus:border-primary ${selectedOption ? "text-black dark:text-white" : ""
            }`}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowMenu(true)}
          readOnly={!!selectedOption} // Prevent typing when an option is selected
        />
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={handleIconClick}
        >
          <svg
            className="fill-current"
            width="24"
            height="24"
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

      {showMenu && (
        <ul className="border-stroke dark:border-strokedark absolute left-0 top-full z-50 mt-2 max-h-[400px] w-full overflow-y-auto rounded-md border bg-white py-2 shadow-lg dark:bg-black">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="hover:bg-slate-50 cursor-pointer px-4 py-2 flex items-center justify-between"
              >
                {option.label}
                {selectedOption?.value === option.value && (
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                )}
              </li>
            ))
          ) : (
            <div className="flex h-20 items-center justify-center text-lg font-bold">
              No option found
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export const MultiDropdown: React.FC<SearchMultiDropdownProps> = ({
  options,
  onSelect,
  placeholder,
  label,
  disabled,
  props,
  defaultValue = [],
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedOptions, setSelectedOptions] =
    useState<DropDownOption[]>(defaultValue);
  const [filteredOptions, setFilteredOptions] =
    useState<DropDownOption[]>(options);
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (options && options.length > 0) {
      const filtered = options
        .filter(
          (option) =>
            !selectedOptions.some(
              (selectedOption) => selectedOption.value === option.value
            )
        )
        .filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
      setFilteredOptions(filtered);
    }
  }, [searchTerm, options, selectedOptions]);

  useEffect(() => {
    setSelectedOptions(defaultValue);
  }, [options]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleOptionClick = (option: DropDownOption) => {
    const newSelectedOptions = [...selectedOptions, option];
    setSelectedOptions(newSelectedOptions);

    onSelect(newSelectedOptions);
    console.log(newSelectedOptions);
    setSearchTerm("");
    setShowMenu(false);
  };

  const removeSelectedOption = (option: DropDownOption) => {
    const updatedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedOptions);
    onSelect(updatedOptions);
  };

  const handleIconClick = () => {
    if (searchTerm === "") {
      setShowMenu(!showMenu);
    } else {
      setFilteredOptions(options);
      setShowMenu(!showMenu);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative z-${showMenu ? "30" : "0"} `}>
      <label className="mb-2.5 block text-black dark:text-white">{label}</label>
      <div className="relative cursor-pointer">
        <input
          type="text"
          disabled={disabled}
          placeholder={placeholder || "Search..."}
          className={`relative z-${showMenu ? "20" : "0"
            } w-full appearance-none rounded 
                      border border-stroke px-5 py-2 
                      outline-none transition focus:border-primary active:border-primary 
                      dark:border-strokedark dark:bg-boxdark-2 
                      dark:focus:border-primary`}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowMenu(true)}
        />
        <span
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 cursor-pointer"
          onClick={handleIconClick}
        >
          <svg
            className="fill-current"
            width="24"
            height="24"
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

      {showMenu && (
        <ul
          className={`border-stroke dark:border-strokedark absolute left-0 top-10 z-999 mt-3 ${props?.maxHeight ? props?.maxHeight : "max-h-[300px]"
            }  w-full overflow-y-auto custom-scrollbar rounded-md border bg-white py-2 shadow-lg dark:bg-black`}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-left"
              >
                {option.label}
              </li>
            ))
          ) : (
            <div className="flex h-20 items-center justify-center text-lg font-semibold">
              No option found
            </div>
          )}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-2">
        {selectedOptions.map((option, index) => (
          <div
            key={index}
            className="flex items-center text-sm bg-primary/10 text-primary rounded-full py-1 px-2 mr-2"
          >
            <span>{option.label}</span>
            <button
              type="button"
              className="ml-1.5 cursor-pointer dark:bg-meta-1/60 text-[15px] dark:hover:bg-meta-1 dark:text-white rounded-full px-1.5 text-primary shadow-1 hover:bg-meta-1/25 hover:text-[#ff0000e6]"
              onClick={() => removeSelectedOption(option)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  onSelect,
  placeholder = "Select...",
  label,
  disabled,
  defaultValue = null,
  loading = false,
  border = true,
  // showSelectedlabel=true
  showDEropdownIcon = true,
}) => {
  const [selectedOption, setSelectedOption] = useState<DropDownOption | null>(
    defaultValue
  );
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: DropDownOption) => {
    setSelectedOption(option);
    onSelect(option);
    setShowMenu(false); // Close the dropdown menu
  };

  const handleIconClick = () => {
    setShowMenu(!showMenu); // Toggle the dropdown menu
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="w-full relative">
      {label && (
        <label className="mb-2.5 block text-black dark:text-white">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          className={`w-full appearance-none rounded  
                        px-2 py-3 text-left 
                       outline-none transition ${border
              ? "border border-stroke dark:border-strokedark active:border-primary focus:border-primary dark:focus:border-primary"
              : "border-none focus:border-none"
            }  
                         
                       dark:bg-boxdark-2  ${selectedOption ? "text-black dark:text-white" : ""
            }`}
          onClick={handleIconClick}
        >
          {loading ? (
            <div className="flex items-center justify-between">
              <span>Fetching data...</span>
              <span className="mr-4">
                <BiLoaderCircle className="text-primary animate-spin" />
              </span>
            </div>
          ) : selectedOption ? (
            selectedOption.label
          ) : (
            placeholder
          )}

          {showDEropdownIcon && (
            <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-white">
              <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
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
          )}
        </button>
      </div>

      {showMenu && (
        <ul className="border-stroke dark:border-strokedark absolute left-0 mt-2 z-[999999] w-full min-w-[170px] rounded-md border bg-white py-2 shadow-lg dark:bg-black">
          {options.length > 0 ? (
            options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`hover:bg-slate-50 cursor-pointer px-4 py-2 w-full flex justify-between items-center ${selectedOption?.value === option.value ? "bg-gray-200" : ""
                  }`}
              >
                {option.label}
                {selectedOption?.value === option.value && (
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                )}
              </li>
            ))
          ) : (
            <div className="flex h-20 items-center justify-center font-medium">
              No option Available
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export const TableSort: React.FC<DropdownSelectProps> = ({
  options,
  onSelect,
  placeholder = "Select...",
  disabled,
  defaultValue = null,
  loading = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<DropDownOption | null>(
    defaultValue
  );
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: DropDownOption) => {
    setSelectedOption(option);
    onSelect(option);
    setShowMenu(false); // Close the dropdown menu
  };

  const handleIconClick = () => {
    setShowMenu(!showMenu); // Toggle the dropdown menu
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="w-full relative">
      <div className="relative bg-white border flex gap-2 px-4 items-center border-stroke py-2 rounded-full min-w-[200px]">
        <button className=" bg-white">
          <Icons.filter />
        </button>
        <button
          type="button"
          disabled={disabled}
          className={`w-full appearance-none rounded-full text-left outline-none transition dark:bg-boxdark-2  
          ${selectedOption ? "text-black dark:text-white" : ""}`}
          onClick={handleIconClick}
        >
          {loading ? (
            <div className="flex items-center justify-between">
              <span>Fetching data...</span>
              <span className="mr-4">
                <BiLoaderCircle className="text-primary animate-spin" />
              </span>
            </div>
          ) : selectedOption ? (
            selectedOption.label
          ) : (
            placeholder
          )}
        </button>
      </div>

      {showMenu && (
        <ul className="border-stroke dark:border-strokedark absolute left-0 mt-2 z-[999999] w-full min-w-[170px] rounded-md border bg-white py-2 shadow-lg dark:bg-black">
          {options.length > 0 ? (
            options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`hover:bg-slate-50 cursor-pointer px-4 py-2 w-full flex justify-between items-center ${selectedOption?.value === option.value ? "bg-gray-200" : ""
                  }`}
              >
                {option.label}
                {selectedOption?.value === option.value && (
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                )}
              </li>
            ))
          ) : (
            <div className="flex h-20 items-center justify-center font-medium">
              No option Available
            </div>
          )}
        </ul>
      )}
    </div>
  );
};
