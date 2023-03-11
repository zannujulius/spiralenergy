import React, { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import { IoIosArrowForward } from "react-icons/io";
import DateRangePicker from "../../../components/DateRangePicker";
import RevenueChart from "../../../components/Dashboards/SystemAdmin/Chart/RevenueChart";
import PowerQualityChart from "../../../components/Dashboards/SystemAdmin/Chart/PowerQualityChart";

import { useAsync } from "../../../utils/Hooks/useAsync";
import { client } from "../../../utils/api";
import { getInitials } from "../../../utils/helpers";
import moment from "moment";
import ListLoader from "../../../components/ListLoader";

const SysAdminDashboard = () => {
  const {
    data: allRoles,
    run: getRoles,
    status: allRolesStatus,
  } = useAsync({
    data: [],
    status: "pending",
  });

  const {
    data: metersInService,
    run: getMetersInService,
    status: metersInServiceStatus,
  } = useAsync({
    data: [],
    status: "pending",
  });

  const {
    data: regsiteredMeters,
    run: getRegisteredMeters,
    status: regsiteredMetersStatus,
  } = useAsync({
    data: [],
    status: "pending",
  });

  const {
    data: salesHistory,
    run: getSalesHistory,
    status: salesHistoryStatus,
  } = useAsync({
    data: [],
    status: "pending",
  });

  const [revenueStartDate, setRevenueStartDate] = useState(
    moment(Date.now()).subtract("1", "week").format("YYYY-MM-DD HH:mm:ss")
  );
  const [revenueEndDate, setRevenueEndDate] = useState(
    moment(Date.now()).format("YYYY-MM-DD H:mm:ss")
  );

  // const [revenueRefresh, setRevenueRefresh] = useState(false);
  // const [paymentHistory, setPaymetHistory] = useState([]);
  // const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getRoles(
      client(`roles/getallroles`, {
        data: {},
        method: "POST",
      })
    );
  }, [getRoles]);

  useEffect(() => {
    const data = {
      startdate: moment(Date.now()).startOf("year").format("YYYY-MM-DD"),
      enddate: moment(Date.now()).format("YYYY-MM-DD"),
    };

    getMetersInService(
      client(`meter/countallmetersinservice`, {
        data,
        method: "POST",
      })
    );
  }, [getMetersInService]);

  useEffect(() => {
    const data = {
      startdate: moment(Date.now()).startOf("year").format("YYYY-MM-DD"),
      enddate: moment(Date.now()).format("YYYY-MM-DD"),
    };

    getMetersInService(
      client(`/meter/countallregisteredmeters`, {
        data,
        method: "POST",
      })
    );
  }, [getMetersInService]);

  useEffect(() => {
    const data = {
      startdate: moment(Date.now()).startOf("year").format("YYYY-MM-DD"),
      enddate: moment(Date.now()).format("YYYY-MM-DD"),
    };

    getRegisteredMeters(
      client(`/meter/countallregisteredmeters`, {
        data,
        method: "POST",
      })
    );
  }, [getRegisteredMeters]);

  useEffect(() => {
    const data = {
      projectzone: "[]",
      assettype: "[]",
      startdate: revenueStartDate,
      enddate: revenueEndDate,
      targetusername: "",
      paymentoperation: JSON.stringify(["Vending", "Connection fee"]),
    };

    getSalesHistory(
      client(`/salesanalytics/getsaleshistory`, {
        data,
        method: "POST",
      })
    );
  }, [getSalesHistory, revenueEndDate, revenueStartDate]);

  const projectManagers = useMemo(() => {
    const { body: roleData } = allRoles;
    if (roleData?.length) {
      return roleData
        .filter((item) => item.role === "Project Manager")
        .slice(0, 4);
    }
    return [];
  }, [allRoles]);

  const salesManagers = useMemo(() => {
    const { body: roleData } = allRoles;
    if (roleData?.length) {
      return roleData.filter((item) => item.role === "Sales Agent").slice(0, 4);
    }
    return [];
  }, [allRoles]);

  const customerManagers = useMemo(() => {
    const { body: roleData } = allRoles;
    if (roleData?.length) {
      return roleData
        .filter((item) => item.role === "Customer Representative")
        .slice(0, 4);
    }
    return [];
  }, [allRoles]);

  const RoleCard = ({ role, site, username }) => {
    return (
      <div className="flex items-center justify-between my-2 even:bg-gray-50 p-1 cursor-pointer rounded-sm">
        <div className="flex items-center">
          <div className="rounded-full bg-gray-700 text-white font-light p-3 w-10 h-10 flex items-center justify-center">
            {getInitials(username)}
          </div>
          <div className="ml-3">
            <div className="">{username ? username : "N/A"}</div>
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
          <div className="bg-white rounded drop-shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold ">Project Managers</div>
              <div className="underline">
                <Link
                  className="text-secondary"
                  to="/dashboard/system-admin/roles?role=Project Manager"
                >
                  View all{" "}
                </Link>
              </div>
            </div>
            <div className="">
              {allRolesStatus !== "pending" &&
                projectManagers.map((pm, i) => (
                  <Link
                    key={pm?.roleid}
                    className="text-primary"
                    to={`/dashboard/projectsiteinfo/${pm?.projectzone}/${pm?.username}`}
                  >
                    <RoleCard
                      username={pm?.username}
                      key={pm?.roleid}
                      role={pm?.role}
                      site={pm?.projectzone}
                    />
                  </Link>
                ))}
              {allRolesStatus === "pending" && <ListLoader />}
            </div>
          </div>
          {/* Sales */}
          <div className="bg-white rounded drop-shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold ">Sales Managers</div>
              <div className="text-secondary underline ">
                <Link
                  className="text-secondary"
                  to="/dashboard/system-admin/roles?role=Sales Manager"
                >
                  View all{" "}
                </Link>
              </div>
            </div>
            <div className="text-primary">
              {allRolesStatus !== "pending" &&
                salesManagers.map((sm, i) => (
                  <RoleCard
                    key={sm?.roleid}
                    username={sm?.username}
                    role={sm?.role}
                    site={sm?.projectzone}
                  />
                ))}
              {allRolesStatus === "pending" && <ListLoader />}
            </div>
          </div>
          {/* Sales */}
          <div className="bg-white rounded drop-shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold ">Customer Managers</div>
              <div className="text-primary underline">
                <Link
                  className="text-primary"
                  to="/dashboard/system-admin/roles?role=Customer Manager"
                >
                  View all{" "}
                </Link>
              </div>
            </div>
            <div className="text-primary">
              {allRolesStatus !== "pending" &&
                customerManagers.map((cm, i) => (
                  <Link
                    className="text-primary"
                    to={`/dashboard/systemadmin`}
                  >
                    <RoleCard
                      username={cm?.username}
                      key={cm?.roleid}
                      role={cm?.role}
                      site={cm?.projectzone}
                    />
                  </Link>
                ))}
              {allRolesStatus === "pending" && <ListLoader />}
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
                  value={metersInService?.count}
                />
                <MeterTopCard
                  title={"Decommissioned meters"}
                  caption={
                    "Total number of meters that has been stop from being used "
                  }
                  value={"N/A"}
                />
                <MeterTopCard
                  title={"Registered meters"}
                  caption={"Total number of meters that  have been assigned."}
                  value={regsiteredMeters?.count}
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
