import React from "react";
import FormSelect, {
  FormSelectNum,
  FormSelectTextArea,
} from "../components/FormSelect";
import Button from "../components/Button";

export default function FormPage(props) {
  return (
    <div className="form-page">
      <form>
        <FormSelect question="ARE YOU A U.S. CITIZEN OR PERMANENT RESIDENT OF THE U.S.?" />
        <FormSelectNum valueName="age" question="WHAT IS YOUR AGE?" />
        <FormSelect question="DO YOU CURRENTLY HAVE ANY MEDICAL ISSUES OR CONCERNS?" />

        <FormSelectTextArea id="medicalConcerns" rows="3" question="IF SO, PLEASE EXPLAIN FURTHER." questionClass="sub-question" placeholder="Type Here..." />

        <FormSelect question="HAVE YOU EVER HAD SURGERY OR BROKEN ANY BONES?" />
        <FormSelect question="DO YOU HAVE ASTHMA?" />
        <FormSelect question="HAVE YOU EVER BEEN PROCESSED AT MEPS?" />
        <FormSelect question="HAVE YOU STEPPED INTO A RECRUITER’S OFFICE? (FOR ANY SERVICE BRANCH)" />
        <FormSelect question="HAVE YOU SERVED IN THE MILITARY PREVIOUSLY?" />
        <FormSelect question="HAVE YOU BEEN ARRESTED BEFORE? (REGARDLESS OF OUTCOME)" />

        <div className="form-question">
          <p>WHAT IS YOUR HIGHEST LEVEL OF EDUCATION?</p>
          <select className="form-select">
            <option selected>Select</option>
            <option value="ged">GED</option>
            <option value="highschool">Highschool</option>
            <option value="college">College</option>
          </select>
        </div>

        <FormSelectNum valueName="credits" question="IF YOU HAVE SOME COLLEGE - HOW MANY CREDITS?" />

        <div className="form-question">
          <p>WHAT IS YOUR CURRENT MARITAL STATUS?</p>
          <select className="form-select">
            <option selected>Select</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>

        <FormSelect question="DO YOU HAVE ANY CHILDREN?" />

        <FormSelectNum valueName="numOfChildren" question="IF YOU ANSWERED YES - HOW MANY?" />

        <FormSelect question="DO YOU CURRENTLY HAVE ANY TATTOOS?" />

        <FormSelectTextArea id="numOfTattoos" rows="3" question="IF SO,  HOW MANY AND WHERE ARE THEY LOCATED?" questionClass="sub-question" placeholder="Type Here..." />

        <Button btnClass="form-btn yellow-btn btn-shadow" btnText="Submit" />
      </form>
    </div>
  );
}
