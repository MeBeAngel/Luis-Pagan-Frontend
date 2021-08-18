import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Btn from "../components/Button";

// Nav Logo
import Logo from "../images/logo.svg";

// Social icons
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
    } else if (url === "/form") {
      return "Form Page";
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
            <a href="https://www.facebook.com/">
              <img src={FacebookYellow} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={InstagramYellow} alt="" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={LinkedinYellow} alt="" />
            </a>
          </div>
        </div>
      </header>

      <nav className="background-black">
        <Link to="/"><img src={Logo} alt="" /></Link>
        <Link to="/form">
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
