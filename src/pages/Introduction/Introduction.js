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
    
    try{
      let answer = calcData + " = " + eval(calcData)
      // console.log(answer);
      setCalcData(answer)
    }catch(err){
      setCalcData("Error ")
    }
  }
  const clear = ()=>{
    setCalcData("")
  }
  const deletevalue = ()=>{
    setCalcData(previous=>{
      previous.substring(0, previous.length-2)
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
          <button className="buttonbodyItem"onClick={()=>inputData('7')}>7</button>
          <button className="buttonbodyItem"onClick={()=>inputData('6')}>6</button>
          <button className="buttonbodyItem"onClick={()=>inputData('5')}>5</button>
          <button className="buttonbodyItem"onClick={()=>inputData('4')}>4</button>
          <button className="buttonbodyItem"onClick={()=>inputData('3')}>3</button>
          <button className="buttonbodyItem"onClick={()=>inputData('2')}>2</button>
          <button className="buttonbodyItem"onClick={()=>inputData('1')}>1</button>
          <button className="buttonbodyItem"onClick={()=>inputData('0')}>0</button>
          <button className="buttonbodyItem"onClick={()=>"=" + calculate('=')}>=</button>
          <button className="buttonbodyItem"onClick={()=>inputData('+')}>+</button>
          <button className="buttonbodyItem"onClick={()=>inputData('/')}>/</button>
          <button className="buttonbodyItem"onClick={()=>inputData('.')}>.</button>
          <button className="buttonbodyItem"onClick={()=>inputData('*')}>*</button>
          <button className="buttonbodyItem"onClick={()=>inputData('^')}>^</button>
          <button className="buttonbodyItem"onClick={()=>inputData('()')}>()</button>
          <button className="buttonbodyItem"onClick={()=>inputData('-')}>-</button>
          <button className="buttonbodyItem"onClick={()=>inputData('Ans')}>Ans</button>
          <button className="buttonbodyItem">Del</button>
          <button className="buttonbodyItem" onClick={clear}>AC</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
