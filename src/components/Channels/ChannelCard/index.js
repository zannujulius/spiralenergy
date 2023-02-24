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
    <div className="drop-shadow h-[220px] bg-white rounded flex flex-col items-center py-2 relative">
      <ChannelOption
        selectedchannel={selectedchannel}
        channelId={data?.channelId}
        setselectedchannel={setselectedchannel}
      />

      <div
        className="absolute right-[5px]"
        onClick={() => {
          if (selectedchannel) {
            return setselectedchannel(null);
          } else if (!selectedchannel) {
            return setselectedchannel(data?.channelId);
          }
        }}
      >
        <BiDotsHorizontalRounded size={21} />
      </div>
      <div className="text-center font-ligth text-primary text-sm">123kwh</div>
      <div className="text-center font-ligth text-primary text-[12px]">
        in last 15minutes
      </div>
      <div className="flex items-center justify-center my-2">
        <div className="w-[80px] h-[80px] overflow-hidden">
          <img src={ChannelImg} className="w-100 h-100" />
        </div>
      </div>
      <div className="text-center text-primary font-semibold text-[14px]">
        {data?.name}
      </div>
      <div className="pt-2">
        <Switch
          size="larger"
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
