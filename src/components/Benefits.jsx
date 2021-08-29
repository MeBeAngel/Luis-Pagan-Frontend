import React from "react";
import { Link } from "react-router-dom"
import Tuition from "../images/benefit_tuition.svg";
import HealthCare from "../images/benefit_health-care.svg";
import JobTraining from "../images/benefit_job-training.svg";
import LifeInsurance from "../images/benefit_life-insurance.svg";
import Four01k from "../images/benefit_401k.svg";
import SignOn from "../images/benefit_sign-on.svg";
import Button from "../components/Button";

export default function Benefits(props) {
  
  function benefitIcon(icon) {
      return { backgroundImage: `url(${icon})` };
  }

  const hideHex = {
    visibility: "hidden",
  };

  return (
    <div className="benefits">
      <h1 className="yellow">BENEFITS</h1>
      <ul id="grid" className="clear">
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div className="hexagon" style={benefitIcon(Four01k)}></div>
        </li>
        <li>
          <div className="hexagon" style={benefitIcon(HealthCare)}></div>
        </li>
        <li>
          <div className="hexagon" style={benefitIcon(Tuition)}></div>
        </li>
        <li>
          <div className="hexagon" style={benefitIcon(SignOn)}></div>
        </li>
        <li>
          <div className="hexagon" style={benefitIcon(LifeInsurance)}></div>
        </li>
        <li>
          <div className="hexagon" style={benefitIcon(JobTraining)}></div>
        </li>
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
      </ul>
      <p className="yellow">FIND OUT HOW WE CAN HELP</p>
      <Link to="/form">
      <Button btnClass="sm-btn yellow-btn" btnText="REQUEST MORE INFO" />
      </Link>
    </div>
  );
}
