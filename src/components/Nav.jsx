import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Btn from "../components/Button";

// Nav Logo
import LogoWithBackground from "../images/logo_with_yellow_background.svg";

// Social icons
import FacebookBlack from "../images/facebook_black.svg";
import InstagramBlack from "../images/instagram_black.svg";
import LinkedinBlack from "../images/linkedin_black.svg";

import FacebookYellow from "../images/facebook_yellow.svg";
import InstagramYellow from "../images/instagram_yellow.svg";
import LinkedinYellow from "../images/linkedin_yellow.svg";

export default function Nav(props) {

  // Saves open and closed state of Nav overlay
  const [showNavOverlay, setShowNavOverlay] = useState(false);

  // Holds the state of the current page url
  const [url, setUrl] = useState();

  // Collects current page url
  const location = useLocation();

  // Update url state with current page location
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  // Display page title text based on current page url
  function pageTitle() {
    if (url === "/about") {
      return "ABOUT ME";
    } else if (url === "/mos") {
      return "TOP 10 MOS";
    } else {
      return "";
    }
  }

  // Logic for when to display nav get started button
  function btnLogic(str) {
    return url === "/" ? str : "";
  }

  // Open Nav overlay / dropdown menu
  function openOverlay() {
    document.querySelector(".drop-down-overlay").style.display = "flex";
    document.body.style.overflow = "hidden";
    setShowNavOverlay(true);
  }

  // Close Nav overlay / dropdown menu
  function closeOverlay() {
    document.querySelector(".drop-down-overlay").style.display = "none";
    document.body.style.overflow = "visible";
    setShowNavOverlay(false);
  }

  return (
    <div className="nav-wrapper">
      <header className="background-black">
        <div className="social-media bold">
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
      </header>

      <nav className="background-black">
        <img src={LogoWithBackground} alt="" />
        <Link to={props.btnSrc}>
          <Btn
            btnClass={btnLogic("sm-btn yellow-btn")}
            btnText={btnLogic("Get Started")}
          />
        </Link>
        <h1 className="">{pageTitle()}</h1>
        <div
          onClick={showNavOverlay === false ? openOverlay : closeOverlay}
          className="drop-down"
        >
          <i className={`fas fa-bars yellow`}></i>
        </div>
      </nav>

      <div className="drop-down-overlay" onClick={closeOverlay}>
        <div className="drop-down__links">
          <Link className="link-reset link" to="/" onClick={closeOverlay}>
            <p>HOME</p>
          </Link>
          <Link className="link-reset link" to="/about" onClick={closeOverlay}>
            <p>ABOUT ME</p>
          </Link>
          <Link className="link-reset link" to="/mos" onClick={closeOverlay}>
            <p>TOP 10 M.O.S</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
