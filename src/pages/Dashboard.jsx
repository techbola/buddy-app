import React from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import ChannelsIcon from "../assets/icons/circle_layer.svg";
import AddAccountIcon from "../assets/icons/add_account.svg";
import GrowthIcon from "../assets/icons/growth";

import OverviewChart from "../components/Chart";
import TrendingPosts from "../components/TrendingPosts";
import Members from "../components/Members";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="summary">
        <div className="summary__item">
          <div className="header">
            <h1>51</h1>
            <p>Total Channels</p>
          </div>
          <img src={ChannelsIcon} alt="Total Channels" />
        </div>
        <div className="summary__item">
          <div className="header">
            <h1>125</h1>
            <p>New Menebers</p>
          </div>
          <img src={AddAccountIcon} alt="Total Channels" />
        </div>
        <div className="summary__item">
          <div className="header">
            <h1>789</h1>
            <p>All Impressions</p>
          </div>
          <div className="bg-warning-light impr_icon">
            <GrowthIcon color="#FF8600" />
          </div>
        </div>
      </div>
      <OverviewChart />
      <TrendingPosts />
      <Members />
    </DashboardLayout>
  );
};

export default Dashboard;
