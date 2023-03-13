import Layout from "../../../components/Layout";
import PowerImgBg from "../../../assets/png/18410.jpg";
import DateRangePicker from "../../../components/DateRangePicker";
import { Select } from "antd";
import { dateOptions } from "../../../constant";
import MBarCharts from "../../../components/Channels/Charts/MBarChart";
import PaymentPlanTable from "../../../components/PaymentPlan/PaymentPlanTable";
import { IoPower } from "react-icons/io5";

const ChannelDetails = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-8 mb-6 gap-8">
        <div className="h-[120px] p-2 bg-white rounded-md drop-shadow-md relative">
          <div className="pt-1">
            <div className="font-light text-gray-700">Name of channel</div>
            <div className="font-semibold">Channel test</div>
          </div>
          <div className="font-normal hover:text-secondary text-[13px] pt-1 absolute bottom-1 left-2  text-[#7e6eda] underline cursor-pointer w-[60%]">
            Schedule connection state on channel
          </div>
          <div className="flex items-center absolute bottom-[20px] right-[15px] w-[45px] h-[45px] bg-white drop-shadow-lg cursor-pointer justify-center p-2 rounded-full border-[2px] border-green-500">
            <IoPower color="green" size={23} />
          </div>
        </div>
        <div className="h-[120px] p-2 bg-white rounded-md drop-shadow-md relative">
          <div className="pt-1">
            <div className="font-light text-gray-700">Name of channel</div>
            <div className="font-semibold">Channel test</div>
          </div>
          <div className="font-normal hover:text-secondary text-[13px] pt-1 absolute bottom-1 left-2  text-[#7e6eda] underline cursor-pointer w-[60%]">
            Schedule connection state on channel
          </div>
          <div className="flex items-center absolute bottom-[20px] right-[15px] w-[45px] h-[45px] bg-white drop-shadow-lg cursor-pointer justify-center p-2 rounded-full border-[2px] border-green-500">
            <IoPower color="green" size={23} />
          </div>
        </div>
      </div>
      <div className="mx-auto w-[80%] border grid grid-cols-3 lg:grid-cols-3 gap-10">
        <div className="add-user rounded-lg drop-shadow-md bg-gradient-to-r from-sky-500 to-indigo-500 h-[90px]">
          <div className="">
            <div className="font-semibold text-white ">Share Channel</div>
            <div className="">
              Channel access to your channel with a friend.
            </div>
          </div>
        </div>
        <div
          className="add-user rounded-lg drop-shadow-md h-[90px]"
          style={{
            background: `url(${PowerImgBg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="add-user rounded-lg drop-shadow-md h-[90px] bg-gradient-to-l from-[#ebfbff] to-[#fefbff]"></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-md p-2 drop-shadow">
          <div className="flex items-center justify-between">
            <div className="font-semibold">Availalbe Plans on channels</div>
            <div className=" text-secondary font-normal underline">
              View all
            </div>
          </div>
          <div className="h-[400px]">
            <PaymentPlanTable />
          </div>
        </div>
        <div className="bg-white rounded-md p-2 drop-shadow">
          <div className="flex items-start justify-between">
            <div className="">
              <div className="font-semibold">Energy consumption on channel</div>
              <div className="italic hover:text-secondary underline cursor-pointer text-[#7e6eda] font-light text-[15px] p-1">
                View realtime consumption
              </div>
            </div>
            <div className="">
              <Select
                defaultValue={"today"}
                placeholder="Select a date."
                options={dateOptions}
                style={{
                  width: 150,
                }}
              />
            </div>
          </div>
          <div className="h-[400px]">
            <MBarCharts />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChannelDetails;
