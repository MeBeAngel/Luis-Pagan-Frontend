import { React, useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../components/Button";

export default function Nav(props) {
  const [showNavOverlay, setShowNavOverlay] = useState(false);

  function openOverlay() {
    document.querySelector(".drop-down-overlay").style.display = "flex";
    document.body.style.overflow = "hidden";
    setShowNavOverlay(true);
  }

  function closeOverlay() {
    document.querySelector(".drop-down-overlay").style.display = "none";
    document.body.style.overflow = "visible";
    setShowNavOverlay(false);
  }

  return (
    <div class="nav-wrapper">
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

      <nav className={props.navClass}>
        <img src={props.logo} alt="" />
        <Link to={props.btnSrc}>
          <Btn btnClass={props.btnClass} btnText={props.btnText} />
        </Link>
        <h1 className={props.pageTitleClass}>{props.pageTitle}</h1>
        <div
          onClick={showNavOverlay === false ? openOverlay : closeOverlay}
          className="drop-down"
        >
          <i className={`fas fa-bars ${props.barsClass}`}></i>
        </div>
      </nav>

      <div className="drop-down-overlay" onClick={closeOverlay}>
        <div class="drop-down__links">
          <Link class="link" to="/" onClick={closeOverlay}>
            <p>HOME</p>
          </Link>
          <Link class="link" to="/about" onClick={closeOverlay}>
            <p>ABOUT ME</p>
          </Link>
          <Link class="link" to="/mos" onClick={closeOverlay}>
            <p>TOP 10 M.O.S</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
