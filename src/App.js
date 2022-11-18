import React from "react";
import "./assets/css/styles";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import EmailVerified from "./components/EmailVerified";
import ConfirmCode from "./components/ConfirmCode";
import ConfirmEmail from "./components/ConfirmEmail";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/verify-code" element={<ConfirmCode />} />
      <Route path="/confirm-email" element={<ConfirmEmail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
