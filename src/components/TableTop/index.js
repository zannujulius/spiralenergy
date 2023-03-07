import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";

import { themeColor as color } from "../../constant/color";
import { Button } from "../Button";
import "./styles.css";
import { getToken } from "../../utils/token";
import toast from "react-hot-toast";
// import MobileNav from "../MobileNav";

const TableTop = ({
  title,
  btnText,
  setAddRole,
  showAddRoleBtn,
  setAddRoleBtn,
  showAddSite,
  setAddSiteBtn,
  showMap,
  setShowMap,
  addSiteBtnText,
  showFilter,
  showLink,
  link,
  linkText,
  placeholder,
  search,
  setSearch,
  showCommandFilter,
  setCommandFilter,
  showDropDown,
  setDropDown,
  dropDown,
  selectedItem,
  setSelectedItem,
  dropDownPlaceholder,
  showAddMeter,
  setAddMeterModal,
}) => {
  const { Option } = Select;
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    (async () => {
      try {
        let role = await getToken("ampere_role");
        setUserRole(role);
      } catch (err) {
        toast.error(err.message);
      }
    })();
  }, []);

  const roleAssignee = (item) =>
    item == "Project Manager" ? true : item == "System Manager" ? true : false;

  return (
    <div className="container-fluid p-2 ">
      <div className="row d-flex align-items-center justify-content-between juss">
        <div
          className="col-sm-12 col-md-7 col-lg-7 col-xl-7 tab-title "
          style={{
            color: color.textColor,
            fontWeight: "400",
          }}
        >
          {title}
        </div>

        <div className="col-sm-12 col-md-5 col-lg-5 col-xxl-5 col-xl-5 d-flex align-items-center justify-content-end">
          {showAddRoleBtn && (
            <div
              className="tabBtncover mx-2"
              onClick={() => setAddRoleBtn(true)}
              style={{}}
            >
              <Button
                color={color.whiteColor}
                bg={color.baseColor}
                height={"37px"}
                text={"Add Role"}
              />
            </div>
          )}
          {showAddSite ? (
            <div
              className="tabBtncover mx-2"
              onClick={() => setAddSiteBtn(true)}
              style={{}}
            >
              <Button
                color={color.whiteColor}
                bg={color.baseColor}
                height={"33px"}
                text={addSiteBtnText || "Add Site"}
              />
            </div>
          ) : null}

          {userRole == "Customer Representative" && showAddMeter ? (
            <div
              className="tabBtncover mx-2"
              onClick={() => setAddMeterModal(true)}
            >
              <Button
                color={color.whiteColor}
                bg={color.baseColor}
                height={"33px"}
                text={addSiteBtnText || "Assign meter"}
              />
            </div>
          ) : null}
          {showMap && (
            <div
              className="tabBtncover mx-2"
              onClick={() =>
                setShowMap((prev) => {
                  if (prev == true) {
                    return false;
                  } else {
                    return true;
                  }
                })
              }
            >
              <Button
                color={color.baseColor}
                bg={color.btnFadeColor}
                height={"37px"}
                text={showMap ? `Show Map` : `Show table`}
              />
            </div>
          )}

          {showLink && (
            <div
              className="rounded-1 d-flex align-items-center "
              style={{
                overflow: "hidden",
                border: `1px solid ${color.btnFadeColor}`,
              }}
            >
              <div>
                <input
                  type={"text"}
                  placeholder={placeholder || ""}
                  value={search}
                  className="customer-search__input p-1 "
                  style={{}}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Link
                className=" text-center p-2"
                to={`${link}`}
                style={{
                  width: "90px",
                  color: color.baseColor,
                  background: color.btnFadeColor,
                  fontSize: "13px",
                }}
              >
                Search
              </Link>
            </div>
          )}

          {showDropDown && (
            <div
              className="rounded-1 d-flex align-items-center "
              style={{
                overflow: "hidden",
                border: `1px solid ${color.btnFadeColor}`,
              }}
            >
              <Select
                style={{
                  width: 200,
                }}
                bordered
                value={selectedItem}
                placeholder={dropDownPlaceholder || ""}
                onChange={(e) => setSelectedItem(e)}
              >
                {dropDown.map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </div>
          )}
          {showCommandFilter && (
            <div
              className="tabBtncover mx-2"
              onClick={() => setCommandFilter(true)}
            >
              <Button
                color={color.whiteColor}
                bg={color.baseColor}
                height={"37px"}
                text={"Show Filter"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableTop;
