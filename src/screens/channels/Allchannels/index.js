import LayoutMobile from "../../../components/LayoutMobile";
import { BsPlusCircle } from "react-icons/bs";
import { themeColor } from "../../../constant/color";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChannelContext } from "../../../context/channelContext";
import Skimmer from "../../../components/Loader/Skimmer";
import ChannelCard from "../../../components/Channels/ChannelCard";
import { updateChannels } from "../../../redux/slice/channelSlice";
import { toast } from "react-hot-toast";

const AllChannels = () => {
  const dispatch = useDispatch();
  const { getAllChannels } = useContext(ChannelContext);
  const [limit, setlimit] = useState(0);
  const [offset, setoffset] = useState(0);
  const [loading, setloading] = useState(true);
  const { allChannels, channelCount } = useSelector((state) => state.channels);
  useEffect(() => {
    (async () => {
      try {
        let result = await getAllChannels("", 1000, 0);
        const item = result.body.map((item, index) => {
          if (item.type == "group") {
            return {
              alias: item.alias,
              channelid: item.alias,
              type: item.type,
              billingactive: false,
            };
          } else if (item.type == "single") {
            return {
              alias: item.alias,
              channelid: item.channelid,
              type: item.type,
              billingactive: item.billingactive,
            };
          }
        });
        dispatch(updateChannels(item));
        setloading(false);
      } catch (err) {
        toast.error(err.message);
      }
    })();
    return () => {};
  }, []);

  return (
    <LayoutMobile pageTitle={"Channels"}>
      <div className=""></div>
      <div className="pt-[80px] flex items-end justify-between cursor-pointer ">
        <div className="">
          <div className="font-semibold font-Kanit text-[18px]">
            All Channels.
          </div>
          <div className="text-gray-400 text-start font-normal">
            List of all the channels you have and the ones shared with you.
          </div>
        </div>
        <div
          className="hidden items-center justify-center border-[1px] border-secondary rounded-full p-1 "
          //   onClick={() => setaddmetermodal(true)}
        >
          <div className="">
            <BsPlusCircle size={20} color={themeColor.secondary} style={{}} />
          </div>
          <div className="text-secondary pl-2">Add device</div>
        </div>
      </div>
      {loading ? (
        <div className="grid grid-cols-2 gap-6 mt-4">
          {Array.from(Array(6)).map((_, i) => (
            <div className="h-[190px] bg-white drop-shadow-sm" key={i}>
              <Skimmer heigth={"100%"} />
            </div>
          ))}
        </div>
      ) : !allChannels.length ? (
        <div className=" h-[400px] mt-[50px] bg-white flex flex-col justify-center items-center">
          <div className=""></div>
          <div className="text-center font-semibold text-gray-700">
            You don't have any meter at the moment
          </div>
          <div
            className="w-[fit-content] mt-4 flex items-center justify-center border-[1px] border-secondary rounded-full p-1"
            // onClick={() => setaddmetermodal(true)}
          >
            <div className="">
              <BsPlusCircle size={20} color={themeColor.secondary} style={{}} />
            </div>
            <div className="text-secondary pl-2">Add meter</div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 mt-4">
          {allChannels.map((i, index) => (
            <ChannelCard key={index} data={i} />
          ))}
        </div>
      )}
    </LayoutMobile>
  );
};

export default AllChannels;
