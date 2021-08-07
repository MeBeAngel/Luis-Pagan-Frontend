import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer className={props.footerClass}>
            <div className="quick-links bold">
                <p className="quick-link">Quick Links</p>
                <Link to="/about">
                  <p>About Me</p>
                </Link>
                <Link to="/mos">
                  <p>Top 10 M.O.S</p>
                </Link>
                <Link to="#">
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
                    <img src={props.facebookIcon} alt="" />
                  </Link>
                  <Link to="#">
                    <img src={props.instagramIcon} alt="" />
                  </Link>
                  <Link to="#">
                    <img src={props.linkedinIcon} alt="" />
                  </Link>
                </div>
            </div>
        </footer>
    );
}