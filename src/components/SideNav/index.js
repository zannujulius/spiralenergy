import { RiDashboardFill, RiSettings3Fill, RiBillFill } from "react-icons/ri";
import { GoCircuitBoard } from "react-icons/go";
import { FaUsersCog } from "react-icons/fa";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { themeColor } from "../../constant/color";
import { FiLogOut } from "react-icons/fi";

const SideNav = ({}) => {
  const location = useLocation();
  const iconColor = (url) => (location.pathname == url ? "white" : "#858c98");

  return (
    <div className="side-nav md:hidden lg:block side-nav_bg h-screen w-[260px] drop-shadow-md bg-gray-900">
      <div className="mt-8 flex items-center px-6">
        <div className="w-[30px] h-[30px] border-[1px] rounded-full border-gray-400"></div>
        <div className="font-bold pl-2 text-[17px] text-white">
          Spiral Energy
        </div>
      </div>
      <div className="mt-10 ">
        <Link
          to="/dashboard"
          className="flex items-start px-6 py-2 my-8 cursor-pointer"
        >
          <div className="flex items-center justify-center pt-[2px]">
            <RiDashboardFill size={21} color={iconColor("/dashboard")} />
          </div>
          <div
            className="text-[16px] font-light pl-4  "
            style={{
              color: iconColor("/dashboard"),
            }}
          >
            Dashboard
          </div>
        </Link>
        <Link
          to="/allchannels"
          className="flex items-start px-6 py-2 my-8 cursor-pointer"
        >
          <div className="flex items-center justify-center pt-[2px]">
            <GoCircuitBoard size={21} color={iconColor("/channels")} />
          </div>
          <div
            className="text-[16px] font-light pl-4  "
            style={{
              color: iconColor("/channels"),
            }}
          >
            Channels
          </div>
        </Link>
        <Link
          to="/userroles"
          className="flex items-start px-6 py-2 my-8 cursor-pointer"
        >
          <div className="flex items-center justify-center pt-[2px]">
            <FaUsersCog size={21} color={iconColor("/userroles")} />
          </div>
          <div
            className="text-[16px] font-light pl-4"
            style={{
              color: iconColor("/userroles"),
            }}
          >
            Manage roles
          </div>
        </Link>
        <Link to="/" className="flex items-start px-6 py-2 my-8 cursor-pointer">
          <div className="flex items-center justify-center pt-[2px]">
            <RiBillFill size={21} color={iconColor("/logs")} />
          </div>
          <div
            className="text-[16px] font-light pl-4  "
            style={{
              color: iconColor("/logs"),
            }}
          >
            Recharge logs
          </div>
        </Link>
        <Link to="/" className="flex items-start px-6 py-2 my-8 cursor-pointer">
          <div className="flex items-center justify-center pt-[2px]">
            <RiSettings3Fill size={21} color={iconColor("/settings")} />
          </div>
          <div
            className="text-[16px] font-thin pl-4"
            style={{
              color: iconColor("/settings"),
            }}
          >
            Settings
          </div>
        </Link>
      </div>
      <div
        className="absolute bottom-6 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <div className="flex pl-4">
          <div className="flex items-center justify-center pt-[2px]">
            <FiLogOut size={21} color="#858c98" />
          </div>
          <div className="text-[16px] font-light pl-4 text-[#858c98]">
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
