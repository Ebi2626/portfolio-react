import React from "react";
import CounterWrapper from "./style/counter";

function Counter(props) {
  return (
    <CounterWrapper horizontal={props.horizontal}>
      {props.value}/{props.maxValue}
    </CounterWrapper>
  );
}

export default Counter;
