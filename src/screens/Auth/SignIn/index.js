import {
  AiFillEye,
  AiOutlineEye,
  AiOutlineKey,
  AiOutlinePhone,
  AiOutlineUser,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { Button } from "../../../components/Button";
import { useEffect, useState } from "react";
import { Link, navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { setToken } from "../../../utils/token";
import { toast } from "react-hot-toast";
import { errorBlock } from "../../../controllers/errorBlock";

const SignIn = () => {
  const [resetpassword, setresetpassword] = useState(true);
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const [eye, seteye] = useState(false);
  let navigate = useNavigate();

  let domain = "IKJ";

  const handleLogin = async () => {
    try {
      if (!(email && password)) {
        toast.error("Both values are required.");
        return;
      }

      setloading(true);
      let res = await axios.post("https://api.app.voltz.africa/auth/login", {
        username: email,
        password: password,
        subdomain: "IKJ",
      });

      if (res.data.response === "success") {
        toast.success("Logged in successfully");
        await setToken("spiral_token", res.data.sessionid);
        await setToken("spiral_username", email);
        if (!res.data.codeverification && res.data.registration) {
          await setToken("spiral_email", "notverified");
          await setToken("spiral_registration", "verified");
          setloading(false);
          // send otp code
          let res = await axios.post(
            "https://api.app.voltz.africa/authselfhelp/resendverificationcode",
            {
              callerid: email,
              subdomain: "IKJ",
            }
          );

          if (res.data.response == "success") {
            toast.success("A code has been sent to your email address.");
            navigate(`/emailverification?email=${email}`);
            return;
          } else if (res.data.response == "failure") {
            setloading(false);
            toast.error(res.data.response, {
              toastId: "32uwcasc",
            });
            return;
          }
        }
        if (res.data.codeverification && !res.data.registration) {
          await setToken("voltz_user_email", "verified");
          await setToken("voltz_user_registration", "notverified");
          setloading(false);
          navigate("/dashboard");
          return;
        }
        if (res.data.registration && res.data.codeverification) {
          await setToken("spiral_email", "verified");
          await setToken("spiral_registration", "verified");
          setloading(false);
          navigate("/dashboard");
          return;
        }
        if (!res.data.registration && !res.data.codeverification) {
          await setToken("spiral_email", "notverified");
          await setToken("spiral_registration", "notverified");
          let res = await axios.post(
            "https://api.app.voltz.africa/authselfhelp/resendverificationcode",
            {
              callerid: email,
              subdomain: "IKJ",
            }
          );

          if (res.data.response == "success") {
            toast.success("A code has been sent to your email address.");
            setloading(false);
            navigate("/emailverification");
            return;
          } else if (res.data.response == "failure") {
            setloading(false);
            toast.error(res.data.response);
            return;
          }
        }
      }
    } catch (err) {
      if (err.response.status == 401) {
        toast.error("Incorrect details please try again.");
        setloading(false);
        return;
      }
      errorBlock(err);
      toast.error(err.message);
      setloading(false);
    }
  };

  return (
    <div className="h-screen  bg-gray-50 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-items-center place-content-center gap-10">
      <div className="w-full h-[600px] bg-white hidden md:hidden lg:block border "></div>
      <div className="w-full md:w-[500px] mx-auto">
        <div className="">
          <div className="text-center text-primary font-semibold text-2xl">
            Spiral Energy
          </div>
        </div>
        <div className=" w-[full] h-auto rounded-md p-6">
          <div className="font-light text-center text-lg text-gray-600">
            Fill the fields to log in into your account.
          </div>
          <hr className="my-4" />
          <div className="">
            {/* Lastname */}
            <div className="mt-4">
              <label className="text-primary font-normal text-sm">Email</label>
              <div className="flex bg-white items-center w-100 border-[1px] rounded-sm border-gray-300 mt-2 h-[55px]">
                <div className="d-inline flex items-center justify-center px-2">
                  <AiOutlineUser
                    size={20}
                    color="text-primary"
                    className="text-primary"
                  />
                </div>
                <div className="ml-2">
                  <input
                    required
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type={"email"}
                    placeholder={"Enter your email address"}
                    className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px]"
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="mt-4">
              <label className="text-primary font-normal text-sm">
                Password
              </label>
              <div className="flex items-center justify-between w-100 border-[1px] rounded-sm bg-white border-gray-300 mt-2 h-[55px]">
                <div className="flex w-full">
                  <div className="d-inline flex items-center justify-center px-2">
                    <AiOutlineKey
                      size={20}
                      color="text-primary"
                      className="text-primary"
                    />
                  </div>
                  <div className="ml-2 w-full">
                    <input
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      type={eye ? "text" : "password"}
                      placeholder={"Enter your password"}
                      className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px] w-full"
                    />
                  </div>
                </div>

                <div
                  className="px-3 cursor-pointer"
                  onClick={() => seteye(!eye)}
                >
                  {eye ? (
                    <AiOutlineEye
                      size={20}
                      color="text-primary"
                      className="text-primary"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={20}
                      color="text-primary"
                      className="text-primary"
                    />
                  )}
                </div>
              </div>
            </div>
            {/* Button */}
            <div className=" w-100 mt-7">
              <Button text={"Create"} loading={loading} onClick={handleLogin} />
            </div>

            <div className="w-100 mt-4">
              <div className="text-primary text-center font-normal py-3">
                Need help with you account?
              </div>
              <Link
                to="/createaccount"
                className="underline w-100 block cursor-pointer text-sm font-light text-secondary text-center"
              >
                Don't have an account?
                <span className="font-semibold text-1xl pl-2">
                  Create an account instead.
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
