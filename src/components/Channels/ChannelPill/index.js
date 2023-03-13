import { HiRectangleGroup } from "react-icons/hi2";

const ChannelPill = () => {
  return (
    <div className="rounded-full flex item-center border-[1px] drop-shadow-sm bg-white border-gray-200 px-3 py-2 mx-2 cursor-pointer">
      <div className="pr-2">
        <HiRectangleGroup color={"#000000"} size={18} />
      </div>
      <div className="text-primary font-light text-sm ">Dinning hall</div>
    </div>
  );
};

export default ChannelPill;
