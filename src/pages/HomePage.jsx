import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
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
      <Header
        headerClass="gray-header"
        facebookIcon={FacebookBlack}
        instagramIcon={InstagramBlack}
        linkedinIcon={LinkedinBlack}
      />

      <Nav
        navClass="black-nav"
        logo={LogoWithBackground}
        btnClass="sm-btn yellow-btn"
        btnText="Get Started"
        pageTitle=""
        />

      <section className="home-page-jumbotron">
        <div className="jumbotron-overlay">
          <div>
            <h1>Find the Perfect MOS for you.</h1>
            <Button btnClass="sm-btn yellow-btn" btnText="WATCH NOW" />
          </div>
        </div>
        <video muted="muted" loop="loop" src="https://luis-pagan.s3.us-east-2.amazonaws.com/Nation_Gaurd_Video.mp4"></video>
      </section>

      <section className="benefits"></section>

      <Footer
        footerClass="yellow-footer"
        facebookIcon={FacebookBlack}
        instagramIcon={InstagramBlack}
        linkedinIcon={LinkedinBlack}
      />
    </div>
  );
}
