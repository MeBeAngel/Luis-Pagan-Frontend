import React from "react";

export default function RecruitCard(props) {
  return (
    <div className="recruit-item">
      <div className="recruit-item__bg"></div>
      <div className="recruit-item__img">
        <img src={props.recruitImage} alt={props.alt} />
      </div>
      <p className="recruit-name">ANGEL GONZALEZ</p>
      <p className="recruit-enlistment">02/11/1989</p>
      <p className="recruit-rank">PRIVATE</p>
      <p className="recruit-mos"><span></span>(131A) Field Artillery</p>
      <p className="fun-fact">I like to blow stuff up.</p>
    </div>
  );
}
