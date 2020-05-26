import React from "react";
import "./styles.css";

const square = props => {
  return (
    <button onClick={props.handleClick} disabled={props.disabled}>
      {props.value}
    </button>
  );
};

export default square;
