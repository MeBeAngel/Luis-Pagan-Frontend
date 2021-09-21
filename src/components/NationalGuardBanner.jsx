import React from "react";
import Banner from "../images/bottom-banner.svg";
import MobileBanner from "../images/bottom-banner-mobile.svg";

export default function NationalGuardBanner() {
  return (
    <div>
      {/* Mobile Only */}
      <div className="nation-guard-banner-mobile">
        <a href="https://www.nationalguard.com/">
          <img src={MobileBanner} alt="" />
        </a>
      </div>

      {/* Tablet and Desktop Only */}
      <div className="nation-guard-banner">
        <a href="https://www.nationalguard.com/">
          <img src={Banner} alt="" />
        </a>
      </div>
    </div>
  );
}
