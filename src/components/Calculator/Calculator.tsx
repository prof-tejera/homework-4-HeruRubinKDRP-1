import React from "react";
import Number from "../Number/Number";
import Operation from "../Operation/Operation";
import Screen from "../Screen/Screen";


export interface CalculatorProps {


}
const Calculator = (props : CalculatorProps) => {
  /** TODO: Here is where you are going to keep track of calculator state */

  /** TODO: what happens when I click a number? */
  const handleNumberClick = () => {};


  /** TODO: what happens when I click an operation? */
  const handleOperationClick = () => {};

  return (
    <div>
      <Screen value="123" />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
