import React, { useState, useEffect } from "react";
import AboutMe from "../components/aboutme/AboutMe";
import Cube from "../components/common/cube/Cube";
import { CirclesWithBar } from "react-loader-spinner";

const Service = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);
  return (
    <div className="home">
      {!show && (
        <div>
          <AboutMe />
          <Cube />
        </div>
      )}
      {show && (
        <div>
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor="blue"
            innerCircleColor="blue"
            barColor="blue"
            ariaLabel="circles-with-bar-loading"
          />
        </div>
      )}
    </div>
  );
};

export default Service;
