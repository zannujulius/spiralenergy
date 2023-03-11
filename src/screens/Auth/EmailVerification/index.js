import {
  AiFillEye,
  AiOutlineEye,
  AiOutlineKey,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import { Button } from "../../../components/Button";
import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import axios from "axios";
import { setToken } from "../../../utils/token";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { SiLastpass } from "react-icons/si";
import { errorBlock } from "../../../controllers/errorBlock";

const EmailVerification = () => {
  const [resetpassword, setresetpassword] = useState(true);
  const [number, setnumber] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const [loading, setloading] = useState(false);
  const [tokenloading, settokenloading] = useState(false);

  let domain = "IKJ";

  const handleSubmit = async () => {
    try {
      if (!number) return toast.error("Please enter your 6-digits code");

      if (number.length < 6)
        return toast.error("Your code needs to be 6-digits");

      if (!searchParams.get("email")) {
        toast.error("Please provide an email address");
        return;
      }

      setloading(true);

      let res = await axios.post(
        "https://api.app.voltz.africa/authselfhelp/completeverification",
        {
          verificationcode: number,
          username: searchParams.get("email"),
          subdomain: "IKJ",
        }
      );

      if (res.data.response == "success") {
        toast.success("Email verified successfully");
        await setToken("spiral_token", res.data.sessionid);
        await setToken("spiral_email", "verified");
        redirect("/dashboard");
      } else if (res.data.response == "failure") {
        toast.error("Failed please try again");
      } else if (res.data.response == "expired") {
        toast.error("Token has expired please try again");
      } else if (res.message) {
        toast.error(res.message);
      }
      setloading(false);
    } catch (err) {
      errorBlock(err);
      toast.error(err.message);
      setloading(false);
    }
  };

  const handleResend = async () => {
    try {
      if (!searchParams.get("email")) {
        toast.error("Please provide an email address, to continue");
        return;
      }

      settokenloading(true);

      let res = await axios.post(
        "https://api.app.voltz.africa/authselfhelp/resendverificationcode",
        {
          callerid: searchParams.get("email"),
          subdomain: "IKJ",
        }
      );

      if (res.data.response == "success") {
        settokenloading(false);
        toast.success("A code has been sent to your email address.");
        return;
      } else if (res.data.response == "failure") {
        settokenloading(false);
        toast.error(res.data.response);
        return;
      }
    } catch (err) {
      toast.error(err.message);
      settokenloading(false);
    }
  };

  return (
    <div className="h-screen  bg-gray-50 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-items-center place-content-center gap-10">
      <div className="w-full h-[600px] bg-white hidden md:hidden lg:block"></div>
      <div className="w-full md:w-[500px] mx-auto">
        <div className="">
          <div className="text-center text-primary font-semibold text-2xl">
            Spiral Energy
          </div>
        </div>
        <div className=" w-[full] h-auto rounded-md p-6">
          <div className="font-light text-center text-[17px] text-gray-600">
            Enter the six digits code sent your email address?
          </div>
          <div className="font-semibold text-center pt-3 text-lg">
            {!searchParams.get("email") ? "" : searchParams.get("email")}
          </div>
          <hr className="my-4" />
          <div className="">
            {/* Firstname */}
            <div className="">
              <label className="text-primary font-normal text-sm">Code</label>
              <div className="flex items-center w-100 border-[1px] rounded-sm bg-white border-gray-300 mt-2 h-[50px]">
                <div className="d-inline flex items-center justify-center px-2">
                  <SiLastpass color="text-primary" className="text-primary" />
                </div>
                <div className="ml-2 w-full">
                  <input
                    onInput={(e) => {
                      if (e.target.value.length > e.target.maxLength) {
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
                      }
                    }}
                    maxLength="6"
                    type={"number"}
                    value={number}
                    onChange={(e) => setnumber(e.target.value)}
                    placeholder={"Enter your 6-digits code here"}
                    className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px] w-full"
                  />
                </div>
              </div>
              <button
                className="underline font-semibold mt-3"
                onClick={handleResend}
                disabled={tokenloading}
              >
                {tokenloading ? "Resending..." : " Resend code"}
              </button>
            </div>
            {/* Lastname */}

            {/* Button */}
            <div className="w-100 mt-7">
              <Button
                text={"Verify"}
                loading={loading}
                onClick={handleSubmit}
              />
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
                <span className="font-semibold text-1xl pl-2">Log in.</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
