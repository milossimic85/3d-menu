import {
  FaAngular,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import React from "react";
import "./cube.scss";

const Cube = () => {
  return (
    <div className="container-cube">
      <div className="box">
        <div className="card" id="front">
          <FaJs color="yellow"></FaJs>
        </div>
        <div className="card" id="back">
          <FaReact />
        </div>
        <div className="card" id="top">
          <FaHtml5 />
        </div>
        <div className="card" id="right">
          <FaCss3 />
        </div>
        <div className="card" id="left">
          <FaAngular />
        </div>
        <div className="card" id="bottom">
          <FaGit />
        </div>
      </div>
    </div>
  );
};

export default Cube;
