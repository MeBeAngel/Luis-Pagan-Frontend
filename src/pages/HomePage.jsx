import { React, useState } from "react";
import TestimonialOne from "../components/TestimonialOne";
import Benefits from "../components/Benefits";
import Recruits from "../components/Recruits";
import Button from "../components/Button";

export default function HomePage() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // Opens popup video overlay, scrolls to top of page and plays video
  function openOverlay() {
    const popupVideo = document.querySelector("#video");
    document.querySelector(".popup-video-wrapper").style.display = "block";
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    popupVideo.play();
    setIsOverlayOpen(true);
  }

  // Closes popup video overlay, pauses video and resets video current time back to 0
  function closeOverlay() {
    const popupVideo = document.querySelector("#video");
    document.querySelector(".popup-video-wrapper").style.display = "none";
    document.body.style.overflow = "visible";
    popupVideo.pause();
    popupVideo.currentTime = 0;
    setIsOverlayOpen(false);
  }

  return (
    <div>
      <div className="popup-video-wrapper">
        <div className="popup-video-inner-wrapper">
          <i className="fas fa-times" onClick={closeOverlay}></i>
          <video
            id="video"
            controls="controls"
            src=""
          ></video>
        </div>
      </div>

      <section className="home-page-jumbotron">
        <div className="jumbotron-overlay">
          <div>
            <h1>Find the Perfect MOS for you.</h1>
            <Button
              btnClass="sm-btn yellow-btn"
              btnText="WATCH NOW"
              onClick={openOverlay}
            />
          </div>
        </div>
        <video
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          src=""
        ></video>
      </section>

      <Benefits />

      <TestimonialOne title="TESTIMONIAL" rightVideo="hide" />

      <Recruits />

      <TestimonialOne
        class="background-black gray"
        title="TESTIMONIAL"
        rightVideo="hide"
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