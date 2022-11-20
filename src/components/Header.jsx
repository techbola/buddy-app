import React from "react";

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <div className="actions">
        <input type="text" className="search" placeholder="Search" />
      </div>
    </header>
  );
};

export default Header;
