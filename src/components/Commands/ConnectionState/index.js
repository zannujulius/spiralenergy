import React, { useState } from "react";
import "./style.css";

const ConnectionSatate = ({ leftContent, rightContent, setFS, fs }) => {
  const [selected, setSelected] = useState("");

  const handleSelected = (n) => {
    if (n === 0) {
      setSelected((prev) => n);
      setFS((prev) => n);
    } else if (n === 1) {
      setSelected((prev) => n);
      setFS((prev) => n);
    }
  };

  return (
    <div className="question-input__check day">
      <div className="question-check__cover" onClick={() => handleSelected(1)}>
        <div
          className={selected === 1 ? "question-box active" : "question-box"}
        ></div>
        <div
          className={
            selected === 1
              ? "question-check__option active"
              : "question-check__option "
          }
        >
          {leftContent}
        </div>
      </div>
      <div className="question-check__cover" onClick={() => handleSelected(0)}>
        <div
          className={selected === 0 ? "question-box active" : "question-box"}
        ></div>
        <div
          className={
            selected === 0
              ? "question-check__option active"
              : "question-check__option"
          }
        >
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default ConnectionSatate;
