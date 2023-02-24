import { Switch } from "antd";
import ChannelImg from "../../../assets/png/channelimg.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const ChannelCard = () => {
  return (
    <div className="drop-shadow h-[220px] bg-white rounded flex flex-col items-center py-2 relative">
      <div className="absolute right-[5px]">
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
        Air conditioner...
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
