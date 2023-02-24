import Layout from "../../../components/Layout";
import PageNav from "../../../components/PageNav";
import UserRolesTable from "../../../components/Roles/Tables/UserRolesTable";

const UserRoles = () => {
  return (
    <Layout>
      <div className="mt-8 mb-40">
        <PageNav page={"Home"} />
        <div className="mt-4">
          <div className="font-semibold text-1xl">User roles</div>
          <div className="text-gray-500 font-ligth">
            List of roles assigned to your account.
          </div>
        </div>
        <div className="">
          <UserRolesTable />
        </div>
      </div>
    </Layout>
  );
};

export default UserRoles;
