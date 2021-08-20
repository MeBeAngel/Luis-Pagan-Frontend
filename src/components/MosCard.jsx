import React from "react";


export default function MosCard(props) {
    return (
        <div className="mos-card">
            <p class="card__title">{props.mosTitle}</p>
            <div className="card__img" style={{backgroundImage: "url(" + props.mosImg + ")"}}>
              <span>{props.mosNumber}</span>
            </div>
        </div>
    );
}