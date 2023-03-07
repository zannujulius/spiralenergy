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

const CreateAccount = () => {
  const [resetpassword, setresetpassword] = useState(true);
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [loading, setloading] = useState(false);

  let domain = "IKJ";

  const handleSignup = async () => {
    try {
      console.log(phone, email, username, password);
      if (!(email && password && phone && username))
        return toast.error("All values are required. Please try again.");
      setloading(true);
      let res = await axios.post(
        "https://api.app.voltz.africa/authselfhelp/createaccount",
        {
          callerid: username,
          username,
          defaultpassword: password,
          phone,
          email,
          subdomain: "IKJ",
        }
      );
      let { data } = res;
      if (data.response == "userexists") {
        toast.error(data.response);
        setloading(false);
        return;
      } else if (data.response == "success") {
        toast.success("A code has been sent you email address");
        await setToken("spiral_username", email);
        redirect(`/emailverification?email=${email}&username=${username}`);
        setloading(false);
        return;
      } else if (data.response == "failure") {
        toast.error(data.response);
        setloading(false);
        return;
      }
    } catch (err) {
      toast.error(err.message);
      if (err.response) {
        toast.error(err.response?.data.response);
      }
      return setloading(false);
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
            Fill the fields to create an account.
          </div>
          <hr className="my-4" />
          <div className="">
            {/* Firstname */}
            <div className="">
              <label className="text-primary font-normal text-sm">
                Username
              </label>
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
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    type={"text"}
                    placeholder={"Enter your username"}
                    className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px]"
                  />
                </div>
              </div>
            </div>
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
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type={"email"}
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
              <div className="flex bg-white items-center w-100 border-[1px] rounded-sm border-gray-300 mt-2 h-[55px] ">
                <div className="d-inline flex items-center justify-center px-2">
                  <AiOutlinePhone
                    size={20}
                    color="text-primary"
                    className="text-primary"
                  />
                </div>
                <div className="ml-2">
                  <input
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    type={"number"}
                    placeholder={"Enter your phone number"}
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
                <div className="flex ">
                  <div className="d-inline flex items-center justify-center px-2">
                    <AiOutlineKey
                      size={20}
                      color="text-primary"
                      className="text-primary"
                    />
                  </div>
                  <div className="ml-2">
                    <input
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      type={"text"}
                      placeholder={"Enter your password"}
                      className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px]"
                    />
                  </div>
                </div>

                <div className="px-3 cursor-pointer">
                  <AiOutlineEye
                    size={20}
                    color="text-primary"
                    className="text-primary"
                  />
                </div>
              </div>
            </div>
            {/* Button */}
            <div className=" w-100 mt-7">
              <Button
                text={"Create"}
                loading={loading}
                onClick={handleSignup}
              />
            </div>

            <div className="w-100 mt-4">
              <div className="text-primary text-center font-normal py-3">
                Need help with you account?
              </div>
              <Link
                to="/"
                className="underline pl-2 w-100 block cursor-pointer text-sm font-light text-secondary text-center"
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

export default CreateAccount;
