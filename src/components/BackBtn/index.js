import { themeColor as color } from "../../constant/color";
import { IoChevronBack } from "react-icons/io5";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const BackBtn = ({ text }) => {
  let navigate = useNavigate();
  return (
    <div
      className="back-btn d-flex align-items-center "
      onClick={() => navigate(-1)}
      style={{
        width: "200px",
        cursor: "pointer",
        fontSize: 14,
      }}
    >
      <IoChevronBack size={15} color={color.baseColor} />
      <div
        className="back-btn__title px-1"
        style={{
          color: color.baseColor,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default BackBtn;
