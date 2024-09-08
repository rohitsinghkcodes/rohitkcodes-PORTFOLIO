import React from "react";
import { FaDownload } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Drawer } from "antd";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const Header2 = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    toast.info("Curently Not Available");
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
              <a className="drawer-link" onClick={onClose}>
                <FaDownload />
                &ensp;Resume
              </a>
            </div>
          </Drawer>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="resume-btn btn btn-outline"
                  onClick={() => {
                    toast.info("Curently Not Available");
                  }}
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

export default Header2;
