import { TimePicker } from "antd";
import axios from "../../../utils/axios";
import moment from "moment";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Button } from "../../Button";
import ConnectionSatate from "../ConnectionState";
import DaysSelector from "../DaysSelector";
import { useParams } from "react-router-dom";
import { commandController } from "../../../controllers/CommandController";
import { getToken } from "../../../utils/token";
const CON = ({}) => {
  const { id } = useParams();
  const [step, setstep] = useState(1);
  const [selectedDays, setSelectedDays] = useState([]);
  const [frequency, setFrequency] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      if (!startTime) return toast.error("Please select a start time");
      if (!endTime) return toast.error("Please select an end time");

      if (!selectedDays.length)
        return toast.error("Please select atleast one day");
      if (!selectedDays.length)
        return toast.error("Please select a frequency.");

      setLoading(true);
      let user = await getToken("spiral_username");
      let request = await axios.post("/commands/scheduledconnect", {
        meterid: id,
        daybinaries: selectedDays.join(""),
        starttime: moment(startTime._d).format("HH:mm").replaceAll(":", ""),
        endtime: moment(endTime._d).format("HH:mm").replaceAll(":", ""),
        onetimeaction: frequency,
        transactiontopic: `mqtt_${user}`,
      });

      const result = commandController(request);
      if (result.type !== "success") {
        toast[result.type](`${result.message}`);
        setLoading(false);
        return;
      }
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
      return;
    }
  };
  return (
    <div className="w-full relative h-[85vh]">
      <div className="items-center justify-start pt-3  grid-cols-4 hidden">
        <div className="flex items-center justify-start">
          <BsFillCheckCircleFill color={"#bbb"} size={23} />
          <div className="w-full h-[2px] bg-gray-700"></div>
        </div>
        <div className="flex items-center justify-start">
          <BsFillCheckCircleFill color={"#bbb"} size={23} />
          <div className="w-full h-[2px] bg-gray-700"></div>
        </div>
        <div className="flex items-center justify-start">
          <BsFillCheckCircleFill color={"#bbb"} size={23} />
          <div className="w-full h-[2px] bg-gray-700"></div>
        </div>
        <div className="flex items-center justify-start">
          <BsFillCheckCircleFill color={"#bbb"} size={23} />
          <div className="w-full h-[2px] bg-gray-700"></div>
        </div>
      </div>
      <div className="border-[1px] border-[#eee] rounded-lg h-screen p-3">
        {/* step */}
        {step == 1 && (
          <div className="">
            <div className="">
              <div className="font-Kanit font-semibold text-gray-800 text-[17px]">
                Start time.
                <br />
                What time of the day would you like to start?.
              </div>
            </div>
            <div className="w-full rounded-md overflow-hidden drop-shadow-md mt-2">
              <TimePicker
                className=""
                style={{
                  height: 45,
                  width: "100%",
                }}
                value={startTime}
                format={"HH:mm"}
                onChange={(e) => {
                  setStartTime(e);
                }}
              />
            </div>
          </div>
        )}
        {step == 2 && (
          <div className="">
            <div className="">
              <div className="font-Kanit font-semibold text-gray-800 text-[17px]">
                End time.
                <br />
                What time should it stop?
              </div>
            </div>
            <div className="w-full rounded-md overflow-hidden drop-shadow-md mt-2">
              <TimePicker
                className=""
                style={{
                  height: 45,
                  width: "100%",
                }}
                value={endTime}
                format={"HH:mm"}
                onChange={(e) => {
                  setEndTime(e);
                }}
              />
            </div>
          </div>
        )}
        {step == 3 && (
          <div className="">
            <div className="">
              <div className="font-Kanit font-semibold text-gray-800 text-[17px]">
                Weekend days
                <br />
                What days of the week should this happen?
              </div>
            </div>
            <div className="w-full flex item-center justify-center flex-wrap rounded-md overflow-hidden drop-shadow-md mt-3">
              <DaysSelector setFd={setSelectedDays} fd={selectedDays} />
            </div>
          </div>
        )}

        {step == 4 && (
          <div className="">
            <div className="">
              <div className="font-Kanit font-semibold text-gray-800 text-[17px]">
                Frequency
                <br />
                How often should this occurs
              </div>
            </div>
            <div className="w-full flex item-center justify-center flex-wrap rounded-md overflow-hidden drop-shadow-md mt-3">
              <ConnectionSatate
                leftContent={"Repeat everyweek"}
                rightContent={"One time"}
                setFS={setFrequency}
              />
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-2 grid grid-cols-2 gap-8 w-full">
        {step !== 1 && (
          <div
            className="border-[1px] text-center border-gray-600 drop-shadow-md px-6 rounded-md py-2 mx-2 bg-white cursor-pointer"
            onClick={() => {
              if (step == 1) return null;
              setstep((prev) => prev - 1);
            }}
          >
            Prev
          </div>
        )}
        {step !== 4 ? (
          <div
            className="drop-shadow-md text-center px-6 rounded-md py-2 mx-2 bg-gray-900 text-white cursor-pointer"
            onClick={() => setstep((prev) => prev + 1)}
          >
            Next
          </div>
        ) : (
          <div className="">
            <Button text={"Save"} onClick={handleSubmit} loading={loading} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CON;
