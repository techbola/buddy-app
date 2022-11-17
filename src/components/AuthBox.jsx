import React from "react";
import Button from "./Button";
import chatIcon from "../assets/icons/chat.svg";

const AuthBox = ({ children, header, description, getHelp = true }) => {
  return (
    <div className="auth-box">
      <div className="title">
        <h4>{header}</h4>
        {description && <p>{description}</p>}
      </div>
      {children}
      <div className="get-help">
        <Button
          text="Get Help"
          type="primary"
          iconRight={chatIcon}
          style={{ borderRadius: "60px", padding: "15px" }}
        />
      </div>
    </div>
  );
};

export default AuthBox;
