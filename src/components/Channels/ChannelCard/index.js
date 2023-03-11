import { Switch } from "antd";
import ChannelImg from "../../../assets/png/channelimg.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ChannelOption from "../ChannelOption";
import { useState } from "react";
const ChannelCard = ({ data }) => {
  const [modal, setmodal] = useState(false);
  const [selectedchannel, setselectedchannel] = useState(null);
  const option = ["Add to group", "Rename", "Recharge"];
  return (
    <div className="drop-shadow h-[180px] rounded-lg bg-white p-1 relative">
      {selectedchannel == data?.channelid ? (
        <ChannelOption
          selectedchannel={selectedchannel}
          channelId={data?.channelid}
          setselectedchannel={setselectedchannel}
        />
      ) : null}

      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center justify-start">
          <div className="w-[50px] h-[50px] overflow-hidden">
            <img src={ChannelImg} className="w-100 h-100" />
          </div>
        </div>
        <div
          className="mt-[-10px] cursor-pointer"
          onClick={() => {
            if (selectedchannel) {
              return setselectedchannel(null);
            } else if (!selectedchannel) {
              return setselectedchannel(data?.channelid);
            }
          }}
        >
          <BiDotsHorizontalRounded size={28} />
        </div>
      </div>

      <div className="hidden">
        <div className="text-center font-ligth text-primary text-sm">
          123kwh
        </div>
        <div className="text-center font-ligth text-primary text-[12px]">
          in last 15minutes
        </div>
      </div>
      <div className="pl-3 mt-3">
        <div className="text-[14px] text-gray-400 font-normal">
          Single channel
        </div>
        <div className="text-start text-gray-800 font-semibold text-[16px]">
          {data?.alias}
        </div>
      </div>

      <div className="mt-4 pl-3">
        <Switch
          size="default"
          defaultChecked
          onChange={(e) => {
            console.log(e);
          }}
        />
      </div>
    </div>
  );
};

export default ChannelCard;
