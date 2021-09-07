import React from "react";
import FormSelect, {
  FormSelectNum,
  FormSelectTextArea,
} from "../components/FormSelect";
import Button from "../components/Button";

export default function FormPage(props) {
  return (
    <div className="form-page">
      <div className="form-page-intro">
        <h1>Almost There!</h1>
        <p>
          You’ve taken the first crucial step alone, but rest assured that we
          will take the rest of them together. Let me know a little bit about
          yourself so we can get to know each other, and more importantly so we
          can start the journey toward a more rewarding future. A few quick
          questions will help me know you a little bit and aid in the rest of
          the steps needed to move forward. I can’t wait to help guide you as we
          help each other attain more!
        </p>
      </div>
      <form>
        <div className="form-question">
          <div className="question-inner">
            <p>Full Name</p>
            <input
              type="name"
              class="form-control"
              id="name"
              placeholder="Type Here.."
            />
          </div>
        </div>

        <div className="form-question">
          <div className="question-inner">
            <p>email</p>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Type Here.."
            />
          </div>
        </div>

        <FormSelect question="ARE YOU A U.S. CITIZEN OR PERMANENT RESIDENT OF THE U.S.?" />
        <FormSelectNum num="43" valueName="age" question="WHAT IS YOUR AGE?" />
        <FormSelect question="DO YOU CURRENTLY HAVE ANY MEDICAL ISSUES OR CONCERNS?" />

        <FormSelectTextArea
          id="medicalConcerns"
          rows="4"
          question="IF SO, PLEASE EXPLAIN FURTHER."
          questionClass="sub-question"
          placeholder="Type Here.."
        />

        <FormSelect question="HAVE YOU EVER HAD SURGERY OR BROKEN ANY BONES?" />

        <FormSelectTextArea
          id="surgery"
          rows="4"
          question="IF SO, PLEASE EXPLAIN FURTHER."
          questionClass="sub-question"
          placeholder="Type Here.."
        />

        <FormSelect question="DO YOU currently HAVE or have you ever had ASTHMA?" />
        <FormSelect question="HAVE YOU EVER BEEN PROCESSED AT MEPS?" />
        <FormSelect question="HAVE YOU STEPPED INTO A RECRUITER’S OFFICE? (FOR ANY SERVICE BRANCH)" />
        <FormSelect question="HAVE YOU SERVED IN THE MILITARY PREVIOUSLY?" />
        <FormSelect question="HAVE YOU BEEN ARRESTED BEFORE? (REGARDLESS OF OUTCOME)" />

        <div className="form-question">
          <div className="question-inner">
            <p>WHAT IS YOUR HIGHEST LEVEL OF EDUCATION?</p>
            <select className="form-select">
              <option selected>Select</option>
              <option value="ged">GED</option>
              <option value="highschool">Highschool</option>
              <option value="college">College</option>
            </select>
          </div>
        </div>

        <FormSelectNum
          num="150"
          valueName="credits"
          question="IF YOU HAVE SOME COLLEGE - HOW MANY CREDITS?"
        />

        <div className="form-question">
          <div className="question-inner">
            <p>WHAT IS YOUR CURRENT MARITAL STATUS?</p>
            <select className="form-select">
              <option selected>Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </select>
          </div>
        </div>

        <FormSelect question="DO YOU HAVE ANY CHILDREN?" />

        <FormSelectNum
          num="10"
          valueName="numOfChildren"
          question="IF YOU ANSWERED YES - HOW MANY?"
        />

        <FormSelect question="DO YOU CURRENTLY HAVE ANY TATTOOS?" />

        <FormSelectTextArea
          id="numOfTattoos"
          rows="4"
          question="IF SO,  HOW MANY AND WHERE ARE THEY LOCATED?"
          questionClass="sub-question"
          placeholder="Type Here..."
        />

        <Button btnClass="form-btn yellow-btn btn-shadow" btnText="Submit" />
      </form>
    </div>
  );
}
