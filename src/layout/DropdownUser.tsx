import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import Avatar from "../components/Avatar2";
import getUserInitials from "../lib/utils/getUserInitials";
import { IoMdArrowDropdown } from "react-icons/io";
import Modal from "../components/modal";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";

const DropdownUser = () => {
  const navigate = useNavigate();
  const { user, signOut } = useApp();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const trigger = useRef<HTMLAnchorElement | null>(null);
  const dropdown = useRef<HTMLDivElement | null>(null);

  const handleSignout = async () => {
    //send request to API for logout
    signOut();
    navigate("/");
  };

  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!dropdown.current) return;
      if (trigger.current && trigger.current.contains(target)) {
        // Handle trigger click
        return;
      }
      if (dropdown.current.contains(target)) return;
      setDropdownOpen(false);
    };

    document.addEventListener("click", clickHandler);

    return () => {
      if (trigger.current) {
        document.removeEventListener("click", clickHandler);
      }
    };
  }, [setDropdownOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  return (
    <div className="relative max-lg:w-full">
      <Link
        ref={trigger}
        onClick={() => {
          console.log(user);
          setDropdownOpen(!dropdownOpen);
        }}
        className="flex w-full max-lg:justify-between items-center max-md:gap-1 gap-2"
        to="#"
      >
        <Avatar
          src={user?.photo_url}
          size="small"
          initials={getUserInitials(
            user?.first_name || user?.name || "User",
            user?.last_name || ""
          )}
        />

        <span className="lg:hidden block">
          {user?.first_name || "John" + " " + (user?.last_name || "Doe")}
        </span>

        <IoMdArrowDropdown
          // size={22}
          className={`${
            dropdownOpen ? "rotate-180" : ""
          } text-slate-800 max-lg:ml-auto max-md:text-sm text-base`}
        />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-60 flex-col rounded-xl border border-stroke z-999 max-lg:-right-[9px] bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col">
          <li className="flex hover:bg-neutral-100 border-b  border-stroke cursor-pointer dark:border-strokedark items-center gap-3.5 px-5 py-3 text-sm font-medium duration-300 ease-in-out text-black/80 dark:text-white/80 lg:text-base">
            <Link to={"/app/settings"}>
              <button>Account Settings</button>
            </Link>
          </li>
          <li className="flex hover:bg-neutral-100 border-b  border-stroke cursor-pointer dark:border-strokedark items-center justify-between px-5 py-3 text-sm font-medium duration-300 ease-in-out text-black/80 dark:text-white/80 lg:text-base">
            <button>Language</button>
            <span>
              <TfiWorld />
            </span>
          </li>
          <li className="flex hover:bg-neutral-100 border-b  border-stroke cursor-pointer dark:border-strokedark items-center gap-3.5 px-5 py-3 text-sm font-medium duration-300 ease-in-out text-black/80 dark:text-white/80 lg:text-base">
            <Link to={""}>
              <button>Plans</button>
            </Link>
          </li>
          <li
            onClick={() => setLogoutModal(true)}
            className="flex hover:bg-danger/10 hover:text-danger cursor-pointer items-center justify-between px-5 py-3 text-sm font-medium duration-300 ease-in-out text-black/80 dark:text-white/80 lg:text-base"
          >
            <button>Logout</button>
            <span>
              {" "}
              <RiLogoutCircleLine />
            </span>
          </li>
        </ul>{" "}
      </div>
      {/* <!-- Dropdown End --> */}
      <Modal
        show={logoutModal}
        onHide={() => setLogoutModal(false)}
        size="md:w-[450px] w-[350px]"
      >
        <div className="flex flex-col justify-center">
          <span className="mx-auto inline-block bg-danger/15 rounded-full p-4 text-red-600 mb-3">
            <RiLogoutCircleLine size={24} />
          </span>

          <h1 className="text-lg text-black/90 mb-6 text-center">
            Are you sure you want to logout?
          </h1>

          <div className="-mx-3 flex flex-col gap-y-6 px-6">
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={() => setLogoutModal(false)}
                className="block w-full rounded-full border border-primary bg-primary p-3 text-center font-medium text-white transition hover:opacity-95"
              >
                No, cancel action
              </button>
            </div>
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={handleSignout}
                className="block w-full rounded-full text-meta-1 border border-meta-1 bg-white p-3 text-center font-medium hover:text-white transition hover:bg-meta-1"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DropdownUser;
