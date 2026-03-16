import { useState, useRef, useEffect } from "react";

export default function UseCallbackExample() {
  const [count, setCount] = useState<number>(0);

  const prevFnRef = useRef<(() => void) | null>(null);

  // const handleClick = useCallback((): void => {
  //   console.log("Button clicked");
  // }, []);

   // Normal function (new on every render)

  const handleClick = (): void => {
    console.log("Button clicked");
  };

  useEffect(() => {
    if (prevFnRef.current === null) {
      console.log("Render 1 → handleClick = Function A");
    } else if (prevFnRef.current !== handleClick) {
      console.log("Render → handleClick = New Function");
    } else {
      console.log("Render → handleClick = Same Function A");
    }

    prevFnRef.current = handleClick;
  });

  return (
    <div className="card">
      <h2>Count: {count}</h2>

      <button className="btn increase" onClick={() => setCount(count + 1)}>
        Re-render Component
      </button>
    </div>
  );
}
