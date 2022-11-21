import React from "react";

const RevenueItem = ({ amount, description, icon }) => {
  return (
    <div className="item">
      <div className="header">
        <h1>{amount}</h1>
        <p>{description}</p>
      </div>
      <img src={icon} alt="" />
    </div>
  );
};

export default RevenueItem;
