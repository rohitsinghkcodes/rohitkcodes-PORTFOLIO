import React, { useEffect, useState } from "react";
import "../Styling/HomePageComponents/Page3_projects.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import Layout2 from "../Components/Layouts/Layout2.js";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "https://rohitkcodes-server.onrender.com/api/projects/all-projects"
      );
      if (response.data.success) {
        setProjects(response.data.projects);
      } else {
        toast.error("Something went wrong while fetching the main projects");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Layout2>
      <div className="page3 bg-img" id="scrollspyHeading2">
        <div className="container">
          <h1> My Projects</h1>
          <h6>
            These projects demonstrate my expertise with practical examples of
            some of my work, including brief descriptions and links to code
            repositories and live demos. They showcase my ability to tackle
            intricate challenges, adapt to various technologies, and efficiently
            oversee projects.
          </h6>

          <div className="flex-wrap d-flex justify-content-center">
            {projects.length > 0 ? (
              projects.map((p) => (
                <div key={p._id} className="">
                  <div className="card bg-dark text-light rounded-5 proj-card mx-2 my-4 p-0">
                    <img
                      src={p.img}
                      className="card-img-top rounded-top-5 p-0"
                      alt={p.title}
                    />

                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        {/* Project title */}
                        <h4 className="card-text">{p.title}</h4>
                        <div>
                          <Link to={p.github} target="_blank">
                            <FiGithub size="20px" className="social-icons" />
                          </Link>
                          {p?.web_link && (
                            <Link to={p.web_link} target="_blank">
                              <MdOpenInNew
                                size="20px"
                                className="ms-2 social-icons"
                              />
                            </Link>
                          )}
                        </div>
                      </div>
                      {/* Project Description */}
                      <p className="card-text">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects to display</p>
            )}
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default AllProjects;
