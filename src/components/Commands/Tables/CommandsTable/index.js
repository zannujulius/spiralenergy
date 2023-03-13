const CommandsTable = () => {
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
          <th className="font-normal p-1 text-center text-gray-800">Action</th>
        </thead>
        <tbody>
          {Array.from(Array(12)).map((i, index) => (
            <tr
              key={index}
              className={"border-none even:bg-[#f5f5f6] cursor-pointer"}
            >
              <td className="text-center text-gray-700">{index + 1}</td>
              <td className="text-center text-secondary">Zannu Julius</td>
              <td className="text-center text-gray-700">#9876867890978689</td>
              <td className="text-center text-gray-700">INT00</td>
              <td className="text-center text-gray-700 flex item-center justify-center">
                <div className=" text-green-600 rounded-lg w-[fit-content] p-1">
                  Completed
                </div>
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
