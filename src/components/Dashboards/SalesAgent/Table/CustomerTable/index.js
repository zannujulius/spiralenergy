import { HiHome } from "react-icons/hi";
import moment from "moment";
import { Link } from "react-router-dom";
import { FcCalendar } from "react-icons/fc";
import PageNav from "../../../../PageNav";

const CustomerTable = () => {
  return (
    <div className="mt-8">
      <div
        className="tablecontainer"
        style={{
          width: "100%",
        }}
      >
        <table
          className="w-100 table border-collapse"
          style={{
            width: "100%",
            minWidth: "1000px",
          }}
        >
          <thead className="h-[50px] bg-gray-800 drop-shadow-md">
            <th className="font-semibold text-white">S/N</th>
            <th className="font-semibold text-white">Customer Type</th>
            <th className="font-semibold text-white">Section</th>
            <th className="font-semibold text-white">Meter Type</th>
            <th className="font-semibold text-white">Connection Fee </th>
            <th className="font-semibold text-white">Connection Balance</th>
            <th className="font-semibold text-white">Max Periodic charge</th>
            <th className="font-semibold text-white">Date created </th>
            <th className="font-semibold text-white">Date Decommissioned </th>
            <th className="font-semibold text-white">Action </th>
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
                <td className="text-center">System Admin</td>
                <td className="text-center">System Admin</td>
                <td className="text-center">
                  {" "}
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center pt-[2px]">
                      <FcCalendar size={21} />
                    </div>
                    <div className="pl-2">
                      {moment(Date.now()).format("ll")}
                    </div>
                  </div>{" "}
                </td>
                <td className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center pt-[2px]">
                      <FcCalendar size={21} />
                    </div>
                    <div className="pl-2">
                      {moment(Date.now()).format("ll")}
                    </div>
                  </div>{" "}
                </td>
                <td className="text-center">System Admin</td>

                <td className="text-center"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
