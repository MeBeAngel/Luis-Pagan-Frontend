import React from "react";
import Btn from "../components/Button";

export default function MosCard(props) {
  return (
    <div className="mos-card-wrapper">
      <h2 className="card-title">{props.mosTitle}</h2>
      <div className="mos-card">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{ backgroundImage: "url(" + props.mosImg + ")" }}
            >
              <p className="mos-num">{props.mosNumber}</p>
            </div>
            <div className="flip-card-back background-black">
              <p>{props.mosDescription}</p>
              <Btn
                btnClass="sm-btn yellow-btn"
                btnText="Watch Video"
                onClick={props.btnOnClick}
              />
              <div className="mos-video-wrapper">
                <video
                  id="mos-video"
                  //muted="muted"
                  src="https://luis-pagan.nyc3.digitaloceanspaces.com/mos-combat-engineer.mp4"
                  onClick={props.videoOnClick}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
