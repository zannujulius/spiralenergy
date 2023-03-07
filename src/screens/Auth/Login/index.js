import "./style.css";
import {
  AiFillEye,
  AiOutlineEye,
  AiOutlineKey,
  AiOutlineUser,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { Button } from "../../../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [resetpassword, setresetpassword] = useState(true);
  const [eye, seteye] = useState(false);
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
            Log into your account to continue.
          </div>

          <hr className="my-4" />
          <div className="w-100">
            {/* Username */}
            <div className="">
              <label className="text-primary font-normal text-sm">
                Username
              </label>
              <div className="flex items-center w-100 border-[1px] rounded-sm border-gray-300 mt-2 h-[45px]">
                <div className="d-inline flex items-center justify-center px-2">
                  <AiOutlineUser
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
            {/* Password */}
            <div className="mt-6">
              <label className="text-primary font-normal text-sm">
                Password
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
                      type={eye ? "text" : "password"}
                      placeholder={"Enter your password"}
                      className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px]"
                    />
                  </div>
                </div>

                {!eye ? (
                  <div
                    className="px-3 cursor-pointer"
                    onClick={() => {
                      seteye(!eye);
                    }}
                  >
                    <AiOutlineEyeInvisible
                      color="text-primary"
                      className="text-primary"
                    />
                  </div>
                ) : (
                  <div
                    className="px-3 cursor-pointer"
                    onClick={() => {
                      seteye(!eye);
                    }}
                  >
                    <AiOutlineEye
                      color="text-primary"
                      className="text-primary"
                    />
                  </div>
                )}
              </div>
            </div>
            {/* Button */}
            <div className=" w-100 mt-7">
              <Button
                text={"Login"}
                loading={false}
                onClick={() => (window.location.href = "/dashboard")}
              />
            </div>

            <div className="w-100 mt-4">
              <div className="text-primary text-center font-normal py-3">
                Need help with you account?
              </div>
              <Link
                to="/resetpassword"
                className="underline w-100 block cursor-pointer text-sm font-thin text-secondary text-center"
              >
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
