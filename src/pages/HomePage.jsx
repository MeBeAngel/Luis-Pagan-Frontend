import React from "react";
import { useMediaQuery } from "react-responsive";
import TestimonialOne from "../components/TestimonialOne";
import Benefits from "../components/Benefits";
import Recruits from "../components/Recruits";
import Button from "../components/Button";

export default function HomePage() {
  ////////// Media Query Vars //////////

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const biggerScreens = useMediaQuery({ query: "(min-width: 1200px)" });

  /////////////////////////////////////



  ///////// Popup video logic //////////

  var htmlElement = document.querySelector("html");

  // Opens popup video overlay, scrolls to top of page and plays video
  function openOverlay() {
    const popupVideo = document.querySelector("#popup-video");
    document.querySelector(".popup-video-wrapper").style.display = "block";
    htmlElement.style.overflowY = "hidden";
    window.scrollTo(0, 0);
    popupVideo.play();
  }

  // Closes popup video overlay, pauses video and resets video current time back to 0
  function closeOverlay() {
    const popupVideo = document.querySelector("#popup-video");
    document.querySelector(".popup-video-wrapper").style.display = "none";
    htmlElement.style.overflowY = "visible";
    popupVideo.pause();
    popupVideo.currentTime = 0;
  }

  /////////////////////////////////////

  return (
    <div className="home-page-wrapper">
      <div className="popup-video-wrapper">
        <div className="popup-video-inner-wrapper">
          <i className="fas fa-times" onClick={closeOverlay}></i>
          <video
            id="popup-video"
            controls="controls"
            muted="muted"
            src="https://luis-pagan.nyc3.digitaloceanspaces.com/NG-main.mp4"
          ></video>
        </div>
      </div>

      <section className="home-page-jumbotron">
        <div className="jumbotron-overlay">
          <div>
            <h1>Find the Perfect JOB for you.</h1>
            <Button
              btnClass="jumbotron-btn yellow-btn"
              btnText="WATCH NOW"
              onClick={openOverlay}
            />
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
        class="background-gray"
        title="TESTIMONIAL"
        rightVideo="hide"
        bioLeftClass="black"
        bioRightClass="hide"
      />

      <Recruits />

      <TestimonialOne
        class="background-black"
        title="TESTIMONIAL"
        rightVideo={isMobile && "hide"}
        leftVideo={isTablet && "hide"}
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
