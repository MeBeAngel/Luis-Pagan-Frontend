import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../components/Button";

export default function FormPage(props) {

  const isMobile = useMediaQuery({ query: "(min-width: 540px)" });


  return (
    <div className="form-page">
      <div className="form-page-intro">
        <h1>Almost There!</h1>
        <p>
          You’ve taken the first crucial step alone, but rest assured that we
          will take the rest of them together.
        </p>
      </div>
      <form>
        <div className="form-question">
          <div className="question-inner">
            <p>Full Name</p>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Type Here.."
            />
          </div>
        </div>

        <div className="form-question">
          <div className="question-inner">
            <p>email</p>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Type Here.."
            />
          </div>
        </div>

        <div className="form-question">
          <div className="question-inner">
            <p>Phone</p>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Type Here.."
            />
          </div>
        </div>

        <div className="form-question">
          <div className="question-inner">
            <p>Why do you want to join the National Guard?</p>
            <textarea
              className="form-control"
              id="textareaQuestion"
              name="textareaQuestion"
              rows={isMobile ? "10" : "6"}
              placeholder="Type here.."
            ></textarea>
          </div>
        </div>

        <Button btnClass="form-btn yellow-btn btn-shadow" btnText="Submit" />
      </form>
    </div>
  );
}
