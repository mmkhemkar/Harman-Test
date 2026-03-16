import {  useState } from "react";

export default function UseMemoExample(){
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const squared: number = count * count;
  console.log("Calculating squared");


  //   const squared: number = useMemo(() => {
  //   console.log("Calculating squared");
  //   return count * count;
  // }, [count]);


  return (
    <div className="card">
      <h2>Count: {count}</h2>
      <h3>Squared: {squared}</h3>

      <button  className="btn increase" onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      <input
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        placeholder="Type something"
      />
    </div>
  );
}
