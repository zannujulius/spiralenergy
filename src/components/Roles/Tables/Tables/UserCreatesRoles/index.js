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
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUser, FaUsersCog } from "react-icons/fa";
import { color } from "../../../../constant/color";
import { setToken } from "../../../../utils/token";
import { Button } from "../../../Button";
import RoleInfoModal from "../../RoleInfoModal";
const UserCreatesRoles = ({ data, refreshBtn }) => {
  const [modal, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [roleId, setRoleId] = useState("");
  const [username, setUsername] = useState("");
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
        <div
          className="w-75 px-1 d-flex align-items-center justify-content-center rounded-1 text-decoration-none"
          style={{
            border: `1px solid ${color.baseColor}`,
          }}
          onClick={async () => {
            try {
              setRoleId(item?.roleid);
              setModal(true);
              setUsername(item?.username);
            } catch (err) {
              console.log(err.message);
            }
          }}
        >
          <div>
            <FaUsersCog size={18} color={color.baseColor} />
          </div>
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
              text={"View Role"}
              color={color.baseColor}
              fontSize={"11px"}
              fontWeight={"400"}
              height={"30px"}
              bg={color.whiteColor}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        borderTop: "1px solid #eee",
      }}
    >
      {modal && (
        <RoleInfoModal
          closeModal={setModal}
          roleId={roleId}
          username={username}
        />
      )}
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
            />
            {/* <ColumnDirective
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
            /> */}
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
                      color: color.baseColor,
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
              width="150"
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
                    {!item?.username ? "nill" : item?.username}
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
                    // onClick={() => console.log(selectedRow)}
                  >
                    {!item.datecreated
                      ? "nill"
                      : moment(item?.date).format("lll")}
                  </div>
                );
              }}
            />
            <ColumnDirective
              field="id"
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

export default UserCreatesRoles;
