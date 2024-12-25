import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/brand/logo-1.svg";
import { HiOutlineKey } from "react-icons/hi";
import { FormProvider, useForm } from "react-hook-form";
import { PasswordInput } from "../../components/form";
import { BsCheckCircleFill, BsPatchCheckFill } from "react-icons/bs";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { TbLoader3 } from "react-icons/tb";

type resetPasswordData = {
  password: string;
  confirm_password: string;
};

const ResetPasswordForm: React.FC = () => {
  const {} = useApp();
  const { email, token } = useParams();
  const navigate = useNavigate();
  const methods = useForm<resetPasswordData>();
  const [isLoading, setIsLoading] = useState(false);
  const [togglePassword, setTogglePassword] = React.useState(false);
  const [hasUppercase, setHasUppercase] = React.useState(false);
  const [hasNumeric, setHasNumeric] = React.useState(false);
  const [hasMinLength, setHasMinLength] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);
  const [isConfirmed, setIsConfirmed] = React.useState<boolean | null>(null);

  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const hasUppercaseLetter = /[A-Z]/.test(value);
    const hasNumericCharacter = /[0-9]/.test(value);
    const hasMinLength = value.length >= 8;
    setHasUppercase(hasUppercaseLetter);
    setHasNumeric(hasNumericCharacter);
    setHasMinLength(hasMinLength);
    methods.setValue("password", value);
  };

  const onSubmit = async (data: resetPasswordData) => {
    if (data.password === data.confirm_password) {
      setConfirmPassword(true);
      setIsConfirmed(true);
    } else if (!confirmPassword) {
      setIsConfirmed(false);
    }

    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (
      Object.keys(errors).length > 0 ||
      !hasMinLength ||
      !hasNumeric ||
      !hasUppercase ||
      !confirmPassword
    ) {
      return;
    }

    try {
      setIsLoading(true);
      console.log({
        email,
        new_password: data.password,
        token,
      });
      //   await ResetPassword({
      //     email,
      //     new_password: data.password,
      //     token,
      //   });
      setIsSuccess(true);
    } catch (err: any) {
      toast.error(err.message);
      navigate("/forgot-password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full">
      <div className="flex flex-col w-full h-full relative items-center justify-center py-[5%] px-4 md:px-10 lg:px-0">
        <div className="my-6">
          <img src={logo} alt="logo-image" />
        </div>
        <div className="max-xl:min-w-[45%] min-w-[35%] w-full max-w-[585px] bg-white shadow-lg rounded-lg py-[3%] px-[5%]">
          <div className="w-full">
            <div className="mb-10 text-center flex flex-col w-full justify-center  items-center space-y-6">
              {!isSuccess && (
                <div className="text-primary bg-primary/15 rounded-full flex items-center justify-center h-14 w-14">
                  <HiOutlineKey size={24} />
                </div>
              )}
              {!isSuccess && (
                <div className="text-center">
                  <h1 className="lg:text-[32px] font-medium mb-2 sm:text-[30px] text-[25px] dark:text-white leading-[38px]">
                    Set new password
                  </h1>
                  <p className="text-zinc-500">
                    Your new password must be different from previously used{" "}
                    <br />
                    passwords.
                  </p>
                </div>
              )}
            </div>

            {isSuccess && (
              <div className="flex w-full flex-col justify-center items-center">
                <BsPatchCheckFill
                  size={58}
                  className=" text-primary text-lg"
                />
                <h1 className="text-2xl text-center text-white">
                  Password Reset Successfull!
                </h1>
                <p className="text-zinc-400 font-normal text-center">
                  Your password has been successfully changed. Sign in <br /> to
                  access your dashboard.
                </p>
              </div>
            )}

            {!isSuccess ? (
              <div className="flex w-full justify-center">
                <FormProvider {...methods}>
                  <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="max-w-[450px] p-4"
                  >
                    <div>
                      <div>
                        <PasswordInput
                          label="Password"
                          name="password"
                          placeholder="Enter Password"
                          togglePassword={togglePassword}
                          onTogglePassword={setTogglePassword}
                          onChange={handlePasswordChange}
                          rules={{ required: "Password is required" }}
                        />

                        <div className="flex flex-wrap gap-4 mb-10 dark:text-white">
                          <div className="flex gap-2 items-center">
                            <BsCheckCircleFill
                              className={`${
                                hasUppercase ? "text-green-500" : "text-red-500"
                              }`}
                            />
                            <small>One uppercase character</small>
                          </div>
                          <div className="flex gap-2 items-center">
                            <BsCheckCircleFill
                              className={`${
                                hasMinLength ? "text-green-500" : "text-red-500"
                              }`}
                            />
                            <small>8 characters minimum</small>
                          </div>
                          <div className="flex gap-2 items-center">
                            <BsCheckCircleFill
                              className={`${
                                hasNumeric ? "text-green-500" : "text-red-500"
                              }`}
                            />
                            <small>At least one numeric character</small>
                          </div>
                        </div>

                        <PasswordInput
                          label="Confirm Password"
                          name="confirm_password"
                          placeholder="Enter Password"
                          togglePassword={togglePassword}
                          onTogglePassword={setTogglePassword}
                          rules={{ required: "Confirm Password is required" }}
                        />
                        {isConfirmed === false && (
                          <small className="text-red-500">
                            Passwords do not match. Please check again.
                          </small>
                        )}

                        <div className="mt-10 flex w-full justify-center items-center flex-col">
                          <button
                            type="submit"
                            className="w-full py-3 px-6 rounded-lg flex group disabled:hover:scale-100 disabled:opacity-50 items-center gap-3 bg-gradient-to-r hover:bg-gradient-to-l hover:scale-95 duration-300 ease-in-out from-[#2563EB] to-[#9333EA] justify-center text-white border-none hover:opacity-95"
                            onClick={() => {}}
                            disabled={isLoading}
                          >
                            {isLoading ? "Loading..." : "Reset Password"}{" "}
                            {isLoading ? (
                              <TbLoader3 size={20} className="animate-spin" />
                            ) : (
                              <FaArrowRightLong className="group-hover:translate-x-1.5" />
                            )}
                          </button>
                          <Link
                            to="/signin"
                            className="flex gap-2 items-center py-4 text-black hover:text-primary"
                          >
                            <FaArrowLeftLong /> Back to Sign in
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </FormProvider>
              </div>
            ) : (
              <div className="py-6 flex justify-center">
                <button
                  onClick={() => {
                    navigate("/signin", { replace: true });
                  }}
                  className="w-full py-3 px-6 rounded-lg flex group disabled:hover:scale-100 disabled:opacity-50 items-center gap-3 bg-gradient-to-r hover:bg-gradient-to-l hover:scale-95 duration-300 ease-in-out from-[#2563EB] to-[#9333EA] justify-center text-white border-none hover:opacity-95"
                >
                  Continue to Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordForm;
