import React from "react";
import { OperationStyled } from "./operation.styled";

export interface iOperationProps {
  value: string;
  onClick: () => void;
}
const Operation = (props : iOperationProps) => {
  //pass number value back to operation
  return (
    <OperationStyled onClick={props.onClick} >
      {props.value}
    </OperationStyled>
  );
};

export default Operation;
