import MyCounter from "../components/MyCounter";
import { createContext, useContext, useState } from "react";
import ComponentA from "../components/ComponentA";
import ComponentB from "../components/ComponentB";
//this  CounterContext.js file as a glable state
const CounterContext = createContext();

// //implementing customer hook useCounter
export const useCounter = () => useContext(CounterContext);

function CounterContextProvider(props) {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount((count) => {
      if (count - 1 < 1) return 1;
      return count - 1;
    });
  };

  const valueCount = { count, setCount, increaseCount, decreaseCount };
  return (
    <CounterContext.Provider value={valueCount}>
      {props.children}
      <MyCounter />
      <ComponentA />
      <ComponentB />
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
