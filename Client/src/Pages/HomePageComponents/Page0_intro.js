import React from "react";
import Typewriter from "typewriter-effect";
import dp from "../../Images/img2.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaGithub,FaPinterest } from "react-icons/fa";
import { SMLinks } from "../../Components/Helpers/socialMediaLinks.js";
import "../../Styling/HomePageComponents/Page0_intro.css";


const Page0 = () => {
  const skillSet = [
    "Software Engineer",
    "Fullstack Developer",
    "Flutter Developer",
  ];
  return (
    <div className="page0 intro flex-column" id="scrollspyHeading0">
      {/* card for intro */}
      <div className="container">
        <div className="row text-start align-items-center d-flex justify-content-lg-around">
          <div className="col-lg-7 order-lg-1 order-2">
            <div className="p-1">
              <h4 className="mb-0">
                <span style={{ color: "greenyellow" }}>Hi</span> I'm
              </h4>
              <h1>Rohit Kumar</h1>

              <h4 className="typeloop">
                {" "}
                I am a &ensp;
                <span>
                  <Typewriter
                    options={{
                      strings: skillSet,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h4>
            </div>
            <h6 className="ms-lg-1 intro-text">
              Hi there! I'm Rohit Kumar, a full-stack developer based in India.
              I specialize in creating dynamic web applications with the MERN
              stack and cross-platform applications using the Flutter framework.
            </h6>
            {/* Social Media */}
            <div className="sm-container">
              <Link to={SMLinks.instagram}>
                <FaInstagram size="24px" className="social-icons smicon" />
              </Link>
              <Link to={SMLinks.linkedin}>
                <FaLinkedinIn size="24px" className="social-icons smicon" />
              </Link>
              <Link to={SMLinks.github}>
                <FaGithub size="24px" className="social-icons smicon" />
              </Link>
              <Link to={SMLinks.github}>
                <FaPinterest size="24px" className="social-icons" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 order-lg-2 order-1  d-flex justify-content-center">
            <img className="img-fluid" src={dp} alt="Logo" />
          </div>
        </div>
      </div>
      <svg
        className="svg"
        viewBox="0 0 247 390"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          id="wheel"
          d="M123.359,79.775l0,72.843"
          style={{ fill: "none", stroke: "#fff", strokeWidth: 30 }}
        />
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style={{ fill: "none", stroke: "#fff", strokeWidth: 15 }}
        />
      </svg>
    </div>
  );
};

export default Page0;
