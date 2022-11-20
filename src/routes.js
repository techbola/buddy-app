import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EmailVerified from "./pages/EmailVerified";
import ConfirmCode from "./pages/ConfirmCode";
import ConfirmEmail from "./pages/ConfirmEmail";
import Dashboard from "./pages/Dashboard";
import { AppContext } from "./AppContext";
import NotAuthenticated from "./components/NotAuthenticated";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/verify-code" element={<ConfirmCode />} />
      <Route path="/confirm-email" element={<ConfirmEmail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotAuthenticated />} />
    </Routes>
  );
};

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/*" element={<Dashboard />} />
    </Routes>
  );
};

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);
  return isLoggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default MainRoutes;
