import {
  AiFillEye,
  AiFillMail,
  AiOutlineEye,
  AiOutlineKey,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { SiLastpass } from "react-icons/si";
import { Button } from "../../../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [sent, setsent] = useState(true);

  return (
    <div className="h-screen w-screen h-100 bg-gray-50 flex flex-row items-center justify-center">
      <div className="">
        <div className="">
          <div className=""></div>
          <div className="text-center text-primary font-semibold text-2xl pb-4">
            Spiral Energy
          </div>
        </div>
        <div className="bg-white w-[320px] md:w-[400px] h-auto drop-shadow-md rounded-md p-6">
          <div className="font-thin text-center text-lg text-gray-600">
            {sent ? "Update password" : "Enter your email addresss"}
          </div>
          <hr className="my-4" />
          <div className="w-100">
            <div className="text-center w-100 font-light text-primary text-1xl pb-2">
              {sent
                ? "Enter the 4-digits code alongside your new password"
                : "A 4-digits code will be sent to your email for you to change your password."}
            </div>
            {/* Email */}
            {sent ? (
              <>
                <div className="">
                  <label className="text-primary font-normal text-sm">
                    Code
                  </label>
                  <div className="flex items-center w-100 border-[1px] rounded-sm border-gray-300 mt-2 h-[45px]">
                    <div className="d-inline flex items-center justify-center px-2">
                      <SiLastpass
                        color="text-primary"
                        className="text-primary"
                      />
                    </div>
                    <div className="ml-2 w-100">
                      <input
                        type={"number"}
                        placeholder={"Enter your 4-digits code here"}
                        className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px] "
                      />
                    </div>
                  </div>
                </div>
                {/* Password */}
                <div className="mt-6">
                  <label className="text-primary font-normal text-sm">
                    New Password
                  </label>
                  <div className="flex items-center justify-between w-100 border-[1px] rounded-sm border-gray-300 mt-2 h-[45px]">
                    <div className="flex ">
                      <div className="d-inline flex items-center justify-center px-2">
                        <AiOutlineKey
                          color="text-primary"
                          className="text-primary"
                        />
                      </div>
                      <div className="ml-2">
                        <input
                          type={"text"}
                          placeholder={"Enter your username"}
                          className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px]"
                        />
                      </div>
                    </div>

                    <div className="px-3 cursor-pointer">
                      <AiOutlineEye
                        color="text-primary"
                        className="text-primary"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="">
                <label className="text-primary font-normal text-sm">
                  Email
                </label>
                <div className="flex items-center w-100 border-[1px] rounded-sm border-gray-300 mt-2 h-[45px]">
                  <div className="d-inline flex items-center justify-center px-2">
                    <AiOutlineMail
                      color="text-primary"
                      className="text-primary"
                    />
                  </div>
                  <div className="ml-2">
                    <input
                      type={"text"}
                      placeholder={"Enter your username"}
                      className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Button */}
            <div className=" w-100 mt-7">
              {sent ? (
                <Button text={"Continue"} loading={false} />
              ) : (
                <Button text={"Send Code"} loading={false} />
              )}
            </div>

            <div className="w-100 mt-4">
              <div className="text-primary text-center font-normal py-3">
                Need help with you account?
              </div>
              <Link
                to="/login"
                className="underline w-100 block cursor-pointer text-sm font-thin text-secondary text-center"
              >
                Have an account? Log in instead.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
