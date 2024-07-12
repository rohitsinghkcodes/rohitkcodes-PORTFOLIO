import React from "react";
import frontend from "../../Images/icons/frontend.png";
import backend from "../../Images/icons/backend.png";
import swd from "../../Images/icons/swd.png";
import flutter from "../../Images/icons/flutter.png";
import { techList } from "../../Helpers/techList.js";
import "../../Styling/HomePageComponents/Page1_skills.css";
const Page1 = () => {
  return (
    <div className="page1 bg" id="scrollspyHeading1">
      <div className="container">
        <div>
          <h1>Skills</h1>
          <h6>
            As a developer, these are the skills I excel in, along with the
            tools and technologies I use to bring projects to life.
          </h6>

          <div className="row d-flex justify-content-between text-center">
            <div
              className="card text-light mb-3 pt-4 p-2 skill-card"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
                <img src={frontend} alt="" />
                <h5 className="card-title mt-4 px-2">Front-end Development</h5>
                <hr />
                <p>
                  Proficient in HTML, CSS, JavaScript, React, Bootstrap, and
                  Tailwind-CSS frameworks.
                </p>
              </div>
            </div>

            <div
              className="card text-light mb-3 pt-4 p-2 skill-card"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
                <img src={backend} alt="" />
                <h5 className="card-title mt-4 px-2">Back-end Development</h5>
                <hr />
                <p>
                  Specialized in building server-side apps & APIs with Node.js
                  and Express.js, with NoSQL (MongoDB).
                </p>
              </div>
            </div>
            <div
              className="card text-light mb-3 pt-4 p-2 skill-card"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
                <img src={swd} alt="" />
                <h5 className="card-title mt-4 px-2">Software Development</h5>
                <hr />
                <p>
                  Proficient in OOPs, DSA, C++, Python, and JS concepts, with
                  strong problem-solving skills from Competitive Prog.
                </p>
              </div>
            </div>
            <div
              className="card text-light mb-3 pt-4 p-2 skill-card"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
                <img src={flutter} alt="" />
                <h5 className="card-title mt-4 px-4">Flutter Development</h5>
                <hr />
                <p>
                  Skilled in developing hybrid mobile apps and cross-platform
                  solutions using the Flutter framework.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* TOOLS */}

        <div className="row mt-4 d-flex justify-content-center">
          {/* <h3>Tools & Technologies</h3> */}
          {techList.map((m, index) => (
            // <div className="ring" key={index}>
            //   <div className="ring2">
            //     <p>{m}</p>
            //   </div>
            // </div>

            <div
              className=" techs"
            >
              <p className="tech-icons  ">{m}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page1;
