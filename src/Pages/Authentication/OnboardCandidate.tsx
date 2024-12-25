import { useRef, useState } from "react";
import Modal from "../../components/modal";
import { FormProvider, useForm } from "react-hook-form";
import { AutoInput } from "../../components/form/customInput";
import { PasswordInput } from "../../components/form";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin, BsPatchCheckFill } from "react-icons/bs";
import { toast } from "react-toastify";
import logo from "../../assets/brand/logo-1.svg";
import { MdOutlineEmail } from "react-icons/md";
import { formatEmail } from "../../lib/utils/formatters";
import classNames from "classnames";
import { Link } from "react-router-dom";

const OnboardCandidate: React.FC<{ show:boolean, onHide: () => void }> = ({ show, onHide }) => {
  const [showSignup, setShowSignup] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean | null>(null);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  //   const [success, setSuccess] = useState(false);

  const [showVerify, setShowVerify] = useState(false);

  const methods = useForm<any>();
  const [togglePassword, setTogglePassword] = useState(false);

  const inputRefs = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement | null>(null)
  );

  const [otpValue, setOtpValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  

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

  const onSubmit = async (data: any) => {
    if (data.password === data.confirm_password) {
      setConfirmPassword(true);
      setIsConfirmed(true);
    } else if (!confirmPassword) {
      setIsConfirmed(false);
      return;
    }
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }

    try {
      setIsLoading(true);
      setEmail(data?.email || "");
      setShowSignup(false);
      setShowVerify(true);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

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
      setShowVerify(false)
      setSuccess(true)
    } catch (err: any) {
      setIsValid(false);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      show={show}
      onHide={() => {
        // setShowSignup(false);
        onHide();
      }}
      size="w-full max-w-[600px]"
      closeButton={isSuccess ? false : true}
    >
      {showSignup && (
        <div className="lg:min-w-[420px] min-w-[300px]">
          <div className="mb-10 text-center flex flex-col w-full justify-center  items-center space-y-4">
            <img src={logo} alt="logo-image" />
            <h1 className="lg:text-[32px] text-center text-zinc-900 mb-6 font-medium sm:text-[30px] text-[25px] dark:text-white leading-[38px]">
              Create an account
            </h1>
            
          </div>
          <div className="lg:h-auto h-[48vh] custom-scrollbar overflow-y-auto w-full flex justify-center items-center">
            <div className="w-full">
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <div>
                    <div>
                      <div className="grid gap-6">
                        <AutoInput
                          label="First Name"
                          name="first_name"
                          placeholder="Enter first name"
                          rules={{
                            required: "First name is required",
                            pattern: {
                              value: /^[A-Za-z]+$/,
                              message:
                                "Invalid! name must contain only alphabetical characters",
                            },
                          }}
                        />

                        <AutoInput
                          label="Last Name"
                          name="last_name"
                          placeholder="Enter last name"
                          rules={{
                            required: "Last name is required",
                            pattern: {
                              value: /^[A-Za-z]+$/,
                              message:
                                "Invalid! name must contain only alphabetical characters",
                            },
                          }}
                        />
                        <AutoInput
                          label="Email"
                          name="email"
                          placeholder="Enter your email"
                          rules={{
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          }}
                        />
                        <div>
                          <PasswordInput
                            label="Password"
                            name="password"
                            placeholder="Enter Password"
                            togglePassword={togglePassword}
                            onTogglePassword={setTogglePassword}
                            rules={{ required: "Password is required" }}
                          />
                        </div>

                        <div className="space-y-2 flex flex-col">
                          <PasswordInput
                            label="Confirm Password"
                            name="confirm_password"
                            placeholder="Enter Password"
                            togglePassword={togglePassword}
                            onTogglePassword={setTogglePassword}
                            rules={{ required: "Password is required" }}
                          />
                          {isConfirmed === false && (
                            <small className="text-red-500">
                              Passwords do not match. Please check again.
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full py-3 px-6 rounded-full bg-primary text-white border-none hover:opacity-95"
                          disabled={isLoading}
                          onClick={() => {}}
                        >
                          {isLoading ? "Loading..." : "Sign in"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
           <div className="my-6 text-center flex flex-col w-full justify-center  items-center space-y-6">
            <div className="flex items-center mt-1 w-full">
              <hr className="border-t-2  w-[30%] border-zinc-300" />
              <span className="mx-2 text-base text-center rounded-md py-1 px-2 text-zinc-400">
                or continue with
              </span>
              <hr className="border-t-2  w-[30%] border-zinc-300" />
            </div>
            <div className="flex w-full items-center justify-center gap-5">
              <button
                className="bg-transparent flex items-center justify-center gap-3 rounded-full hover:border-primary border border-slate-300 w-[200px] py-2 px-8"
                onClick={() => {}}
                disabled={isLoading}
              >
                <FcGoogle size={20} />
                {isLoading ? "Signing in..." : "Google"}
              </button>

              <button
                className="bg-transparent flex items-center justify-center gap-3 rounded-full border border-slate-300 hover:border-primary w-[200px] py-2 px-8"
                onClick={() => {}}
                disabled={isLoading}
              >
                <BsLinkedin className="text-primary" size={20} />
                {isLoading ? "Signing in..." : "Linkedin"}
              </button>
            </div>

            <p className="text-center text-zinc-800 mt-4 dark:text-slate-100">
              Already have an account?{" "}
              <span>
                <Link to="/signin" className="text-primary hover:opacity-95">
                  Sign In
                </Link>
              </span>
            </p>
          </div>
        </div>
      )}

      {showVerify && (
        <div className="lg:min-w-[420px] min-w-[300px]">
          <div className="mb-10 text-center flex flex-col w-full justify-center  items-center space-y-4">
            <img src={logo} alt="logo-image" />

            <div className="text-primary bg-primary/15 rounded-full flex items-center justify-center h-14 w-14">
              <MdOutlineEmail size={24} />
            </div>
            <div className="text-center">
              <h1 className="lg:text-[32px] font-medium mb-2 sm:text-[30px] text-[25px] dark:text-white leading-[38px]">
                Check your email
              </h1>
              <p className="text-zinc-500">
                Enter the 6 digit code sent to {formatEmail(email)}
              </p>
            </div>
          </div>
          <div className="lg:h-auto overflow-y-auto custom-scrollbar h-[48vh] w-full flex justify-center items-center">
            <div className="w-full">
              <div className="lg:min-w-[480px] flex items-center flex-col -mt-5">
                <small
                  className={`${
                    !isValid ? "text-red-500" : "text-slate-400"
                  } text-left my-3`}
                >
                  {!isValid ? "Wrong code! Try again" : ""}
                </small>
                <div className="flex gap-3">
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
                  className="border-none rounded-full py-3 max-w-[80%] mt-9 mb-3 px-6 w-full text-white opacity-95 hover:opacity-100 bg-primary disabled:bg-primary/70"
                >
                  {loading ? "Verifying Otp" : "Verify"}
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
              </div>
            </div>
          </div>
        </div>
      )}

      {isSuccess && (
         <div className="flex w-full flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-center mb-2">
          Successfull!
         </h1>
         <BsPatchCheckFill
           size={58}
           className="mb-4 text-primary text-lg animate-pulse"
         />
      
         <p className="text-zinc-600 font-normal text-center pb-6 lg:px-6">
           Your account has been successfully verified. Please, wait while we create your unique link. <br />
           
         </p>
       </div>
      )}
    </Modal>
  );
};

export default OnboardCandidate;
