import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Counter crashed!");
  }

  const handleDecrease = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="card">
      <h5>Counter Component</h5>
      <h1>{count}</h1>

      <div className="btn-group">
        <button
          className="btn increase"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increase
        </button>

        <button
          className="btn decrease"
          onClick={handleDecrease}
        >
          Decrease
        </button>

        <button
          className="btn reset"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        <button
          className="btn reset"
          onClick={() => setCrash(true)}
        >
          Crash Component
        </button>
      </div>
    </div>
  );
}
