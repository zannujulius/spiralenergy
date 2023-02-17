import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./screens/Auth/Login";
import { Route, Routes } from "react-router-dom";
import ResetPassword from "./screens/Auth/ResetPassword";
import ForgotPassword from "./screens/Auth/ForgotPassword";
import CompleteRegistration from "./screens/Auth/CompleteRegistration";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/completeregistration"
          element={<CompleteRegistration />}
        />
      </Routes>
    </div>
  );
}

export default App;
