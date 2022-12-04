import React from "react";
import "./image.scss";
import image1 from "./image1/mypicture.jpg";

const Image = () => {
  return (
    <div className="image-zone">
      <img className="image1" src={image1} alt="I'm"></img>
    </div>
  );
};

export default Image;
