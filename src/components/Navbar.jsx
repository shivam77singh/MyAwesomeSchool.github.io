import React, { useState } from "react";
import "../style/navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setIsScroll(true);
    } else setIsScroll(false);
  });

  const openNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <nav className={isScroll ? "navbar change-navbar" : "navbar"}>
      <div className="navbar-component">
        <div className="logo">
          <p>Atlas School</p>
        </div>
        <ul
          style={isOpen ? { left: "0px" } : { left: "-1000px" }}
          className="nav-links"
        >
          <li>About Us</li>
          <li>Admission</li>
          <li>Academics</li>
          <li>School Radio</li>
          <li>Contact</li>
          <li
            className={
              isScroll ? "highlight-link change-highlight" : "highlight-link"
            }
          >
            Enquiry
          </li>
        </ul>

        <div
          onClick={() => {
            openNavbar();
          }}
          className="menu"
        >
          <div
            style={
              isOpen
                ? {
                    transform: "translateY(0px) rotate(45deg)",
                    backgroundColor: "white",
                  }
                : {}
            }
            className={isScroll ? "line1 change-line" : "line1"}
          ></div>
          <div
            style={isOpen ? { display: "none" } : { display: "block" }}
            className={isScroll ? "line2 change-line" : "line2"}
          ></div>
          <div
            style={
              isOpen
                ? {
                    transform: "translateY(-8px) rotate(-45deg)",
                    backgroundColor: "white",
                  }
                : {}
            }
            className={isScroll ? "line3 change-line" : "line3"}
          ></div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
