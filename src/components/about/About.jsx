import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import "./about.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["i", "l", "o", "s"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []);
  return (
    <div className="container-about">
      <h1>
        <span className={`${letterClass}-${11}`}>H</span>
        <span className={`${letterClass}-${12}`}>i,</span>
        <br />
        <span className={`${letterClass}-${13}`}>I</span>
        <span className={`${letterClass}-${14}`}>'m</span>
        <span className="m"> M</span>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
        >
          iloš
        </AnimatedLetters>
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19}>
          web developer.
        </AnimatedLetters>
      </h1>
      <h2>React JS junior Developer, Javascript junior</h2>
      <Link to="/contact" className="flat-button">
        Contact Me
      </Link>
    </div>
  );
};

export default About;
