import Layout from "../../../components/Layout";
import { HiRectangleGroup } from "react-icons/hi2";
import { themeColor } from "../../../constant/color";
import { Switch } from "antd";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import AddToGroup from "../../../components/Channels/Groups/AddToGroup";
import { useContext, useEffect, useState } from "react";
import ChannelCard from "../../../components/Channels/ChannelCard";
import AddMeter from "../../../components/Meter/AddMeter";
import MUserDashboard from "../../../screensMobile/MobileDashboard/MUserDashboard";
import { ChannelContext } from "../../../context/channelContext";
import { errorBlock } from "../../../controllers/errorBlock";
import { useDispatch, useSelector } from "react-redux";
import { updateChannels } from "../../../redux/slice/channelSlice";
import axios from "../../../utils/axios";
import ChannelPill from "../../../components/Channels/ChannelPill";
import ChannelMoreBtn from "../../../components/Channels/ChannelMoreBtn";
import { channelController } from "../../../controllers/channelController";
import { toast } from "react-hot-toast";
import Skimmer from "../../../components/Loader/Skimmer";
import { BsPlusCircle } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ChannelImg from "../../../assets/png/channelimg.png";
const UserDashboard = () => {
  const [modal, setmodal] = useState({
    group: false,
  });
  const dispatch = useDispatch();
  const [metermodal, setmetermodal] = useState(false);
  const [groupmodal, setgroupmodal] = useState(false);
  const [loading, setloading] = useState(false);
  const [limit, setlimit] = useState(12);
  const [data, setdata] = useState([]);
  const [offset, setoffset] = useState(0);
  const [groupprefix, setgroupprefix] = useState("");
  const { getdata } = useContext(ChannelContext);
  const channels = useSelector((state) => state.channels);
  useEffect(() => {
    (async () => {
      try {
        let res = await axios.post("/submeter/getallchannels", {
          groupprefix,
          limit,
          offset,
        });

        const result = channelController(res);

        if (result.type !== "success") {
          toast.error(result.message);
          setloading(false);
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
        setdata(item);
      } catch (err) {
        errorBlock(err);
      }
    })();
    return () => {};
  }, []);

  return (
    <>
      <div className="">
        <MUserDashboard />
      </div>
      <Layout>
        {groupmodal && <AddToGroup closeBtn={setgroupmodal} />}
        {metermodal && <AddMeter closeBtn={setmetermodal} />}
        <div className="pb-[200px]">
          <div className="flex flex-wrap items-center justify-between mt-4">
            <div className="">
              <div className="text-primary font-semibold text-[17px]  ">
                <span className="text-3xl ">⛅</span> Welcome James
              </div>
              <div className="pl-9">
                Overview of all your utilities you manage.
              </div>
            </div>
            <Link to="/userroles" className="lg:w-[190px] w-[100%] my-4 block">
              <Button text={"Manage account"} />
            </Link>
          </div>
          <div className=" mt-8 hidden">
            <div className="flex items-center justify-between px-2">
              <div className="font-semibold text-primary">Grouped Channels</div>
              <div
                className="flex items-center justify-center cursor-pointer "
                onClick={() => setgroupmodal(true)}
              >
                <div className="flex items-center justify-center">
                  <IoAddCircleOutline className="text-secondary" />
                </div>
                <div className="text-secondary pl-1">New group</div>
              </div>
            </div>
            <div className="mt-4 max-w-full overflow-x-scroll overflow-y-hidden w-[100%]">
              <div className="flex items-start overflow-x-scroll overflow-y-hidden w-[1500px]">
                {Array.from(Array(7)).map((_, i) => (
                  <ChannelPill key={i} />
                ))}
                <ChannelMoreBtn />
              </div>
            </div>
          </div>
          <hr className="my-6" />

          <div className="h-[100vh] bg-white drop-shadow-md rounded-md mb-[60px]">
            <div className="flex items-start justify-between px-3">
              <div className="px-3 py-2">
                <div className="font-semibold text-gray-800">
                  Recently added devices.
                </div>
                <div className="text-gray-400 text-start font-normal">
                  List of all the channels you have and the ones shared with
                  you.
                </div>
              </div>
              <div
                className="w-[fit-content] mt-4 flex items-center cursor-pointer justify-center border-[1px] border-secondary rounded-full p-1"
                // onClick={() => setaddmetermodal(true)}
              >
                <div className="">
                  <BsPlusCircle
                    size={20}
                    color={themeColor.secondary}
                    style={{}}
                  />
                </div>
                <div
                  className="text-secondary pl-2"
                  onClick={() => setmetermodal(true)}
                >
                  Add meter
                </div>
              </div>
            </div>

            <hr className="border-[0.5px] border-gray-200" />
            {loading ? (
              <div className=" p-2 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8 mt-4">
                {Array.from(Array(15)).map((_, i) => (
                  <div className="h-[190px] drop-shadow-sm" key={i}>
                    <Skimmer heigth={"100%"} />
                  </div>
                ))}
              </div>
            ) : !data.length ? (
              <div className="mt-[50px] flex flex-col justify-center items-center px-10">
                <div className="border-[0.5px] border-gray-500 rounded-md h-[500px] p-10 flex flex-col justify-center items-center w-full">
                  <div className="h-[100px] w-[100px]">
                    <img src={ChannelImg} className="w-full h-full " />
                  </div>
                  <div className="text-center font-semibold text-gray-700">
                    You haven't add any device at the moment
                  </div>
                  <div
                    className="w-[fit-content] cursor-pointer mt-4 flex items-center justify-center border-[1px] border-secondary rounded-full p-1"
                    // onClick={() => setaddmetermodal(true)}
                  >
                    <div className="">
                      <BsPlusCircle
                        size={20}
                        color={themeColor.secondary}
                        style={{}}
                      />
                    </div>
                    <div
                      className="text-secondary pl-2"
                      onClick={() => setmetermodal(true)}
                    >
                      Add meter
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4  p-3">
                <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8 ">
                  {data.map((i, index) => (
                    <ChannelCard key={index} data={i} />
                  ))}
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="">Showing 0 of {data?.length} channels</div>
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
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UserDashboard;
