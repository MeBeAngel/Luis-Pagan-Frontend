import React from "react";
import Btn from "../components/Button";

export default function Nav(props) {
    return (
        <nav className={props.navClass}>
            <img src={props.logo} alt="" />
            <Btn btnClass={props.btnClass} btnText={props.btnText}/>
            <h1 className={props.pageTitleClass}>{props.pageTitle}</h1>
          <div className="drop-down">
            <i className="fas fa-bars"></i>
          </div>
        </nav>
    );
}