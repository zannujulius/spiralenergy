import "./styles.css";
// import ControlImg from "../../../assets/images/controlimg.png";

const SideBarFooter = () => {
  return (
    <div className="sdb-bottom d-none">
      <div className="sdb-content p-3 w-100 h-100 d-flex flex-column align-items-start justify-content-start">
        <div className="sdb-title text-white fw-bold">Ampere plus</div>
        <div className="sdb-caption text-white">
          Building smart meters for the future.
        </div>
      </div>
      <div className="sdb-img">
        {/* <img
          src={ControlImg}
          alt={"Control img"}
          style={{
            width: "100%",
            height: "100%",
          }}
        /> */}
      </div>
    </div>
  );
};

export default SideBarFooter;
