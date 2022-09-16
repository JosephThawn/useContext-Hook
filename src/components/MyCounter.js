import { useCounter } from "../contexts/CounterContext";

function MyCounter() {
  const { count, increaseCount, decreaseCount } = useCounter();

  return (
    <div>
      <h1>UseContext API</h1>
      <h2>My Count is {count}</h2>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
}

export default MyCounter;
