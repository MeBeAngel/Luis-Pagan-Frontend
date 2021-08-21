import React from "react";
import Btn from "../components/Button";

export default function MosCard(props) {
  return (
    <div className="mos-card">
      <p className="card__title">{props.mosTitle}</p>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div
            className="flip-card-front"
            style={{ backgroundImage: "url(" + props.mosImg + ")" }}
          >
            <p>{props.mosNumber}</p>
          </div>
          <div className="flip-card-back background-black">
            <p>{props.mosDescription}</p>
            <Btn btnClass="sm-btn yellow-btn" btnText="Watch Video" />
          </div>
        </div>
      </div>
    </div>
  );
}
