
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Appartment.css';
const Services = () => {
  const [services, setServices] = useState([]);
  const [redirect, setRedirect] = useState();

  // Database
  useEffect(() => {
    fetch("https://apartment-hunt-backend-server.herokuapp.com/services")
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setRedirect(true)
      })
  }, [redirect]);
  return (
    <div className="container" id="service">
      {services.length === 0 && <h1 align="center"> Please Wait......... </h1>} <br />
      <h6 className="text-secondary text-center">House Rent</h6>
      <h3 align="center" className="text-dark"><b> Discover the latest Rent <br /> available today </b></h3>
      <div className="d-flex justify-content-center">
        <div className="mx-auto w-100 row mt-2">
          {
            services.map(service => <div className="col-md-4 card bg-light mb-4" style={{ border: "none" }} service={service} key={service.name}>

              
                <img className="serviceImg card-img-top" src={`data:image/png;base64,${service.image.img}`} alt="" />
                <div className="card-body bg-white" >
                  <h5 className="mt-3 mb-2 card-title"><strong>{service.name}</strong> </h5>
                  <p> <img src={service.location} alt="" /> {service.location}</p>
                  <div className="d-flex justify-content-between">
                    <p><img src={service.bed} alt="" /> {service.bed} Bedrooms</p>
                    <p><img src={service.bath} alt="" />{service.bath} Bathrooms</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>${service.price}</h4>
                    {/* <Link style={{ textDecoration: "none", color: 'black' }} to={`/dashboard/${service.name}`}> */}
                    <Link style={{ textDecoration: "none", color: 'black' }} to={`/ApartmentMain/${service._id}`}>
                      <button className="btn btn-dark">View Details</button>
                    </Link>
                  </div>
                  {/* <p className="text-secondary">{service.desc}</p> */}
                </div>

             

            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;