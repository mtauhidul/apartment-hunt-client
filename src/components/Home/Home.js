import React from "react";
import Appartments from "../Appartments/Appartments";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#F1F6F4" }}>
      <section className="home-bg">
        <NavBar></NavBar>
        <h1 className="heading">FIND YOUR HOUSE RENT</h1> <br />
        <div className="input-div">
          <input className="input-box" type="text" placeholder="Search....." />
          <button className="find-button">Find Now</button>
        </div>
      </section>
      <Appartments></Appartments>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
