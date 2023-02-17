import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./screens/Auth/Login";
import { Route, Routes } from "react-router-dom";
import ResetPassword from "./screens/Auth/ResetPassword";
import ForgotPassword from "./screens/Auth/ForgotPassword";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
