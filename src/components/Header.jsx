import React from "react";
import PlusIcon from "../assets/icons/plus.svg";
import BellIcon from "../assets/icons/bell.svg";

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <div className="actions">
        <input type="text" className="search" placeholder="Search" />
        <img src={PlusIcon} alt="add account" />
        <img src={BellIcon} alt="notifications" />
      </div>
    </header>
  );
};

export default Header;
