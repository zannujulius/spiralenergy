import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  Inject,
  Page,
  Search,
  Toolbar,
  ExcelExport,
  Sort,
} from "@syncfusion/ej2-react-grids";
import moment from "moment";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { sampleData } from "./data";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "../../Button";
import { color } from "../../../constant/color";
import { setToken } from "../../../utils/token";
import { FaUsersCog } from "react-icons/fa";

const UserRolesTable = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  let grid = useRef();
  let num = 1;
  let final = data.map((i) => {
    return {
      num: num++,
      ...i,
    };
  });

  const Sample = (item, { selected = selectedRow }) => {
    return (
      <div className="">
        <Link
          to={
            item?.role == "System Manager"
              ? `/dashboard/systemadmin`
              : item?.role == "Project Manager"
              ? `/dashboard/projectmanager/${item?.projectzone}`
              : item?.role == "Customer Representative"
              ? `/dashboard/customerrepresentative/${item?.projectzone}`
              : item?.role == "Sales Agent"
              ? `/dashboard/salesagent/${item?.projectzone}`
              : "/"
          }
          className="w-75 d-flex align-items-center justify-content-center rounded-1 text-decoration-none"
          style={{
            border: `1px solid ${color.baseColor}`,
          }}
          onClick={async () => {
            try {
              switch (item?.role) {
                case "System Manager":
                  await setToken("ampere_role", "System Manager");
                  return;
                case "Project Manager":
                  await setToken("ampere_role", "Project Manager");
                  await setToken("ampere_site", item?.projectzone);
                  return;
                case "Customer Representative":
                  await setToken("ampere_role", "Customer Representative");
                  await setToken("ampere_site", item?.projectzone);
                  return;
                case "Customer Agent":
                  await setToken("ampere_role", "Customer Agent");
                  await setToken("ampere_site", item?.projectzone);
                  return;
                case "Sales Agent":
                  await setToken("ampere_role", "Sales Agent");
                  await setToken("ampere_site", item?.projectzone);
                  return;
                case "Customer":
                  await setToken("ampere_role", "Customer");
                  return;
                default:
                  break;
              }
            } catch (err) {
              console.log(err.message);
            }
          }}
        >
          <div
            style={{
              position: "relative",
              cursor: "pointer",
              width: "100px",
            }}
            className="text-center "
            onClick={() => setSelectedRow(item?.id)}
          >
            <Button
              border={`1px solid ${color.baseColor}`}
              text={"View"}
              color={color.baseColor}
              fontSize={"11px"}
              fontWeight={"400"}
              height={"30px"}
              bg={color.whiteColor}
            />
          </div>
        </Link>
      </div>
    );
  };
  return (
    <div
      style={{
        borderTop: "1px solid #eee",
      }}
    >
      <div className="table-container" style={{}}>
        <GridComponent
          ref={(g) => (grid.current = g)}
          id="grid"
          style={{
            display: "block",
          }}
          allowPaging={true}
          allowSorting={true}
          dataSource={final}
          pageSettings={{
            pageSize: 15,
          }}
          allowExcelExport={false}
          toolbar={["Search"]}
          width={"100%"}
          height={600}
          // searchSettings={searchOptions}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="roleid"
              width="100"
              textAlign="Center"
              headerText="PMS"
              headerTextAlign="Center"
              headerTemplate={() => {
                return (
                  <div
                    className="st-header"
                    style={{
                      color: color.darkColor,
                      fontSize: "12px",
                    }}
                  >
                    Role Id
                  </div>
                );
              }}
              template={(item) => {
                return (
                  <div
                    style={{
                      color: color.darkColor,
                      fontSize: "13px",
                    }}
                    className="text-center"
                  >
                    {!item?.roleid ? "nill" : item?.roleid}
                  </div>
                );
              }}
            />
            <ColumnDirective
              field="creator"
              width="100"
              textAlign="Center"
              headerText="PMS"
              headerTextAlign="Center"
              headerTemplate={() => {
                return (
                  <div
                    className="st-header"
                    style={{
                      color: color.darkColor,
                      fontSize: "12px",
                    }}
                  >
                    Creator
                  </div>
                );
              }}
              template={(item) => {
                return (
                  <div
                    style={{
                      color: color.darkColor,
                      fontSize: "13px",
                    }}
                    className="text-center"
                  >
                    {!item?.creator ? "nill" : item?.creator}
                  </div>
                );
              }}
            />
            <ColumnDirective
              field="role"
              width="100"
              textAlign="Center"
              headerText="PMS"
              headerTextAlign="Center"
              headerTemplate={() => {
                return (
                  <div
                    className="st-header"
                    style={{
                      color: color.darkColor,
                      fontSize: "12px",
                    }}
                  >
                    Role
                  </div>
                );
              }}
              template={(item) => {
                return (
                  <div
                    style={{
                      color: color.darkColor,
                      fontSize: "13px",
                    }}
                    className="text-center"
                  >
                    {!item?.role ? "nill" : item?.role}
                  </div>
                );
              }}
            />
            <ColumnDirective
              field="projectzone"
              width="100"
              textAlign="Center"
              headerText="PMS"
              headerTextAlign="Center"
              headerTemplate={() => {
                return (
                  <div
                    className="st-header"
                    style={{
                      color: color.darkColor,
                      fontSize: "12px",
                    }}
                  >
                    Project zone
                  </div>
                );
              }}
              template={(item) => {
                return (
                  <div
                    style={{
                      color: color.darkColor,
                      fontSize: "13px",
                    }}
                    className="text-center"
                  >
                    {!item?.projectzone ? "nill" : item?.projectzone}
                  </div>
                );
              }}
            />
            <ColumnDirective
              field="username"
              width="100"
              textAlign="Center"
              headerText="PMS"
              headerTextAlign="Center"
              headerTemplate={() => {
                return (
                  <div
                    className="st-header"
                    style={{
                      color: color.darkColor,
                      fontSize: "12px",
                    }}
                  >
                    Username
                  </div>
                );
              }}
              template={(item) => {
                return (
                  <div
                    style={{
                      color: color.darkColor,
                      fontSize: "13px",
                    }}
                    className="text-center"
                  >
                    {!item?.username ? "" : item?.username}
                  </div>
                );
              }}
            />
            <ColumnDirective
              field="datecreated"
              width="100"
              textAlign="Center"
              headerText="PMS"
              headerTextAlign="Center"
              headerTemplate={() => {
                return (
                  <div
                    className="st-header"
                    style={{
                      color: color.darkColor,
                      fontSize: "12px",
                    }}
                  >
                    Date created
                  </div>
                );
              }}
              template={(item) => {
                return (
                  <div
                    style={{
                      fontSize: "13px",
                    }}
                    className="text-center"
                    onClick={() => console.log(selectedRow)}
                  >
                    {!item.datecreated
                      ? "nill"
                      : moment(item?.datecreated).format("lll")}
                  </div>
                );
              }}
            />
            <ColumnDirective
              field="username"
              width="100"
              textAlign="Center"
              headerText="PMS"
              headerTextAlign="Center"
              headerTemplate={() => {
                return (
                  <div
                    className="st-header"
                    style={{
                      color: color.darkColor,
                      fontSize: "12px",
                    }}
                  >
                    Action
                  </div>
                );
              }}
              template={Sample}
            />
          </ColumnsDirective>
          <Inject
            services={[Page, Sort, Filter, Group, Toolbar, Search, ExcelExport]}
          />
        </GridComponent>
      </div>
    </div>
  );
};

export default UserRolesTable;
