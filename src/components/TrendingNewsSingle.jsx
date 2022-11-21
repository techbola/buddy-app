import React from "react";

const TrendingNewsSingle = ({ heading, content, image }) => {
  return (
    <div className="item">
      <img src={image} alt="" />
      <div className="header">
        <h1>{heading}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TrendingNewsSingle;
