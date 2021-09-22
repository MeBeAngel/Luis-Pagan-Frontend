import { React, useState, useEffect } from "react";
import PlayIcon from "../images/play.svg";
import PauseIcon from "../images/pause.svg";
import ResetIcon from "../images/reset.svg";
import PosterImage from "../images/testimonial-poster.svg";

export default function TestimonialOne(props) {


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
            poster={PosterImage}
            src={testimonyOne.video_url}
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
            <p className="quote">{`"${testimonyOne.quote}"`}</p>
            <p className="name">
              <span className="name__inner-text">
                name <span className="background-black block"></span>{" "}
                {testimonyOne.name}
              </span>
            </p>
            <p className="date">
              <span className="date__inner-text">
                date <span className="background-black block date-block"></span>
                {testimonyOne.date}
              </span>
            </p>
          </div>
          <div className={`info-block ${props.bioRightClass}`}>
            <p className="quote">{`"${testimonyTwo.quote}"`}</p>
            <p className="name">
              <span className="name__inner-text">
                name <span className="background-gray block"></span>
                {testimonyTwo.name}
              </span>
            </p>
            <p className="date">
              <span className="date__inner-text">
                date <span className="background-gray block date-block"></span>
                {testimonyTwo.date}
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
            src={testimonyTwo.video_url}
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
