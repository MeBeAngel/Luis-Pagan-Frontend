import React from "react";
import { Link } from "react-router-dom";

// Social Icons
import FacebookYellow from "../images/facebook_yellow.svg";
import InstagramYellow from "../images/instagram_yellow.svg";
import LinkedinYellow from "../images/linkedin_yellow.svg";

export default function Footer(props) {
  return (
    <footer className="background-black yellow">
      <div className="quick-links bold">
        <p className="quick-link">Quick Links</p>
        <Link className="link-reset yellow" to="/about">
          <p>About Me</p>
        </Link>
        <Link className="link-reset yellow" to="/mos">
          <p>Top 10 M.O.S</p>
        </Link>
        <Link className="link-reset yellow" to="#">
          <p>Request Info</p>
        </Link>
      </div>
      <div className="national-gaurd-contact-info bold">
        <p>New York National Guard Recruitment</p>
        <p>2 Quincy PI ROOM 213, Yonkers, NY 10701</p>
        <p>(347) 852-2664</p>
        <p>National Guard Email Address</p>
      </div>
      <div className="social-media bold">
        <p>CONNECT WITH ME</p>
        <div>
          <Link to="#">
            <img src={FacebookYellow} alt="" />
          </Link>
          <Link to="#">
            <img src={InstagramYellow} alt="" />
          </Link>
          <Link to="#">
            <img src={LinkedinYellow} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
