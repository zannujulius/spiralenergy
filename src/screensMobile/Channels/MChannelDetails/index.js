import LayoutMobile from "../../../components/LayoutMobile";
import { IoPower } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaSlideshare } from "react-icons/fa";
import { MdBarChart, MdOutlineSettingsSuggest } from "react-icons/md";
import PowerImgBg from "../../../assets/png/18410.jpg";
import ScheduleImg from "../../../assets/png/72139_escan_calender_logo_android_1281white0_icon.png";
import "./style.css";
import { Select } from "antd";
import MBarCharts from "../../../components/Channels/Charts/MBarChart";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import BillingImg from "../../../assets/svg/7738911_bill_invoice_receipt_payment_finance_icon.svg";
import { RiBillFill, RiBillLine } from "react-icons/ri";
const MChannelDetails = () => {
  const ActionCard = ({ title, caption, img }) => {
    return (
      <div className="bg-white cursor-pointer flex py-2 items-center justify-center flex-col drop-shadow-sm rounded-md border-[1px] border-[#f5f3ff]">
        <div className="h-[80px] flex items-center justify-center">
          {img == "buy" ? (
            <GiTakeMyMoney size={35} color={"#6b48ff"} />
          ) : img == "share" ? (
            <FaSlideshare size={35} color={"orange"} />
          ) : (
            <MdOutlineSettingsSuggest size={35} color={"#1f2937"} />
          )}
        </div>
        <div className="text-gray-700">{title}</div>
      </div>
    );
  };
  return (
    <LayoutMobile pageTitle={"Channel Dashboard"}>
      <div className="pt-[70px] pb-3 flex items-end justify-between bg-white p-1 rounded-lg">
        <div className="">
          <div className="text-gray-400 font-light text-[15px]">
            Channel Name
          </div>
          <div className="font-semibold text-gray-700 text-[17px]">
            Air conditioner{" "}
          </div>
        </div>
        <div className="">
          <div className="flex items-center bg-white drop-shadow-lg cursor-pointer justify-center p-2 rounded-full border-[2px] border-green-500">
            <IoPower color="green" size={23} />
          </div>
        </div>
      </div>

      <div
        className="rounded-lg p-2 flex items-center justify-between drop-shadow-md powerstate-card h-[100px] mt-6"
        style={{
          background: `url(${PowerImgBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="">
          <div className="w-[30px] h-[30px] flex items-center justify-center">
            <img src={ScheduleImg} className="" alt="" />
          </div>
          <div className="font-semibold pt-2 w-[80%]">
            Schedule connection/disconnection time on your channel
          </div>
        </div>
        <div className="border-[1px] border-secondary cursor-pointer text-secondary rounded-full px-4 py-1">
          Start
        </div>
      </div>
      <div className="mt-6">
        <div className="font-semibold">Quick actions</div>
        <div className="grid grid-cols-3 gap-5 mt-3">
          <ActionCard title={"Buy power"} img={"buy"} />
          <ActionCard title={"Share Channel"} img={"share"} />
          <ActionCard title={"View Control"} />
        </div>
      </div>

      <div className="bg-gradient-to-r flex items-center justify-between from-sky-500 to-indigo-500 rounded-lg h-[120px] drop-shadow-lg p-2 mt-6">
        <div className="mt-1">
          <div className="">
            <RiBillLine color="white" size={25} />
          </div>
          <div className="text-white font-semibold mt-2">Billing Operation</div>
          <div className="text-white pt-1">
            Update billing information on channel
          </div>
        </div>
        <div className="">
          <div className="border-[1px] border-white text-white rounded-full px-4 py-1">
            Update bill
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg drop-shadow-md bg-white  p-2">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Consumption Summary</div>
          <div className="w-[150px] mt-2">
            <Select
              style={{
                width: "100%",
              }}
              defaultValue={"today"}
              options={[
                { value: "today", label: "Today" },
                { value: "week", label: "This Week" },
                { value: "month", label: "This month" },
              ]}
            />
          </div>
        </div>
        <div className="">
          <MBarCharts />
        </div>
        <div className="w-full mt-3">
          <Link className="italic flex items-center justify-end underline text-secondary font-light text-end">
            View advanced chart
            <div className="">
              <AiOutlineArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </LayoutMobile>
  );
};

export default MChannelDetails;
