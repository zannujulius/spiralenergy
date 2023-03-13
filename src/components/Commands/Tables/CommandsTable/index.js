import moment from "moment";
import { stringShorter } from "../../../../helperFuncs";

const CommandsTable = ({ data }) => {
  return (
    <div className="w-full mt-4">
      <table className="w-full">
        <thead className="border-b-[1px] border-b-[gray]">
          <th className="font-normal p-1 text-center text-gray-800">#</th>
          <th className="font-normal p-1 text-center text-gray-800">Sender</th>
          <th className="font-normal p-1 text-center text-gray-800">Command</th>
          <th className="font-normal p-1 text-center text-gray-800">
            Command type
          </th>
          <th className="font-normal p-1 text-center text-gray-800">Status</th>
          <th className="font-normal p-1 text-center text-gray-800">Date </th>
          <th className="font-normal p-1 text-center text-gray-800">Action</th>
        </thead>
        <tbody>
          {data.map((i, index) => (
            <tr
              key={index}
              className={"border-none even:bg-[#f5f5f6] cursor-pointer"}
            >
              <td className="text-center text-gray-700">{index + 1}</td>
              <td className="text-center text-secondary">Zannu juilus</td>
              <td className="text-center text-gray-700">
                {stringShorter(i?.command, 15)}...
              </td>
              <td className="text-center text-gray-700">{i?.commandtype}</td>
              <td className="text-center text-gray-700 flex item-center justify-center">
                <div className=" text-green-600 rounded-lg w-[fit-content] p-1">
                  Completed
                </div>
              </td>
              <td className="text-center text-gray-700">
                {moment(i?.dateissued).format("ll")}
              </td>
              <td className="text-center text-gray-700">
                <div className=" underline cursor-pointer hover:text-secondary   border-[#2b2b2b] rounded-md">
                  More info
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommandsTable;
