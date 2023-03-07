import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./screens/Auth/Login";
import { Route, Routes } from "react-router-dom";
import ResetPassword from "./screens/Auth/ResetPassword";
import ForgotPassword from "./screens/Auth/ForgotPassword";
import CompleteRegistration from "./screens/Auth/CompleteRegistration";
import UserDashboard from "./screens/Dashboard/UserDashboard";
import UserRoles from "./screens/Roles/UserRoles";
import SalesAgentDashboard from "./screens/Dashboard/SalesAgentDashboard";
import SysAdminDashboard from "./screens/Dashboard/SysAdminDashboard";
import CreateAccount from "./screens/Auth/CreateAccount";
import toast, { Toaster } from "react-hot-toast";
import EmailVerification from "./screens/Auth/EmailVerification";
import SignIn from "./screens/Auth/SignIn";
function App() {
  return (
    <div className="">
      <Routes>
        {/* New */}
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/" element={<SignIn />} />

        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/completeregistration"
          element={<CompleteRegistration />}
        />
        {/* UserDashboard */}
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="dashboard/salesagent" element={<SalesAgentDashboard />} />
        <Route path="dashboard/systemadmin" element={<SysAdminDashboard />} />
        {/* user roles */}
        <Route path="userroles" element={<UserRoles />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
