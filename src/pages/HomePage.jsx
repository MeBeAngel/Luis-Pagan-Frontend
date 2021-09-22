import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import TestimonialOne from "../components/TestimonialOne";
import Benefits from "../components/Benefits";
import Recruits from "../components/Recruits";
import EmailRequest from "../components/EmailRequest";
import Button from "../components/Button";

export default function HomePage() {
  ////////// Media Query Vars //////////

  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  // const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 999px)" });
  const biggerScreens = useMediaQuery({ query: "(min-width: 1000px)" });

  /////////////////////////////////////

  ////////// Testimony API Call and state //////////
  const [testimonyOne, setTestimonyOne] = useState([]);
  const [testimonyTwo, setTestimonyTwo] = useState([]);

  useEffect(() => {
    fetch("https://luis-pagan-backend.herokuapp.com/testimony-1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTestimonyOne(data));

    fetch("https://luis-pagan-backend.herokuapp.com/testimony-2", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTestimonyTwo(data));
  }, []);
  /////////////////////////////////////////////


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
          autoPlay="autoplay"
          muted="muted"
          playsInline="playsinline"
          loop="loop"
          src="https://luis-pagan.s3.amazonaws.com/jumbotron-video/Nation_Gaurd_Video.mp4"
        ></video>
      </section>

      <Benefits />

      <TestimonialOne
        class="background-gray gray-texture-bg"
        title="TESTIMONIAL"
        rightVideo="hide"
        bioLeftClass="black"
        bioRightClass="hide"
        poster={testimonyOne.poster.url}
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

      <EmailRequest />
    </div>
  );
}
