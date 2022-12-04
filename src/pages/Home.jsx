import React, { useEffect, useState } from "react";
import Image from "../components/image/Image";
import "./home.scss";
import About from "../components/about/About";
import { CirclesWithBar } from "react-loader-spinner";

const Home = () => {
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
          <About />
          <Image />
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

export default Home;
