import React from "react";
import { CheckObjectInterface } from "../../interfaces/checks";
import { submit_button_check } from "../../utils/validation-utils";
import Button from "../Button/Button";
import "./Verification.css";

type VerificationProps = {
  onCheckSelect: Function;
  onHandleSubmit: Function;
  listOfChecks: CheckObjectInterface[];
};

const Verification: React.FC<VerificationProps> = ({
  onCheckSelect,
  onHandleSubmit,
  listOfChecks,
}) => {
  return (
    <div className="verification-container">
      {listOfChecks &&
        listOfChecks.map((check: CheckObjectInterface, index: number) => (
          <div
            className={`verification-items ${
              Number(check.active_index) >= index
                ? "active-verification-item"
                : "disabled-verification-item"
            }`}
            key={check.id}
          >
            <p>{check.description}</p>

            <div className="custom-toggle">
              <div
                onClick={() => onCheckSelect("yes", index)}
                className={`toggle-items ${
                  check.checked_value === "yes" && "toggle-items__active"
                }`}
              >
                Yes
              </div>
              <div
                onClick={() => onCheckSelect("no", index)}
                className={`toggle-items ${
                  check.checked_value === "no" && "toggle-items__active"
                }`}
              >
                No
              </div>
            </div>
          </div>
        ))}

      <div className="verification-button-container">
        <Button
          disabled={submit_button_check(listOfChecks)}
          onClick={() => onHandleSubmit()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Verification;
