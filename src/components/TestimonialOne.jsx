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
            src="https://luis-pagan.s3.us-east-2.amazonaws.com/Nation_Gaurd_Video.mp4"
          ></video>
        </div>
        <div className="testimonial__info gray bold">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
            ipsum non sapien lacinia pulvinar. Nulla lacus tellus, dapibus et
            tristique quis, porttitor sit amet sem. Ut turpis quam, feugiat sit
            amet viverra iaculis, vehicula id elit. Sed lectus est, laoreet vel
            malesuada sed, suscipit ut nibh. Praesent consectetur elit vitae
            dolor vehicula gravida. Duis volutpat velit eget purus dapibus, et
            eleifend velit faucibus. Etiam ullamcorper rhoncus tempus. Fusce
            euismod et nibh id pharetra. Curabitur ac venenatis mauris, et
            vulputate velit. Maecenas ut est ligula. Fusce et ipsum diam.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Aliquam erat volutpat. Donec egestas sit amet sem non viverra.
            Pellentesque magna est, dapibus in purus pulvinar, malesuada commodo
            ante. Curabitur suscipit sagittis tortor, id dapibus justo luctus
            at. Quisque pulvinar consequat dictum. Sed sagittis urna nunc, quis
            cursus massa euismod et. Sed eu sem dui. Donec ut tempor dui. Morbi
            turpis ex, convallis hendrerit augue a, lacinia condimentum lorem.
          </p>
        </div>
        <div className={`testimonial__video ${props.rightVideo}`}>
          <video
            width="100%"
            height="100%"
            muted="muted"
            loop="loop"
            src="https://luis-pagan.s3.us-east-2.amazonaws.com/Nation_Gaurd_Video.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
}
