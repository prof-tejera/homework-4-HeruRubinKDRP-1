import React, { useState } from "react";
import Number from "../Number/Number";
import Operation from "../Operation/Operation";
import Screen from "../Screen/Screen";
import { CalculatorStyled } from "./calculator.styled";



export type OperatorT = "+" | "-" | "*" | "/" | "=" | "clear" | ".";

const Calculator = () => {
  /** Here is where you are going to keep track of calculator state */
  const [input, setInput] = useState<string>(""); // State to store user input
  const [displayResult, setDisplayResult] = useState<string | null>("0"); // State to store the calculation result


  const calculate = () => {
    const parts = input.split(/([+\-*\/])/);
    let total = parseFloat(parts[0]);
    for (let i = 1; i < parts.length; i += 2) {
      const operator = parts[i];
      const operand = parseFloat(parts[i + 1]);

      switch (operator) {
        case "+":
          total += operand;
          break;
        case "-":
          total -= operand;
          break;
        case "*":
          total *= operand;
          break;
        case "/":
          if (operand !== 0) {
            total /= operand;
          } else {
            setDisplayResult(null);
            setInput("Error: Division by zero");
            return;
          }
          break;
        default:
          break;
      }
    }

    // Format the total with commas and set it in the state
    const formattedTotal = total.toLocaleString();
    setDisplayResult(total.toLocaleString());
    setInput(formattedTotal);
  };



  /** what happens when I click a number */
  const handleNumberClick = (value: number | string) => {
    // Check if the input already contains a decimal point
    if (!input.includes('.') || value !== '.') {
      setInput((prevInput) => prevInput + value);
    }
  };


  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (operator: OperatorT) => {
    if (operator === "clear") {
      setInput("");
    } else if (operator === "=") {
      calculate();
    } else {
      setInput((prevInput) => prevInput + operator);
    }
  };

  return (
    <CalculatorStyled >
      <Screen value={input} result={displayResult}/>
      <div style={{ display: "flex" }}>
        <div className="number-pad">
          <Number classes="zero" value={0} onClick={handleNumberClick} />
          <Number classes="one" value={1} onClick={handleNumberClick} />
          <Number classes="two" value={2} onClick={handleNumberClick} />
          <Number classes="three" value={3} onClick={handleNumberClick} />
          <Number classes="four" value={4} onClick={handleNumberClick} />
          <Number classes="five" value={5} onClick={handleNumberClick} />
          <Number classes="six" value={6} onClick={handleNumberClick} />
          <Number classes="seven" value={7} onClick={handleNumberClick} />
          <Number classes="eight" value={8} onClick={handleNumberClick} />
          <Number classes="nine" value={9} onClick={handleNumberClick} />
        </div>
        <div className="operations" style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={() => handleOperationClick("+")} />
          <Operation value="÷" onClick={() => handleOperationClick("/")} />
          <Operation value="×" onClick={() => handleOperationClick("*")} />
          <Operation value="-" onClick={() => handleOperationClick("-")} />
          <Operation value="=" onClick={() => handleOperationClick("=")} />
          <Operation value="." onClick={() => handleNumberClick('.')} />
          <Operation value="clear" onClick={() => handleOperationClick("clear")} />
          

        </div>
      </div>
    </CalculatorStyled>
  );
};

export default Calculator;
