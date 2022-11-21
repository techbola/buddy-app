import React from "react";
import Button from "./Button";

const Chart = () => {
  return (
    <div className="overview-chart">
      <div className="heading">
        <h1>Overview</h1>
        <div className="filters">
          <Button
            type="primary"
            text="Robbin Hood"
            style={{ borderRadius: "12px", marginRight: "8px" }}
          />
          <Button
            type="secondary"
            text="Amreitrade"
            style={{ borderRadius: "12px", marginRight: "8px" }}
          />
          <Button
            type="secondary"
            text="Fidelity"
            style={{ borderRadius: "12px", marginRight: "8px" }}
          />
          <Button
            type="secondary"
            text="Charles"
            style={{ borderRadius: "12px", marginRight: "8px" }}
          />
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Chart;
