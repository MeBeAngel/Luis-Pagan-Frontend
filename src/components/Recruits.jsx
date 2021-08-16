import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecruitCard from "../components/RecruitCard";
import Image from "../images/recruit.svg";

export default function Recruits(props) {

  // Cap fun fact text at 79 char
  function funFactText(str) {
    return str.slice(0, 79);
  }

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
          recruitName="Shane Rios"
          doe="12/11/20"
          rank="Captian"
          mos="Map maker (F13)"
          funFact={funFactText(
            "All fun fact text is capped at 79 characters."
          )}
        />
      </Slider>
    </div>
  );
}

//  (Name, Date of enlistment and rank, MOS (Job), Fun Fact)
