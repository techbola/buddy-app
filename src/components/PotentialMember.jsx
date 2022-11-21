import React from "react";
import GrowthIcon from "../assets/icons/growth";

const PotentialMember = ({ name, handle, rate, picture }) => {
  return (
    <div className="item">
      <img src={picture} alt="Member" />
      <div className="header">
        <h1>{name}</h1>
        <p>{handle}</p>
      </div>
      <div className="rate">
        <GrowthIcon color="#35DB95" className="mr-2" /> {rate}
      </div>
    </div>
  );
};

export default PotentialMember;
