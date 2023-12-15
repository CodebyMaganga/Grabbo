import React from "react";
import "./hero.css";
import signIn from "../images/signIn.png";
import delivery from "../images/delievery.png";
import eat from "../images/fork n knife.png";

const Hero = () => {
  return (
    <>
      <section className="hero-container flex flex-row relative">
        <div className="text-box text-5xl font-extrabold text-white text-center w-auto sm:text-5xl sm:ml-4 ">
          <p className="inline-block align-middle">
            Indulge in <span style={{ color: "#F55536" }}>Flavorful </span>
            <span style={{ color: "#FFB238" }}>Delights:</span> Where Every{" "}
            <span style={{ color: "#FFB238" }}> Bite </span>
            Tells a <span style={{ color: "#FF773D" }}>Story!"</span>
          </p>
        </div>
      </section>
      <div className="wave absolute bottom-0 left-0 w-full h-auto ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full hidden sm:visible"
          style={{ zIndex: -1 }}
        >
          <path
            fill="#000103"
            fill-opacity="1"
            d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,165.3C672,149,768,171,864,165.3C960,160,1056,128,1152,133.3C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="mt-10">
        <div className="text-center text-2xl font-extrabold">
          <h2>How It works</h2>
        </div>
        <div className=" info-section grid place-items-center min-[800px]:flex min-[800px]:flex-row min-[800px]:justify-around">
          <div className="mt-10 iconvisuals w-24">
            <img src={signIn} alt="" />
            <p>Sign In and Choose From our weekly menu</p>
          </div>
          <div className="iconvisuals mt-10 w-24">
            <img src={delivery} alt="" />
            <p>We will deliver your purchase</p>
          </div>
          <div className="iconvisuals mt-10 w-24">
            <img src={eat} alt="" />
            <p>Enjoy your meal</p>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-10">
          <button className="bg-engorange p-4 rounded-2xl shadow-lg shadow-raisinblack">
            Subscribe Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
