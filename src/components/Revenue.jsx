import React from "react";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";

import RevenueItem from "./RevenueItem";

const Revenue = () => {
  return (
    <div className="revenue">
      <h4>Revenue</h4>
      <div className="content">
        <RevenueItem
          amount="$4,000"
          description="Recently Added Pages"
          icon={FacebookIcon}
        />
        <RevenueItem
          amount="$2,120"
          description="Video Monetization"
          icon={InstagramIcon}
        />
        <RevenueItem
          amount="$1,752"
          description="Community Buildup"
          icon={LinkedinIcon}
        />
      </div>
    </div>
  );
};

export default Revenue;
