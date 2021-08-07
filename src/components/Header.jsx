import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
    return ( 
    <header className={props.headerClass}>
                    <div className="social-media bold">
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
    </header>
    );
}