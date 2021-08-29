import React from "react";
import { useMediaQuery } from 'react-responsive'
import TestimonialOne from "../components/TestimonialOne";
import Benefits from "../components/Benefits";
import Recruits from "../components/Recruits";
import Button from "../components/Button";

export default function HomePage() {

  const isMobile = useMediaQuery({query: '(max-width: 767px)'});
  const isTablet = useMediaQuery({query: '(min-width: 768px)'});
  const biggerScreens = useMediaQuery({query: '(min-width: 1200px)'});

  function updateBtn() {
    if(biggerScreens) {
      return "med-btn yellow-btn";
    }
    else {
      return "sm-btn yellow-btn";
    }
  }

  // Opens popup video overlay, scrolls to top of page and plays video
  function openOverlay() {
    const popupVideo = document.querySelector("#popup-video");
    document.querySelector(".popup-video-wrapper").style.display = "block";
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    popupVideo.play();
  }

  // Closes popup video overlay, pauses video and resets video current time back to 0
  function closeOverlay() {
    const popupVideo = document.querySelector("#popup-video");
    document.querySelector(".popup-video-wrapper").style.display = "none";
    document.body.style.overflow = "visible";
    popupVideo.pause();
    popupVideo.currentTime = 0;
  }

  return (
    <div className="home-page-wrapper">
      <div className="popup-video-wrapper">
        <div className="popup-video-inner-wrapper">
          <i className="fas fa-times" onClick={closeOverlay}></i>
          <video
            id="popup-video"
            controls="controls"
            src="https://luis-pagan.nyc3.digitaloceanspaces.com/Nation_Gaurd_Video.mp4"
          ></video>
        </div>
      </div>

      <section className="home-page-jumbotron">
        <div className="jumbotron-overlay">
          <div>
            <h1>Find the Perfect MOS for you.</h1>
            <Button
              btnClass={updateBtn()}
              btnText="WATCH NOW"
              onClick={openOverlay}
            />
          </div>
        </div>
        <video
          //autoplay="autoplay"
          muted="muted"
          loop="loop"
          src="https://luis-pagan.nyc3.digitaloceanspaces.com/Nation_Gaurd_Video.mp4"
        ></video>
      </section>

      <Benefits />

      <TestimonialOne class="background-white" title="TESTIMONIAL" rightVideo="hide" />

      <Recruits />

      <TestimonialOne
        class="background-black gray"
        title="TESTIMONIAL"
        rightVideo={isMobile && "hide"}
        leftVideo={isTablet && "hide"}
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


// https://luis-pagan.s3.us-east-2.amazonaws.com/Nation_Gaurd_Video.mp4