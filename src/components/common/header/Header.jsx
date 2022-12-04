import React from "react";
import "./header.scss";

const Header = ({ active, setActive }) => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="logo">Portfolio</div>
        <div
          className={`menu-toggle ${active ? "active" : ""}`}
          onClick={() => {
            setActive(!active);
          }}
        >
          <i className="bx bx-menu"></i>
          <i className="bx bx-x"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
