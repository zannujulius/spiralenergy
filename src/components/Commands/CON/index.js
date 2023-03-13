import { BsFillCheckCircleFill } from "react-icons/bs";

const CON = () => {
  return (
    <div className="w-full relative h-[85vh]">
      <div className="items-center justify-start pt-3 grid grid-cols-4">
        <div className="flex items-center justify-start">
          <BsFillCheckCircleFill color={"#bbb"} size={23} />
          <div className="w-full h-[2px] bg-gray-700"></div>
        </div>
        <div className="flex items-center justify-start">
          <BsFillCheckCircleFill color={"#bbb"} size={23} />
          <div className="w-full h-[2px] bg-gray-700"></div>
        </div>
        <div className="flex items-center justify-start">
          <BsFillCheckCircleFill color={"#bbb"} size={23} />
          <div className="w-full h-[2px] bg-gray-700"></div>
        </div>
        <div className="flex items-center justify-start">
          <BsFillCheckCircleFill color={"#bbb"} size={23} />
          <div className="w-full h-[2px] bg-gray-700"></div>
        </div>
      </div>
      <div className="flex items-center absolute bottom-2 justify-between w-full">
        <div className="border-[1px] border-gray-600 drop-shadow-md px-6 rounded-md py-2 mx-2 bg-white cursor-pointer">
          Prev
        </div>
        <div className="drop-shadow-md border-[1px] border-secondary px-6 rounded-md py-2 mx-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white cursor-pointer">
          Next
        </div>
      </div>
    </div>
  );
};

export default CON;
