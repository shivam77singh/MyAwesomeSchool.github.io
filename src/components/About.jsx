import React from "react";
import img2 from "../images/bg2.jpg";
import img1 from "../images/bg1.jpg";
import img3 from "../images/bg3.jpg";
import "../style/about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-container">
          <div className="bg-color"></div>
          <div className="about-info">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              sed qui consequuntur repudiandae temporibus in mollitia maxime?
            </p>
          </div>
          <div className="about-gallery">
            <div className="about-img1">
              <img src={img1} alt="" />
            </div>
            <div className="about-img2">
              <img src={img2} alt="" />
            </div>
            <div className="about-img3">
              <img src={img3} alt="" />
            </div>
            <div className="about-img4">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
