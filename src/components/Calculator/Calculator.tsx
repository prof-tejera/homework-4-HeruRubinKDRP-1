import React, { useState } from "react";

import Operation from "../Operation/Operation";
import Screen from "../Screen/Screen";
import { CalculatorStyled } from "./calculator.styled";
import NumberInput from "../Number/NumberInput";

export type OperatorT = "+" | "-" | "*" | "/" | "=" | "clear" | ".";

const Calculator = () => {
  const [input, setInput] = useState<string>("");
  const [displayResult, setDisplayResult] = useState<string | null>("0");

  const calculate = () => {
    try {
      const result = evaluateExpression(input);
      setDisplayResult(result.toLocaleString());
      setInput(result.toString());
    } catch (error) {
      setDisplayResult(null);
      setInput("Error");
    }
  };

  const evaluateExpression = (expression: string): number => {
    // Split the input by operators
    const parts = expression.split(/([+\-*\/])/);
    const stack: (number | string)[] = [];

    for (const part of parts) {
      if (isOperator(part)) {
        while (
          stack.length >= 2 &&
          isOperator(stack[stack.length - 1] as string) &&
          precedence(part) <= precedence(stack[stack.length - 1] as string)
          ) {
          const rightOperand = parseFloat(stack.pop() as string);
          const operator = stack.pop() as string;
          const leftOperand = parseFloat(stack.pop() as string);
          stack.push(performOperation(leftOperand, operator, rightOperand));
        }
        stack.push(part);
      } else {
        stack.push(part);
      }
    }

    while (stack.length >= 3) {
      const rightOperand = parseFloat(stack.pop() as string);
      const operator = stack.pop() as string;
      const leftOperand = parseFloat(stack.pop() as string);
      stack.push(performOperation(leftOperand, operator, rightOperand));
    }

    return parseFloat(stack[0] as string);
  };

  const precedence = (operator: string): number => {
    if (operator === "+" || operator === "-") {
      return 1;
    } else if (operator === "*" || operator === "/") {
      return 2;
    }
    return 0;
  };

  const performOperation = (
    leftOperand: number,
    operator: string,
    rightOperand: number
  ): number => {
    switch (operator) {
      case "+":
        return leftOperand + rightOperand;
      case "-":
        return leftOperand - rightOperand;
      case "*":
        return leftOperand * rightOperand;
      case "/":
        if (rightOperand !== 0) {
          return leftOperand / rightOperand;
        } else {
          throw new Error("Division by zero");
        }
      default:
        throw new Error("Invalid operator");
    }
  };

  const handleNumberClick = (value: number | string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleOperationClick = (operator: OperatorT) => {
    if (operator === "clear") {
      setInput("");
    } else if (operator === "=") {
      calculate();
    } else if (operator === "." && !input.includes(".")) {
      setInput((prevInput) => prevInput + operator);
    } else if (!isNaN(Number(operator))) {
      setInput((prevInput) => prevInput + operator);
    } else {
      const lastChar = input.slice(-1);
      if (!isNaN(Number(lastChar))) {
        setInput((prevInput) => prevInput + operator);
      }
    }
  };

  const isOperator = (value: string) => {
    return ["+", "-", "*", "/"].includes(value);
  };
  return (
    <CalculatorStyled>
      <Screen value={input} result={displayResult} />
      <div style={{ display: "flex" }}>
        <div className="number-pad">
          <NumberInput classes="zero" value={0} onClick={handleNumberClick} />
          <NumberInput classes="one" value={1} onClick={handleNumberClick} />
          <NumberInput classes="two" value={2} onClick={handleNumberClick} />
          <NumberInput classes="three" value={3} onClick={handleNumberClick} />
          <NumberInput classes="four" value={4} onClick={handleNumberClick} />
          <NumberInput classes="five" value={5} onClick={handleNumberClick} />
          <NumberInput classes="six" value={6} onClick={handleNumberClick} />
          <NumberInput classes="seven" value={7} onClick={handleNumberClick} />
          <NumberInput classes="eight" value={8} onClick={handleNumberClick} />
          <NumberInput classes="nine" value={9} onClick={handleNumberClick} />
          <NumberInput classes="decimal" value="." onClick={() => handleOperationClick('.')} />
        </div>
        <div className="operations" style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={() => handleOperationClick("+")} />
          <Operation value="÷" onClick={() => handleOperationClick("/")} />
          <Operation value="×" onClick={() => handleOperationClick("*")} />
          <Operation value="-" onClick={() => handleOperationClick("-")} />
          <Operation value="=" onClick={() => handleOperationClick("=")} />
          <Operation value="clear" onClick={() => handleOperationClick("clear")} />
        </div>
      </div>
    </CalculatorStyled>
  );
};

export default Calculator;
