import React, { useState } from "react";
import './Introduction.css'

const Introduction = () => {
  const [calcData, setCalcData] = useState("")

  const inputData = (newInputData)=>{
    setCalcData((previousValue)=>{
      return(previousValue + newInputData)
    })
    // console.log(calcData);
  }
  const calculate = ()=>{
    setCalcData(prev=>{
      return(eval(prev))
    })
  }
  return (
    <div>
      <p className="intro">How was your learning so far?</p>
      <div className="CalculatorBody">
        <input type="text" value={calcData} id="CalIput" />
        <div className="buttonbody">
          <button className="buttonbodyItem" onClick={()=>inputData('9')}>9</button>
          <button className="buttonbodyItem" onClick={()=>inputData('8')}>8</button>
          <button className="buttonbodyItem">7</button>
          <button className="buttonbodyItem">6</button>
          <button className="buttonbodyItem">5</button>
          <button className="buttonbodyItem">4</button>
          <button className="buttonbodyItem">3</button>
          <button className="buttonbodyItem">2</button>
          <button className="buttonbodyItem">1</button>
          <button className="buttonbodyItem">0</button>
          <button className="buttonbodyItem" onClick={calculate}>=</button>
          <button className="buttonbodyItem" onClick={()=>inputData('+')}>+</button>
          <button className="buttonbodyItem">-</button>
          <button className="buttonbodyItem">/</button>
          <button className="buttonbodyItem">.</button>
          <button className="buttonbodyItem">*</button>
          <button className="buttonbodyItem">^</button>
          <button className="buttonbodyItem">()</button>
          <button className="buttonbodyItem">Ans</button>
          <button className="buttonbodyItem">Del</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
