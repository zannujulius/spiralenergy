import DollarImg from "../../../assets/svg/dollarimg.svg";
import { themeColor as color } from "../../../constant/color";
import "./styles.css";

const SiteDetailsCard = ({ desc, value, imgType }) => {
  return (
    <div className="p-3">
      <div className="flex flex-row items-center justify-between">
        <div className="w-1/2">
          <div className="site-card__desc">{desc}</div>
        </div>
        <div className="w-1/2">
          <div>
            {/* <img src={DollarImg} alt="" className="site-card__img" style={{}} /> */}
          </div>
        </div>
      </div>
      <div
        className="site-card__amount mt-5 text-center p-2 rounded-0"
        style={{
          color: color.baseColor,
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default SiteDetailsCard;
