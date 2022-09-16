import React from "react";
import { useCounter } from "../contexts/CounterContext";

const ComponentB = () => {
  const { decreaseCount } = useCounter();
  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>Component B</h1>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
};

export default ComponentB;
