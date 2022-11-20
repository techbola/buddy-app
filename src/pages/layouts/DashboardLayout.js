import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import RightSidebar from "../../components/RightSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar />
      <RightSidebar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
