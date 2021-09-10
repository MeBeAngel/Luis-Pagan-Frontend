import { React, useState, useEffect } from "react";
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
    let video = e.target.parentNode.parentNode.children[0];
    let pause = e.target.parentNode.parentNode.children[2];
    e.target.parentNode.style.display = "none";
    pause.style.display = "block";
    video.play();
  }

  function pause(e) {
    let video = e.target.parentNode.children[0];
    let play = e.target.parentNode.children[1];
    e.target.style.display = "none";
    play.style.display = "flex";
    video.pause();
  }

  function reset(e) {
    console.log(e.target.parentNode.parentNode.children);
    e.target.parentNode.style.display = "none";
    e.target.parentNode.parentNode.children[2].style.display = "block";
    e.target.parentNode.parentNode.children[0].currentTime = 0;
    e.target.parentNode.parentNode.children[0].play();
  }

  ////////// Centering logic for "name" and "date" elements //////////

  useEffect(() => {
    let name = document.getElementsByClassName("name__inner-text");
    let date = document.getElementsByClassName("date__inner-text");
    let array = [];
    let array2 = [];

    for (var i = 0; i < name.length; i++) {
      array.push(name[i]);
    }

    for (var i = 0; i < date.length; i++) {
      array2.push(date[i]);
    }

    array2[0].style.width = array[0].getBoundingClientRect().width + "px";
    array2[3].style.width = array[3].getBoundingClientRect().width + "px";

  }, []);
  ///////////////////////////////////////////////////////////////////

  return (
    <div className={`testimonial-wrapper ${props.class}`}>
      {/* <h1>{props.title}</h1> */}
      <div className="testimonial">
        <div className={`testimonial__video ${props.leftVideo}`}>
          <video
            className="video"
            width="100%"
            height="100%"
            muted="muted"
            src="https://luis-pagan.nyc3.digitaloceanspaces.com/testimony-placeholder2.mp4"
          ></video>
          <div className="play-icon">
            <img src={PlayIcon} alt="" onClick={play} />
          </div>
          <img className="pause-icon" src={PauseIcon} alt="" onClick={pause} />
          <div className="reset-icon">
            <img src={ResetIcon} alt="" onClick={reset} />
          </div>
        </div>
        <div className="testimonial__info gray bold">
          <div className={`info-block ${props.bioLeftClass}`}>
            <p className="quote">
              "WITTY QUOTE FROM THE TESTIMONY THAT SHOULD GARNER FURTHER
              ATTENTION TO ACTUALLY WATCH THE VIDEO."
            </p>
            <p className="name">
              <span className="name__inner-text">
                name <span className="background-black block"></span> Angel
                Gonzalez
              </span>
            </p>
            <p className="date">
              <span className="date__inner-text">
                date <span className="background-black block date-block"></span>9/02/21
              </span>
            </p>
          </div>
          <div className={`info-block ${props.bioRightClass}`}>
            <p className="quote">
              "WITTY QUOTE FROM THE TESTIMONY THAT SHOULD GARNER FURTHER
              ATTENTION."
            </p>
            <p className="name">
              <span className="name__inner-text">
                name <span className="background-gray block"></span> Angel
                Gonzalez
              </span>
            </p>
            <p className="date">
              <span className="date__inner-text">
                date <span className="background-gray block date-block"></span>9/02/21
              </span>
            </p>
          </div>
        </div>
        <div className={`testimonial__video ${props.rightVideo}`}>
          <video
            className="video"
            width="100%"
            height="100%"
            muted="muted"
            src="https://luis-pagan.nyc3.digitaloceanspaces.com/testimony-placeholder2.mp4"
          ></video>
          <div className="play-icon">
            <img src={PlayIcon} alt="" onClick={play} />
          </div>
          <img className="pause-icon" src={PauseIcon} alt="" onClick={pause} />
          <div className="reset-icon">
            <img src={ResetIcon} alt="" onClick={reset} />
          </div>
        </div>
      </div>
    </div>
  );
}
