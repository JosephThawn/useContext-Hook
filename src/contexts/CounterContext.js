import { useState, createContext, useContext } from "react";

const CounterContext = createContext();
//implementing customer hook useCounter
export const useCounter = () => useContext(CounterContext);

function CounterContextProvider(props) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const valueCount = { count, increaseCount, decreaseCount };
  return (
    <CounterContext.Provider value={{ valueCount }}>
      {props.chlidren}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
