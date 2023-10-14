import React from "react";
import { NumberStyled } from "./number.styled";


export interface iNumberProps {
  value: number | string;
  classes? : string;
  onClick: (value: number | string) => void;
}

const NumberInput = (props : iNumberProps) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  const handleClick = () => {
    if(props.onClick) {
      props.onClick(props.value);
    }
  };

  return (
    <NumberStyled
      className={`number ${props.classes}`}
      onClick={handleClick}
      style={{

      }}
    >
      {props.value}
    </NumberStyled>
  );
};

export default NumberInput;
