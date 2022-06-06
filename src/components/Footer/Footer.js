import React from 'react';
import map from "../../assets/map.png";
import insta from "../../assets/Vector-1.png";
import linkdin from "../../assets/Vector-2.png";
import youtube from "../../assets/Vector-3.png";
import fb from '../../assets/Vector.png';
import "./Footer.css";

const Footer = () => {
    return (
      <div className="footer">
        <div className="container-fluid pl-5 pr-5">
          <div className="row">
            <div className="col-md-3">
              <p style={{ color: "#275A53" }}>Dummy</p>
              <p className="location-p">
                <span><img src={map} alt=""/></span> H#340 (4th Floor), Road #24, <br />
                New DOHS, Mohakhali, Dhaka, Bangladesh <br /> Phone: 018XXXXXXXX{" "}
                <br />
                E-mail: info@company.com
              </p>
            </div>
            <div className="col-md-3">
              <p className="p-head">Company</p>
              <p style={{ color: "#275A53" }}>Dummy</p>
              <p className="p-body">About</p>
              <p className="p-body">Site Map</p>
              <p className="p-body">Support Center</p>
              <p className="p-body">Terms Conditions</p>
              <p className="p-body">Submit Listing</p>
            </div>
            <div className="col-md-3">
              <p className="p-head">Quick Links</p>
              <p style={{ color: "#275A53" }}>Dummy</p>
              <p className="p-body">Quick Links</p>
              <p className="p-body">Rentals</p>
              <p className="p-body">Sales</p>
              <p className="p-body">Contact</p>
              <p className="p-body">Terms Conditions</p>
              <p className="p-body">Our Blog</p>
            </div>
            <div className="col-md-3">
              <p className="p-head">About Us</p>
              <p style={{ color: "#275A53" }}>Dummy</p>
              <p className="p-body">
                We are the top real estate <br /> agency in Sydney, with agents{" "}
                <br />
                available to answer any <br /> question 24/7.
              </p>
              <p className="p-body">
                <span>
                  <img style={{height:"22.65px", marginRight : "30.2px"}} src={fb} alt="" />
                </span>
                <span>
                  <img style={{height:"22.65px", marginRight : "30.2px"}} src={insta} alt="" />
                </span>
                <span>
                  <img style={{height:"22.65px", marginRight : "30.2px"}} src={linkdin} alt="" />
                </span>
                <span>
                  <img style={{height:"22.65px", marginRight : "30.2px"}} src={youtube} alt="" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;