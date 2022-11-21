import React, { useContext } from "react";
import { AppContext } from "../lib/AppContext";
import { useNavigate } from "react-router-dom";

import logo from "../assets/icons/logo.svg";
import GrowthIcon from "../assets/icons/growth";
import MoneyIcon from "../assets/icons/dollar";
import AccountIcon from "../assets/icons/account";
import UsersIcon from "../assets/icons/users";
import SettingsIcon from "../assets/icons/setting";
import LogoutIcon from "../assets/icons/logout.svg";
import Avatar from "../assets/images/avatar.png";
import Button from "../components/Button";

const Sidebar = () => {
  const { userDetails, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ isLoggedIn: false });
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <nav className="sidebar">
      <div className="sidebar__top">
        <div className="logo">
          <img src={logo} className="search-input" alt="Buddy App" />
        </div>

        <ul>
          <li>
            <div className="link">
              <AccountIcon className="mr-2" /> <span>My Portfolio</span>
            </div>
          </li>
          <li>
            <div className="link">
              <UsersIcon className="mr-2" />
              <span>My Group</span>
            </div>
          </li>
          <li>
            <div className="link">
              <GrowthIcon className="mr-2" /> <span>Analytics</span>
            </div>
          </li>
          <li>
            <div className="link">
              <MoneyIcon className="mr-2" /> <span>Pack</span>
            </div>
          </li>
          <li>
            <div className="link">
              <SettingsIcon className="mr-2" /> <span>Settings</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="sidebar__bottom">
        <img src={Avatar} className="avatar" alt={userDetails.first_name} />
        <h6>{userDetails.first_name + " " + userDetails.last_name}</h6>
        <p>Influencer</p>
        <Button
          type="warning"
          iconLeft={LogoutIcon}
          isFullWidth
          text="Logout"
          handleClick={handleLogout}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
