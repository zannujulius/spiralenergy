import "./style.css";
import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { IoLogOut } from "react-icons/io5";
import { deleteToken, getToken } from "../../utils/token";
import { FiLogOut } from "react-icons/fi";
import SideBarFooter from "./Footer";
import { IoIosArrowDown } from "react-icons/io";
import toast from "react-hot-toast";
import { data } from "./data";
import NavIcon from "./NavIcon";
import { themeColor } from "../../constant/color";

const SideNav = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [mouse, setMouse] = useState(false);
  const navigate = useNavigate();
  const handlenavItems = () => {
    setMouse((prev) => true);
  };
  const handleMouseOut = () => {
    setMouse((prev) => false);
  };
  const navLink = useRef();
  const [name, setName] = useState("AK");
  const [fullName, setfullName] = useState("");
  const [settingsModal, setSettingsModal] = useState(false);
  const [roleModal, setRoleModal] = useState(false);
  const [meterModal, setMeterModal] = useState(false);
  const [role, setRole] = useState("");
  useEffect(() => {
    (async () => {
      try {
        let role = await getToken("spiral_role");
        setRole(role);
        setLoading(false);
      } catch (err) {
        toast.error(err.message);
      }
    })();
  }, []);
  return (
    <div className="side-nav relative md:hidden lg:block side-nav_bg h-screen w-[260px] drop-shadow-md bg-gray-900">
      <div className="mt-8 flex items-center px-6">
        <div className="w-[30px] h-[30px] border-[1px] rounded-full border-gray-400"></div>
        <div className="font-bold pl-2 text-[17px] text-white">
          Spiral Energy
        </div>
      </div>

      <div className="pt-3  ">
        {role == "Customer Representative" && (
          <Tree treeData={data.customerRep} />
        )}
        {role == "System Manager" && <Tree treeData={data.sysdmin} />}
        {role == "Project Manager" && <Tree treeData={data.projectmanager} />}
        {role == "Sales Agent" && <Tree treeData={data.salesagent} />}
        {role == "Customer" && <Tree treeData={data.customers} />}
        {(role == "User" || !role) && <Tree treeData={data.user} />}
      </div>
      <div
        className="absolute bottom-6 cursor-pointer w-full"
        onClick={() => (window.location.href = "/")}
      >
        <div className="flex pl-4">
          <div className="flex items-center justify-center pt-[2px]">
            <FiLogOut size={18} color="white" />
          </div>
          <div className="text-[16px] font-light pl-4 text-white">Log out</div>
        </div>
      </div>
      <div
        className=""
        style={{
          position: "absolute",
          bottom: "20px",
          marginLeft: "5px",
        }}
      >
        {/* <SideBarFooter /> */}
      </div>
    </div>
  );
};

export default SideNav;

const Tree = ({ treeData }) => {
  return (
    <>
      {treeData.map((node, i) => (
        <TreeNode node={node} key={i} />
      ))}
    </>
  );
};

const TreeNode = ({ node }) => {
  const { children, title, icon, link } = node;
  const location = useLocation();
  const [showChildren, setShowChildren] = useState(false);
  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");
  const [site, setSite] = useState("");
  useEffect(() => {
    (async () => {
      try {
        let role = await getToken("ampere_role");
        let site = await getToken("ampere_site");
        setRole(role);
        setSite(site);
        setLoading(false);
      } catch (err) {
        toast.error(err.message);
      }
    })();
  }, []);
  return (
    <>
      {/* <div className="border-2 border-white" onClick={() => handleClick()}> */}
      <Link
        to={
          role == "Customer Representative" && title == "Dashboard"
            ? `${link}/${site}`
            : role == "Sales Agent" && title == "Dashboard"
            ? `${link}/${site}`
            : link.replace(":sitename", site)
        }
        className="flex items-start px-6 py-2 my-8 cursor-pointer"
      >
        <div className="flex items-center justify-center pt-[2px]">
          <NavIcon title={title} link={link} />
        </div>
        <div
          className="text-[16px] font-light pl-4"
          style={{
            color: location.pathname == link ? themeColor.white : "#a3a3a3",
            display:
              title.trim() == "All user roles" &&
              role.trim() !== "System Manager"
                ? "none"
                : "block",
          }}
        >
          {title}
        </div>
      </Link>
      {/* </div> */}
      {showChildren && <Tree treeData={children} />}
    </>
  );
};

{
  /* {children.length > 0 && (
            <div
              style={{
                width: "10%",
              }}
            >
              <IoIosArrowDown size={16} color={themeColor.baseColor} />
            </div>
          )} */
}
