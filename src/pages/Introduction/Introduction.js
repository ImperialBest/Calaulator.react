import React from "react";
import './Introduction.css'

const Introduction = () => {
  return (
    <div>
      <p className="intro">How was your learning so far?</p>
      <div className="CalculatorBody">
        <input type="text" id="CalIput" />
      </div>
    </div>
  );
};

export default Introduction;
