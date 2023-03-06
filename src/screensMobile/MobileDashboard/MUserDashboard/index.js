import LayoutMobile from "../../../components/LayoutMobile";
import { HiViewGrid } from "react-icons/hi";
import { AiFillNotification } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsPlusCircle } from "react-icons/bs";
import { themeColor } from "../../../constant/color";
import { useState } from "react";
import MLeftModal from "../../../components/MobileComponents/Modals/MLeftModal/index.js";
import { Button } from "../../../components/Button";
import MAddMeter from "../../../components/MobileComponents/User/MModals/MAddMeter";
import axios from "../../../utils/axios";
import { errorBlock } from "../../../controllers/errorBlock";
import { channelController } from "../../../controllers/channelController";
import { toast } from "react-hot-toast";
// import MLeftModal from "../../../components/MobileComponents/Modals/MleftModal";
const MUserDashboard = () => {
  // meter
  const [addmetermodal, setaddmetermodal] = useState(false);
  const [refreshbtn, setrefreshbtn] = useState(false);

  return (
    <>
      {addmetermodal && (
        <MAddMeter refreshBtn={setrefreshbtn} closeBtn={setaddmetermodal} />
      )}
      <LayoutMobile className="">
        {/* Top Nav */}
        <div className="flex items-center justify-between w-full sticky top-0 z-20  ">
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
        <div className="mt-6 flex items-end justify-between cursor-pointer ">
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
        <div className="w-full mt-6 rounded-md h-[170px] drop-shadow-lg bg-secondary">
          <div className=""></div>
        </div>
      </LayoutMobile>
    </>
  );
};

export default MUserDashboard;
