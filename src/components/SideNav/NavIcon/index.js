import {
  RiDashboardFill,
  RiWallet3Fill,
  RiSettings5Fill,
} from "react-icons/ri";
import { HiDeviceMobile } from "react-icons/hi";
import { GiChemicalTank, GiWallet } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import {
  FaBuilding,
  FaUsers,
  FaUserFriends,
  FaMoneyCheck,
} from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { MdMoreTime } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoHardwareChip } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { themeColor } from "../../../constant/color";
import { FaUsersCog } from "react-icons/fa";
export const NavIcon = ({ title, link }) => {
  const location = useLocation();
  switch (title) {
    case "Dashboard":
      return (
        <RiDashboardFill
          size={21}
          color={
            location.includes == "/dashboard/systemadmin" ? "#fff" : "#6c6c6c"
          }
        />
      );
    case "Devices":
      return (
        <RiDashboardFill
          size={21}
          color={location.includes == "/alldevices" ? "#fff" : "#6c6c6c"}
        />
      );
    case "Billing":
      return (
        <RiDashboardFill
          size={21}
          color={
            location.includes == "/dashboard/systemadmin"
              ? themeColor.white
              : "#6c6c6c"
          }
        />
      );
    case "Users":
      return (
        <HiUsers
          size={21}
          color={location.pathname == "/users" ? themeColor.white : "#6c6c6c"}
        />
      );
    case "Customers":
      return (
        <FaUsersCog
          size={21}
          color={
            location.pathname == "/allcustomers" ? themeColor.white : "#6c6c6c"
          }
        />
      );
    case "Roles":
      return (
        <FaUsers
          size={21}
          color={
            location.pathname.includes("/role")
              ? themeColor.baseColor
              : "#6c6c6c"
          }
        />
      );
    case "Meters":
      return (
        <IoHardwareChip
          size={21}
          color={
            location.pathname.includes("/allmeters") ||
            location.pathname.includes("/usermeters")
              ? themeColor.baseColor
              : "#6c6c6c"
          }
        />
      );
    case "Project sites":
      return (
        <FaBuilding
          size={21}
          color={
            location.pathname == "/dashboard/systemadmin/projectsite"
              ? themeColor.white
              : "#6c6c6c"
          }
        />
      );
    case "Meter class":
      return (
        <MdMoreTime
          size={21}
          color={
            location.pathname == "/meterclass" ? themeColor.white : "#6c6c6c"
          }
        />
      );
    case "Revenue":
      return <IoWallet size={21} color={"#6c6c6c"} />;
    case "Settings":
      return (
        <RiSettings5Fill
          size={21}
          color={
            location.pathname.includes("/settings")
              ? themeColor.baseColor
              : "#6c6c6c"
          }
        />
      );
    case "Sales Analytics":
      return (
        <RiWallet3Fill
          size={21}
          color={
            location.pathname.includes("/salesanalytics")
              ? themeColor.baseColor
              : "#6c6c6c"
          }
        />
      );
    case "Recharge History":
      return (
        <RiWallet3Fill
          size={21}
          color={
            location.pathname.includes("/recharge-history")
              ? themeColor.baseColor
              : "#6c6c6c"
          }
        />
      );
    case "Meter Activities":
      return (
        <RiWallet3Fill
          size={21}
          color={
            location.pathname.includes("/customer-meter/meteractivities")
              ? themeColor.baseColor
              : "#6c6c6c"
          }
        />
      );
    case "Transactions":
      return (
        <GiWallet
          size={21}
          color={
            location.pathname.includes("/allcustomer-transactions")
              ? themeColor.baseColor
              : "#6c6c6c"
          }
        />
      );
    case "Log out":
      return <IoLogOut size={21} color={"#6c6c6c"} />;
    default:
      return null;
  }
};

export default NavIcon;
