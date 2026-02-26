import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

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
      </div>
    </div>
  );
}
