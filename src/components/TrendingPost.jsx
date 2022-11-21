import React from "react";

const TrendingPost = ({ heading, description }) => {
  return (
    <div className="item">
      <div className="header">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TrendingPost;
