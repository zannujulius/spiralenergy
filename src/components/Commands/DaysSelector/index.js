import React, { useState } from "react";
import "./style.css";

const DaysSelector = ({ fd, setFd, height, border }) => {
  const [daysData, setDaysData] = useState([
    {
      id: 1,
      title: "Sunday",
      value: 0,
    },
    {
      id: 2,
      title: "Monday",
      value: 0,
    },
    {
      id: 3,
      title: "Tuesday",
      value: 0,
    },
    {
      id: 4,
      title: "Wednesday",
      value: 0,
    },
    {
      id: 5,
      title: "Thursday",
      value: 0,
    },
    {
      id: 6,
      title: "Friday",
      value: 0,
    },
    {
      id: 7,
      title: "Saturday",
      value: 0,
    },
  ]);

  const handleSelectedDay = (i) => {
    let data = [...daysData];
    if (data[i].value === 0) {
      data[i].value = 1;
      setFd((prev) => [...data]);
    } else {
      data[i].value = 0;
      setFd((prev) => [...data]);
    }
    let mapArr = daysData.map((day) => day.value);
    setFd((prev) => [...mapArr]);
  };

  return daysData.map((item, i) => (
    <div
      className={
        item.value === 1
          ? "px-3 py-2 mx-2 rounded-md mt-2 bg-secondary text-white hover:bg-secondary hover:border-[2px] hover:border-secondary cursor-pointer transition-all ease-in "
          : "px-3 py-2 mx-2 rounded-md border-[1px] border-gray-400 mt-2 hover:border-[2px] hover:border-gray-500 cursor-pointer hover:bg-gray-100"
      }
      style={{
        height: height || "40px",
        width: "fit-content",
      }}
      key={i}
      onClick={() => handleSelectedDay(i)}
    >
      {item.title}
    </div>
  ));
};

export default DaysSelector;
