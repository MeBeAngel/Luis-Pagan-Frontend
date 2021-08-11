import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "../images/recruit.svg";

export default function Recruits(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="background-yellow recruit-wrapper">
      <h2> RECRUITS</h2>
      <Slider {...settings}>
        <div className="recruit-item">
          <div className="recruit-item__img">
            <img src={Image} alt="" />
          </div>
          <div className="recruit-item__info yellow bold">
            <p>Angel Gonzalez</p>
            <p>Date of Enlistment: 10/10/2020</p>
            <p>Rank: Private</p>
            <p>MOS: Infantry (R16)</p>
          </div>
        </div>

        <div className="recruit-item">
          <div className="recruit-item__img">
            <img src={Image} alt="" />
          </div>
          <div className="recruit-item__info yellow bold">
            <p>Shane Rios</p>
            <p>Date of Enlistment: 10/10/2020</p>
            <p>Rank: Private</p>
            <p>MOS: Infantry (R16)</p>
          </div>
        </div>

        <div className="recruit-item">
          <div className="recruit-item__img">
            <img src={Image} alt="" />
          </div>
          <div className="recruit-item__info yellow bold">
            <p>Pizza Guy</p>
            <p>Date of Enlistment: 10/10/2020</p>
            <p>Rank: Private</p>
            <p>MOS: Delivery (R16)</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

//  (Name, Date of enlistment and rank, MOS (Job), Fun Fact)
