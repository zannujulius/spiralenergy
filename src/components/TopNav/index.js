import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { getToken } from "../../utils/token";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const TopNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex px-4 items-center justify-between h-[70px] drop-shadow-md bg-white sticky top-0 left-0 ">
      <div className="">
        <div className="font-semibold font-kanit text-[17px]">Dashboard</div>
        <div className="font-light text-gray-600">Meter Overview</div>
      </div>
      <div className="flex items-start ">
        <div className="items-center flex justify-center pt-1 relative">
          <div className="w-[15px] h-[15px] left-[10px] top-[-3px] bg-red-500 flex items-center justify-center rounded-full absolute">
            <div className="text-white text-[12px] ">2</div>
          </div>
          <IoNotificationsOutline size={26} className="text-gray-600" />
        </div>
        <div className="flex ml-3 items-center justify-between rounded px-2 py-1 w-[100px] border-[1px] border-gray-300">
          <div className="">Profile</div>
          <div className="flex items-center justify-center">
            <IoMdArrowDropdown size={18} />
          </div>
        </div>
        {pathname !== "/userroles" && (
          <div className="flex items-center justify-center pt-1 px-2 ml-2 cursor-pointer">
            <HiOutlineMenuAlt3 size={22} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
