import React from "react";
import { CheckObjectInterface } from "../../interfaces/checks";
import Button from "../Button/Button";
import "./Verification.css";

type VerificationProps = {
  listOfChecks: CheckObjectInterface[];
};

const Verification: React.FC<VerificationProps> = ({ listOfChecks }) => {
  console.log(listOfChecks);

  return (
    <div className="verification-container">
      {listOfChecks.map((check) => (
        <div className="verification-items" key={check.id}>
          <p>{check.description}</p>

          <div className="custom-toggle">
            <div className="toggle-items toggle-items__active">Yes</div>
            <div className="toggle-items">No</div>
          </div>
        </div>
      ))}

      <div className="verification-button-container">
        <Button disabled>Submit</Button>
      </div>
    </div>
  );
};

export default Verification;
