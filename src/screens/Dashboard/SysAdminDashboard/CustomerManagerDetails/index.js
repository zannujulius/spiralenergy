import moment from "moment";
import BackBtn from "../../../../components/BackBtn";
import Layout from "../../../../components/Layout";
import TopNav from "../../../../components/TopNav";
import ProfileImg from "../../../../assets/svg/profileimg.svg";
import "./style.css";
import SiteDetailsCard from "../../../../components/ProjectSite/SiteDetailsCard";
import SiteDetailsCardRight from "../../../../components/ProjectSite/SiteDetailsCardRight";
import UserRolesTable from "../../../../components/Roles/Tables/UserRolesTable";
import TableTop from "../../../../components/TableTop";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import axios from "../../../../utils/axios";
import { useState, useEffect } from "react";

const CustomerManagerDetails = () => {
  let { projectsite, id } = useParams();

  const [reveue, setRevenue] = useState(0);
  const [userRevenue, setUserRevenue] = useState(0);

  const [meters, setMeters] = useState(0);
  const [userMeters, setUserMeters] = useState(0);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    axios
      .post("/auth/account/getuser", { username: id })
      .then((response) => {
        setUserDetails(response.data);
        // console.log(response);
      })
      .catch((err) => {
        toast(err.message);
      });
  }, []);

  useEffect(() => {
    // axios
    //   .post("/salesanalytics/getsaleshistoryperzone", {
    //     projectzone: JSON.stringify([projectsite]),
    //     assettype: "[]",
    //     paymentoperation: JSON.stringify(["Vending"]),
    //     startdate: moment(Date.now())
    //       .startOf("year")
    //       .format("YYYY-MM-DD HH:mm:ss"),
    //     enddate: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    //     limit: 30,
    //     offset: 0,
    //   })
    //   .then((response) => {
    //     setRevenue(response.data.body.reduce((p, c) => (p += c.amount), 0));
    //   })
    //   .catch((err) => toast(err.message));
    // axios
    //   .post("/meter/getallmetersinzone", { zone: projectsite })
    //   .then((response) => {
    //     setMeters(response.data.meta.count);
    //   })
    //   .catch((err) => toast(err.message));
  }, []);

  useEffect(() => {
    if (userDetails.dateregistered) {
      // axios
      //   .post("/salesanalytics/getsaleshistoryperzone", {
      //     projectzone: JSON.stringify([projectsite]),
      //     assettype: "[]",
      //     paymentoperation: JSON.stringify(["Vending"]),
      //     startdate: moment(userDetails.dateregistered).format("YYYY-MM-DD"),
      //     enddate: moment(Date.now()).format("YYYY-MM-DD"),
      //     limit: 30,
      //     offset: 0,
      //   })
      //   .then((response) => {
      //     setUserRevenue(
      //       response.data.body.reduce((p, c) => (p += c.amount), 0)
      //     );
      //   })
      //   .catch((err) => toast(err.message));
      // axios
      //   .post("/meter/getallmetersinzone", {
      //     zone: projectsite,
      //     assettype: "[]",
      //     startdate: moment(userDetails.dateregistered).format("YYYY-MM-DD"),
      //     endDate: moment(Date.now()).format("YYYY-MM-DD"),
      //   })
      //   .then((response) => {
      //     setUserMeters(response.data.meta.count);
      //   })
      //   .catch((err) => toast(err.message));
    }
  }, [userDetails.dateregistered]);
  return (
    <Layout>
      {/* <TopNav title={"System Admin Dashboard"} /> */}
      <div className="px-3 mt-3">
        {/* <BackBtn text={"Go back"} /> */}
        <div
          className="container"
          style={{
            marginBottom: 200,
          }}
        >
          <div className="flex align-center mt-4">
            <div className="project-datails__title bg-white p-2 rounded-1 shadow-sm">
              <div className="">
                Customer Manager Details for {projectsite}{" "}
              </div>
              <div className=" mt-2 flex align-center justify-between">
                <div className=" hidden  md:block">
                  <div className="project-img flex align-center justify-center">
                    <img
                      src={ProfileImg}
                      alt={"img"}
                      style={{
                        width: "70px",
                        height: "70px",
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 xol-xxl-9">
                  <div
                    className=""
                    style={{
                      height: 130,
                    }}
                  >
                    <div className="project-entry flex align-center justify-between ">
                      <div className="project-title ">Full Name</div>
                      <div className="project-value">
                        {userDetails.firstname} {userDetails.lastname}
                      </div>
                    </div>
                    <div className="project-entry mt-1 flex align-center justify-between">
                      <div className="project-title">Phone Number</div>
                      <div className="project-value">{userDetails.phone}</div>
                    </div>
                    <div className="project-entry mt-1 flex  align-center justify-between">
                      <div className="project-title">Date Registered</div>
                      <div className="project-value">
                        {moment(userDetails.dateregistered).format(
                          "DD-MM-YYYY HH:mm"
                        )}
                      </div>
                    </div>
                    <div className="project-entry mt-1 flex  align-center justify-between">
                      <div className="project-title">Site assigned</div>
                      <div className="project-value">{projectsite}</div>
                    </div>
                    <div className="">
                      <div className="project-entry mt-1 flex align-center justify-between">
                        <div className="project-title ">Email</div>
                        <div className="project-value">{userDetails.email}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-3 col-md-7 col-xl-7 col-xxl-7 col-lg-7">
              <div className="bg-white rounded-1 shadow-sm py-2">
                <SiteDetailsCardRight
                  title={"Customer onboarded."}
                  caption={"Total customers"}
                  value={"0"}
                  imgType={"customers"}
                  bg={"#FFF8EF"}
                  border={`1px solid #FFBD5E`}
                  link={`/dashboard/records/users/${projectsite}/${id}`}
                />
              </div>
            </div>
          </div>

          {/* Card 1 */}
          <div className="row mt-2 d-none">
            <div className="col-sm-12 mt-3 col-md-5 col-lg-5 col-xl-5 col-xxl-5 bg-white rounded-1 shadow-sm">
              <div className="">
                <SiteDetailsCard
                  desc={`Revenue generated since  ${userDetails.firstname} ${userDetails.lastname} was made a customer manager ( March 31st, 2021 14:09:31).`}
                  imgType={"dollar"}
                  value={"0"}
                />
              </div>
            </div>
            <div className="col-sm-12 mt-3 col-md-7 col-xl-7 col-xxl-7 col-lg-7 ">
              <div className="bg-white rounded-2 shadow-sm">
                <SiteDetailsCardRight
                  title={"Revenue generated from site."}
                  caption={"Total Revenue"}
                  value={"0"}
                  link={`/dashboard/records/revenue/${projectsite}/${id}`}
                  imgType={"money"}
                  bg={"#FFF8EF"}
                  border={`1px solid #FFBD5E`}
                />
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="row mt-2 d-none">
            <div className="col-sm-12 mt-3 col-md-5 col-lg-5 col-xl-5 col-xxl-5 bg-white rounded-1 shadow-sm">
              <div className="">
                <SiteDetailsCard
                  desc={`Energy generated since James Mark was made a customer manager  ${moment(
                    userDetails.dateregistered
                  ).format("DD-MM-YYYY HH:mm")}.`}
                  imgType={"dollar"}
                  value={"0"}
                />
              </div>
            </div>
            <div className="col-sm-12 mt-3 col-md-7 col-xl-7 col-xxl-7 col-lg-7 d-none">
              <div className="bg-white rounded-2 shadow-sm">
                <SiteDetailsCardRight
                  title={"Energy consumed on site."}
                  caption={"Total Revenue"}
                  value={"0"}
                  imgType={"flash"}
                  bg={"#FFF8EF"}
                  link={`/dashboard/records/energy/${projectsite}/${id}`}
                  border={`1px solid #FFBD5E`}
                />
              </div>
            </div>
          </div>
          <div className="row mt-4 bg-white">
            <div>
              <TableTop title={"Roles assigned by custmer manager "} />
            </div>
            <UserRolesTable data={[]} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerManagerDetails;