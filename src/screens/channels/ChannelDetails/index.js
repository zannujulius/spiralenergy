import Layout from "../../../components/Layout";
import PowerImgBg from "../../../assets/png/18410.jpg";
import DateRangePicker from "../../../components/DateRangePicker";
import { Select } from "antd";
import { dateOptions } from "../../../constant";
import MBarCharts from "../../../components/Channels/Charts/MBarChart";
import PaymentPlanTable from "../../../components/PaymentPlan/PaymentPlanTable";
import { IoPower } from "react-icons/io5";
import CommandsTable from "../../../components/Commands/Tables/CommandsTable";
import { FaUsers, FaUsersCog } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ChannelContext } from "../../../context/channelContext";
import { errorBlock } from "../../../controllers/errorBlock";
import { useParams } from "react-router-dom";
import Skimmer from "../../../components/Loader/Skimmer";
import moment from "moment";
import NoPlanImg from "../../../assets/svg/7952173_receipt_paper_transation_check_sale_icon.svg";
import Drawer from "../../../components/Drawer";
import ModalCover from "../../../components/ModalCover";
import { VscClose } from "react-icons/vsc";
import ScheduleImg from "../../../assets/png/Screenshot 2023-03-13 at 21.05.17.png";
import CON from "../../../components/Commands/CON";
const ChannelDetails = () => {
  const { id } = useParams();
  const [startdate, setstartdate] = useState(
    moment(Date.now()).startOf("month").format("YYYY-MM-DD HH:mm:ss")
  );
  const [tabstate, settabstate] = useState(1);
  const [openshedule, setopenshedule] = useState(false);
  const [opensheduledrawer, setopensheduledrawer] = useState(false);
  const [selectedday, setselectedday] = useState("today");
  const [selectedpowerstate, setselectedpowerstate] = useState("");
  const [enddate, setenddate] = useState(
    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
  );

  const [startdateenergy, setstartdateenergy] = useState(
    moment(Date.now()).startOf("month").format("YYYY-MM-DD HH:mm:ss")
  );

  const [enddateenergy, setenddateenergy] = useState(
    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
  );

  const [energydata, setenergydata] = useState({
    max: 0,
    data: [],
  });
  const [updated, setupdated] = useState(false);
  const [commands, setcommands] = useState([]);
  const {
    getChannelInfo,
    getUsersonChannel,
    getAllPaymentPlanOnChannel,
    getCommandsByUser,
    getEnergyConsumption,
  } = useContext(ChannelContext);
  const [loading, setloading] = useState({
    channel: false,
    user: true,
    plans: true,
    commands: true,
    energy: false,
  });
  const [plans, setplans] = useState([]);
  const [channelData, setchannelData] = useState({});
  const [users, setusers] = useState({
    count: 0,
    data: [],
  });
  useEffect(() => {
    (async () => {
      try {
        setloading((prev) => {
          return {
            ...prev,
            channel: true,
          };
        });
        let res = await getChannelInfo(id);
        setchannelData(res?.body[0]);
        setloading((prev) => {
          return {
            ...prev,
            channel: false,
          };
        });
      } catch (err) {
        errorBlock(err);
        setloading((prev) => {
          return {
            ...prev,
            channel: false,
          };
        });
      }
    })();
    return () => {};
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let res = await getUsersonChannel(id);
        // setchannelData(res);
        setusers((prev) => {
          return {
            ...prev,
            count: res?.meta.count,
          };
        });
        setloading((prev) => {
          return {
            ...prev,
            user: false,
          };
        });
      } catch (err) {
        errorBlock(err);
        setloading((prev) => {
          return {
            ...prev,
            user: false,
          };
        });
      }
    })();
    return () => {};
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let res = await getAllPaymentPlanOnChannel(id);
        setplans(res?.body);
        // setusers();
        setloading((prev) => {
          return {
            ...prev,
            plans: false,
          };
        });
      } catch (err) {
        errorBlock(err);
        setloading((prev) => {
          return {
            ...prev,
            plans: false,
          };
        });
      }
    })();
    return () => {};
  }, []);
  // commands
  useEffect(() => {
    (async () => {
      try {
        let res = await getCommandsByUser(id, startdate, enddate, 0, 12);
        setcommands(res?.body);
        // setusers();
        setloading((prev) => {
          return {
            ...prev,
            commands: false,
          };
        });
      } catch (err) {
        errorBlock(err);
        setloading((prev) => {
          return {
            ...prev,
            commands: false,
          };
        });
      }
    })();
    return () => {};
  }, []);
  // energy
  useEffect(() => {
    (async () => {
      try {
        let res = await getEnergyConsumption(
          id,
          startdateenergy,
          enddateenergy
        );
        setenergydata((prev) => {
          return {
            data: res?.body,
            max: res?.meta?.totalactiveenergyln1,
          };
        });
        // setusers();
        setloading((prev) => {
          return {
            ...prev,
            energy: false,
          };
        });
      } catch (err) {
        errorBlock(err);
        setloading((prev) => {
          return {
            ...prev,
            energy: false,
          };
        });
      }
    })();
    return () => {};
  }, [updated]);

  return (
    <Layout>
      <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-8 mb-6 gap-8">
        <div className="h-[120px] p-2 bg-white rounded-md drop-shadow-md relative">
          <div className="pt-1">
            <div className="font-light text-gray-700">Name of meter</div>
            <div className="font-semibold">
              {loading.channel ? (
                <Skimmer width={"120px"} heigth={"30px"} />
              ) : (
                channelData?.devicealias
              )}
            </div>
          </div>
          <div
            onClick={() => setopenshedule(true)}
            className="font-normal hover:text-secondary text-[13px] pt-1 absolute bottom-1 left-2  text-[#7e6eda] underline cursor-pointer w-[60%]"
          >
            Schedule connection state on channel
          </div>
          <div className="flex items-center absolute bottom-[15px] right-[15px] w-[45px] h-[45px] bg-white drop-shadow-lg cursor-pointer justify-center p-2 rounded-full border-[2px] border-green-500">
            <IoPower color="green" size={23} />
          </div>
        </div>
        <div className="h-[120px] p-2 bg-white rounded-md drop-shadow-md relative">
          <div className="pt-1">
            <div className="font-light text-gray-700">Users channel</div>
            <div className="font-semibold w-[80%]">
              Total numbers of users your channel
            </div>
          </div>
          <div className="font-normal hover:text-secondary text-[13px] pt-1 absolute bottom-1 left-2  text-[#7e6eda] underline cursor-pointer w-[60%]">
            View users
          </div>
          <div className="flex items-center absolute bottom-[15px] right-[15px] w-[50px] h-[50px] bg-white drop-shadow-lg cursor-pointer justify-center p-2 rounded-full border-[2px] border-teal-400 p-2">
            <div className="font-bold text-2xl">
              {loading.user ? "" : users.count}
            </div>
          </div>
        </div>
        {/* energy */}
        <div className="h-[120px] p-2 bg-white rounded-md drop-shadow-md relative">
          <div className="pt-1">
            <div className="font-light text-gray-700">Consumption </div>
            <div className="font-semibold w-[80%]">
              Maximum energy reached {selectedday}.
            </div>
          </div>
          <div className="font-normal hover:text-secondary text-[13px] pt-1 absolute bottom-1 left-2  text-[#7e6eda] underline cursor-pointer w-[60%]">
            <Select
              defaultValue={"today"}
              placeholder="Select a date."
              onChange={(e) => {
                if (e == "today") {
                  setstartdateenergy(
                    moment(Date.now())
                      .startOf("today")
                      .format("YYYY-MM-DD HH:mm:ss")
                  );
                  setselectedday("today");
                } else if (e == "week") {
                  setstartdateenergy(
                    moment(Date.now())
                      .startOf("week")
                      .format("YYYY-MM-DD HH:mm:ss")
                  );
                  setselectedday("this week");
                } else if (e == "month") {
                  setstartdateenergy(
                    moment(Date.now())
                      .startOf("month")
                      .format("YYYY-MM-DD HH:mm:ss")
                  );
                  setselectedday("this month");
                } else if (e == "year") {
                  setstartdateenergy(
                    moment(Date.now())
                      .subtract("1", "year")
                      .format("YYYY-MM-DD HH:mm:ss")
                  );
                  setselectedday("this year");
                }
                setenddateenergy(
                  moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
                );
                setupdated((prev) => !prev);
              }}
              options={dateOptions}
              style={{
                width: 130,
              }}
            />
          </div>
          <div className="flex items-center absolute bottom-[10px] right-[15px] bg-white drop-shadow-lg cursor-pointer justify-center rounded-full border-[2px] border-orange-400 p-2">
            <div className="font-bold text-[17px]">
              {!energydata ? "0.00" : parseFloat(energydata?.max).toFixed(2)}kWh
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[80%] grid grid-cols-3 lg:grid-cols-3 gap-10">
        <div className="add-user p-2 rounded-lg drop-shadow-md bg-gradient-to-r from-sky-500 to-indigo-500 h-[90px] relative">
          <div className="absolute bottom-1 right-1 hidden">
            <FaUsers size={30} />
          </div>
          <div className="mt-1">
            <div className="font-semibold text-white ">Share Channel</div>
            <div className="text-white font-light w-[60%]">
              Channel access to your channel with a friend.
            </div>
          </div>
        </div>
        <div
          className="add-user rounded-lg drop-shadow-md h-[90px] p-2"
          style={{
            background: `url(${PowerImgBg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="mt-1">
            <div className="font-semibold text-grey-800 ">
              View Channel control
            </div>
            <div className="text-grey-800 font-light w-[90%]">
              Click the card to issue more commands on your channel.
            </div>
          </div>
        </div>
        <div className="add-user rounded-lg drop-shadow-md h-[90px] bg-gradient-to-l from-[#ebfbff] to-[#fefbff]">
          <div className="mt-1 p-2">
            <div className="font-semibold text-grey-800 ">Billing settings</div>
            <div className="text-grey-800 font-light w-[60%]">
              Update billing operation on channel
            </div>
          </div>
        </div>
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
            {!plans.length ? (
              <div className="flex flex-col h-full items-center justify-center">
                <div className="w-[60px] h-[60px] ">
                  <img src={NoPlanImg} className="w-full h-full" />
                </div>
                <div className="pt-2">
                  No payment plan available on the channel at the moment.
                </div>
              </div>
            ) : (
              <PaymentPlanTable data={plans} />
            )}
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
                onChange={(e) => {
                  if (e == "today") {
                    setstartdateenergy(
                      moment(Date.now())
                        .startOf("today")
                        .format("YYYY-MM-DD HH:mm:ss")
                    );
                  } else if (e == "week") {
                    setstartdateenergy(
                      moment(Date.now())
                        .startOf("week")
                        .format("YYYY-MM-DD HH:mm:ss")
                    );
                  } else if (e == "month") {
                    setstartdateenergy(
                      moment(Date.now())
                        .startOf("month")
                        .format("YYYY-MM-DD HH:mm:ss")
                    );
                  } else if (e == "year") {
                    setstartdateenergy(
                      moment(Date.now())
                        .subtract("1", "year")
                        .format("YYYY-MM-DD HH:mm:ss")
                    );
                  }
                  setenddateenergy(
                    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
                  );
                  setupdated((prev) => !prev);
                }}
                options={dateOptions}
                style={{
                  width: 150,
                }}
              />
            </div>
          </div>
          <div className="h-[400px]">
            <MBarCharts data={energydata?.data} />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md drop-shadow-md p-2 mt-6 mb-[100px]">
        <div className="flex items-center justify-between ">
          <div className="font-semibold">
            List of commands issues on your channels
          </div>
          <div className="hidden font-semibold text-linkcolor underline cursor-pointer">
            View all commands
          </div>
        </div>
        <div className="mx-auto w-[60%] flex items-center justify-center">
          <div
            className="w-[fit-content] font-weight px-2 py-1 mx-2 cursor-pointer "
            style={{
              color: tabstate == 1 ? "#000" : "#bbb",
              textDecoration: tabstate == 1 ? "underline" : "none",
            }}
            onClick={() => settabstate(1)}
          >
            Commands issued by you
          </div>
          <div
            className="w-[fit-content] font-weight px-2 py-1 mx-2 cursor-pointer"
            style={{
              color: tabstate == 2 ? "#000" : "#bbb",
              textDecoration: tabstate == 2 ? "underline" : "none",
            }}
            onClick={() => settabstate(2)}
          >
            Commands issued by Others
          </div>
        </div>
        <div className="">
          <CommandsTable data={commands} tabstate={tabstate} />
        </div>
      </div>

      {/* modals */}

      {/* {openshedule && ( */}
      <ModalCover open={openshedule} setopen={setopenshedule}>
        <div className="h-auto w-full py-3 px-2">
          <div className="flex items-center justify-between w-full">
            <div className="text-gray-800 font-semibold">
              Schedule powerstate
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setopenshedule(false)}
            >
              <VscClose size={21} />
            </div>
          </div>
          <div
            className="flex items-center justify-center cursor-pointer py-1"
            onClick={() => {
              setselectedpowerstate("con");
              setopenshedule(false);
              setopensheduledrawer(true);
            }}
          >
            <div className="w-[45px] h-[45px] flex items-center justify-center">
              <img src={ScheduleImg} className="w-full h-full" />
            </div>
            <div className="ml-3 py-2">
              <div className="font-semibold text-gray-800">
                Schedule connection
              </div>
              <div className="font-light text-gray-700 w-full">
                Use this option to select date when your channel will turn on.
              </div>
            </div>
          </div>
          <hr className="border-[0.3px] border-gray-300" />
          <div
            className="flex items-center justify-center cursor-pointer py-1"
            onClick={() => {
              setselectedpowerstate("dis");
              setopenshedule(false);
              setopensheduledrawer(true);
            }}
          >
            <div className="w-[45px] h-[45px] flex items-center justify-center">
              <img src={ScheduleImg} className="w-full h-full" />
            </div>
            <div className="ml-3 py-2">
              <div className="font-semibold text-gray-800">
                Schedule disconnection
              </div>
              <div className="font-light text-gray-700 w-full">
                Use this option to select date when your channel should turn
                off.
              </div>
            </div>
          </div>
        </div>
      </ModalCover>
      {/* )} */}
      {/* Drawer */}
      <Drawer
        open={opensheduledrawer}
        setopen={setopensheduledrawer}
        title={
          selectedpowerstate == "con"
            ? "Schedule a connection time"
            : "Schedule a disconnection time"
        }
        caption={
          selectedpowerstate == "con"
            ? "Fill in the field to set a connection time on your channel"
            : "Fill in the field to set a disconnection time on your channel"
        }
      >
        <CON />
      </Drawer>
    </Layout>
  );
};

export default ChannelDetails;
