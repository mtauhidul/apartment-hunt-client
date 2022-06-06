import React, { useEffect, useState } from 'react';

import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

import house1 from "../../images/Rectangle 394.png";
import house3 from "../../images/Rectangle 398.png";
import house4 from "../../images/Rectangle 404.png";
import house2 from "../../images/Rectangle 405.png";
import NavBar from '../NavBar/NavBar';
import './ApartmentMain.css'






const ApartmentMain = () => {


    const { register, handleSubmit, errors } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const history = useHistory();
    const onSubmitEvent = () => {
        const formData = new FormData()
        // console.log(info);
        formData.append('name', info.name);
        formData.append('desc', info.desc);
        formData.append('email', info.email);
        formData.append('service', info.service);
        formData.append('price', info.price);

        fetch('https://apartment-hunt-backend-server.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .catch(error => {
                console.error(error)
            })
        history.push("/userService");
    };



    const { _id } = useParams();
    const [house, setHouse] = useState([]);

    useEffect(() => {
        fetch(`https://apartment-hunt-backend-server.herokuapp.com/ApartmentMain/${_id}`)
            .then(res => res.json())
            .then((data) => {
                setHouse(data);
                // console.log(data);
            });
    }, [_id])
  return (
    <div>
      <NavBar></NavBar>
      <div className="detailsSec d-flex justify-content-center align-items-center">
        <h1>Apartment</h1>
            </div>
            <div className="container mt-3 mb-3">

                <div className="row text-dark">
                    <div className="col-md-8">
                        <div>
                            {house.length === 0 ? <p>Please Wait........</p> : ""}
                            {house.image ? <img className='detImg' src={`data:image/png;base64,${house.image.img}`} alt="" /> : <img className='detImg' src={house.img} alt='' />}
                        </div> <br />
                        <div className="row subSecDetail">
                            <div className="ml-md-3 mr-3 col-xs-2 mb-3"><img src={house1} alt="" /></div>
                            <div className="mr-3 col-xs-2"><img src={house2} alt="" /></div>
                            <div className="mr-3 col-xs-2"><img src={house3} alt="" /></div>
                            <div className="mr-3 col-xs-2"><img src={house4} alt="" /></div>
                        </div>
                        <br />
                        <h3>{house.name} </h3>
                        <p>300 sq-ft, {house.bed} bedroom, Semi-furnished, Luxurious, South-facing Apartment for Rent in {house.location}</p>

                        <h4 className="mt-4"><b>Pricing Details -</b></h4>
                        <p>Rent/Month : ${house.price} (negotiable)</p>
                        <p>Service Charge : 8,000/= Tk per month</p>
                        <p>Security Deposit : 3 month's rent</p>
                        <p>Flat Release Policy : 3 months earlier notice required</p>

                        <h4 className="mt-4"><b>Property Details -</b></h4>
                        <p>Address and Area :{house.location} <br/>
                        Flat Size : 3000 Sq Feet. <br/>
                        Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit) <br/>
                        Room Category : {house.bed} Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining and Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. <br/>
                        Facilities : 1 Modern Lift, All Modern Amenities and Semi Furnished. <br/>
                        Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera <br/>
                        </p>
                    </div>

                    <div className="col-md-4">



                        <div className="adminService p-4">
                            <form action="" onSubmit={handleSubmit(onSubmitEvent)}>
                                <section className="orderServe mt-1">

                                    <div className="mb-3">
                                        <input  onBlur={handleBlur} className="w-100 mx-auto form-control" value={house.name} name="service" placeholder="Service" ref={register({ required: true })} />
                                        {errors.eventName && <span className="error">Service name is required</span>}
                                    </div>

                                    <div className="mb-3">
                                        <input  onBlur={handleBlur} className="w-100 mx-auto form-control" name="name" placeholder="Full Name" ref={register({ required: true })} />
                                        {errors.eventName && <span className="error">Name is required</span>}
                                    </div>

                                    <div className="mb-3">
                                        <input  onBlur={handleBlur} className="w-100 mx-auto form-control" name="email" placeholder="Your Email Address" ref={register({ required: true })} />
                                        {errors.eventName && <span className="error">Email is required</span>}
                                    </div>

                                    <div className="mb-3">
                                        <input  onBlur={handleBlur} className="w-100 mx-auto form-control" type="number" name="phone" placeholder="Phone Number" ref={register({ required: true })} />
                                        {errors.eventName && <span className="error">Phone number is required</span>}
                                    </div>

                                    <div className="mb-3">
                                        <textarea style={{ height: "120px", width: "100%" }} onBlur={handleBlur} className="w-100 mx-auto form-control" name="desc" placeholder="Message" ref={register({ required: true })} />
                                        {errors.eventName && <span className="error">Description is required</span>}
                                    </div>

                                    <div className="row">

                                        <div className="col-md-6">
                                            <input  onBlur={handleBlur} className="w-100 form-control" value={house.price} name="price" placeholder="Price" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Price is required</span>}
                                        </div>

                                        <div className="col-md-6">

                                        </div>
                                    </div>

                                    <p className="text-danger text-center">Please make sure you have clicked all the input tab before submitting</p>
                                    <button style={{ fontSize: "12px" }} className="btn btn-dark w-100 p-3" type="submit">Request Booking</button>

                                </section>

                            </form>
                        </div>


                    </div>

                </div>


            </div>
        </div>
    );
};

export default ApartmentMain;