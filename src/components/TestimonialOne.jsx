import { React, useEffect } from "react";
import PlayIcon from "../images/play.svg";
import PauseIcon from "../images/pause.svg";
import ResetIcon from "../images/reset.svg";

export default function TestimonialOne(props) {
  useEffect(() => {
    const video = document.getElementsByClassName("video");

    for (var i = 0; i < video.length; i++) {
      video[i].onended = (e) => {
        e.target.offsetParent.children[1].style.display = "none";
        e.target.offsetParent.children[2].style.display = "none";
        e.target.offsetParent.children[3].style.display = "flex";
      };
    }
  }, []);

  function play(e) {
    let video = e.target.parentNode.children[0];
    let pause = e.target.parentNode.children[2];
    e.target.style.display = "none";
    pause.style.display = "block";
    video.play();
  }

  function pause(e) {
    let video = e.target.parentNode.children[0];
    let play = e.target.parentNode.children[1];
    e.target.style.display = "none";
    play.style.display = "block";
    video.pause();
  }

  function reset(e) {
    console.log(e.target.parentNode.parentNode.children);
    e.target.parentNode.style.display = "none";
    e.target.parentNode.parentNode.children[2].style.display = "block";
    e.target.parentNode.parentNode.children[0].currentTime = 0;
    e.target.parentNode.parentNode.children[0].play();
  }

  return (
    <div className={`testimonial-wrapper ${props.class}`}>
      {/* <h1>{props.title}</h1> */}
      <div className="testimonial">
        <div className={`testimonial__video ${props.leftVideo}`}>
          <video
            class="video"
            width="100%"
            height="100%"
            muted="muted"
            src="https://luis-pagan.nyc3.digitaloceanspaces.com/testimony-placeholder2.mp4"
          ></video>
          <img className="play-icon" src={PlayIcon} alt="" onClick={play} />
          <img className="pause-icon" src={PauseIcon} alt="" onClick={pause} />
          <div className="reset-icon">
            <img src={ResetIcon} alt="" onClick={reset} />
          </div>
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
            class="video"
            width="100%"
            height="100%"
            src="https://luis-pagan.nyc3.digitaloceanspaces.com/testimony-placeholder2.mp4"
          ></video>
          <img className="play-icon" src={PlayIcon} alt="" onClick={play} />
          <img className="pause-icon" src={PauseIcon} alt="" onClick={pause} />
          <div className="reset-icon">
            <img src={ResetIcon} alt="" onClick={reset} />
          </div>
        </div>
      </div>
    </div>
  );
}
