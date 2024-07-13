import React from "react";
import { FaDownload } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import {  Drawer } from "antd";
import { IoHome } from "react-icons/io5";
import { FaTools, FaToolbox } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const HomeHeader = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h2 className="text-light">RK</h2>
          </a>
          <button
            className="navbar-toggler"
            onClick={showDrawer}
            type="button"
            // data-bs-toggle="collapse"
            data-bs-target="#draw"
          >
            <FaBars color="white" />
          </button>
          <Drawer
            className="drawer-style"
            closeIcon={<IoClose color="black" size={"20px"} />}
            id="draw"
            title="ROHITKCODES"
            onClose={onClose}
            open={open}
            width={"80%"}
            zIndex={2000}
          >
            <div className="drawer-content">
              <a
                className="drawer-link"
                href="#scrollspyHeading0"
                onClick={onClose}
              >
                <IoHome />
                &ensp;Home
              </a>
              {/* <hr /> */}
              <a
                className="drawer-link"
                href="#scrollspyHeading1"
                onClick={onClose}
              >
                <FaTools />
                &ensp;Skills
              </a>
              <a
                className="drawer-link"
                href="#scrollspyHeading2"
                onClick={onClose}
              >
                <FaToolbox />
                &ensp;Projects
              </a>
              <a
                className="drawer-link"
                href="#scrollspyHeading4"
                onClick={onClose}
              >
                <IoMdMail />
                &ensp;Connect
              </a>
              <a
                className="drawer-link"
                href="https://github.com/rohitsinghkcodes/RESOURCES/raw/master/portfolio/Rohit_Kumar_Resume.pdf"
                onClick={onClose}
              >
                <FaDownload />
                &ensp;Resume
              </a>
            </div>
          </Drawer>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading0">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading1">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading4">
                  Connect
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="resume-btn btn btn-outline"
                  href="https://github.com/rohitsinghkcodes/RESOURCES/raw/master/portfolio/Rohit_Kumar_Resume.pdf"
                >
                  <FaDownload /> &nbsp; Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeHeader;
