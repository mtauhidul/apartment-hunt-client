import React from "react";
import { Link } from "react-router-dom";

import logo from "../../Logo.png";
import "./NavBar.css";
const NavBar = () => {
  return (
    <React.Fragment>
      <nav
        style={{ paddingLeft: "135px", paddingRight: "144px" }}
        className="navbar navbar-expand-lg navbar-light bg-white "
      >
        <img style={{ height: "54px", width: "100px" }} src={logo} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active mr-2">
              <a className="nav-link" href="#home">
                <b>Home</b>
              </a>
            </li>
            <li className="nav-item active mr-2">
              <a className="nav-link" href="#about">
                <b>About</b>
              </a>
            </li>
            <li className="nav-item active mr-2">
              <Link to="/Appartments" className="nav-link">
                <b>Service</b>
              </Link>
            </li>
            <li className="nav-item active mr-2">
              <a className="nav-link" href="#concerns">
                <b>Concerns</b>
              </a>
            </li>
            <li className="nav-item active mr-2">
              <a className="nav-link" href="#event">
                <b>Event</b>
              </a>
            </li>
            <li className="nav-item active mr-2">
              <a className="nav-link" href="#contact">
                <b>Contact</b>
              </a>
            </li>
            <li className="nav-item active mr-2">
              <a
                style={{
                  backgroundColor: "#275A53",
                  width: "104px",
                  borderRadius: "5px",
                  textAlign: "center",
                  color: "#fff",
                }}
                className="nav-link"
                href="Login"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
