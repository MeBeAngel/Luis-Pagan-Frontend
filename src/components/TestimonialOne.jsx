import React from "react";
import PlayIcon from "../images/play.svg";
import PauseIcon from "../images/pause.svg";

export default function TestimonialOne(props) {

const testimonyVideoLeft = document.getElementById("testimony-video-left");
const playIcon = document.querySelector(".play-icon");
const pauseIcon = document.querySelector(".pause-icon");

function playVideo() {
  playIcon.style.display="none";
  pauseIcon.style.display="block";
  testimonyVideoLeft.play();
}

function pauseVideo() {
  playIcon.style.display="block";
  pauseIcon.style.display="none";
  testimonyVideoLeft.pause();
}



  return (
    <div className={`testimonial-wrapper ${props.class}`}>
      {/* <h1>{props.title}</h1> */}
      <div className="testimonial">
        <div className={`testimonial__video ${props.leftVideo}`}>
          <video id="testimony-video-left"
            width="100%"
            height="100%"
            src="https://luis-pagan.nyc3.digitaloceanspaces.com/testimony-placeholder2.mp4"
          ></video>
          <img className="play-icon" src={PlayIcon} alt="" onClick={playVideo} />
          <img className="pause-icon" src={PauseIcon} alt="" onClick={pauseVideo} />
        </div>
        <div className="testimonial__info gray bold">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
            ipsum non sapien lacinia pulvinar. Nulla lacus tellus, dapibus et
            tristique quis, porttitor sit amet sem. Ut turpis quam, feugiat sit
            amet viverra iaculis, vehicula id elit. Sed lectus est, laoreet vel
            malesuada sed, suscipit ut nibh. Praesent consectetur elit vitae
            dolor vehicula gravida. Duis volutpat velit eget purus dapibus.
          </p>
        </div>
        <div className={`testimonial__video ${props.rightVideo}`}>
          <video
            width="100%"
            height="100%"
            src="https://luis-pagan.nyc3.digitaloceanspaces.com/testimony-placeholder2.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
}
