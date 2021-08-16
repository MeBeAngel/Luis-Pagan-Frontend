import React from "react";

export default function RecruitCard(props) {
  return (
    <div className="recruit-item background-black">
      <div className="recruit-item__img">
        <img src={props.recruitImage} alt={props.alt} />
      </div>
      <div className="recruit-item__info yellow bold">
        <p>{props.recruitName}</p>
        <p>{`Date of Enlistment: ${props.doe}`}</p>
        <p>{`Rank: ${props.rank}`}</p>
        <p>{`MOS: ${props.mos}`}</p>
        <div className="fun-fact background-yellow black">
          <p>{props.funFact}</p>
        </div>
      </div>
    </div>
  );
}
