import {
  AiFillEye,
  AiOutlineEye,
  AiOutlineKey,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import { Button } from "../../../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const CompleteRegistration = () => {
  const [resetpassword, setresetpassword] = useState(true);

  return (
    <div className="h-screen  bg-gray-50 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-items-center place-content-center gap-10">
      <div className="w-full h-[600px] bg-white hidden md:hidden lg:block"></div>
      <div className=" w-full">
        <div className="">
          <div className="text-center text-primary font-semibold text-2xl pb-4">
            Spiral Energy
          </div>
        </div>
        <div className=" w-[full] h-auto rounded-md p-6">
          <div className="font-light text-center text-lg text-gray-600">
            Fill the fields to register.
          </div>
          <hr className="my-4" />
          <div className="">
            {/* Firstname */}
            <div className="">
              <label className="text-primary font-normal text-sm">
                Firstname
              </label>
              <div className="flex bg-white items-center w-100 border-[1px] rounded-sm border-gray-300 mt-2 h-[50px]">
                <div className="d-inline flex items-center justify-center px-2">
                  <AiOutlineUser
                    size={20}
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
            {/* Lastname */}
            <div className="mt-4">
              <label className="text-primary font-normal text-sm">
                Lastname
              </label>
              <div className="flex bg-white items-center w-100 border-[1px] rounded-sm border-gray-300 mt-2 h-[50px]">
                <div className="d-inline flex items-center justify-center px-2">
                  <AiOutlineUser
                    size={20}
                    color="text-primary"
                    className="text-primary"
                  />
                </div>
                <div className="ml-2">
                  <input
                    type={"text"}
                    placeholder={"Enter your lastname"}
                    className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px]"
                  />
                </div>
              </div>
            </div>
            {/* Phone */}
            <div className="mt-4">
              <label className="text-primary font-normal text-sm">
                Phone number
              </label>
              <div className="flex bg-white items-center w-100 border-[1px] rounded-sm border-gray-300 mt-2 h-[50px] ">
                <div className="d-inline flex items-center justify-center px-2">
                  <AiOutlinePhone
                    size={20}
                    color="text-primary"
                    className="text-primary"
                  />
                </div>
                <div className="ml-2">
                  <input
                    type={"number"}
                    placeholder={"Enter your phone number"}
                    className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px]"
                  />
                </div>
              </div>
            </div>
            {/* Button */}
            <div className=" w-100 mt-7">
              <Button text={"Continue"} loading={false} />
            </div>

            <div className="w-100 mt-4">
              <div className="text-primary text-center font-normal py-3">
                Need help with you account?
              </div>
              <Link
                to="/"
                className="underline w-100 block cursor-pointer text-sm font-light text-secondary text-center"
              >
                Don't have an account?
                <span className="font-semibold text-1xl"> Log in.</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteRegistration;
