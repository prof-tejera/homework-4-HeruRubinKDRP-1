

export interface iNumberProps {
  value: number;
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
    <div
      onClick={handleClick}
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
      }}
    >
      {props.value}
    </div>
  );
};

export default Number;
