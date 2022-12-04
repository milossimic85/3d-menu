import React, { useEffect, useState } from "react";
import Contactme from "../components/contact/Contactme";
import { CirclesWithBar } from "react-loader-spinner";

const Contact = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);
  return (
    <div>
      {!show && <Contactme />}
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

export default Contact;
