import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-container">
          <img
            src="/images/imageAboutMe.jpg"
            alt="Arthur Hirche"
            className="about-image"
          />
        </div>
        <div className="about-text">
          <h1>Sobre Mim</h1>
          <div className="about-description">
            <p>Texto...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
