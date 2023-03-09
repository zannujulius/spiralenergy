import DollarImg from "../../../assets/svg/dollarimg.svg";
import FlashImg from "../../../assets/svg/yellowflash.svg";
import MoneyImg from "../../../assets/svg/moneyimg.svg";
import MonitorImg from "../../../assets/svg/monitorimg.svg";
import CustomerImg from "../../../assets/svg/customeruserimg.svg";
import UserImg from "../../../assets/svg/maleimg.svg";
import { themeColor as color } from "../../../constant/color";
import "./styles.css";
import { Link } from "react-router-dom";
import { Select } from "antd";

const SiteDetailsCardRight = ({
  title,
  value,
  imgType,
  caption,
  bg,
  border,
  link,
}) => {
  const { Option } = Select;
  return (
    <div className="container p-3 flex align-center justify-center flex-col">
      <div className="w-full flex align-center justify-between bg-white">
        <div
          className=" mt-2 site-card_title"
          style={{
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {title}
        </div>
        <div className="w-1/3 mt-2">
          <div className="details-btn__card">
            <Select
              size="medium"
              style={{
                width: "100%",
              }}
              placeholder={"Select date."}
            >
              {[
                { id: 1, item: "Today" },
                { id: 2, item: "Week" },
                { id: 3, item: "Month" },
                {
                  id: 4,
                  item: "Year",
                },
              ].map(({ id, item }) => (
                <Option key={id} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="flex w-full items-start justify-between">
        <div className=" w-1/2 mt-2">
          <div
            className="site-card_right-cover  container-fluid p-3 w-full flex align-center justify-between"
            style={{
              background: bg || color.secondaryColor,
              border: border || "none",
            }}
          >
            <div
              className="flex w-1/3 align-center justify-between "
              style={{
                height: "50px",
              }}
            >
              {imgType == "monitor" && (
                <img
                  src={MonitorImg}
                  alt=""
                  loading="lazy"
                  className="site-card__img-right"
                />
              )}
              {imgType == "flash" && (
                <img
                  src={FlashImg}
                  alt="flash"
                  loading="lazy"
                  className="site-card__img-right"
                />
              )}

              {imgType == "money" && (
                <img
                  src={MoneyImg}
                  alt="moiney img"
                  loading="lazy"
                  className="site-card__img-right"
                />
              )}

              {imgType == "customers" && (
                <img
                  src={CustomerImg}
                  alt="moiney img"
                  loading="lazy"
                  className="site-card__img-right"
                />
              )}
            </div>
            <div className="w-1/2 flex flex-col items-end justify-end">
              <div className="site-card_right-value">{value}</div>
              <div className="site-card_right-caption mt-2">{caption}</div>
            </div>
          </div>
        </div>
        <div className="w-1/3 mt-2">
          <div className="details-btn__card">
            <Link to={link || "/"} className="text-decoration-none">
              <div
                className="details-btn__card-text px-3 py-2 rounded-1"
                style={{
                  fontSize: "12px",
                }}
              >
                View details
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDetailsCardRight;
