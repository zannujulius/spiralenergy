// import "./style.css";
import { useLocation } from "react-router-dom";
import SideNav from "../SideNav";
import SideNav1 from "../SideNav1";
import TopNav from "../TopNav";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="h-screen w-screen fixed items-start top-0 md:flex lg:flex left-0">
      {location.pathname !== "/userroles" && <SideNav />}
      <div
        className="h-screen relative top-0 left-0 overflow-y-scroll"
        style={{
          width: "100%",
        }}
      >
        <div className="sticky top-0 left-0 z-40">
          <TopNav />
        </div>
        <div className="lg:px-6 px-2 pt-4 h-screen">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
