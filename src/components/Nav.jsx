import { React, useState} from "react";
import { Link } from "react-router-dom";
import Btn from "../components/Button";

export default function Nav(props) {

  const [showNavOverlay, setShowNavOverlay] = useState(false);

function openOverlay() {
  document.querySelector(".drop-down-overlay").style.display="flex";
  document.body.style.overflow="hidden";
  setShowNavOverlay(true);
}

function closeOverlay() {
  document.querySelector(".drop-down-overlay").style.display="none";
  document.body.style.overflow="visible";
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
        <Btn btnClass={props.btnClass} btnText={props.btnText} />
        <h1 className={props.pageTitleClass}>{props.pageTitle}</h1>
        <div onClick={showNavOverlay === false ? openOverlay : closeOverlay} className="drop-down">
          <i className="fas fa-bars"></i>
        </div>
      </nav>

      <div className="drop-down-overlay">
          <div class="drop-down__links">
            <p>HOME</p>
            <p>ABOUT ME</p>
            <p>TOP 10 M.O.S</p>
          </div>
      </div>
    </div>
  );
}
