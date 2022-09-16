import React from "react";
import "./App.css";
import CounterContextProvider from "./contexts/CounterContext";

function App() {
  return (
    <div className="App">
      <CounterContextProvider />
    </div>
  );
}

export default App;
