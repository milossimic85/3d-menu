import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AnimatedLetters from "../AnimatedLetters";
import "./contact.scss";
const Contactme = () => {
  const strArray = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"];
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="contact">
      <div className="text">
        <h1>
          <AnimatedLetters
            strArray={strArray}
            letterClass={letterClass}
            idx={15}
          >
            Contact me
          </AnimatedLetters>
        </h1>
        <p>
          I'm interested in freelance oportunities-especially ambitious or large
          projects. However, if you have other request or question, don't
          hesitate to contact me using below form either.
        </p>
      </div>
      <div className="inputs">
        <form ref={refForm}>
          <ul>
            <li className="half">
              <input
                type="text"
                name="name"
                placeholder="Insert name"
                required
              ></input>
            </li>
            <li className="half">
              <input
                type="email"
                name="name"
                placeholder="Insert email"
                required
              ></input>
            </li>
            <li>
              <input
                type="text"
                name="subject"
                placeholder="Insert subject"
              ></input>
            </li>
            <li>
              <textarea
                required
                name="message"
                placeholder="Insert message"
              ></textarea>
            </li>
            <li>
              <input
                type="submit"
                className="flat-button1"
                value="Send"
              ></input>
            </li>
          </ul>
        </form>
      </div>
      <div className="info-map">
        Milos Simic
        <br />
        Serbia
        <br />
        Vase Carapica 16 <br />
        Negotin
        <br />
        <br />
        <span className="123">milossimic85@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[44.22639, 22.53083]} zoom={13}>
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[44.22639, 22.53083]}>
            <Popup>Milos live here :/</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contactme;
