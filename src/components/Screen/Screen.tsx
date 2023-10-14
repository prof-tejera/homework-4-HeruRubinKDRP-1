import React from "react";
import { ScreenStyled } from "./screen.styled";


export interface iScreenProps {
  value: string;
  result?: string;
}
const Screen = (props : iScreenProps) => {
  return (
    <ScreenStyled>
      {props.value}
      <br></br>
      <div className="result">
        {props.result}
      </div>
    </ScreenStyled>
  );
};

export default Screen;
