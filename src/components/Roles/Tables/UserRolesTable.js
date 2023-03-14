import { HiHome } from "react-icons/hi";
import PageNav from "../../PageNav";
import moment from "moment";
import "./style.css";
import { Link } from "react-router-dom";
import { FcCalendar } from "react-icons/fc";
import { setToken } from "../../../utils/token";
import { toast } from "react-hot-toast";
const UserRolesTable = ({ data }) => {
  return (
    <table className="w-full border-collapse">
      <thead className="h-[50px] drop-shadow-md border-b-[0.5px] border-gray-800">
        <th className="font-semibold text-gray-800">S/N</th>
        <th className="font-semibold text-gray-800">Role creator</th>
        <th className="font-semibold text-gray-800">Zone Managed</th>
        <th className="font-semibold text-gray-800">Role</th>
        <th className="font-semibold text-gray-800">Username</th>
        <th className="font-semibold text-gray-800">Date assigned</th>
        <th className="font-semibold text-gray-800">Action</th>
      </thead>
      <tbody>
        {data.map((i, index) => (
          <tr
            className="bg-white hover:bg-gray-50 cursor-pointer h-[50px] even:bg-gray-50"
            key={i?.roleid}
          >
            <td className="text-center">{index + 1}</td>
            <td className="text-center">{i?.creator}</td>
            <td className="text-center">{i?.projectzone}</td>
            <td className="text-center ">{i?.role}</td>
            <td className="text-center">{i?.username}</td>
            <td className="text-center">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center pt-[2px]">
                  <FcCalendar size={21} />
                </div>
                <div className="pl-2">
                  {moment(i?.datecreated).format("LL")}
                </div>
              </div>{" "}
            </td>
            <td className="text-center">
              <Link
                to={
                  i?.role == "System Manager"
                    ? `/dashboard/systemadmin`
                    : i?.role == "Project Manager"
                    ? `/dashboard/projectmanager/${i?.projectzone}`
                    : i?.role == "Customer Representative"
                    ? `/dashboard/customerrepresentative/${i?.projectzone}`
                    : i?.role == "Sales Agent"
                    ? `/dashboard/salesagent/${i?.projectzone}`
                    : "/"
                }
                onClick={async () => {
                  try {
                    switch (i?.role) {
                      case "System Manager":
                        await setToken("spiral_role", "System Manager");
                        return;
                      case "Project Manager":
                        await setToken("spiral_role", "Project Manager");
                        await setToken("spiral_site", i?.projectzone);
                        return;
                      case "Customer Representative":
                        await setToken(
                          "spiral_role",
                          "Customer Representative"
                        );
                        await setToken("spiral_site", i?.projectzone);
                        return;
                      case "Customer Agent":
                        await setToken("spiral_role", "Customer Agent");
                        await setToken("spiral_site", i?.projectzone);
                        return;
                      case "Sales Agent":
                        await setToken("spiral_role", "Sales Agent");
                        await setToken("spiral_site", i?.projectzone);
                        return;
                      case "Customer":
                        await setToken("spiral_role", "Customer");
                        return;
                      default:
                        break;
                    }
                  } catch (err) {
                    toast.error(err.message);
                  }
                }}
                className="border-[1px] rounded border-secondary text-[12px] text-secondary font-light px-4 py-2"
              >
                View Dashboard
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserRolesTable;
