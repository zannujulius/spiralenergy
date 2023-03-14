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
import Layout from "../../../components/Layout";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import BackBtn from "../../../components/BackBtn";

const AllChannels = () => {
  const dispatch = useDispatch();
  const { getAllChannels } = useContext(ChannelContext);
  const [limit, setlimit] = useState(12);
  const [offset, setoffset] = useState(0);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const { allChannels, channelCount } = useSelector((state) => state.channels);
  
  useEffect(() => {
    (async () => {
      try {
        let result = await getAllChannels("", limit, offset);
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
    <Layout pageTitle={"Channels"}>
      <div className="pt-[10px] cursor-pointer ">
        <div className="">
          <BackBtn text={"Go back"} />
        </div>
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
        <div className="h-[90vh] bg-white p-2 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8 mt-4">
          {Array.from(Array(12)).map((_, i) => (
            <div className="h-[190px] bg-white drop-shadow-sm" key={i}>
              <Skimmer heigth={"100%"} />
            </div>
          ))}
        </div>
      ) : !allChannels.length ? (
        <div className=" h-[90vh] mt-[50px] bg-white flex flex-col justify-center items-center">
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
        <div className="mt-4 h-[90vh] bg-white p-3 drop-shadow-md rounded-lg mb-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8 ">
            {allChannels.map((i, index) => (
              <ChannelCard key={index} data={i} />
            ))}
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="">Showing 0 of {allChannels?.length} channels</div>
            <div className="flex items-center justify-end">
              <div className="flex items-center justify-center border rounded-md p-2 cursor-pointer mx-2 ">
                <IoIosArrowBack />
              </div>
              <div className="flex items-center justify-center border rounded-md p-2 cursor-pointer mx-2">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AllChannels;
