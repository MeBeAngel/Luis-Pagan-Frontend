import React from "react";

export default function Button(props) {
    return (
        <button className={props.btnClass} onClick={props.onClick}>{props.btnText}</button>
    );
}