import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./aboutme.scss";

const AboutMe = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <div className="text-zone">
      <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
          idx={15}
        />
      </h1>
      <p>
        I'm very ambitious front end developer looking for a role in established
        IT company with the opportunity to work with latest tecnologies on
        challenging and diverse projects.
      </p>
      <p>
        I'm quietly confident, naturally curious, and perpetually working on
        improving my chops one design problem at a time.
      </p>
      <p>
        If I need to define myself in one sentence that would be a family
        person, a future-father, a sports fanatic, photography entusiast, and
        tech-obsessed!!!
      </p>
    </div>
  );
};

export default AboutMe;
