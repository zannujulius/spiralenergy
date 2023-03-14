{
  /* <Link
          to={"/dashboard/systemadmin"}
          className="nav-item px-2 d-flex align-items-center py-2 my-3"
        >
          <div className="nav-icon px-2 pb-1">
            <RiDashboardFill
              size={17}
              color={
                location.pathname == "/dashboard/systemadmin"
                  ? "#6418c2"
                  : "#6c6c6c"
              }
            />
          </div>
          <div className="nav-link" ref={navLink} style={{}}>
            <div
              className="px-1 nav-link__text"
              style={{
                color:
                  location.pathname == "/dashboard/systemadmin"
                    ? "#6418c2"
                    : "#6c6c6c",
              }}
            >
              Dashboard
            </div>
          </div>
        </Link>
        <Link
          to={"/users"}
          className="nav-item px-2 d-flex align-items-center py-2 my-3"
        >
          <div className="nav-icon px-2 pb-1">
            <ImUser
              size={17}
              color={location.pathname == "/users" ? "#6418c2" : "#6c6c6c"}
            />
          </div>
          <div className="nav-link" ref={navLink} style={{}}>
            <div
              className="px-1 nav-link__text"
              style={{
                color: location.pathname == "/users" ? "#6418c2" : "#6c6c6c",
              }}
            >
              Users
            </div>
          </div>
        </Link>
        {/* Customers */
}
// <Link
//   to={"/allcustomers"}
//   className="nav-item px-2 d-flex align-items-center py-2 my-3"
// >
//   <div className="nav-icon px-2 pb-1">
//     <ImUser
//       size={17}
//       color={location.pathname == "/allcustomers" ? "#6418c2" : "#6c6c6c"}
//     />
//   </div>
//   <div className="nav-link" ref={navLink} style={{}}>
//     <div
//       className="px-1 nav-link__text"
//       style={{
//         color: location.pathname == "/allcustomers" ? "#6418c2" : "#6c6c6c",
//       }}
//     >
//       Customers
//     </div>
//   </div>
// </Link>
// {/* Roles */}
// <div
//   onClick={() => {
//     if (settingsModal) {
//       return setRoleModal(false);
//     } else {
//       return setRoleModal(true);
//     }
//   }}
//   style={{
//     cursor: "pointer",
//   }}
//   className="nav-item settings px-2 d-flex align-items-center justify-content-between d-block py-2 mt-3"
// >
//   <div
//     className="d-flex align-items-center "
//     style={{
//       width: "90%",
//     }}
//   >
//     <div className="nav-icon px-2">
//       <FaUsers
//         size={17}
//         color={
//           location.pathname.includes("/role")
//             ? color.baseColor
//             : "#6c6c6c"
//         }
//       />
//     </div>
//     <div className="nav-link" ref={navLink} style={{}}>
//       <div
//         className="px-1 nav-link__text"
//         style={{
//           color: location.pathname.includes("/role")
//             ? color.baseColor
//             : "#6c6c6c",
//         }}
//       >
//         Roles
//       </div>
//     </div>
//   </div>
//   <div
//     className=""
//     style={{
//       width: "10%",
//     }}
//   >
//     <IoIosArrowDown
//       size={16}
//       color={
//         location.pathname.includes("/role")
//           ? color.baseColor
//           : "#6c6c6c"
//       }
//     />
//   </div>
// </div>

// {roleModal && (
//   <div className="">
//     <div
//       className="nav-item px-2 d-flex align-items-center py-2 "
//       style={{
//         cursor: "pointer",
//       }}
//     >
//       <Link
//         to={"/roles/userroles"}
//         className="nav-link"
//         ref={navLink}
//         onClick={() => setRoleModal(false)}
//       >
//         <div
//           className="px-1 nav-link__text"
//           style={{
//             marginLeft: "28px",
//             fontSize: "1rem",
//             color:
//               location.pathname == "/settings/profile"
//                 ? "#6418c2"
//                 : "#6c6c6c",
//           }}
//         >
//           Your roles
//         </div>
//       </Link>
//     </div>

//     <Link
//       to={"/roles/alluserroles"}
//       className="nav-item px-2 d-flex align-items-center py-2 "
//       style={{
//         cursor: "pointer",
//       }}
//     >
//       <div
//         className="nav-link"
//         ref={navLink}
//         onClick={() => setRoleModal(false)}
//       >
//         <div
//           className="px-1 nav-link__text"
//           style={{
//             marginLeft: "28px",
//             fontSize: "1rem",
//           }}
//         >
//           All user roles
//         </div>
//       </div>
//     </Link>
//   </div>
// )}
// {/* Meters */}
// <div
//   onClick={() => {
//     if (settingsModal) {
//       return setMeterModal(false);
//     } else {
//       return setMeterModal(true);
//     }
//   }}
//   style={{
//     cursor: "pointer",
//   }}
//   className="nav-item settings px-2 d-flex align-items-center justify-content-between d-block py-2 mt-3"
// >
//   <div
//     className="d-flex align-items-center "
//     style={{
//       width: "90%",
//     }}
//   >
//     <div className="nav-icon px-2">
//       <IoHardwareChip
//         size={17}
//         color={
//           -location.pathname.includes("/role")
//             ? color.baseColor
//             : "#6c6c6c"
//         }
//       />
//     </div>
//     <div className="nav-link" ref={navLink} style={{}}>
//       <div
//         className="px-1 nav-link__text"
//         style={{
//           color: location.pathname.includes("/role")
//             ? color.baseColor
//             : "#6c6c6c",
//         }}
//       >
//         Meters
//       </div>
//     </div>
//   </div>
//   <div
//     className=""
//     style={{
//       width: "10%",
//     }}
//   >
//     <IoIosArrowDown
//       size={16}
//       color={
//         location.pathname.includes("/role")
//           ? color.baseColor
//           : "#6c6c6c"
//       }
//     />
//   </div>
// </div>

// {meterModal && (
//   <div className="">
//     <div
//       className="nav-item px-2 d-flex align-items-center py-2 "
//       style={{
//         cursor: "pointer",
//       }}
//     >
//       <Link
//         to={"/allmeters"}
//         className="nav-link"
//         ref={navLink}
//         onClick={() => setMeterModal(false)}
//       >
//         <div
//           className="px-1 nav-link__text"
//           style={{
//             marginLeft: "28px",
//             fontSize: "1rem",
//             color:
//               location.pathname == "/allmeters" ? "#6418c2" : "#6c6c6c",
//           }}
//         >
//           All Meters
//         </div>
//       </Link>
//     </div>

//     <Link
//       to={"/allcustomermeters"}
//       className="nav-item px-2 d-flex align-items-center py-2 "
//       style={{
//         cursor: "pointer",
//       }}
//     >
//       <div
//         className="nav-link"
//         ref={navLink}
//         onClick={() => setMeterModal(false)}
//       >
//         <div
//           className="px-1 nav-link__text"
//           style={{
//             marginLeft: "28px",
//             fontSize: "1rem",
//             color:
//               location.pathname == "/allcustomermeters"
//                 ? "#6418c2"
//                 : "#6c6c6c",
//           }}
//         >
//           All Customer meters
//         </div>
//       </div>
//     </Link>
//     <Link
//       to={"/allprojectsitemeters"}
//       className="nav-item px-2 d-flex align-items-center py-2 "
//       style={{
//         cursor: "pointer",
//       }}
//     >
//       <div
//         className="nav-link"
//         ref={navLink}
//         onClick={() => setMeterModal(false)}
//       >
//         <div
//           className="px-1 nav-link__text"
//           style={{
//             marginLeft: "28px",
//             fontSize: "1rem",
//             color:
//               location.pathname == "/allprojectsitemeters"
//                 ? "#6418c2"
//                 : "#6c6c6c",
//           }}
//         >
//           All Site meters
//         </div>
//       </div>
//     </Link>
//   </div>
// )}
// {/* Meters */}
// <Link
//   to={"/dashboard/systemadmin/meters"}
//   className="d-none nav-item px-2 d-flex align-items-center py-2 my-3"
// >
//   <div className="nav-icon px-2 pb-1">
//     <FaBuilding
//       size={17}
//       color={
//         location.pathname == "/dashboard/systemadmin/meters"
//           ? "#6418c2"
//           : "#6c6c6c"
//       }
//     />
//   </div>
//   <div className="nav-link " ref={navLink} style={{}}>
//     <div
//       className="px-1 nav-link__text"
//       style={{
//         color:
//           location.pathname == "/dashboard/systemadmin/meters"
//             ? "#6418c2"
//             : "#6c6c6c",
//       }}
//     >
//       Meters
//     </div>
//   </div>
// </Link>
// <Link
//   to={"/dashboard/systemadmin/projectsite"}
//   className="nav-item px-2 d-flex align-items-center py-2 my-3"
// >
//   <div className="nav-icon px-2 pb-1">
//     <FaBuilding
//       size={17}
//       color={
//         location.pathname == "/dashboard/systemadmin/projectsite"
//           ? "#6418c2"
//           : "#6c6c6c"
//       }
//     />
//   </div>
//   <div
//     className="nav-link "
//     ref={navLink}
//     style={{
//       color:
//         location.pathname == "/dashboard/systemadmin/projectsite"
//           ? "#6418c2"
//           : "#6c6c6c",
//     }}
//   >
//     <div
//       className="px-1 nav-link__text"
//       style={{
//         color:
//           location.pathname == "/dashboard/systemadmin/projectsite"
//             ? "#6418c2"
//             : "#6c6c6c",
//       }}
//     >
//       Project sites
//     </div>
//   </div>
// </Link>
// <Link
//   to={"/meterclass"}
//   className="nav-item px-2  d-flex align-items-center py-2 my-3 "
// >
//   <div className="nav-icon px-2 pb-1">
//     <MdMoreTime
//       size={17}
//       color={location.pathname == "/meterclass" ? "#6418c2" : "#6c6c6c"}
//     />
//   </div>
//   <div
//     className="nav-link"
//     ref={navLink}
//     style={{
//       color: location.pathname == "/meterclass" ? "#6418c2" : "#6c6c6c",
//     }}
//   >
//     <div
//       className="px-1 nav-link__text"
//       style={{
//         color:
//           location.pathname == "/meterclass" ? "#6418c2" : "#6c6c6c",
//       }}
//     >
//       Meter classes
//     </div>
//   </div>
// </Link>
// <Link
//   to={"/aggregated/branchabovetrigger"}
//   className="nav-item px-2  d-flex align-items-center py-2 my-3"
// >
//   <div className="nav-icon px-2">
//     <IoWallet size={17} color={"#6c6c6c"} />
//   </div>
//   <div className="nav-link" ref={navLink} style={{}}>
//     <div className="px-1 nav-link__text">Revenue</div>
//   </div>
// </Link>
// <div
//   onClick={() => {
//     if (settingsModal) {
//       return setSettingsModal(false);
//     } else {
//       return setSettingsModal(true);
//     }
//   }}
//   style={{
//     cursor: "pointer",
//   }}
//   className="nav-item settings px-2 d-flex align-items-center justify-content-between d-block py-2 mt-3"
// >
//   <div
//     className="d-flex align-items-center "
//     style={{
//       width: "90%",
//     }}
//   >
//     <div className="nav-icon px-2">
//       <RiSettings5Fill
//         size={17}
//         color={
//           location.pathname.includes("/settings")
//             ? color.baseColor
//             : "#6c6c6c"
//         }
//       />
//     </div>
//     <div className="nav-link" ref={navLink} style={{}}>
//       <div className="px-1 nav-link__text">Settings</div>
//     </div>
//   </div>
//   <div
//     className=""
//     style={{
//       width: "10%",
//     }}
//   >
//     <IoIosArrowDown
//       size={16}
//       color={
//         location.pathname.includes("/settings")
//           ? color.baseColor
//           : "#6c6c6c"
//       }
//     />
//   </div>
// </div>
// {settingsModal && (
//   <div className="">
{
  /* <div
              className="nav-item px-2 d-flex align-items-center py-2 "
              style={{
                cursor: "pointer",
              }}
            >
              <Link
                to={"/settings/profile"}
                className="nav-link"
                ref={navLink}
                onClick={() => setSettingsModal(false)}
              >
                <div
                  className="px-1 nav-link__text"
                  style={{
                    marginLeft: "28px",
                    fontSize: "1rem",
                    color:
                      location.pathname == "/settings/profile"
                        ? "#6418c2"
                        : "#6c6c6c",
                  }}
                >
                  Profile
                </div>
              </Link>
            </div>
            <Link
              to={"/settings/dropdown"}
              className="nav-item px-2 d-flex align-items-center py-2 "
              style={{
                cursor: "pointer",
              }}
            >
              <div
                className="nav-link"
                ref={navLink}
                onClick={() => setSettingsModal(false)}
              >
                <div
                  className="px-1 nav-link__text"
                  style={{
                    marginLeft: "28px",
                    fontSize: "1rem",
                  }}
                >
                  Key Settings.
                </div>
              </div>
            </Link>
            <Link
              to={"/settings/controls"}
              className="nav-item px-2 d-flex align-items-center py-2 "
              style={{
                cursor: "pointer",
              }}
            >
              <div
                className="nav-link"
                ref={navLink}
                onClick={() => setSettingsModal(false)}
              >
                <div
                  className="px-1 nav-link__text"
                  style={{
                    marginLeft: "28px",
                    fontSize: "1rem",
                  }}
                >
                  Control Settings.
                </div>
              </div>
            </Link>
          </div> */
}
// )}
// <div
//   className="nav-item px-2 d-flex align-items-center py-2 mt-3"
//   style={{
//     cursor: "pointer",
//   }}
//   onClick={async () => {
//     try {
//       await deleteToken("ampere_token");
//       await deleteToken("ampere_registration");
//       await deleteToken("ampere_username");
//       return navigate("/");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   }}
// >
//   <div className="nav-icon px-2">
//     <IoLogOut size={17} color={"#6c6c6c"} />
//   </div>
//   <div className="nav-link " ref={navLink} style={{}}>
//     <div className="px-1 nav-link__text">Log out </div>
//   </div>
// </div>
