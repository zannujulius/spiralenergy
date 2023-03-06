import React from "react";
import Layout from "../../../components/Layout";
import { IoIosArrowForward } from "react-icons/io";
import DateRangePicker from "../../../components/DateRangePicker";
import RevenueChart from "../../../components/Dashboards/SystemAdmin/Chart/RevenueChart";
import PowerQualityChart from "../../../components/Dashboards/SystemAdmin/Chart/PowerQualityChart";

import { useAsync } from "../../../utils/Hooks/useAsync";
import { client } from "../../../utils/api";

const SysAdminDashboard = () => {
  const { data, run } = useAsync({ data: [], status: "pending" });

  React.useEffect(() => {
    run(client(`roles/getallroles`, { data: {}, method: "POST" }));
  }, [run]);

  const RoleCard = ({ role, site }) => {
    return (
      <div className="flex items-center justify-between my-2 even:bg-gray-50 p-1 cursor-pointer rounded-sm">
        <div className="flex items-center">
          <div className="rounded-full bg-gray-700 text-white font-light p-3">
            JM
          </div>
          <div className="ml-3">
            <div className="">James Mark</div>
            <div className="text-gray-400 font-light">
              {role}:{" "}
              <span className="font-semibold text-gray-800">{site}</span>
            </div>
          </div>
        </div>
        <div>
          <IoIosArrowForward size={19} />
        </div>
      </div>
    );
  };

  const MeterTopCard = ({ title, caption, value, bg }) => {
    return (
      <div className="flex my-2 items-center rounded justify-between p-4 border-[1px] border-red-200 bg-red-50">
        <div className="w-[70%]">
          <div className="font-semibold pb-1">{title}</div>
          <div className="font-light">{caption}</div>
        </div>
        <div className="font-bold w-[30%] text-2xl text-end">{value}</div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="mb-40">
        <div className="mt-8 my-4 font-semibold">General Site Analytics</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Project */}
          <div className="bg-white rounded drop-shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold ">Project Managers</div>
              <div className="text-secondary underline">View all </div>
            </div>
            <div className="">
              {Array.from(Array(4)).map((_, i) => (
                <RoleCard key={i} role={"Project Manager"} site={"Ikeja"} />
              ))}
            </div>
          </div>
          {/* Sales */}
          <div className="bg-white rounded drop-shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold ">Sales Managers</div>
              <div className="text-secondary underline ">View all </div>
            </div>
            <div className="">
              {Array.from(Array(4)).map((_, i) => (
                <RoleCard key={i} role={"Sales Agent"} site={"Abuja"} />
              ))}
            </div>
          </div>
          {/* Sales */}
          <div className="bg-white rounded drop-shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold ">Customer Managers</div>
              <div className="text-secondary underline">View all </div>
            </div>
            <div className="">
              {Array.from(Array(4)).map((_, i) => (
                <RoleCard key={i} role={"Customer Managers"} site={"Abuja"} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="col-span-1">
            <div className="h-[400px] bg-white rounded drop-shadow-md p-4">
              <div className="">
                <div className="font-semibold">Meters </div>
                <div className="text-gray-500 font-light">
                  Meters Analytics from all project zones
                </div>
              </div>
              <div>
                <MeterTopCard
                  title={"Active meters"}
                  caption={"Total number of meter in service"}
                  value={"736"}
                />
                <MeterTopCard
                  title={"Decommissioned meters"}
                  caption={
                    "Total number of meters that has been stop from being used "
                  }
                  value={"239"}
                />
                <MeterTopCard
                  title={"Unregistered meters"}
                  caption={
                    "Total number of meters that are have not being assigned."
                  }
                  value={"398"}
                />
              </div>
            </div>

            <div className=""></div>
          </div>
          <div className="col-span-2">
            <div className="h-[400px] bg-white rounded drop-shadow-md p-4">
              <div className="flex items-center justify-between">
                <div className="">
                  <div className="font-semibold">Revenue</div>
                  <div className="text-gray-500 font-light">
                    Revenue generated from all project site.{" "}
                  </div>
                </div>
                <div className="">
                  <div className="italic font-light text-sm text-end">
                    Select a date range
                  </div>
                  <div className="">
                    <DateRangePicker />
                  </div>
                </div>
              </div>
              <div className="h-[300px]">
                <RevenueChart />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded drop-shadow-md mt-6 ">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="font-semibold">Power quality data</div>
              <div className="text-gray-500 font-light">
                Power quality data from active meter from project site .{" "}
              </div>
            </div>
            <div className="">
              <div className="italic font-light text-sm text-end">
                Select a date range
              </div>
              <div className="">
                <DateRangePicker />
              </div>
            </div>
          </div>
          <div className="h-[400px]">
            <PowerQualityChart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SysAdminDashboard;
