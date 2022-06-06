import React from 'react';
import img2 from "../../assets/affordable 1.png";
import img1 from "../../assets/apartment 1.png";
import img3 from '../../assets/lessee 1.png';
import "./Service.css";
const Services = () => {
    return (
      <div>
        <p style={{ paddingTop: "104px" }} className="p">
          Service
        </p>
        <p style={{ marginBottom: "70px" }} className="h">
          We're an agency tailored to all <br></br>
          clients' needs that always delivers
        </p>{" "}
        <br />
        <div className="container-fluid pl-5 pr-5">
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                style={{ width: "77.5px", marginBottom: "24px" }}
                src={img1}
                alt=""
              />
              <p className="h2">Wide Range of Properties</p>
              <p className="p2">
                With a robust selection of popular <br />
                properties on hand, as well as <br />
                leading properties from experts.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                style={{ width: "77.5px", marginBottom: "24px" }}
                src={img2}
                alt=""
              />
              <p className="h2">Financing Made Easy</p>
              <p className="p2">
                Our stress-free finance department <br /> that can find
                financial solutions to <br /> save you money.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                style={{ width: "77.5px", marginBottom: "24px" }}
                src={img3}
                alt=""
              />
              <p className="h2">Trusted by Thousands</p>
              <p className="p2">
                10 new offers every day. 350 offers <br /> on site, trusted by a
                community of <br /> thousands of users.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;