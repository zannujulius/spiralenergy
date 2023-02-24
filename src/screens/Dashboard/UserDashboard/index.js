import Layout from "../../../components/Layout";
import { HiRectangleGroup } from "react-icons/hi2";
import { themeColor } from "../../../constant/color";
import { Switch } from "antd";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import AddToGroup from "../../../components/Channels/Groups/AddToGroup";
import { useState } from "react";
import ChannelCard from "../../../components/Channels/ChannelCard";

const UserDashboard = () => {
  const [modal, setmodal] = useState({
    group: false,
  });
  const ChannelPill = () => {
    return (
      <div className="rounded-full flex item-center border-[1px] drop-shadow-sm bg-white border-gray-200 px-3 py-2 mx-2 cursor-pointer">
        <div className="pr-2">
          <HiRectangleGroup color={"#000000"} size={18} />
        </div>
        <div className="text-primary font-light text-sm ">Dinning hall</div>
      </div>
    );
  };

  const ChannelMoreBtn = () => {
    return (
      <div className="rounded-full flex item-center border-[1px] drop-shadow-sm bg-primary px-3 py-2 mx-2 cursor-pointer">
        <div className="pr-2">
          <HiRectangleGroup color={"white"} size={18} />
        </div>
        <div className="text-white font-light text-sm ">See All</div>
      </div>
    );
  };

  return (
    <Layout>
      {modal.group && <AddToGroup />}
      <div className="pb-[200px]">
        <div className="flex flex-wrap items-center justify-between mt-4">
          <div className="">
            <div className="text-primary font-semibold text-[17px]  ">
              <span className="text-3xl ">⛅</span> Welcome James
            </div>
            <div className="pl-9">
              Overview of all your utilities you manage.
            </div>
          </div>
          <Link to="/userroles" className="lg:w-[190px] w-[100%] my-4 block">
            <Button text={"Manage account"} bg={""} />
          </Link>
        </div>
        <div className=" mt-8">
          <div className="flex items-center justify-between px-2">
            <div className="font-semibold text-primary">Grouped Channels</div>
            <div
              className="flex items-center justify-center cursor-pointer "
              onClick={() =>
                setmodal((prev) => {
                  return { ...prev, group: true };
                })
              }
            >
              <div className="flex items-center justify-center">
                <IoAddCircleOutline className="text-secondary" />
              </div>
              <div className="text-secondary pl-1">New group</div>
            </div>
          </div>
          <div className="mt-4 max-w-full overflow-x-scroll overflow-y-hidden ">
            <div className="flex items-start overflow-x-scroll overflow-y-hidden w-[2000px]">
              {Array.from(Array(7)).map((_, i) => (
                <ChannelPill key={i} />
              ))}
              <ChannelMoreBtn />
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="">
          <div className="flex items-center justify-between px-2">
            <div className="font-semibold text-primary">Your Channels</div>
            <div className="flex items-center justify-center cursor-pointer  ">
              <div className="flex items-center justify-center">
                <IoAddCircleOutline className="text-secondary" />
              </div>
              <div className="text-secondary pl-1">Add Channel</div>
            </div>
          </div>
          <div className="mt-4 max-w-full">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 px-2 py-2">
              {Array.from(Array(10)).map((_, i) => (
                <ChannelCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
