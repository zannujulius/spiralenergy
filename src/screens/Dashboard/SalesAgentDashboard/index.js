import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import moment from "moment";
import { useState } from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
// import SalesLineChart from "../../../components/SalesAgent/Charts/SalesLineChart";i
import SalesLineChart from "../../../components/Dashboards/SalesAgent/Charts/SalesLineChart";
import DateRangePicker from "../../../components/DateRangePicker";
import CustomerTable from "../../../components/Dashboards/SalesAgent/Table/CustomerTable";
const SalesAgentDashboard = () => {
  const percentage = 66;
  const [startDate, setStartDate] = useState(
    moment(Date.now()).startOf("day").format("lll")
  );
  const [endDate, setsetendDate] = useState(moment(Date.now()).format("lll"));
  
  const AgentTopCard = ({ title, value, caption }) => {
    return (
      <div className="bg-white h-[120px] rounded drop-shadow-md p-4 flex items-center justify-between">
        <div className="">
          <div className="font-normal text-1xl text-gray-600">{title}</div>
          <div className="font-light text-[13px] text-gray-500 w-[70%]">
            {caption}
          </div>
          <div className="font-semibold text-[20px] mt-2 text-gray-800">
            {value}
          </div>
        </div>
        <div className="border-2 border-red-500 w-[100px] h-[80px]">
          <div className=""></div>
        </div>
      </div>
    );
  };
  return (
    <Layout>
      <div className="">
        <PageTitle
          title={"Welcome to Sales Agent dashboard"}
          caption={"Insight of sales you have made"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mt-6">
        <AgentTopCard
          title={"Your wallet balance"}
          value={"₦4,635.00"}
          caption={`from ${startDate} to ${endDate}`}
        />
        <AgentTopCard
          title={"Total credit made "}
          value={"₦3,478.00"}
          caption={`from ${startDate} to ${endDate}`}
        />
        <AgentTopCard title={"Site Managed"} value={"Igando"} />
      </div>
      <div className="bg-white h-[460px] rounded drop-shadow-md my-6 p-4">
        <div className="flex items-start justify-between">
          <div className="font-semibold">
            Wallet balance and Credit logs analytics
          </div>
          <div className="">
            <DateRangePicker />
          </div>
        </div>
        <div className="h-[400px]">
          <SalesLineChart />
        </div>
      </div>
      <div className="bg-white h-[700px] rounded drop-shadow-md pt-4 my-6">
        <div className="flex items-start justify-between px-6">
          <div className="font-semibold">Customer in project site</div>
          <div className=""></div>
        </div>
        <div className="">
          <CustomerTable />
        </div>
      </div>
    </Layout>
  );
};

export default SalesAgentDashboard;
