import React from "react";
import logo from "../assets/icons/logo.svg";
import CheckIcon from "../assets/icons/check.svg";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__side">
        <img src={logo} className="logo" alt="Buddy App" />
        <div className="items">
          <div className="item">
            <img src={CheckIcon} alt="Check icon" />
            <span>
              Track real-time overview of company’s financial performance.
            </span>
          </div>
          <div className="item">
            <img src={CheckIcon} alt="Check icon" />
            <span>
              Track created projects budget against actual revenue and expenses.
            </span>
          </div>
          <div className="item">
            <img src={CheckIcon} alt="Check icon" />
            <span>
              Highlighted reports on budget deficit and surplus, accounting
              dimensions, balance sheets and real-time sales margin estimation.
            </span>
          </div>
        </div>
        <div className="copy">&copy; 2022 Revvex. All rights reserved</div>
      </div>
      <div className="auth-layout__main">{children}</div>
    </div>
  );
};

export default AuthLayout;
