import React from "react";
import Nav from "../components/Nav";

// Nav Logo
import LogoWithBackground from "../images/logo_with_black_background.svg";

// Images for Footer
import FacebookYellow from "../images/facebook_yellow.svg";
import InstagramYellow from "../images/instagram_yellow.svg";
import LinkedinYellow from "../images/linkedin_yellow.svg";

export default function MosPage() {
    return (
        <div>
        <Nav
          headerClass="background-black"
          facebookIcon={FacebookYellow}
          instagramIcon={InstagramYellow}
          linkedinIcon={LinkedinYellow}
          navClass="background-gray"
          logo={LogoWithBackground}
          btnClass=""
          btnText=""
          pageTitle="Top 10 M.O.S"
          pageTitleClass="black"
          barsClass="black"
        />
        <h1> MOS Page </h1>
      </div>
    );
}