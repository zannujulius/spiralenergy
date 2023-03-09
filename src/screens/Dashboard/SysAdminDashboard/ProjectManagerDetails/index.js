import React, { useState, useEffect, useCallback, useMemo } from "react";
import Layout from "../../../../components/Layout";
import { useAsync } from "../../../../utils/Hooks/useAsync";
import { client } from "../../../../utils/api";
import { useParams } from "react-router-dom";
import ProfileImg from "../../../../assets/svg/projectimg.svg";
import moment from "moment";
import SiteDetailsCard from "../../../../components/ProjectSite/SiteDetailsCard";
import SiteDetailsCardRight from "../../../../components/ProjectSite/SiteDetailsCardRight";

/** Styles */
import "./styles.css";

const SysAdminDashboard = () => {
  const { data: userDetails, run: getUser } = useAsync({
    data: [],
    status: "pending",
  });

  const { data: userRevenue, run: getsaleshistoryperzone } = useAsync({
    data: [],
    status: "pending",
  });

  const { data: meters, run: getallmetersinzone } = useAsync({
    data: {},
    status: "pending",
  });

  const { projectsite, username } = useParams();

  useEffect(() => {
    getUser(
      client(`/auth/account/getuser`, {
        data: { username },
        method: "POST",
      })
    );
  }, [getUser, username]);

  useEffect(() => {
    const payload = {
      projectzone: JSON.stringify([projectsite]),
      assettype: "",
      startdate: moment(userDetails.dateregistered).format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      enddate: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      paymentoperation: "Vending",
      limit: 30,
      offset: 0,
    };

    getsaleshistoryperzone(
      client(`/salesanalytics/getsaleshistoryperzone`, {
        data: payload,
        method: "POST",
      })
    );
  }, [getsaleshistoryperzone, projectsite, userDetails]);

  useEffect(() => {
    const saleshistoryPayload = {
      projectzone: JSON.stringify([projectsite]),
      assettype: "",
      startdate: moment(userDetails.dateregistered).format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      enddate: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      paymentoperation: "Vending",
    };

    const allMetersInZonesPayload = {
      zone: projectsite,
      assettype: "[]",
      startdate: moment(userDetails.dateregistered).format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      endDate: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      limit: 30,
      offset: 0,
    };

    if (userDetails?.dateregistered) {
      getsaleshistoryperzone(
        client(`/salesanalytics/getsaleshistoryperzone`, {
          data: saleshistoryPayload,
          method: "POST",
        })
      );

      getallmetersinzone(
        client(`/meter/getallmetersinzone`, {
          data: allMetersInZonesPayload,
          method: "POST",
        })
      );
    }
  }, [getsaleshistoryperzone, getallmetersinzone, projectsite, userDetails]);

  console.log("meters", meters)

  return (
    <Layout>
      <div className="mb-40">
        <div className="px-3 mt-4">
          <div className="container">
            <div className="flex flex-row p-2 rounded-md shadow-sm mt-3 bg-white items-center">
              <div className="w-full project-datails__title">
                Project manager details for{" "}
                <span className="zone-name">{projectsite}</span>
              </div>
            </div>
            <div className="flex flex-row p-3 bg-white">
              <div className="hidden md:block lg:block xl:block w-2/12">
                <div className="project-img flex items-center justify-center">
                  <img
                    src={ProfileImg}
                    alt="img"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
              </div>
              <div className="  flex-grow-0 flex-shrink-0 w-1/3">
                <div className="flex-row items-center justify-between">
                  <div className="sm:col-span-12 sm:col-start-1 sm:col-end-7 lg:col-span-7 xl:col-span-7 xxl:col-span-7">
                    <div className="">
                      <div className="project-entry flex items-center justify-between  ">
                        <div className="project-title text-sm">Full Name</div>
                        <div className="project-value">
                          {!userDetails?.firstname
                            ? "Registration not complete"
                            : userDetails?.firstname +
                              " " +
                              userDetails?.lastname}
                        </div>
                      </div>
                      <div className="project-entry mt-2 flex items-center justify-between">
                        <div className="project-title">Phone Number</div>
                        <div className="project-value">
                          {userDetails?.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-12 sm:col-start-1 sm:col-end-7 lg:col-span-7 xl:col-span-7 xxl:col-span-7">
                    <div className="">
                      <div className="project-entry mt-2 flex items-center justify-between">
                        <div className="project-title ">Email</div>
                        <div className="project-value">
                          {!userDetails?.email
                            ? "Registration not complete."
                            : userDetails?.email}
                        </div>
                      </div>
                      <div className="project-entry flex mt-2 items-center justify-between">
                        <div className="project-title">Date Registered</div>
                        <div className="project-value">
                          {moment(userDetails?.dateregistered).format("LLL")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 mt-2">
              <div className="bg-white rounded-1 shadow-sm">
                <SiteDetailsCard
                  desc={`Energy generated since ${
                    userDetails.firstname == null
                      ? "Not registered"
                      : userDetails.firstname == null
                      ? +"Not registered" + userDetails.lastname
                      : null
                  }
                    was made a project manager (${moment(
                      new Date(userDetails.dateregistered)
                    ).format("MMMM Do, YYYY HH:mm:ss")}).`}
                  imgType={"dollar"}
                  value={"0"}
                />
              </div>
              <div className="bg-white rounded-1 shadow-sm">
                <SiteDetailsCardRight
                  title={"Energy  generated from site."}
                  caption={"Total energy"}
                  value={"0"}
                  imgType={"monitor"}
                  bg={"#FFF8EF"}
                  link={`/dashboard/records/energy/${projectsite}/${username}`}
                  border={`border-2 border-yellow-500`}
                />
              </div>
            </div>
            {/* Card 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 mt-2">
              <div className="bg-white rounded-1 shadow-sm">
                <SiteDetailsCard
                  desc={`Revenue generated since ${
                    userDetails.firstname == null
                      ? "Not registered"
                      : userDetails.firstname == null
                      ? +"Not registered" + userDetails.lastname
                      : null
                  }
                    was made a project manager (${moment(
                      new Date(userDetails.dateregistered)
                    ).format("MMMM Do, YYYY HH:mm:ss")}).`}
                  imgType={"dollar"}
                  value={"0"}
                />
              </div>
              <div className="bg-white rounded-1 shadow-sm">
                <SiteDetailsCardRight
                  title={"Revenue  generated from site."}
                  caption={"Total energy"}
                  value={"0"}
                  imgType={"monitor"}
                  bg={"#FFF8EF"}
                  link={`/dashboard/records/energy/${projectsite}/${username}`}
                  border={`border-2 border-yellow-500`}
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 mt-2">
              <div className="bg-white rounded-1 shadow-sm">
                <SiteDetailsCard
                  desc={`Number of customers onboarded since ${username} was made a project manager ( March 31st, 2021 14:09:31).`}
                  imgType={"dollar"}
                  value={"0"}
                />
              </div>
              <div className="bg-white rounded-1 shadow-sm">
                <SiteDetailsCardRight
                  title={"Total number of onboarded customers"}
                  caption={"Total customers"}
                  value={"0"}
                  imgType={"customers"}
                  bg={"#FFF8EF"}
                  link={`/dashboard/records/users/${projectsite}/${username}`}
                  border={`1px solid #FFBD5E`}
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 mt-2">
              <div className="bg-white rounded-1 shadow-sm">
                <SiteDetailsCard
                  desc={`Newly added DCUs since ${username} was made a project manager ( March 31st, 2021 14:09:31).`}
                  imgType={"dollar"}
                  value={"0"}
                />
              </div>
              <div className="bg-white rounded-1 shadow-sm">
                <SiteDetailsCardRight
                  title={"Total number of DCUs."}
                  caption={"Total DCUs"}
                  value={"0"}
                  imgType={"flash"}
                  link={`/dashboard/records/dcu/${projectsite}/${username}`}
                  bg={"#FFF8EF"}
                  border={`1px solid #FFBD5E`}
                />
              </div>
            </div>

            {/* Card 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 mt-2">
              <div className="bg-white rounded-1 shadow-sm">
                <SiteDetailsCard
                   desc={`Newly added meters since ${
                    userDetails.firstname == null
                      ? "Not registered"
                      : userDetails.firstname == null
                      ? +"Not registered" + userDetails.lastname
                      : null
                  }
                   was made a project manager ( ${moment(
                     new Date(userDetails.dateregistered)
                   ).format("MMMM Do, YYYY HH:mm:ss")}).`}
                  imgType={"flash"}
                  value={meters?.meta?.count}
                />
              </div>
              <div className="bg-white rounded-1 shadow-sm">
                <SiteDetailsCardRight
                  title={"Total number of Meters"}
                  caption={"Total Meters"}
                  value={0}
                  imgType={"flash"}
                  bg={"#FFF8EF"}
                  link={`/dashboard/records/meters/${projectsite}/${username}`}
                  border={`1px solid #FFBD5E`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SysAdminDashboard;
