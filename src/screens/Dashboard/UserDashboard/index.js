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
  const { getAllChannels } = useContext(ChannelContext);
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
          <div className="bg-white drop-shadow-md p-2">
            <div className="flex items-center justify-between px-2">
              <div className="font-semibold text-primary">Your Channels</div>
              <div className="flex items-center justify-center cursor-pointer  ">
                <div className="flex items-center justify-center">
                  <IoAddCircleOutline className="text-secondary" />
                </div>
                <div
                  className="text-secondary pl-1"
                  onClick={() => setmetermodal(true)}
                >
                  Add Meter
                </div>
              </div>
            </div>
            <div className="mt-4 max-w-full">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 px-2 py-2">
                {data.map((i) => (
                  <ChannelCard key={i?.alias} data={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UserDashboard;
