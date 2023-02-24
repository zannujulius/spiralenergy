import { HiHome } from "react-icons/hi";
import PageNav from "../../PageNav";
import moment from "moment";
import "./style.css";
import { Link } from "react-router-dom";
import { FcCalendar } from "react-icons/fc";
const UserRolesTable = () => {
  return (
    <div className="mt-8">
      <div
        className="w-100"
        style={{
          width: "100%",
        }}
      >
        <table
          className="w-100 border-collapse"
          style={{
            width: "100%",
          }}
        >
          <thead className="h-[50px] bg-gray-800 drop-shadow-md">
            <th className="font-semibold text-white">S/N</th>
            <th className="font-semibold text-white">Role creator</th>
            <th className="font-semibold text-white">Zone Managed</th>
            <th className="font-semibold text-white">Role</th>
            <th className="font-semibold text-white">Username</th>
            <th className="font-semibold text-white">Date assigned</th>
            <th className="font-semibold text-white">Action</th>
          </thead>
          <tbody>
            {Array.from(Array(12)).map((_, i) => (
              <tr
                className="bg-white drop-shadow hover:bg-gray-50 cursor-pointer h-[50px] even:bg-gray-50"
                key={i}
              >
                <td className="text-center">{i + 1}</td>
                <td className="text-center">4286</td>
                <td className="text-center">Abuja</td>
                <td className="text-center">James</td>
                <td className="text-center">System Admin</td>
                <td className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center pt-[2px]">
                      <FcCalendar size={21} />
                    </div>
                    <div className="pl-2">
                      {moment(Date.now()).format("lll")}
                    </div>
                  </div>{" "}
                </td>
                <td className="text-center">
                  <Link
                    to="/"
                    className="border-[1px] rounded border-secondary text-[12px] text-secondary font-light px-4 py-2"
                  >
                    View Dashboard
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRolesTable;
