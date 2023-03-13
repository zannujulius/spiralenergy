import { themeColor as color } from "../../constant/color";
import { IoChevronBack } from "react-icons/io5";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const BackBtn = ({ text }) => {
  let navigate = useNavigate();
  return (
    <div
      className="back-btn flex align-items-center w-[fit-content] cursor-pointer mb-2 p-2"
      onClick={() => navigate(-1)}
      style={{
        fontSize: 14,
      }}
    >
      <div className="flex align-items-center justify-center pt-1 underline">
        <IoChevronBack size={15} color={"gray"} />
      </div>
      <div
        className="back-btn__title px-1 text-secondary font-semibold underline"
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
