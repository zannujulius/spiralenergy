import "./styles.css";
import { DatePicker } from "antd";
import moment from "moment";

const DateRangePicker = ({ setStartDate, setEndDate, refreshBtn, desc }) => {
  const { RangePicker } = DatePicker;
  return (
    <div className="w-100 bg-white p-1 rounded-1">
      {desc && (
        <div
          className="pb-2"
          style={{
            fontSize: 15,
            color: "#878787",
            fontWeight: 300,
          }}
        >
          Select a date range
        </div>
      )}
      <RangePicker
        showTime={{ format: "HH:mm" }}
        format="YYYY-MM-DD HH:mm"
        onChange={(e) => {
          setStartDate(moment(e[0]._d).format("YYYY-MM-DD"));
          setEndDate(moment(e[1]._d).format("YYYY-MM-DD"));
          refreshBtn((prev) => !prev);
        }}
      />
    </div>
  );
};

export default DateRangePicker;
