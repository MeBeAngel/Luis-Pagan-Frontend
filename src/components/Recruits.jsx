import React from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecruitCard from "../components/RecruitCard";
import Image from "../images/recruit.svg";
import TestImage from "../images/test-recruit.svg";

export default function Recruits(props) {
  ///// Checks for screen width changes
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1099px)" });
  const biggerScreens = useMediaQuery({ query: "(min-width: 1100px" });

  ///// Empty settings var for recruit slider. Settings are loaded in conditionally below according to screen width //////
  let settings = {};

  if (isMobile) {
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  } else if (isTablet) {
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
  } else if (biggerScreens) {
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
  }

  return (
    <div className="background-yellow recruit-wrapper">
      <h1> MEET THE RECRUITS</h1>
      <p>
        Here are the soldiers that I've had the Honor of enlisting into the New
        York Army National Guard. Like every person you meet on a day to day
        basis, every one of my soldiers has a unique story and reason for
        wanting to join the greatest force in New York. Find out a little about
        them below.
      </p>
      <Slider className="slider" {...settings}>
        <RecruitCard
          recruitImage={TestImage}
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
