import React, { useState, useEffect } from "react";
import "../style/home.css";
import img2 from "../images/bg2.jpg";
import img1 from "../images/bg1.jpg";
import img3 from "../images/bg3.jpg";

function Home() {
  const gotToAbout = () => {
    const ele = document.querySelector(".about");
    ele.scrollIntoView();
  };

  return (
    <>
      <section className="home">
        <div className="home-container">
          <div className="home-info">
            <h1>Leaders Start here</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              obcaecati magnam quia deserunt magni non
            </p>
            <button
              onClick={() => {
                gotToAbout();
              }}
            >
              Know More
            </button>
          </div>
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                url(${img3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="carousal-slide"
          ></div>
        </div>
      </section>
    </>
  );
}

export default Home;
