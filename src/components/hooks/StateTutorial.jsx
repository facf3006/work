import React, { useState } from "react";

export default function StateTutorial() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Fernando");

  const increment = () => {
    setCounter(counter + 1);
  };

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      {counter}
      <button onClick={increment}>increment</button>
      <input placeholder="escrever qualquer coisa..." onChange={onChange} />
      {inputValue}
    </div>
  );
}
