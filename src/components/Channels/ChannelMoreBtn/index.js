import { HiRectangleGroup } from "react-icons/hi2";

const ChannelMoreBtn = () => {
  return (
    <div className="rounded-full flex item-center border-[1px] drop-shadow-sm bg-primary px-3 py-2 mx-2 cursor-pointer">
      <div className="pr-2">
        <HiRectangleGroup color={"white"} size={18} />
      </div>
      <div className="text-white font-light text-sm ">See All</div>
    </div>
  );
};

export default ChannelMoreBtn;
