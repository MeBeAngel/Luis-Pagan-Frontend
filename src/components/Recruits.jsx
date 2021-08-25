import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecruitCard from "../components/RecruitCard";
import Image from "../images/recruit.svg";

export default function Recruits(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="background-yellow recruit-wrapper">
      <h2> RECRUITS</h2>
      <Slider className="slider" {...settings}>
        <RecruitCard
          recruitImage={Image}
          recruitName="Angel Gonzalez"
          doe="12/11/20"
          rank="Captian"
          mos="Toilet bowl cleaner (F12)"
          funFact="Fun Fact text goes here"
        />
                <RecruitCard
          recruitImage={Image}
          recruitName="Angel Gonzalez"
          doe="12/11/20"
          rank="Captian"
          mos="Toilet bowl cleaner (F12)"
          funFact="Fun Fact text goes here"
        />

<RecruitCard
          recruitImage={Image}
          recruitName="Angel Gonzalez"
          doe="12/11/20"
          rank="Captian"
          mos="Toilet bowl cleaner (F12)"
          funFact="Fun Fact text goes here"
        />
      </Slider>
    </div>
  );
}

//  (Name, Date of enlistment and rank, MOS (Job), Fun Fact)
