// import "./style.css";

import SideNav from "../SideNav";
import TopNav from "../TopNav";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen fixed items-start top-0 hidden md:flex lg:flex left-0">
      <SideNav />
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
