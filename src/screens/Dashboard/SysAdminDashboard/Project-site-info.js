import React, { useMemo } from "react";
import Layout from "../../../components/Layout";
import { useSearchParams } from "react-router-dom";
import { useAsync } from "../../../utils/Hooks/useAsync";
import { client } from "../../../utils/api";

const SysAdminDashboard = () => {
  const [queryParameters] = useSearchParams();
  const { data: allRoles, run } = useAsync({ data: [], status: "pending" });

  React.useEffect(() => {
    run(
      client(`roles/getallroles`, {
        data: {},
        method: "POST",
      })
    );
  }, [run]);

  const projectManagers = useMemo(() => {
    const { body: roleData } = allRoles;
    if (roleData?.length) {
      return roleData.filter(
        (item) => item.role === queryParameters.get("role").replace("-", " ")
      );
    }
    return [];
  }, [allRoles, queryParameters]);

  console.log("P", projectManagers)

  return (
    <Layout>
      <div className="mb-40">
        <div className="mt-8 my-1 font-semibold">Project manager details for Abuja</div>
        <div className="text-gray-500 font-ligth">
          List of all {queryParameters.get("role").replace("-", " ")}s
        </div>
      </div>
    </Layout>
  );
};

export default SysAdminDashboard;
