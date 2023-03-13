import { Switch } from "antd";
import ChannelImg from "../../../assets/png/channelimg.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ChannelOption from "../ChannelOption";
import { useState } from "react";
import { Link } from "react-router-dom";
const ChannelCard = ({ data }) => {
  const [modal, setmodal] = useState(false);
  const [selectedchannel, setselectedchannel] = useState(null);
  const option = ["Add to group", "Rename", "Recharge"];
  return (
    <div className="drop-shadow-md h-[180px] rounded-lg border bg-white p-1 relative">
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
          <BiDotsHorizontalRounded size={28} color={"black"} />
        </div>
      </div>

      <Link
        to={data?.type == "single" ? "/channel/:id" : "/group/channels"}
        className="pl-3 mt-3 absolute h-[100px] top-[20px] w-full pt-8"
      >
        <div className="text-[14px] text-gray-400 font-normal">
          {data?.type[0].toUpperCase() +
            data?.type.substring(1, data?.type.length)}
          channel
        </div>
        <div className="text-start text-gray-800 font-semibold text-[16px]">
          {data?.alias}
        </div>
      </Link>

      <div className="mt-4 pl-3 absolute bottom-2">
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
