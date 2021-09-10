import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import TestimonialOne from "../components/TestimonialOne";
import Benefits from "../components/Benefits";
import Recruits from "../components/Recruits";
import Button from "../components/Button";

export default function HomePage() {
  ////////// Media Query Vars //////////

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 999px)" });
  const biggerScreens = useMediaQuery({ query: "(min-width: 1000px)" });

  /////////////////////////////////////

  return (
    <div className="home-page-wrapper">
      <section className="home-page-jumbotron">
        <div className="jumbotron-overlay">
          <div>
            <h1>Find the Perfect JOB for you.</h1>
            <Link to="/mos">
              <Button btnClass="jumbotron-btn yellow-btn" btnText="MORE INFO" />
            </Link>
          </div>
        </div>
        <video
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          src="https://luis-pagan.nyc3.digitaloceanspaces.com/NG-main.mp4"
        ></video>
      </section>

      <Benefits />

      <TestimonialOne
        class="background-gray gray-texture-bg"
        title="TESTIMONIAL"
        rightVideo="hide"
        bioLeftClass="black"
        bioRightClass="hide"
      />

      <Recruits />

      <TestimonialOne
        class="background-black black-texture-bg"
        title="TESTIMONIAL"
        rightVideo={isMobileOrTablet && "hide"}
        leftVideo={biggerScreens && "hide"}
        bioLeftClass="hide"
        bioRightClass="gray"
      />

      <section className="email-request">
        <p>CURIOUS? FIND OUT WHAT WE CAN ACHIEVE!</p>
        <input type="email" placeholder="Email Address" />
        <br />
        <Button btnClass="yellow-btn email-btn" btnText="SUBMIT" />
      </section>
    </div>
  );
}
