import React from "react";
import TestimonialOne from "../components/TestimonialOne";
import Benefits from '../components/Benefits';
import Recruits from "../components/Recruits";
import Button from "../components/Button";



export default function HomePage() {
  return (
    <div>
      <section className="home-page-jumbotron">
        <div className="jumbotron-overlay">
          <div>
            <h1>Find the Perfect MOS for you.</h1>
            <Button btnClass="sm-btn yellow-btn" btnText="WATCH NOW" />
          </div>
        </div>
        <video
          // autoplay="autoplay"
          muted="muted"
          loop="loop"
          src="https://luis-pagan.s3.us-east-2.amazonaws.com/Nation_Gaurd_Video.mp4"
        ></video>
      </section>

      <Benefits />

      <TestimonialOne title="TESTIMONIAL" rightVideo="hide" />

      <Recruits />
      
      <TestimonialOne class="background-black gray" title="TESTIMONIAL" rightVideo="hide" />

      <section className="email-request">
        <p>CURIOUS? FIND OUT WHAT WE CAN ACHIEVE!</p>
        <input type="email" placeholder="Email Address" /><br/>
        <Button btnClass="yellow-btn email-btn" btnText="SUBMIT" />
      </section>
    </div>
  );
}
