import React, { useRef, useState } from "react";
import { useApp } from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/brand/logo-1.svg";
import { HiOutlineKey } from "react-icons/hi";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import classNames from "classnames";
import FieldInput from "../../components/form/Input";
import { formatEmail } from "../../lib/utils/formatters";
import { MdOutlineEmail } from "react-icons/md";
import { TbLoader3 } from "react-icons/tb";

const ResetPassword: React.FC = () => {
  const {} = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const inputRefs = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement | null>(null)
  );

  const [otpValue, setOtpValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = e.target.value;

    if (/^\d{0,1}$/.test(inputValue)) {
      // Update only the specific digit at the given index
      setOtpValue((prevOtpValue) => {
        const newOtpValue = prevOtpValue.split("");
        newOtpValue[index] = inputValue;
        return newOtpValue.join("");
      });

      // Move focus to the next input
      if (inputValue && index < inputRefs.length - 1) {
        inputRefs[index + 1]?.current?.focus();
      }
    }
  };

  const inputClasses = () =>
    classNames(
      "border-b border-primary",
      "p-3",
      "w-12 focus:border-primary outline-none",
      "text-center",
      {
        "border-red-500": !isValid,
        "border-primary": isValid,
      }
    );

  const SendOTP = async () => {
    setIsLoading(true);
    try {
      // const response = await sendResetOtp({
      //   email: email,
      // });
      // toast.success(response?.message);
      setSuccess(true);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    // const data = {
    //   to: email,
    //   otp_code: otpValue,
    // };
    try {
      // const response = await verifyResetOtp(data);
      // toast.success("Account verification Successfull!");
      navigate(`/reset-password/${email}/${otpValue}`);
    } catch (err: any) {
      setIsValid(false);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full">
      <div className="flex flex-col w-full h-full relative items-center justify-center py-[5%] px-4 md:px-10 lg:px-0">
        <div className="my-6">
          <img src={logo} alt="logo-image" />
        </div>
        <div className="max-xl:min-w-[45%] min-w-[35%] w-full max-w-[585px] bg-white shadow-lg rounded-lg py-[3%] px-[5%]">
          <div className="mb-3 text-center flex flex-col w-full justify-center  items-center space-y-6">
            <div className="text-primary bg-primary/15 rounded-full flex items-center justify-center h-14 w-14">
              {isSuccess ? (
                <MdOutlineEmail size={24} />
              ) : (
                <HiOutlineKey size={24} />
              )}
            </div>
            <div className="text-center">
              <h1 className="lg:text-[32px] text-center text-zinc-900 mb-1 font-medium sm:text-[30px] text-[25px] dark:text-white leading-[38px]">
                {isSuccess ? "Check your email" : "Forgot Password?"}
              </h1>
              <p className="text-zinc-500">
                {isSuccess
                  ? `Enter the 6 digit code sent to ${formatEmail(email)}`
                  : "No worries, we’ll send you reset instructions."}
              </p>
            </div>
          </div>

          {!isSuccess ? (
            <div className="w-full">
              <div className="grid gap-6">
                <FieldInput
                  label=""
                  id="email"
                  inputType="email"
                  value={email}
                  onChange={(val) => setEmail(val)}
                  placeholder="Enter your email"
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                className="w-full py-3 px-6 rounded-lg flex group disabled:hover:scale-100 disabled:opacity-50 items-center gap-3 bg-gradient-to-r hover:bg-gradient-to-l hover:scale-95 duration-300 ease-in-out from-[#2563EB] to-[#9333EA] justify-center text-white border-none hover:opacity-95"
                  disabled={isLoading}
                  onClick={() => {
                    SendOTP();
                  }}
                >
                  {isLoading ? "Loading..." : "Send"}{isLoading ? (
                  <TbLoader3 size={20} className="animate-spin" />
                ) : (
                  <FaArrowRightLong className="group-hover:translate-x-1.5" />
                )}
                </button>

                <div className="text-center mt-4 flex justify-center">
                  <span>
                    <Link to="/signin" className="flex gap-2 items-center">
                      <FaArrowLeftLong />
                      Back to Signin
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full flex items-center flex-col">
              <small
                className={`${
                  !isValid ? "text-red-500" : "text-slate-400"
                } text-left my-3`}
              >
                {!isValid ? "Wrong code! Try again" : ""}
              </small>
              <div className="flex gap-3 mb-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    value={otpValue[index] || ""}
                    onChange={(e) => handleChange(e, index)}
                    className={inputClasses()}
                    maxLength={1}
                    ref={inputRefs[index]}
                  />
                ))}
              </div>
              <button
                disabled={otpValue.length !== 6 || loading}
                onClick={() => {
                  handleVerifyOtp();
                }}
                className="w-full py-3 px-6 rounded-lg flex group disabled:hover:scale-100 disabled:opacity-50 items-center gap-3 bg-gradient-to-r hover:bg-gradient-to-l hover:scale-95 duration-300 ease-in-out from-[#2563EB] to-[#9333EA] justify-center text-white border-none hover:opacity-95"
              >
                {loading ? "Verifying Otp" : "Verify"}{" "}
                {isLoading ? (
                  <TbLoader3 size={20} className="animate-spin" />
                ) : (
                  <FaArrowRightLong className="group-hover:translate-x-1.5" />
                )}
              </button>
              <p className="text-center text-black/75 dark:text-slate-100 my-4">
                Didn’t receive the email?{" "}
                <span
                  className="text-primary hover:opacity-95 cursor-pointer ml-1"
                  onClick={() => {
                    SendOTP();
                  }}
                >
                  {isLoading ? "Resending" : "Click to resend"}{" "}
                </span>
              </p>

              <Link
                to="/login"
                className="flex gap-2 items-center pb-4 text-black hover:text-primary"
              >
                <FaArrowLeftLong /> Back to Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
