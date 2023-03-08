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
    <div className=" p-3 lex items-center justify-center flex-col">
      <div className="row d-flex w-100 align-items-start justify-content-between">
        <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-7 mt-2">
          <div
            className="site-card_right-cover  container p-2 w-100 flex align-center justify-between"
            style={{
              background: bg || color.secondaryColor,
              border: border || "none",
            }}
          >
            <div
              className="d-flex col-3 align-items-center justify-content-between "
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
            <div className="w-50 col-6 d-flex flex-column align-items-end justify-content-end">
              <div className="site-card_right-value">{value}</div>
              <div className="site-card_right-caption mt-2">{caption}</div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-2">
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
      <div className="row w-100 d-flex align-items-center justify-content-between bg-white">
        <div
          className="col-sm-12 col-md-6 col-lg-6 col-xl-7 col-xxl-6 mt-2 site-card_title"
          style={{
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {title}
        </div>
        <div className="col-sm-8 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-2">
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
    </div>
  );
};

export default SiteDetailsCardRight;
