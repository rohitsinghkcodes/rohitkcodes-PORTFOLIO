import React, { useEffect, useState } from "react";
import "../../Styling/HomePageComponents/Page3_projects.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { projectList } from "../../Helpers/projectList.js";
import { DNA } from "react-loader-spinner";

const Page2 = () => {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);

  const fetchMainProjects = async () => {
    try {
      const response = await axios.get(
        "https://rohitkcodes-server.onrender.com/api/projects/main-projects"
      );
      if (response.data.success) {
        setShow(true);
        setProjects(response.data.projects);
      } else {
        // if not fetched from the api-fetch from json
        setProjects(projectList);
        toast.error("Something went wrong while fetching the main projects");
      }
    } catch (error) {
      setProjects(projectList);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchMainProjects();
  }, []);

  return (
    <div className="page3 bg-img" id="scrollspyHeading2">
      <div className="container">
        <h1>Projects</h1>
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
                        {p.web_link && (
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
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
            // <p>No projects to display</p>
          )}
        </div>
        {show && (
          <div className="text-center mt-4">
            <Link to={"./projects"} className="show-all">
              Show all
              <MdOutlineKeyboardDoubleArrowDown size="20px" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page2;
