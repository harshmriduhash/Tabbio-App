import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
// import { toast } from "react-toastify";
import { toast } from "react-toastify";
import logo from "../../assets/brand/logo-1.svg";
import { AutoInput } from "../../components/form/customInput";
import { PasswordInput } from "../../components/form";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbLoader3 } from "react-icons/tb";

const Signup: React.FC = () => {
  const {} = useApp();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean | null>(null);
  const [confirmPassword, setConfirmPassword] = useState(false);
  //   const [success, setSuccess] = useState(false);

  const methods = useForm<any>();
  const [togglePassword, setTogglePassword] = React.useState(false);

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
      console.log(data);
      navigate("/email-verify");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-col w-full h-full relative items-center justify-center py-[5%] px-4 md:px-10 lg:px-0">
        <div className="my-6">
          <img src={logo} alt="logo-image" />
        </div>
        <div className="max-xl:min-w-[45%] min-w-[35%] w-full max-w-[585px] bg-white shadow-lg rounded-lg py-[3%] px-[5%]">
          <h1 className="lg:text-[32px] text-center text-zinc-900 mb-6 font-medium sm:text-[30px] text-[25px] dark:text-white leading-[38px]">
            Create an account
          </h1>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
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
                      className="w-full py-3 px-6 rounded-lg flex group disabled:hover:scale-100 disabled:opacity-50 items-center gap-3 bg-gradient-to-r hover:bg-gradient-to-l hover:scale-95 duration-300 ease-in-out from-[#2563EB] to-[#9333EA] justify-center text-white border-none hover:opacity-95"
                      disabled={isLoading}
                      onClick={() => {}}
                    >
                      {isLoading ? "Loading" : "Sign in"}
                      {isLoading ? (
                        <TbLoader3 size={20} className="animate-spin" />
                      ) : (
                        <FaArrowRightLong className="group-hover:translate-x-1.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </FormProvider>

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
      </div>
    </section>
  );
};

export default Signup;
