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
            Fill the fields to complete your registration.
          </div>
          <hr className="my-4" />
          <div className="w-100">
            {/* Firstname */}
            <div className="">
              <label className="text-primary font-normal text-sm">
                Firstname
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
            {/* Lastname */}
            <div className="mt-2">
              <label className="text-primary font-normal text-sm">
                Lastname
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
                    placeholder={"Enter your lastname"}
                    className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px]"
                  />
                </div>
              </div>
            </div>
            {/* Phone */}
            <div className="mt-2">
              <label className="text-primary font-normal text-sm">
                Phone number
              </label>
              <div className="flex items-center w-100 border-[1px] rounded-sm border-gray-300 mt-2 h-[45px]">
                <div className="d-inline flex items-center justify-center px-2">
                  <AiOutlinePhone
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

export default CompleteRegistration;
