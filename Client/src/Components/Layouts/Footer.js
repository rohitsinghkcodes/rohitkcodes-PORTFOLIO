import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaHackerrank,
} from "react-icons/fa";
import { SiLeetcode, SiStopstalk } from "react-icons/si";
import { SMLinks } from "../../Helpers/socialMediaLinks.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container connect">
        

        {/* Social media links */}
        <section className="mb-4 d-flex justify-content-center pt-4">
          <Link
            to={SMLinks.instagram}
            className="btn btn-link btn-floating btn-lg "
          >
            <FaInstagram
              className="social-icons"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Instagram"
              data-tooltip-place="top"
            />
          </Link>
          <Link
            to={SMLinks.linkedin}
            className="btn btn-link btn-floating btn-lg "
          >
            <FaLinkedinIn
              className="social-icons"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Linkedin"
              data-tooltip-place="top"
            />
          </Link>
          <Link
            to={SMLinks.twitter}
            className="btn btn-link btn-floating btn-lg "
          >
            <FaTwitter
              className="social-icons "
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Twitter"
              data-tooltip-place="top"
            />
          </Link>
          <Link
            to={SMLinks.github}
            className="btn btn-link btn-floating btn-lg "
          >
            <FaGithub
              className="social-icons"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Github"
              data-tooltip-place="top"
            />
          </Link>

          <Link
            to={SMLinks.leetcode}
            className="btn btn-link btn-floating btn-lg "
          >
            <SiLeetcode
              className="social-icons"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Leetcode"
              data-tooltip-place="top"
            />
          </Link>
          <Link
            to={SMLinks.stopstalk}
            className="btn btn-link btn-floating btn-lg "
          >
            <SiStopstalk
              className="social-icons"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Stopstalk"
              data-tooltip-place="top"
            />
          </Link>
          <Link
            to={SMLinks.hackerrank}
            className="btn btn-link btn-floating btn-lg "
          >
            <FaHackerrank
              className="social-icons"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Hackerrank"
              data-tooltip-place="top"
            />
          </Link>
        </section>
      </div>
      <div className="copyright ">
        © 2024 Copyright:&ensp;
        <a className="text-info" href="https://github.com/rohitsinghkcodes">
          rohitsinghkcodes
        </a>{" "}
        | Developed by Rohit Kumar
      </div>
    </footer>
  );
};

export default Footer;
