import React from "react";
import "./App.css";
import MyCounter from "./components/MyCounter";
import CounterContextProvider from "./contexts/CounterContext";

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <h1> useContext API</h1>
        <MyCounter />
      </CounterContextProvider>
    </div>
  );
}

export default App;
