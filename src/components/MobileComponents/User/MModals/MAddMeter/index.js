import axios from "../../../../../utils/axios";
import { useEffect, useState } from "react";
import { channelController } from "../../../../../controllers/channelController";
import { Button } from "../../../../Button";
import MLeftModal from "../../../Modals/MLeftModal";
import { toast } from "react-hot-toast";
import { getToken } from "../../../../../utils/token";
import { errorBlock } from "../../../../../controllers/errorBlock";
import { Select } from "antd";

const MAddMeter = ({ refreshBtn, closeBtn }) => {
  const Option = Select;
  const [metername, setmetername] = useState("");
  const [meterid, setmeterid] = useState("");
  const [metertype, setmetertype] = useState("");
  const [loading, setloading] = useState(false);
  const meterType = ["Submeter", "Meter", "Panel"];

  const handleAddDevice = async () => {
    try {
      setloading(true);
      if (!(metername && meterid)) {
        setloading(false);
        toast.error("All values are required");
        return;
      }
      let user = await getToken("spiral_username");
      let res = await axios.post("/submeter/adddevice", {
        deviceid: meterid,
        alias: metername,
        username: user,
      });

      let result = channelController(res);
      if (result.type !== "success") {
        toast.error(result.message);
        setloading(false);
        return;
      }
      toast[result.type](result.message);
      //   refreshbtn((prev) => !prev);

      setloading(false);
    } catch (err) {
      errorBlock(err);
      toast.error(err.message);
      setloading(false);
      return;
    }
  };

  return (
    <MLeftModal
      closeBtn={closeBtn}
      title={"Add a meter"}
      caption={"Fill the fields to add a meter"}
    >
      <div className="mt-4">
        <label className="text-primary font-normal text-sm">Meter name</label>
        <div className="flex bg-white items-center w-100 border-[1px] rounded-md border-gray-300 mt-2 h-[50px] w-full">
          <div className="ml-2 w-full">
            <input
              required
              value={metername}
              onChange={(e) => setmetername(e.target.value)}
              type={"email"}
              placeholder={"Enter your desire name for your meter"}
              className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label className="text-primary font-normal text-sm">Meter id</label>
        <div className="flex bg-white items-center w-100 border-[1px] rounded-md border-gray-300 mt-2 h-[50px] w-full">
          <div className="ml-2 w-full">
            <input
              required
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength="12"
              value={meterid}
              onChange={(e) => setmeterid(e.target.value)}
              type={"email"}
              placeholder={"Enter your meter id"}
              className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px] w-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full bottom-[200px] absolute">
        <Button text={"Create"} loading={loading} onClick={handleAddDevice} />
      </div>
    </MLeftModal>
  );
};

export default MAddMeter;
