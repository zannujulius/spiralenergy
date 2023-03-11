import "./style.css";
const Skimmer = ({ width, heigth }) => {
  return (
    <div
      className="skimmer"
      style={{
        width: width || "100%",
        height: heigth || "30px",
      }}
    >
      <div className="skimmer-container"></div>
    </div>
  );
};

export default Skimmer;
