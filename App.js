import { React, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  let D = new Date();
  D.setDate(D.getDate() + count);

  return (
    <div id="Container">
      <div id="StepContainer">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>
          <h4>Step:{step}</h4>
        </span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div id="CountContainer">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>
          <h4>Count:{count}</h4>
        </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div id="TimeDisplay">
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span> {D.toDateString()}</span>
      </div>
    </div>
  );
}
