import React from "react";
import Menu from "../common/menu/Menu";
import Header from "../common/header/Header";
import { Outlet } from "react-router-dom";
import "./main-layout.scss";
import { useState } from "react";
import Cube from "../common/cube/Cube";

const MainLayout = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={`container ${active ? "active" : ""}`}>
      <Header active={active} setActive={setActive} />
      <div className="main-container">
        <div className="main">
          <div className="content">
            <div className="overlay">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Menu active={active} setActive={setActive} />
    </div>
  );
};

export default MainLayout;
