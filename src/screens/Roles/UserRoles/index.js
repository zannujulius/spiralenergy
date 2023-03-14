import axios from "../../../utils/axios";
import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import PageNav from "../../../components/PageNav";
import UserRolesTable from "../../../components/Roles/Tables/UserRolesTable";
import { toast } from "react-hot-toast";
import { commandController } from "../../../controllers/CommandController";
import { channelController } from "../../../controllers/channelController";
import { getToken } from "../../../utils/token";
import TableSkimmer from "../../../components/TableSkimmer";
const UserRoles = () => {
  const [modal, setModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let username = await getToken("spiral_username");
        let res = await axios.post("/roles/getuserroles", {
          targetusername: username,
        });
        let result = channelController(res);
        if (result.type !== "success") {
          toast.error(result.message);
          return;
        }
        setData(result?.message?.body);
        setloading(false);
      } catch (err) {
        if (err.response) {
          toast.error(err.response.data.response);
        }
        toast.error(err.message);
        setloading(false);
      }
    })();
  }, []);
  return (
    <Layout>
      <div className="mt-8 mb-40 bg-white p-3 h-[80vh] drop-shadow-md rounded-md">
        <PageNav page={"Home"} />
        <div className="mt-4">
          <div className="font-semibold font-Kanit text-[17px]">
            All your roles
          </div>
          <div className="text-gray-500 font-light">
            List of roles assigned to your account.
          </div>
        </div>
        <hr className="border-[0.5px] border-gray-500 my-4" />
        <div className="">
          {loading ? (
            <TableSkimmer entries={10} col={7} />
          ) : (
            <UserRolesTable data={!data.length ? [] : data} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UserRoles;
