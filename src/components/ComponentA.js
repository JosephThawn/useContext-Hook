import React from "react";
import { useCounter } from "../contexts/CounterContext";
import ComponentB from "./ComponentB";

function ComponentA() {
  const { increaseCount } = useCounter();
  return (
    <div style={{ backgroundColor: "gray" }}>
      <h1>Component A</h1>
      <button onClick={increaseCount}>Increase count</button>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
