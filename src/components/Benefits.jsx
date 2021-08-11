import React from "react";
import Service from "../images/service.svg";
import Button from "../components/Button";

export default function Benefits(props) {
  const showHex = {
    backgroundImage: `url(${Service})`,
  };

  const hideHex = {
    visibility: "hidden",
  };

  return (
    <div className="benefits">
      <h2 className="yellow">BENEFITS</h2>
      <ul id="grid" class="clear">
        <li>
          <div class="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div class="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div class="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div class="hexagon" style={showHex}></div>
        </li>
        <li>
          <div class="hexagon" style={showHex}></div>
        </li>
        <li>
          <div class="hexagon" style={showHex}></div>
        </li>
        <li>
          <div class="hexagon" style={showHex}></div>
        </li>
        <li>
          <div class="hexagon" style={showHex}></div>
        </li>
        <li>
          <div class="hexagon" style={showHex}></div>
        </li>
        <li>
          <div class="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div class="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div class="hexagon" style={hideHex}></div>
        </li>
      </ul>
      <p className="yellow">FIND OUT HOW WE CAN HELP</p>
      <Button btnClass="sm-btn yellow-btn" btnText="REQUEST MORE INFO" />
    </div>
  );
}
