import React from "react";
import Nav from "../components/Nav";
import TestimonialOne from "../components/TestimonialOne";
import Benefits from '../components/Benefits';
import Footer from "../components/Footer";
import Button from "../components/Button";

// Nav Logo
import LogoWithBackground from "../images/logo_with_gray_background.svg";

// Images for Footer
import FacebookBlack from "../images/facebook_black.svg";
import InstagramBlack from "../images/instagram_black.svg";
import LinkedinBlack from "../images/linkedin_black.svg";

export default function HomePage() {
  return (
    <div>
      <Nav
        headerClass="background-gray"
        facebookIcon={FacebookBlack}
        instagramIcon={InstagramBlack}
        linkedinIcon={LinkedinBlack}
        navClass="background-black"
        logo={LogoWithBackground}
        btnClass="sm-btn yellow-btn"
        btnText="Get Started"
        btnSrc="/form"
        barsClass="yellow"
      />

      <section className="home-page-jumbotron">
        <div className="jumbotron-overlay">
          <div>
            <h1>Find the Perfect MOS for you.</h1>
            <Button btnClass="sm-btn yellow-btn" btnText="WATCH NOW" />
          </div>
        </div>
        <video
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          src="https://luis-pagan.s3.us-east-2.amazonaws.com/Nation_Gaurd_Video.mp4"
        ></video>
      </section>

      <Benefits />

      <TestimonialOne title="TESTIMONIAL" rightVideo="hide" />
      <TestimonialOne class="background-black gray" title="TESTIMONIAL" rightVideo="hide" />

      <section className="email-request">
        <p>CURIOUS? FIND OUT WHAT WE CAN ACHIEVE!</p>
        <input type="email" placeholder="Email Address" /><br/>
        <Button btnClass="yellow-btn email-btn" btnText="SUBMIT" />
      </section>

      <Footer
        footerClass="yellow-footer"
        facebookIcon={FacebookBlack}
        instagramIcon={InstagramBlack}
        linkedinIcon={LinkedinBlack}
      />
    </div>
  );
}
