import React from "react";
import { NumberStyled } from "./number.styled";


export interface iNumberProps {
  value: number;
  classes? : string;
  onClick: (value: number) => void;
}

const Number = (props : iNumberProps) => {
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

export default Number;
