
export interface iOperationProps {
  value: string;
  onClick: () => void;
}
const Operation = (props : iOperationProps) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? */


  return (
    <div
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
      }}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Operation;
