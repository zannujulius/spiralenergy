import { stringShorter } from "../../../helperFuncs";

const PaymentPlanTable = ({ data }) => {
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
          {data.map((i, index) => (
            <tr
              key={index}
              className={"border-none even:bg-[#f5f5f6] cursor-pointer"}
            >
              <td className="text-center text-gray-700">{index + 1}</td>
              <td className="text-center text-gray-700">
                {i?.planalias.substring(0, i?.planalias.length - 20)}...
              </td>
              <td className="text-center text-gray-700">{i?.amount}</td>
              <td className="text-center text-gray-700">
                {stringShorter(i?.description, 10)}
              </td>
              <td className="text-center text-gray-700">
                <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-0 rounded-md">
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
