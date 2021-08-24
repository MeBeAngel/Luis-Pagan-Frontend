import React from "react";

export default function TestimonialOne(props) {
  return (
    <div className={`testimonial-wrapper ${props.class}`}>
      <h2>{props.title}</h2>
      <div className="testimonial">
        <div className={`testimonial__video ${props.leftVideo}`}>
          <video
            width="100%"
            height="100%"
            muted="muted"
            src="https://woolyss.com/f/Chimera-AV1-8bit-480x270-552kbps.mp4"
          ></video>
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
            muted="muted"
            loop="loop"
            src="https://woolyss.com/f/Chimera-AV1-8bit-480x270-552kbps.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
}
