import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../Images/pnf.gif";

const PagenotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="pnf">
      <div className="text-center ">
        <img src={img} alt="Page Not Found" />
        <h1 className="pnf-title mt-4">404</h1>
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
        <div
          className="btn btn-outline-warning rounded-4 mt-3"
          onClick={() => navigate("/")}
        >
          Go Back
        </div>
      </div>
    </div>
  );
};

export default PagenotFound;
