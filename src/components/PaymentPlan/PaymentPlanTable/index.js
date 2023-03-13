const PaymentPlanTable = () => {
  return (
    <div className="w-full mt-4">
      <table className="w-full">
        <thead className="border-b-[1px] border-b-[gray]">
          <th className="font-normal p-1 text-center text-gray-800">#</th>
          <th className="font-normal p-1 text-center text-gray-800">
            Plan Name
          </th>
          <th className="font-normal p-1 text-center text-gray-800">Price</th>
          <th className="font-normal p-1 text-center text-gray-800">
            Description
          </th>
          <th className="font-normal p-1 text-center text-gray-800">Action</th>
        </thead>
        <tbody>
          {Array.from(Array(7)).map((i, index) => (
            <tr
              key={index}
              className={"border-none even:bg-[#f5f5f6] cursor-pointer"}
            >
              <td className="text-center text-gray-700">{index + 1}</td>
              <td className="text-center text-gray-700">Weekend Plan</td>
              <td className="text-center text-gray-700">2,000</td>
              <td className="text-center text-gray-700">
                to be use on weekend...
              </td>
              <td className="text-center text-gray-700">
                <div className="border-[0.5px] cursor-pointer border-[#2b2b2b] rounded-md">
                  Buy
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentPlanTable;
