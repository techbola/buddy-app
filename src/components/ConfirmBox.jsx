import React from "react";

const AuthBox = ({ children, header, description, icon, styles }) => {
  return (
    <div className="confirm-box" style={{ ...styles }}>
      {icon && <img src={icon} alt="" style={{ marginBottom: "36px" }} />}
      <div className="title">
        <h4>{header}</h4>
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  );
};

export default AuthBox;
