import LayoutMobile from "../../../components/LayoutMobile";
import { HiViewGrid } from "react-icons/hi";
import { AiFillNotification } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsPlusCircle } from "react-icons/bs";
import { themeColor } from "../../../constant/color";
import { useState, useEffect } from "react";
import MLeftModal from "../../../components/MobileComponents/Modals/MLeftModal/index.js";
import { Button } from "../../../components/Button";
import MAddMeter from "../../../components/MobileComponents/User/MModals/MAddMeter";
import axios from "../../../utils/axios";
import { errorBlock } from "../../../controllers/errorBlock";
import { channelController } from "../../../controllers/channelController";
import { toast } from "react-hot-toast";
import { IoFlash } from "react-icons/io5";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllChannels } from "../../../redux/slice/channelSlice";
import ChannelCard from "../../../components/Channels/ChannelCard";
import Skimmer from "../../../components/Loader/Skimmer";
// import MLeftModal from "../../../components/MobileComponents/Modals/MleftModal";
const MUserDashboard = () => {
  // meter
  const { allChannels } = useSelector((state) => state.channels);
  const Option = Select;
  const [addmetermodal, setaddmetermodal] = useState(false);
  const [refreshbtn, setrefreshbtn] = useState(false);
  const dataOption = ["Today", "Week", "Month"];
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.post("/submeter/getallchannels", {
          groupprefix: "",
          limit: 5,
          offset: 0,
        });
        const result = channelController(res);

        if (result.type !== "success") {
          toast.error(result.message);
          setloading({ dataLoading: false });
          return;
        }
        const item = result.message.body.map((item, index) => {
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
        dispatch(getAllChannels(item));
        setloading(false);
      } catch (err) {
        errorBlock(err);
        console.log(err.message);
      }
    })();
  }, []);

  console.log(allChannels, "//all channels");
  return (
    <>
      {addmetermodal && (
        <MAddMeter refreshBtn={setrefreshbtn} closeBtn={setaddmetermodal} />
      )}
      <LayoutMobile pageTitle={"Dashboard"} className="">
        {/* Top Nav */}
        <div className="hidden items-center justify-between w-full sticky top-0 z-20">
          <div className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
            <HiViewGrid size={30} />
          </div>
          <div className="font-Kanit font-semibold text-[17px] text-gray-800 pl-4">
            Home
          </div>
          <div className="flex items-center justify-end">
            <div className="flex items-center justify-center p-2 rounded-full relative">
              <div className="absolute rounded-full w-[20px] h-[20px] bg-secondary flex items-center justify-center top-0 right-0">
                <div className="text-white font-light text-[14px]">2</div>{" "}
              </div>
              <IoNotificationsSharp size={25} />
            </div>
            <div
              className="w-[45px] h-[45px] bg-gray-50 rounded-md ml-4"
              style={{
                background: `url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>

        {/*Info */}
        <div className="pt-[80px] flex items-end justify-between cursor-pointer ">
          <div className="">
            <div className="font-normal text-gray-400">Welcome back </div>
            <div className="font-Kanit font-semibold text-start text-[18px] pt-[1px]">
              Jane Mary
            </div>
          </div>
          <div
            className="flex items-center justify-center border-[1px] border-secondary rounded-full p-1"
            onClick={() => setaddmetermodal(true)}
          >
            <div className="">
              <BsPlusCircle size={20} color={themeColor.secondary} style={{}} />
            </div>
            <div className="text-secondary pl-2">Add device</div>
          </div>
        </div>
        {/* dasbhoard */}
        <div className="w-full mt-6 rounded-lg h-[150px] drop-shadow-xl bg-gradient-to-r from-sky-500 to-indigo-500 p-3">
          <div className="">
            <div className="">
              <div className="text-white font-bold font-Kanit text-4xl">12</div>
              <div className="text-gray-100 pt-1">
                You have <span className="">10 active</span> and 11 inactive
                channels
              </div>
            </div>
            <div className="mt-2 flex items-end justify-between">
              <div className="flex items-center">
                <div className=" bg-[#f3b33e] drop-shadow-xl rounded-full p-2 mr-2">
                  <IoFlash color={"white"} size={25} />
                </div>
                <div className="">
                  <div className="text-white font-semibold">34KWh</div>
                  <div className="text-gray-100">Energy usages this month</div>
                </div>
              </div>
              <div className="w-[100px] mt-2">
                <Select
                  className="w-full h-[40px]"
                  defaultValue={"month"}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {dataOption.map((i) => (
                    <Option value={i} key={i}>
                      {i}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Groups */}
        <div className=""></div>
        {/* channels */}
        <div className="">
          <div className="flex items-center justify-between mt-6">
            <div className="font-Kanit font-semibold ">My Channels</div>
            <div className="underline text-secondary font-light">View all</div>
          </div>

          {/* if we have channels */}
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
                onClick={() => setaddmetermodal(true)}
              >
                <div className="">
                  <BsPlusCircle
                    size={20}
                    color={themeColor.secondary}
                    style={{}}
                  />
                </div>
                <div className="text-secondary pl-2">Add device</div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 mt-4">
              {allChannels.map((i, index) => (
                <ChannelCard key={index} data={i} />
              ))}
            </div>
          )}
        </div>
        <div className="pb-[200px]"></div>
      </LayoutMobile>
    </>
  );
};

export default MUserDashboard;
