import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const handleCounterSub = () => {
    setCounter((prev) => prev - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={handleCounter}>+</button>
      <button onClick={handleCounterSub}>-</button>
      <button onClick={handleReset}>Reset</button>
      <div>
        <p>{counter}</p>
      </div>
    </div>
  );
}
